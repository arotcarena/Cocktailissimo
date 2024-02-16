<?php
namespace App\Tests\UnitAndIntegration\Cart\Utils;

use App\Cart\Utils\CartFactory;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\VendorWithOneProductTestFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\Packaging;
use App\Entity\User;
use App\Repository\PackagingRepository;
use App\Repository\UserRepository;
use App\Tests\Utils\FixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Cart
 */
class CartFactoryTest extends KernelTestCase
{
    use FixturesTrait;

    private Packaging $packaging1;
    private Packaging $packaging2;
    private Packaging $packaging3;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([ProductTestFixtures::class]);

        /** @var Packaging[] */
        $packagings = static::getContainer()->get(PackagingRepository::class)->findAll();

        $this->packaging1 = $packagings[0];
        $this->packaging2 = $packagings[1];
        $this->packaging3 = $packagings[2];
    }



    public function testCreateLightCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 1,
            $this->packaging2->getId() => 10,
            $this->packaging3->getId() => 2
        ];
        $packagings = [
            $this->packaging1,
            $this->packaging2,
            $this->packaging3,
        ];
        $cart = (new CartFactory)->createLightCart($cookieCart, $packagings);

        $this->assertEquals(3, $this->countCartLines($cart));
        foreach($this->getCartLines($cart) as $cartLine)
        {
            if($cartLine->getPackaging() === $this->packaging1)
            {
                $this->assertEquals(1, $cartLine->getQuantity());
            }
            elseif($cartLine->getPackaging() === $this->packaging2)
            {
                $this->assertEquals(10, $cartLine->getQuantity());
            }
            elseif($cartLine->getPackaging() === $this->packaging3)
            {
                $this->assertEquals(2, $cartLine->getQuantity());
            }
            else
            {
                $this->fail('L\'une des cartLines a un packaging qui ne fait pas partie des packagings fournis en param');
            }
        }
    }

    public function testCreateFullCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 1,
            $this->packaging2->getId() => 10,
            $this->packaging3->getId() => 2
        ];
        $packagingsById = [
            $this->packaging1->getId() => $this->packaging1,
            $this->packaging2->getId() => $this->packaging2,
            $this->packaging3->getId() => $this->packaging3,
        ];
        $cart = (new CartFactory)->createLightCart($cookieCart, $packagingsById);

        $this->assertEquals(3, $this->countCartLines($cart));
        foreach($this->getCartLines($cart) as $cartLine)
        {
            if($cartLine->getPackaging() === $this->packaging1)
            {
                $this->assertEquals(1, $cartLine->getQuantity());
            }
            elseif($cartLine->getPackaging() === $this->packaging2)
            {
                $this->assertEquals(10, $cartLine->getQuantity());
            }
            elseif($cartLine->getPackaging() === $this->packaging3)
            {
                $this->assertEquals(2, $cartLine->getQuantity());
            }
            else
            {
                $this->fail('L\'une des cartLines a un packaging qui ne fait pas partie des packagings fournis en param');
            }
        }
    }

    public function testCreateFullCartAddCorrectVendorGroups()
    {
        $this->loadFixtures([VendorWithOneProductTestFixtures::class, ProductTestFixtures::class]);

        /** @var User */
        $vendor1 = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendor2 = $this->findEntity(UserRepository::class, ['email' => 'vendor_with_one_product@mail.com']);

        $packaging1vendor1 = $vendor1->getProducts()->get(0)->getPackagingChoices()->get(0);
        $packaging2vendor1 = $vendor1->getProducts()->get(1)->getPackagingChoices()->get(0);

        $packaging1vendor2 = $vendor2->getProducts()->get(0)->getPackagingChoices()->get(0);

        //pour être sur de pas être géné par les quantités
        $packaging1vendor1->setStock(5);
        $packaging2vendor1->setStock(5);
        $packaging1vendor2->setStock(5);


        $cookieCart = [
            $packaging1vendor1->getId() => 3,
            $packaging1vendor2->getId() => 1,
            $packaging2vendor1->getId() => 2
        ];

        $packagingsById = [
            $packaging1vendor2->getId() => $packaging1vendor2,
            $packaging1vendor1->getId() => $packaging1vendor1,
            $packaging2vendor1->getId() => $packaging2vendor1
        ];

        $cart = (new CartFactory)->createFullCart($cookieCart, $packagingsById);


        $this->assertEquals($vendor1->getId(), $cart->getCartVendorGroups()->get(0)->getVendor()->getId());
        $this->assertEquals($vendor2->getId(), $cart->getCartVendorGroups()->get(1)->getVendor()->getId());

        $this->assertEquals($packaging1vendor1->getId(), $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0)->getPackaging()->getId());
        $this->assertEquals($packaging2vendor1->getId(), $cart->getCartVendorGroups()->get(0)->getCartLines()->get(1)->getPackaging()->getId());

        $this->assertEquals($packaging1vendor2->getId(), $cart->getCartVendorGroups()->get(1)->getCartLines()->get(0)->getPackaging()->getId());
    }

    public function testCreateFullCartWithPackagingInCookieCartWhichIsNotInPackagings()
    {
        $cookieCart = [
            $this->packaging1->getId() => 1,
            $this->packaging2->getId() => 10,
            $this->packaging3->getId() => 2
        ];
        $packagingsById = [
            $this->packaging3->getId() => $this->packaging3,
            $this->packaging1->getId() => $this->packaging1,
        ];
        $cart = (new CartFactory)->createLightCart($cookieCart, $packagingsById);

        //on vérifie juste que la fonction n'a pas soulevé d'erreur
        $this->assertInstanceOf(Cart::class, $cart);
    }

    public function testCreateLightCartWithEmptyCookieCart()
    {
        $cookieCart = [];
        $packagings = [];
        $cart = (new CartFactory)->createLightCart($cookieCart, $packagings);

        $this->assertEquals(0, $this->countCartLines($cart));
    }

    public function testCreateFullCartWithEmptyCookieCart()
    {
        $cookieCart = [];
        $packagings = [];
        $cart = (new CartFactory)->createFullCart($cookieCart, $packagings);

        $this->assertEquals(0, $this->countCartLines($cart));
    }


    private function countCartLines(Cart $cart): int
    {
        $count = 0;
        foreach($cart->getCartVendorGroups() as $vendorGroup)
        {
            $count += $vendorGroup->getCartLines()->count();
        }
        return $count;
    }

    /**
     * @return CartLine[]
     */
    private function getCartLines(Cart $cart)
    {
        $cartLines = [];
        foreach($cart->getCartVendorGroups() as $vendorGroup)
        {
            foreach($vendorGroup->getCartLines() as $cartLine)
            {
                $cartLines[] = $cartLine;
            }
        }
        return $cartLines;
    }
}