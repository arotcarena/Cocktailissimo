<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\Checkout\PurchasePreparation;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchaseRelationsCleaner;
use App\Repository\CustomerDetailRepository;
use App\Repository\CustomPriceRepository;
use App\Repository\PostalDetailRepository;
use App\Repository\PurchaseRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


/**
 * @group Purchase
 */
class PurchaseRelationsCleanerTest extends KernelTestCase
{
    use FixturesTrait;

    private PurchaseRelationsCleaner $purchaseRelationsCleaner;

    public function setUp(): void
    {
        parent::setUp();

        $this->purchaseRelationsCleaner = new PurchaseRelationsCleaner(
            static::getContainer()->get(EntityManagerInterface::class)
        );

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testCleanVendorGroups()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchaseId = $purchase->getId();

        $this->assertNotEquals(0, $purchase->getPurchaseVendorGroups()->count(), 'le test est faussé, la purchase n\'a aucun vendorGroup dès le début.');

        $this->purchaseRelationsCleaner->clean($purchase);
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class, ['id' => $purchaseId]);

        $this->assertEquals(0, $purchase->getPurchaseVendorGroups()->count());
    }

    public function testCleanRemoveCustomerDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getCustomerDetail(), 'le test est faussé, la purchase de base n\'as pas de customerDetail');

        $customerDetailId = $purchase->getCustomerDetail()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $customerDetail = $this->findEntity(CustomerDetailRepository::class, ['id' => $customerDetailId]);

        $this->assertNull($customerDetail);
    }

    public function testCleanRemoveDeliveryDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getDeliveryDetail(), 'le test est faussé, la purchase de base n\'as pas de deliveryDetail');

        $deliveryDetailId = $purchase->getDeliveryDetail()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $deliveryDetail = $this->findEntity(PostalDetailRepository::class, ['id' => $deliveryDetailId]);

        $this->assertNull($deliveryDetail);
    }

    public function testCleanRemoveInvoiceDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getInvoiceDetail(), 'le test est faussé, la purchase de base n\'as pas de invoiceDetail');

        $invoiceDetailId = $purchase->getInvoiceDetail()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $invoiceDetail = $this->findEntity(PostalDetailRepository::class, ['id' => $invoiceDetailId]);

        $this->assertNull($invoiceDetail);
    }

    public function testCleanRemoveArticlesPrice()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getArticlesPrice(), 'le test est faussé, la purchase de base n\'as pas de articlesPrice');

        $articlesPriceId = $purchase->getArticlesPrice()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $articlesPrice = $this->findEntity(CustomPriceRepository::class, ['id' => $articlesPriceId]);

        $this->assertNull($articlesPrice);
    }

    public function testCleanRemoveShippingCost()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getShippingCost(), 'le test est faussé, la purchase de base n\'as pas de shippingCost');

        $shippingCostId = $purchase->getShippingCost()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $shippingCost = $this->findEntity(CustomPriceRepository::class, ['id' => $shippingCostId]);

        $this->assertNull($shippingCost);
    }

    public function testCleanRemoveTotalPrice()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNotNull($purchase->getTotalPrice(), 'le test est faussé, la purchase de base n\'as pas de totalPrice');

        $totalPriceId = $purchase->getTotalPrice()->getId();

        $this->purchaseRelationsCleaner->clean($purchase);
        $totalPrice = $this->findEntity(CustomPriceRepository::class, ['id' => $totalPriceId]);

        $this->assertNull($totalPrice);
    }
}