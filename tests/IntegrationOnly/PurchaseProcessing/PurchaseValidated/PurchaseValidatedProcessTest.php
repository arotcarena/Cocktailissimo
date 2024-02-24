<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\PurchasePendingTestFixtures;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\FinancialOperations\PaymentVentilator;
use App\Invoice\InvoiceManagement\PurchaseInvoicesHandler;
use App\PurchaseProcessing\PurchaseValidated\Calculator\PurchaseAmountCalculator;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedNotifier;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedProcess;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Service\Sendcloud\SendcloudService;
use App\Tests\Utils\FixturesTrait;
use App\Tests\Utils\PurchaseFixturesTrait;
use App\TrafficAnalytics\Counter\ProductSalesCounter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Purchase
 */
class PurchaseValidatedProcessTest extends KernelTestCase
{
    use FixturesTrait;
    use PurchaseFixturesTrait;

    private PurchaseValidatedProcess $purchaseValidatedProcess;

    private EntityManagerInterface $em;

    private Purchase $purchase;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $container = static::getContainer();

        $this->em = $container->get(EntityManagerInterface::class);

        $this->purchaseValidatedProcess = new PurchaseValidatedProcess(
            $this->em,
            $container->get(ProductSalesCounter::class),
            $this->createMock(SendcloudService::class),
            $this->createMock(PaymentVentilator::class),
            $container->get(PurchaseAmountCalculator::class),
            $container->get(PurchaseValidatedNotifier::class),
            $container->get(PurchaseInvoicesHandler::class)
        );

        $this->loadFixtures([PurchasePendingTestFixtures::class]);

        $this->purchase = $this->getPurchaseByCustomerEmail('purchase_pending_with_2_purchaseLines@mail.com'); // valid pending purchase with 2 vg and 2 pl 
    }

    public function testProcessChangePurchaseStatusToStatusPaid()
    {
        $this->purchaseValidatedProcess->process($this->purchase);
        $this->assertEquals(SiteConfig::STATUS_PAID, $this->purchase->getStatus());
    }

    public function testProcessPurchaseStatusChangeIsPersisted()
    {
        $id = $this->purchase->getId();
        $this->purchaseValidatedProcess->process($this->purchase);
        $purchaseUpdated = $this->findEntity(PurchaseRepository::class, ['id' => $id]);
        $this->assertEquals(SiteConfig::STATUS_PAID, $purchaseUpdated->getStatus());
    }

    public function testProcessCalculateAmounts()
    {
        $this->purchaseValidatedProcess->process($this->purchase);
        $this->assertNotNull($this->purchase->getPurchaseVendorGroups()->get(0)->getArticlesPrice());
        $this->assertNotNull($this->purchase->getPurchaseVendorGroups()->get(0)->getTotalPrice());
        $this->assertNotNull($this->purchase->getPurchaseVendorGroups()->get(0)->getCommissionPrice());
        $this->assertNotNull($this->purchase->getPurchaseVendorGroups()->get(0)->getVendorRestAmount());
    }

    public function testProcessUpdateProductsCountSales()
    {
        //on choisi une purchaseLine avec quantity >= 2 pour vérifier que le produit est bien compté 2 fois
        $vendorGroup = $this->purchase->getPurchaseVendorGroups()->get(0);
        /** @var PurchaseLine */
        $purchaseLine = $vendorGroup->getPurchaseLines()->get(0);
        //on supprime les autres purchaseLines de ce vendorGroup pour éviter de fausser le test au cas ou le même produit serait présent sous un autre packaging
        foreach($vendorGroup->getPurchaseLines() as $pl)
        {
            if($purchaseLine->getId() !== $pl->getId())
            {
                $this->em->remove($pl);
            }
        }
        //on supprime les autres vendorGroups pour éviter de fausser le test au cas ou le même produit serait présent sous un autre packaging
        foreach($this->purchase->getPurchaseVendorGroups() as $vg)
        {
            if($vendorGroup->getId() !== $vg->getId())
            {
                $this->em->remove($vg);
            }
        }
        $this->em->flush();

        $quantity = $purchaseLine->getQuantity();
        $this->assertLessThanOrEqual($quantity, 2, 'le test est faussé, il faut choisir une purchase avec une quantité de deux minimum');

        /** @var Product */
        $product = $this->findEntity(PackagingRepository::class, ['publicRef' => $purchaseLine->getPublicRef()])->getProduct();
        $productId = $product->getId();

        $countSales = $product->getCountSales();

        $this->purchaseValidatedProcess->process($this->purchase);

        $updatedProduct = $this->findEntity(ProductRepository::class, ['id' => $productId]);
        $this->assertEquals($countSales + $quantity, $updatedProduct->getCountSales());
    }
}