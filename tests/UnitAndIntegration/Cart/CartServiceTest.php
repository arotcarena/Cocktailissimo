<?php
namespace App\Tests\UnitAndIntegration\Cart;

use App\Cart\CartService;
use App\Cart\Storage\CartStorage;
use App\Cart\Utils\CartMerger;
use App\Cart\Utils\CartFactory;
use App\Tests\Utils\FixturesTrait;
use App\Cart\Utils\CartStockUpdater;
use App\Cart\Utils\CartTotalsHydrator;
use App\Repository\PackagingRepository;
use PHPUnit\Framework\MockObject\MockObject;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\User;
use App\Exception\NotEnoughStockException;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use Exception;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Cart
 */
class CartServiceTest extends KernelTestCase
{
    use FixturesTrait;
    
    private MockObject|EntityCountAdder $entityCountAdder;
    private MockObject|CartStorage $cartStorage;
    private MockObject|CartMerger $cartMerger;
    private MockObject|CartStockUpdater $cartStockUpdater;
    private MockObject|CartTotalsHydrator $cartTotalsHydrator;

    private PackagingRepository $packagingRepository;
    private CartService $cartService;


    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->packagingRepository = static::getContainer()->get(PackagingRepository::class);
        $this->entityCountAdder = $this->createMock(EntityCountAdder::class);
        $this->cartStorage = $this->createMock(CartStorage::class);
        $this->cartMerger = $this->createMock(CartMerger::class);
        $this->cartStockUpdater = $this->createMock(CartStockUpdater::class);
        $this->cartTotalsHydrator = $this->createMock(CartTotalsHydrator::class);

        $this->cartService = new CartService(
            $this->packagingRepository,
            $this->entityCountAdder,
            static::getContainer()->get(TranslatorInterface::class),
            $this->cartStorage,
            new CartFactory,
            $this->cartMerger,
            $this->cartStockUpdater,
            $this->cartTotalsHydrator
        );

        $this->loadFixtures([ProductTestFixtures::class]);
    }

    //setQuantity
    public function testSetQuantityWithPackagingAlreadyInCookieCart()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(5);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([$packagingId => 1])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 2])
                        ;

        $this->cartService->setQuantity($packagingId, 2);
    }

    public function testSetQuantityWithPackagingNotInCookieCart()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(5);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 2])
                        ;

        $this->cartService->setQuantity($packagingId, 2);
    }

    public function testSetQuantityNotEnoughStock()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 1])
                        ;

        $this->expectException(NotEnoughStockException::class);
        $this->cartService->setQuantity($packagingId, 2);
    }

    public function testSetQuantityLessThanOne()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->never())->method('getCookieCart');

        $this->cartStorage->expects($this->never())->method('save');

        $this->cartService->setQuantity($packagingId, 0);
    }

    //add
    public function testAddWithPackagingAlreadyInCookieCart()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(5);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([$packagingId => 1])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 2])
                        ;

        $this->cartService->add($packagingId, 1);
    } 

    public function testAddWithPackagingNotInCookieCart()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(5);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 1])
                        ;

        $this->cartService->add($packagingId, 1);
    } 

    public function testAddNotEnoughStock()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([$packagingId => 1])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([$packagingId => 1])
                        ;

        $this->expectException(NotEnoughStockException::class);

        $this->cartService->add($packagingId, 1);
    } 

    public function testAddWithNegativeOrZeroQuantityParam()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->never())->method('getCookieCart');

        $this->cartStorage->expects($this->never())->method('save');

        $this->cartService->add($packagingId, -1);
    } 

    public function testRemoveOneLine()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([
                            11 => 1,
                            $packagingId => 1
                        ])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([11 => 1])
                        ;

        $this->cartService->remove($packagingId);
    }

    public function testRemoveResultsInEmptyCart()
    {
        $packaging = $this->findEntity(PackagingRepository::class);
        //pour être sur de pas lever une erreur overStock
        $packaging->setStock(1);
        $packagingId = $packaging->getId();

        $this->cartStorage->expects($this->once())
                        ->method('getCookieCart')
                        ->willReturn([$packagingId => 1])
                        ;

        $this->cartStorage->expects($this->once())
                        ->method('save')
                        ->with([])
                        ;

        $this->cartService->remove($packagingId);
    }

    public function testRemovePackagingNotInCookieCart()
    {
        $this->cartStorage->expects($this->once())
                ->method('getCookieCart')
                ->willReturn([13 => 1])
                ;

        $this->cartStorage->expects($this->never())
                ->method('save')
                ->with([])
                ;

        $this->expectException(Exception::class);

        $this->cartService->remove(11);
    }

    //getFullCart
    public function testGetFullCartUpdateStock()
    {
        $this->cartStockUpdater->expects($this->once())
                                ->method('updateStock')
                                ;

        $this->cartStorage->expects($this->once())->method('save')->willReturn(new Cart);
        $this->cartService->getFullCart();
    }

    public function testGetFullCartSavesIfStockChanges()
    {
        $cartUpdated = [1 => 1];
        $stockStatus = CartStockUpdater::STOCK_UPDATED;

        $this->cartStockUpdater->expects($this->once())
                                ->method('updateStock')
                                ->willReturn([$cartUpdated, $stockStatus])
                                ;

        $this->cartStorage->expects($this->once())
                            ->method('save')
                            ->with($cartUpdated)
                            ->willReturn(new Cart)
                            ;
        
        $this->cartService->getFullCart();
    }

    public function testGetFullCartDontSavesIfNoStockChanges()
    {
        $stockStatus = CartStockUpdater::STOCK_SUFFICIENT;

        $this->cartStockUpdater->expects($this->once())
                                ->method('updateStock')
                                ->willReturn([[], $stockStatus])
                                ;

        $this->cartStorage->expects($this->never())->method('save');
        
        $this->cartService->getFullCart();
    }

    public function testGetFullCartHydrateCartWithTotals()
    {
        $this->cartStorage->expects($this->once())
                            ->method('save')
                            ->willReturn(new Cart)
                            ;
        $this->cartTotalsHydrator->expects($this->once())
                                ->method('hydrate')
                                ;

        $this->cartService->getFullCart();
    }

    public function testGetFullCartReturnStockStatus()
    {
        $cartUpdated = [1 => 1];
        $stockStatus = CartStockUpdater::STOCK_UPDATED;
        $cart = (new Cart)->addCartVendorGroup((new CartVendorGroup)->addCartLine((new CartLine)->setQuantity(1)));

        $this->cartStockUpdater->expects($this->once())
                                ->method('updateStock')
                                ->willReturn([$cartUpdated, $stockStatus])
                                ;

        $this->cartStorage->expects($this->once())
                            ->method('save')
                            ->with($cartUpdated)
                            ->willReturn($cart)
                            ;

        [$returnCart, $returnStockStatus] = $this->cartService->getFullCart();
        $this->assertEquals($cart, $returnCart);
        $this->assertEquals($stockStatus, $returnStockStatus);
    }

    //getLightCart
    public function testGetLightCartDontUpdateStock()
    {
        $this->cartStockUpdater->expects($this->never())->method('updateStock');

        $this->cartService->getLightCart();
    }
    
    public function testGetLightCartHydrateCart()
    {
        $this->cartTotalsHydrator->expects($this->once())
                                ->method('hydrate')
                                ;

        $this->cartService->getLightCart();
    }

    //count
    public function testCount()
    {
        $this->cartStorage->expects($this->once())
                            ->method('getCookieCart')
                            ->willReturn([
                                11 => 2,
                                21 => 7,
                                101 => 1
                            ]);

        $this->assertEquals(10, $this->cartService->count());
    }
    
    public function testCountWithEmptyCart()
    {
        $this->cartStorage->expects($this->once())
                            ->method('getCookieCart')
                            ->willReturn([]);

        $this->assertEquals(0, $this->cartService->count());
    }

    //empty
    public function testEmpty()
    {
        $this->cartStorage->expects($this->once())
                            ->method('empty');
        $this->cartService->empty();
    }

    //onLoginUpdate
    public function onLoginUpdateMergeBothCarts()
    {
        $cookieCart = [1 => 1];
        $dbCart = new Cart;

        $this->cartStorage->expects($this->once())
                            ->method('getCookieCart')
                            ->willReturn($cookieCart);
        $this->cartStorage->expects($this->once())
                            ->method('getDatabaseCart')
                            ->willReturn($dbCart);

        $this->cartMerger->expects($this->once())
                        ->method('merge')
                        ->with($dbCart, $cookieCart);

        $this->cartService->onLoginUpdate(new User);
    }

    public function onLoginUpdateDoUpdateStockOfMergedCart()
    {
        $mergedCart = [1 => 1];

        $this->cartMerger->expects($this->once())
                        ->method('merge')
                        ->willReturn($mergedCart);

        $this->cartStockUpdater->expects($this->once())
                            ->method('updateStock')
                            ->with($mergedCart);
                        
        $this->cartService->onLoginUpdate(new User);
    }

    public function onLoginUpdateSaveStockUpdatedCart()
    {
        $updatedCart = [1 => 1];

        $this->cartStockUpdater->expects($this->once())
                            ->method('updateStock')
                            ->willReturn($updatedCart);

        $this->cartStorage->expects($this->once())
                            ->method('save')
                            ->with($updatedCart);
                        
        $this->cartService->onLoginUpdate(new User);
    }
}