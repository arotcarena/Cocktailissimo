<?php
namespace App\Tests\IntegrationOnly\TrafficAnalytics\Counter;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Product;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Tests\Utils\FixturesTrait;
use App\Tests\Utils\PurchaseFixturesTrait;
use App\TrafficAnalytics\Counter\ProductSalesCounter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group TrafficAnalytics
 */
class ProductSalesCounterTest extends KernelTestCase
{
    use FixturesTrait;
    use PurchaseFixturesTrait;

    private ProductSalesCounter $productSalesCounter;

    private EntityManagerInterface $em;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([PurchaseTestFixtures::class]);

        $this->productSalesCounter = static::getContainer()->get(ProductSalesCounter::class);

        $this->em = static::getContainer()->get(EntityManagerInterface::class);
    }

    public function testCountSalesWithProductsHavingNoSales() // tous les produits de ProductTestFixtures ont 0 sales
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com');
        $publicRef = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPublicRef();
        /** @var Product */
        $product = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef])->getProduct();
        $this->assertNull($product->getCountSales(), 'le test est faussé car le product a déjà des sales');
        $quantity = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getQuantity();

        $productId = $product->getId();

        $this->productSalesCounter->countSales($purchase);

        $updatedProduct = $this->findEntity(ProductRepository::class, ['id' => $productId]);
        $this->assertEquals(
            $quantity, $updatedProduct->getCountSales()
        );
    } 
    public function testCountSalesWithProductHavingSales()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com');
        $publicRef = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPublicRef();
        $product = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef])->getProduct();
        $productId = $product->getId();
        $quantity = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getQuantity();
        //on ajoute des sales au product
        $product->setCountSales(10);
        $this->em->flush();
        //on vérifie que c'est bien persisté
        $updatedProduct = $this->findEntity(ProductRepository::class, ['id' => $productId]);
        $this->assertEquals(
            10, $updatedProduct->getCountSales()
        );

        //on utilise countService
        $this->productSalesCounter->countSales($purchase);

        //on vérifie le nouveau countSales
        $reUpdatedProduct = $this->findEntity(ProductRepository::class, ['id' => $productId]);
        $this->assertEquals(
            $quantity + 10, $reUpdatedProduct->getCountSales()
        );
    } 
    public function testCountSalesWithTwoProducts()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com'); // purchase with 2 purchaseLines in 2 vendorGroups
        $publicRef1 = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPublicRef();
        $product1 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef1])->getProduct();
        $publicRef2 = $purchase->getPurchaseVendorGroups()->get(1)->getPurchaseLines()->get(0)->getPublicRef();
        $product2 = $this->findEntity(PackagingRepository::class, ['publicRef' => $publicRef2])->getProduct();


        $quantity1 = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getQuantity();
        $quantity2 = $purchase->getPurchaseVendorGroups()->get(1)->getPurchaseLines()->get(0)->getQuantity();

        $this->assertNull($product1->getCountSales(), 'le test est faussé car le product 1 a déjà des sales');
        $product1Id = $product1->getId();
        
        $this->assertNull($product2->getCountSales(), 'le test est faussé car le product 2 a déjà des sales');
        $product2Id = $product2->getId();

        $this->productSalesCounter->countSales($purchase);

        $updatedProduct1 = $this->findEntity(ProductRepository::class, ['id' => $product1Id]);
        $this->assertEquals(
            $quantity1, $updatedProduct1->getCountSales()
        );
        $updatedProduct2 = $this->findEntity(ProductRepository::class, ['id' => $product2Id]);
        $this->assertEquals(
            $quantity2, $updatedProduct2->getCountSales()
        );
    }
}