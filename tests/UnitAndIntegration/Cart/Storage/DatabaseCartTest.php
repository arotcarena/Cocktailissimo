<?php
namespace App\Tests\UnitAndIntegration\Cart\Storage;

use App\Cart\Storage\DatabaseCart;
use App\DataFixtures\Tests\CartTestFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\Packaging;
use App\Entity\User;
use App\Entity\VendorGroup;
use App\Repository\CartRepository;
use App\Repository\PackagingRepository;
use App\Repository\UserRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;


/**
 * @group Cart
 */
class DatabaseCartTest extends KernelTestCase
{
    use FixturesTrait;

    private DatabaseCart $databaseCart;

    private MockObject|Security $security;


    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->security = $this->createMock(Security::class);

        $this->databaseCart = new DatabaseCart(
            $this->security,
            static::getContainer()->get(CartRepository::class),
            static::getContainer()->get(EntityManagerInterface::class)
        );

        $this->loadFixtures([CartTestFixtures::class]);
    }

    public function testResolveUserWithoutUserParam()
    {
        $cart = $this->findEntity(CartRepository::class);
        $cartId = $cart->getId();
        $user = $cart->getUser();

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user)
                        ;

        $returnCart = $this->databaseCart->get();
        $this->assertEquals($cartId, $returnCart->getId());
    }

    public function testGet()
    {
        $cart = $this->findEntity(CartRepository::class);
        $cartId = $cart->getId();
        $user = $cart->getUser();

        $returnCart = $this->databaseCart->get($user);
        $this->assertEquals($cartId, $returnCart->getId());
    }

    public function testGetWithNoDatabaseCart()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'admin@gmail.com']); // user having no cart

        $returnCart = $this->databaseCart->get($user);
        $this->assertNull($returnCart);
    }

    public function testPersistWithExistingCart()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']); //user having cart with 3 lines
        $cart = $user->getCart();
        $cartId = $cart->getId();
        $this->assertEquals(3, $this->countCartLines($cart), 'le test est faussé. Le cart du user n\'a pas le bon nombre de lines à la base');

        $newCart = new Cart;
        $newCart->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($user) // ça n'a pas de sens mais c'est juste pour remplir pour le test
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($cart->getCartVendorGroups()->get(0)->getCartLines()->get(0)->getPackaging())
                        ->setQuantity(1)
                    )
                )
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($user)
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($cart->getCartVendorGroups()->get(1)->getCartLines()->get(0)->getPackaging())
                        ->setQuantity(1)
                    )
                )
                ;

        $this->databaseCart->persist($newCart, $user);

        /** @var Cart */
        $updatedCart = $this->findEntity(CartRepository::class, ['id' => $cartId]);
        $this->assertEquals(2, $this->countCartLines($updatedCart));
    }

    public function testPersistWithoutExistingCart()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'admin@gmail.com']); //user having no cart
        $this->assertNull($user->getCart(), 'le test est faussé, ce user a un cart');

        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);

        $newCart = new Cart;
        $newCart->setUser($user)
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($user) // pas d'intérêt particulier, juste pour remplir
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($packaging)
                        ->setQuantity(1)
                    )
                );

        $this->databaseCart->persist($newCart, $user);

        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'admin@gmail.com']); // same user
        $cart = $user->getCart();
        $this->assertNotNull($cart);
        $this->assertCount(1, $cart->getCartVendorGroups());
        $this->assertEquals($packaging->getId(), $cart->getCartVendorGroups()->get(0)->getCartLines()->get(0)->getPackaging()->getId());
    }

    public function testPersistWithEmptyCart()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']); //user having cart with 3 lines
        $cart = $user->getCart();
        $userId = $user->getId();
        $this->assertEquals(3, $this->countCartLines($cart), 'le test est faussé. Le cart du user n\'a pas le bon nombre de lines à la base');

        $this->databaseCart->persist(new Cart, $user);

        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['id' => $userId]);
        $this->assertEquals(0, $this->countCartLines($user->getCart()));
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
}