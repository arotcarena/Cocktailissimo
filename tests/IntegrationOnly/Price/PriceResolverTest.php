<?php
namespace App\Tests\IntegrationOnly\Price;

use App\Entity\Company;
use App\Entity\CustomPrice;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\User;
use App\Price\CountryLocation;
use App\Price\PriceResolver;
use App\Price\Vat\VatCalculator;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;

/**
 * @group price
 */
class PriceResolverTest extends KernelTestCase
{
    private CountryLocation|MockObject $countryLocation;

    private Security|MockObject $security;

    private PriceResolver $priceResolver;


    public function setUp(): void 
    {
        //on est obligé de mocker security et countryLocation car pas de session dans les tests kernelTestCase
        $this->security = $this->createMock(Security::class);
        $this->countryLocation = $this->createMock(CountryLocation::class);

        $this->priceResolver = new PriceResolver(
            static::getContainer()->get(VatResolver::class),
            $this->security, 
            $this->countryLocation,
            static::getContainer()->get(VatCalculator::class)
        );
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

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(150 * 220 / 1000);  // le taux standard en italie est de 22%

        $this->assertEquals(150, $price->getPriceHT());
        $this->assertEquals(150 + $vatAmount, $price->getPriceTTC(), 'Ce test a été écrit avec taux standard tva IT 22%. Il est normal qu\'il échoue si ce taux a changé');
        $this->assertEquals(150 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $price->getShowType());
        $this->assertEquals(220, $price->getVatRate());
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

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 220 / 1000);   // le taux standard en italie est de 22%

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC(), 'Ce test a été écrit avec taux standard tva IT 22%. Il est normal qu\'il échoue si ce taux a changé');
        $this->assertEquals(100 + $vatAmount, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICES_HT_TTC, $price->getShowType());
        $this->assertEquals(220, $price->getVatRate());
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

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 220 / 1000);  // le taux standard en italie est de 22%

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC(), 'Ce test a été écrit avec taux standard tva IT 22%. Il est normal qu\'il échoue si ce taux a changé');
        $this->assertEquals(100, $price->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_HT, $price->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICES_HT_TTC, $price->getShowType());
        $this->assertEquals(220, $price->getVatRate());
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

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(150 * 200 / 1000); // taux standard en france 20%

        $this->assertEquals(150, $price->getPriceHT());
        $this->assertEquals(150 + $vatAmount, $price->getPriceTTC(), 'Ce test a été écrit avec taux standard tva FR 20%. Il est normal qu\'il échoue si ce taux a changé');
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

        $price = $this->priceResolver->resolve($this->createPackaging());

        $vatAmount = (int)(100 * 200 / 1000);  // taux standard en france 20%

        $this->assertEquals(100, $price->getPriceHT());
        $this->assertEquals(100 + $vatAmount, $price->getPriceTTC(), 'Ce test a été écrit avec taux standard tva FR 20%. Il est normal qu\'il échoue si ce taux a changé');
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
