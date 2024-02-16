<?php
namespace App\Tests\UnitAndIntegration\Cart\Storage;

use App\Cart\Storage\CartStorage;
use App\Cart\Storage\CookieCart;
use App\Cart\Storage\DatabaseCart;
use App\Cart\Utils\CartFactory;
use App\DataFixtures\Tests\CartTestFixtures;
use App\Entity\Cart;
use App\Entity\User;
use App\Repository\CartRepository;
use App\Repository\PackagingRepository;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;

/**
 * @group Cart
 */
class CartStorageTest extends KernelTestCase
{
    use FixturesTrait;

    private MockObject|CookieCart $cookieCart;
    private MockObject|DatabaseCart $databaseCart;

    private MockObject|Security $security;

    private PackagingRepository $packagingRepository;
    private MockObject|CartFactory $cartFactory;

    private MockObject|VisitorActionSaver $visitorActionSaver;

    private CartStorage $cartStorage;
    
    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->cookieCart = $this->createMock(CookieCart::class);

        $this->databaseCart = $this->createMock(DatabaseCart::class);
        $this->security = $this->createMock(Security::class);
        $this->packagingRepository = static::getContainer()->get(PackagingRepository::class);
        $this->cartFactory = $this->createMock(CartFactory::class);
        $this->visitorActionSaver = $this->createMock(VisitorActionSaver::class);

        $this->cartStorage = new CartStorage(
            $this->cookieCart,
            $this->databaseCart,
            $this->packagingRepository,
            $this->cartFactory,
            $this->security,
            $this->visitorActionSaver
        );

        $this->loadFixtures([CartTestFixtures::class]);
    }

    public function testEmpty()
    {
        /** @var Cart */
        $cart = $this->findEntity(CartRepository::class);
        $user = $cart->getUser();

        $this->cookieCart->expects($this->once())
                        ->method('set')
                        ->with([]);

        $cart = new Cart;

        $this->cartFactory->expects($this->once())
                        ->method('createFullCart')
                        ->with([], [])
                        ->willReturn($cart);

        $this->databaseCart->expects($this->once())
                            ->method('persist')
                            ->with($cart, $user);

        $this->cartStorage->empty($user);
    }

    public function testEmptyVisitorActionTypeCartChangeIsSaved()
    {
        /** @var Cart */
        $cart = $this->findEntity(CartRepository::class);
        $user = $cart->getUser();
        $cart = new Cart;

        $this->cartFactory->expects($this->once())
                        ->method('createFullCart')
                        ->with([], [])
                        ->willReturn($cart);

        $this->visitorActionSaver->expects($this->once())->method('saveTypeCartChange')->with([]);

        $this->cartStorage->empty($user);
    }

    public function testSaveDoSaveOnCookie()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];

        $this->cookieCart->expects($this->once())
                        ->method('set')
                        ->with($cartArray);
        
        $this->cartStorage->save($cartArray);
    }

    public function testSaveDontCreateCartAndDontPersistWhenNoUser()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];
   
        $this->cookieCart->expects($this->once())
                        ->method('set')
                        ->with($cartArray);
        
        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn(null)
                        ;

        $this->databaseCart->expects($this->never())->method('persist');

        $this->cartStorage->save($cartArray);
    }

    public function testSaveCreateCartAndPersistWhenUserInParam()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];
        $packagingsById = [
            $packaging->getId() => $packaging
        ];

        $this->cookieCart->expects($this->once())
                        ->method('set')
                        ->with($cartArray);
        
        $user = new User;
        $cart = new Cart;

        $this->cartFactory->expects($this->once())
                        ->method('createFullCart')
                        ->with($cartArray, $packagingsById)
                        ->willReturn($cart)
                        ;
        $this->databaseCart->expects($this->once())
                        ->method('persist')
                        ->with($cart, $user);

        $this->cartStorage->save($cartArray, $packagingsById, $user);
    }

    public function testSaveCreateCartAndPersistWhenUserLogged()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];
        $packagingsById = [
            $packaging->getId() => $packaging
        ];

        $this->cookieCart->expects($this->once())
                        ->method('set')
                        ->with($cartArray);
        
        $user = new User;
        $cart = new Cart;

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user)
                        ;

        $this->cartFactory->expects($this->once())
                        ->method('createFullCart')
                        ->with($cartArray, $packagingsById)
                        ->willReturn($cart)
                        ;
        $this->databaseCart->expects($this->once())
                        ->method('persist')
                        ->with($cart, $user);

        $this->cartStorage->save($cartArray, $packagingsById);
    }

    
    public function testSaveWithPrevCartEmptyVisitorActionTypeCartCreateIsSaved()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];
        $this->cookieCart->expects($this->once())->method('get')->willReturn([]);

        $this->visitorActionSaver->expects($this->once())->method('saveTypeCartCreate')->with($cartArray);
        $this->cartStorage->save($cartArray);
    }
    public function testSaveWithPrevCartNotEmptyVisitorActionTypeCartChangeIsSaved()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        $cartArray = [
            $packaging->getId() => 1
        ];
        $this->cookieCart->expects($this->once())->method('get')->willReturn([12 => 2]);

        $this->visitorActionSaver->expects($this->once())->method('saveTypeCartChange')->with($cartArray);
        
        $this->cartStorage->save($cartArray);
    }

}
