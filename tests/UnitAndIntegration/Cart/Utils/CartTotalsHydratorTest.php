<?php
namespace App\Tests\UnitAndIntegration\Cart\Utils;

use App\Cart\Utils\CartTotalsHydrator;
use App\Config\SiteConfig;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Price\CountryLocation;
use App\Price\PriceOperator;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;

/**
 * @group Cart
 */
class CartTotalsHydratorTest extends KernelTestCase
{
    private CartTotalsHydrator $cartTotalsHydrator;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        /** @var VatResolver|MockObject */
        $vatResolver = $this->createMock(VatResolver::class);
        $vatResolver->expects($this->any())
                    ->method('getRate')
                    ->willReturn(200)
                    ;
        
        /** @var CountryLocation|MockObject */
        $countryLocation = $this->createMock(CountryLocation::class);
        $countryLocation->expects($this->any())
                        ->method('getCountry')
                        ->willReturn(SiteConfig::DEFAULT_GEOLOCATION_COUNTRY)
                        ;

        /** @var Security */
        $security = static::getContainer()->get(Security::class);

        $priceResolver = new PriceResolver($vatResolver, $security, $countryLocation);

        $this->cartTotalsHydrator = new CartTotalsHydrator($priceResolver, new PriceOperator);
    }

    public function testHydrateCartTotalPrice()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        $totalPrice = $cart->getTotalPrice();

        $this->assertNotNull($totalPrice);
        $this->assertEquals(880, $totalPrice->getPriceHT());
    }
    public function testHydrateCartCount()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        $count = $cart->getCount();

        $this->assertNotNull($count);
        $this->assertEquals(6, $count);
    }
    public function testHydrateVendorGroupWeight()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        $weight = $cart->getCartVendorGroups()->get(0)->getWeight();

        $this->assertNotNull($weight);
        $this->assertEquals(500, $weight);
        
        $weight = $cart->getCartVendorGroups()->get(1)->getWeight();

        $this->assertNotNull($weight);
        $this->assertEquals(100, $weight);
    }
    public function testHydrateVendorGroupPosition()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        $position = $cart->getCartVendorGroups()->get(0)->getPosition();

        $this->assertNotNull($position);
        $this->assertEquals('1/2', $position);

        $position = $cart->getCartVendorGroups()->get(1)->getPosition();

        $this->assertNotNull($position);
        $this->assertEquals('2/2', $position);
    }
    public function testHydrateVendorGroupIndex()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        $index = $cart->getCartVendorGroups()->get(0)->getIndex();

        $this->assertNotNull($index);
        $this->assertEquals(0, $index);

        $index = $cart->getCartVendorGroups()->get(1)->getIndex();

        $this->assertNotNull($index);
        $this->assertEquals(1, $index);
    }
    public function testHydrateCartLineTotalPrice()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);

        $totalPrice = $cartLine->getTotalPrice();

        $this->assertNotNull($totalPrice);
        $this->assertEquals(450, $totalPrice->getPriceHT());
    }
    public function testHydrateCartLineUnitPrice()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);

        $unitPrice = $cartLine->getUnitPrice();

        $this->assertNotNull($unitPrice);
        $this->assertEquals(150, $unitPrice->getPriceHT());
    }
    public function testHydrateCartLineUnitWeight()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);

        $unitWeight = $cartLine->getUnitWeight();

        $this->assertNotNull($unitWeight);
        $this->assertEquals(100, $unitWeight);
    }
    public function testHydrateCartLineTotalWeight()
    {
        $cart = $this->createCart();
        $this->cartTotalsHydrator->hydrate($cart);

        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);

        $lineWeight = $cartLine->getTotalWeight();

        $this->assertNotNull($lineWeight);
        $this->assertEquals(300, $lineWeight);
    }
    public function testHydrateWithEmptyCart()
    {
        $cart = new Cart;
        $this->cartTotalsHydrator->hydrate($cart);

        $this->assertEquals(0, $cart->getCount());
        $this->assertNull($cart->getTotalPrice()->getPriceHT());
        $this->assertNull($cart->getTotalPrice()->getPriceTTC());
        $this->assertNull($cart->getTotalPrice()->getPayType());
        $this->assertNull($cart->getTotalPrice()->getShowType());
    }


    private function createCart(): Cart
    {
        return (new Cart)
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->addCartLine(
                        (new CartLine)
                        ->setQuantity(3)
                        ->setPackaging(
                            (new Packaging)
                            ->setBusinessPriceHT(100)
                            ->setConsumerPriceHT(150)
                            ->setProduct(
                                (new Product)
                                ->setHsCode('code_hs_test')
                            )
                            ->setWeight(100)
                        )
                    )
                    ->addCartLine(
                        (new CartLine)
                        ->setQuantity(1)
                        ->setPackaging(
                            (new Packaging)
                            ->setBusinessPriceHT(200)
                            ->setConsumerPriceHT(280)
                            ->setProduct(
                                (new Product)
                                ->setHsCode('code_hs_test_1')
                            )
                            ->setWeight(200)
                        )
                    )
                )
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->addCartLine(
                        (new CartLine)
                        ->setQuantity(2)
                        ->setPackaging(
                            (new Packaging)
                            ->setBusinessPriceHT(50)
                            ->setConsumerPriceHT(75)
                            ->setProduct(
                                (new Product)
                                ->setHsCode('code_hs_test_2')
                            )
                            ->setWeight(50)
                        )
                    )
                )
                ;
    }
}