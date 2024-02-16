<?php
namespace App\Tests\UnitAndIntegration\Service;

use App\Tests\Utils\FixturesTrait;
use App\Repository\PurchaseRepository;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\Helper\VendorGroupLinesExtractor;
use App\Repository\PackagingRepository;
use App\Service\StockUpdater;
use App\Tests\Utils\PurchaseFixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Service
 */
class StockUpdaterTest extends KernelTestCase
{
    use FixturesTrait;
    use PurchaseFixturesTrait;
    
    private StockUpdater $stockUpdater;

    private EntityManagerInterface $em;

    private MockObject|EntityManagerInterface $emMock;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([PurchaseTestFixtures::class]);

        $this->em = static::getContainer()->get(EntityManagerInterface::class);
        $packagingRepository = static::getContainer()->get(PackagingRepository::class);

        $this->emMock = $this->createMock(EntityManagerInterface::class);

        $this->stockUpdater = new StockUpdater($this->emMock, $packagingRepository, new VendorGroupLinesExtractor);
    }

    public function testHandlePurchaseWithPurchaseContainingProductThatHaveBeenRemoved()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com'); 

        // on supprime l'un des deux products
        $publicRef = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPublicRef();
        $product = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef])->getProduct();
        $this->em->remove($product);
        $this->em->flush();

        $this->emMock->expects($this->never())
                    ->method('flush')
                    ;
        $result = $this->stockUpdater->handlePurchase($purchase);
        $this->assertFalse($result);
    }

    public function testHandlePurchaseWithPurchaseContainingPackagingOverStock()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_one_packaging_overstock@mail.com'); 

        $this->emMock->expects($this->never())
                    ->method('flush')
                    ;
        $result = $this->stockUpdater->handlePurchase($purchase);
        $this->assertFalse($result);
    }

    public function testHandlePurchaseWithValidPurchase()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com'); 

        $this->emMock->expects($this->once())
                    ->method('flush')
                    ;
        $result = $this->stockUpdater->handlePurchase($purchase);
        $this->assertTrue($result);
    }
    public function testHandlePurchaseCorrectUpdateStocks()
    {
        /** @var Purchase */
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com'); 
        
        $quantity1 = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getQuantity();
        $publicRef1 = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPublicRef();
        $stock1 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef1])->getStock();

        $quantity2 = $purchase->getPurchaseVendorGroups()->get(1)->getPurchaseLines()->get(0)->getQuantity();
        $publicRef2 = $purchase->getPurchaseVendorGroups()->get(1)->getPurchaseLines()->get(0)->getPublicRef();
        $stock2 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef2])->getStock();

        $this->stockUpdater->handlePurchase($purchase);

        $updatedStock1 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef1])->getStock();
        $updatedStock2 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef2])->getStock();

        $this->assertEquals($stock1 - $quantity1, $updatedStock1);
        $this->assertEquals($stock2 - $quantity2, $updatedStock2);
    }

}