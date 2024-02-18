<?php
namespace App\Tests\IntegrationOnly\Price;

use App\Config\VatLevels;
use App\Entity\Company;
use App\Entity\CustomPrice;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\User;
use App\Price\CountryLocation;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\SecurityBundle\Security;

/**
 * @group price
 */
class PriceResolverTest extends TestCase
{
    private VatResolver|MockObject $vatResolver;

    private CountryLocation|MockObject $countryLocation;

    private Security|MockObject $security;

    private PriceResolver $priceResolver;


    public function setUp(): void 
    {
        $this->vatResolver = $this->createMock(VatResolver::class);

        $this->security = $this->createMock(Security::class);

        $this->countryLocation = $this->createMock(CountryLocation::class);

        $this->priceResolver = new PriceResolver($this->vatResolver, $this->security, $this->countryLocation);
    }

    public function testResolveWithConsumerOutEU()
    {
        $user = (new User)->setRoles(['ROLE_USER']);

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('US')
                            ;
        $price = $this->priceResolver->resolve($this->createPackaging());

        $this->assertEquals(150, $price->getPriceHT());
        $this->assertEquals(150, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_HT, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_HT, $price->getShowType());
        $this->assertNull($price->getVatRate());
        $this->assertNull($price->getVatAmount());
        $this->assertNull($price->getPriceTTC());
    }
    public function testResolveWithProOutEU()
    {
        $user = (new User)->setRoles(['ROLE_PRO'])
                        ->setCompany(new Company);

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('US')
                            ;
        $price = $this->priceResolver->resolve($this->createPackaging());

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_HT, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_HT, $price->getShowType());
        $this->assertNull($price->getVatRate());
        $this->assertNull($price->getVatAmount());
        $this->assertNull($price->getPriceTTC());
    }

    public function testResolveWithConsumerOutFranceInEU()
    {
        $user = (new User)->setRoles(['ROLE_USER']);

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('IT')
                            ;
        $this->vatResolver->expects($this->once())
                        ->method('getRate')
                        ->with('IT', VatLevels::STANDARD)
                        ->willReturn(210);  // example rate in italy : 21% 

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(150 * 210 / 1000);

        $this->assertEquals(150, $price->getPriceHT());
        $this->assertEquals(150 + $vatAmount, $price->getPriceTTC());
        $this->assertEquals(150 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $price->getShowType());
        $this->assertEquals(210, $price->getVatRate());
        $this->assertEquals($vatAmount, $price->getVatAmount());
    }

    public function testResolveWithProOutFranceInEUHavingNoVatNumber()
    {
        $user = (new User)->setRoles(['ROLE_PRO'])
                        ->setCompany(new Company);

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('IT')
                            ;
        $this->vatResolver->expects($this->once())
                        ->method('getRate')
                        ->with('IT', VatLevels::STANDARD)
                        ->willReturn(210);  // example rate in italy : 21% 

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 210 / 1000);

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC());
        $this->assertEquals(100 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICES_HT_TTC, $price->getShowType());
        $this->assertEquals(210, $price->getVatRate());
        $this->assertEquals($vatAmount, $price->getVatAmount());
    }

    public function testResolveWithProOutFranceInEUHavingVatNumber()
    {
        $user = (new User)->setRoles(['ROLE_PRO'])
                        ->setCompany(
                            (new Company)->setVatNumber('tva_number')
                        );

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('IT')
                            ;
        $this->vatResolver->expects($this->once())
                        ->method('getRate')
                        ->with('IT', VatLevels::STANDARD)
                        ->willReturn(210);  // example rate in italy : 21% 

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 210 / 1000);

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC());
        $this->assertEquals(100, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_HT, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICES_HT_TTC, $price->getShowType());
        $this->assertEquals(210, $price->getVatRate());
        $this->assertEquals($vatAmount, $price->getVatAmount());
    }

    public function testResolveWithConsumerInFrance()
    {
        $user = (new User)->setRoles(['ROLE_USER']);

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('FR')
                            ;
        $this->vatResolver->expects($this->once())
                        ->method('getRate')
                        ->with('FR', VatLevels::STANDARD)
                        ->willReturn(200);  // example rate in France : 20% 

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(150 * 200 / 1000);

        $this->assertEquals(150, $price->getPriceHT());
        $this->assertEquals(150 + $vatAmount, $price->getPriceTTC());
        $this->assertEquals(150 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $price->getShowType());
        $this->assertEquals(200, $price->getVatRate());
        $this->assertEquals($vatAmount, $price->getVatAmount());
    }

    public function testResolveWithProInFrance()
    {
        $user = (new User)->setRoles(['ROLE_PRO'])
                        ->setCompany(
                            (new Company)->setVatNumber('tva_number')
                        );

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user);

        $this->countryLocation->expects($this->once())
                            ->method('getCountry')
                            ->willReturn('FR')
                            ;
        $this->vatResolver->expects($this->once())
                        ->method('getRate')
                        ->with('FR', VatLevels::STANDARD) // vat_level par défaut
                        ->willReturn(200);  // example rate in France : 20% 

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 200 / 1000);

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC());
        $this->assertEquals(100 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICES_HT_TTC, $price->getShowType());
        $this->assertEquals(200, $price->getVatRate());
        $this->assertEquals($vatAmount, $price->getVatAmount());
    }

    private function createPackaging(): Packaging
    {
        return (new Packaging)
                ->setBusinessPriceHT(100)
                ->setConsumerPriceHT(150)
                ->setProduct(
                    (new Product)
                    ->setHsCode('test_hs_code')
                )
                ;
    }
}