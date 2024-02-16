<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\Checkout\PurchasePreparation;

use App\DataFixtures\Tests\VendorTestFixtures;
use App\Entity\Purchase;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchasePreparator;
use App\Repository\UserRepository;
use App\Tests\Utils\Factory\CheckoutDataFactory;
use App\Tests\Utils\FixturesTrait;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Purchase
 */
class PurchasePreparatorTest extends KernelTestCase
{
    use FixturesTrait;
    private PurchasePreparator $purchasePreparator;

    public function setUp(): void
    {
        parent::setUp();

        $this->purchasePreparator = static::getContainer()->get(PurchasePreparator::class);

        $this->loadFixtures([VendorTestFixtures::class]);
    }

    public function testPersistSetCorrectPurchaseVendorGroupsCount()
    {
        $purchase = new Purchase;
        $checkoutData = $this->createCheckoutDataWithValidVendorIds();
        $this->purchasePreparator->prepare($purchase, $checkoutData, 'en');

        $this->assertCount(2, $purchase->getPurchaseVendorGroups());
    }
    public function testPersistSetCorrectPurchaseVendorGroups()
    {
        $purchase = new Purchase;
        $checkoutData = $this->createCheckoutDataWithValidVendorIds();
        $this->purchasePreparator->prepare($purchase, $checkoutData, 'en');

        $this->assertEquals(10, $purchase->getPurchaseVendorGroups()->get(0)->getShippingInfo()->getPrice()->getPriceHT()); //le 1er vg a un shippingInfo.price.priceHT = 10
        $this->assertEquals(20, $purchase->getPurchaseVendorGroups()->get(1)->getShippingInfo()->getPrice()->getPriceHT()); //le 2e vg a un shippingInfo.price.priceHT = 20
    }
    public function testPersistSetCorrectShippingCostIntoPurchase()
    {
        $purchase = new Purchase;
        $checkoutData = $this->createCheckoutDataWithValidVendorIds();
        $this->purchasePreparator->prepare($purchase, $checkoutData, 'en');

        $this->assertEquals(30, $purchase->getShippingCost()->getPriceHT());
        $this->assertEquals(35, $purchase->getShippingCost()->getPriceTTC());
        $this->assertEquals(35, $purchase->getShippingCost()->getPriceToPay());
    }
    public function testPersistSetCorrectArticlesPriceIntoPurchase()
    {
        $purchase = new Purchase;
        $checkoutData = $this->createCheckoutDataWithValidVendorIds();
        $this->purchasePreparator->prepare($purchase, $checkoutData, 'en');

        $this->assertEquals(400, $purchase->getArticlesPrice()->getPriceHT());
        $this->assertEquals(480, $purchase->getArticlesPrice()->getPriceTTC());
        $this->assertEquals(480, $purchase->getArticlesPrice()->getPriceToPay());
    }
    public function testPersistSetCorrectTotalPriceIntoPurchase()
    {
        $purchase = new Purchase;
        $checkoutData = $this->createCheckoutDataWithValidVendorIds();
        $this->purchasePreparator->prepare($purchase, $checkoutData, 'en');

        $this->assertEquals(430, $purchase->getTotalPrice()->getPriceHT());
        $this->assertEquals(515, $purchase->getTotalPrice()->getPriceTTC());
        $this->assertEquals(515, $purchase->getTotalPrice()->getPriceToPay());
    }


    private function createCheckoutDataWithValidVendorIds(): stdClass
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $checkoutData = CheckoutDataFactory::createCheckoutData();
        foreach($checkoutData->vendorGroups as $vendorGroup)
        {
            $vendorGroup->vendor->id = $vendor->getId();
        }
        return $checkoutData;
    }
}