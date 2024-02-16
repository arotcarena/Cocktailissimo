<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Cart\Utils\CartTotalsHydrator;
use App\Config\SiteConfig;
use App\Entity\CartLine;
use App\Repository\CartRepository;
use App\Tests\Utils\FixturesTrait;
use App\Service\PicturePathResolver;
use App\Convertor\CartToArrayConvertor;
use App\DataFixtures\Tests\CartTestFixtures;
use App\Price\CountryLocation;
use App\Price\PriceOperator;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use TypeError;

/**
 * @group Convertor
 */
class CartToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private UrlGeneratorInterface $urlGenerator;

    private PicturePathResolver $picturePathResolver;

    private PriceFormaterExtensionRuntime $priceFormater;

    private CartToArrayConvertor $cartConvertor;

    private CartTotalsHydrator $cartTotalsHydrator;


    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->cartTotalsHydrator = static::getContainer()->get(CartTotalsHydrator::class);

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
        $this->cartConvertor = static::getContainer()->get(CartToArrayConvertor::class);
        $this->loadFixtures([CartTestFixtures::class]);
    }

    public function testConvertWithNotHydratedCart()
    {
        $cart = $this->findEntity(CartRepository::class);
        
        $this->expectException(TypeError::class);

        $returnCart = $this->cartConvertor->convert($cart, 'en');
    }
    public function testCartContainsCorrectKeys()
    {
        $cart = $this->findEntity(CartRepository::class);
        $this->cartTotalsHydrator->hydrate($cart);
        $returnCart = $this->cartConvertor->convert($cart, 'en');

        $this->assertEquals(
            ['cartVendorGroups', 'count', 'totalPrice'], 
            array_keys($returnCart)
        );
    }
    public function testVendorGroupsContainsCorrectKeys()
    {
        $cart = $this->findEntity(CartRepository::class);
        $this->cartTotalsHydrator->hydrate($cart);
        $returnCart = $this->cartConvertor->convert($cart, 'en');

        $this->assertEquals(
            ['vendor', 'cartLines', 'weight', 'position', 'index'], 
            array_keys($returnCart['cartVendorGroups'][0])
        );
    }
    public function testCartLinesContainsCorrectKeys()
    {
        $cart = $this->findEntity(CartRepository::class);
        $this->cartTotalsHydrator->hydrate($cart);
        $returnCart = $this->cartConvertor->convert($cart, 'en');
        $returnCartLine = $returnCart['cartVendorGroups'][0]['cartLines'][0];

        $this->assertEquals(
            ['packaging', 'quantity', 'unitPrice', 'totalPrice', 'unitWeight', 'totalWeight'], 
            array_keys($returnCartLine)
        );

        $this->assertEquals(
            ['id', 'publicRef', 'label', 'target', 'product', 'stock'],
            array_keys($returnCartLine['packaging'])
        );
    }
    public function testCartLinesContainsCorrectDesignation() 
    {
        $cart = $this->findEntity(CartRepository::class);
        $this->cartTotalsHydrator->hydrate($cart);
        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);
        $returnCart = $this->cartConvertor->convert($cart, 'en');
        $returnCartLine = $returnCart['cartVendorGroups'][0]['cartLines'][0];

        $this->assertEquals(
            $cartLine->getPackaging()->getProduct()->getDesignation()->getEn(), 
            $returnCartLine['packaging']['product']['designation']
        );
    }

    public function testCartLinesProductCorrectTranslateDesignation() 
    {
        $cart = $this->findEntity(CartRepository::class);
        $this->cartTotalsHydrator->hydrate($cart);
        /** @var CartLine */
        $cartLine = $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0);
        $returnCart = $this->cartConvertor->convert($cart, 'fr');
        $returnCartLine = $returnCart['cartVendorGroups'][0]['cartLines'][0];

        $this->assertEquals(
            $cartLine->getPackaging()->getProduct()->getDesignation()->getFr(), 
            $returnCartLine['packaging']['product']['designation']
        );
    }
   
} 
