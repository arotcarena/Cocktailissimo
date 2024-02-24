<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\Entity\Purchase;
use App\FinancialOperations\PaymentVentilator;
use App\Invoice\InvoiceManagement\PurchaseInvoicesHandler;
use App\PurchaseProcessing\PurchaseValidated\Calculator\PurchaseAmountCalculator;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedNotifier;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedProcess;
use App\Service\Sendcloud\SendcloudService;
use App\Tests\UnitAndIntegration\PurchaseProcessing\Utils\Factory\PurchasePendingFactory;
use App\TrafficAnalytics\Counter\ProductSalesCounter;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group Purchase
 */
class PurchaseValidatedProcessTest extends TestCase
{
    private PurchaseValidatedProcess $purchaseValidatedProcess;

    private EntityManagerInterface|MockObject $em;
    private ProductSalesCounter|MockObject $productSalesCounter;
    private PaymentVentilator|MockObject $paymentVentilator;
    private SendcloudService|MockObject $sendcloudService;
    private PurchaseAmountCalculator|MockObject $purchaseAmountCalculator;
    private PurchaseValidatedNotifier|MockObject $purchaseValidatedNotifier;
    private PurchaseInvoicesHandler|MockObject $purchaseInvoicesHandler;

    private Purchase $purchase;

    public function setUp(): void
    {
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->productSalesCounter = $this->createMock(ProductSalesCounter::class);
        $this->paymentVentilator = $this->createMock(PaymentVentilator::class);
        $this->sendcloudService = $this->createMock(SendcloudService::class);
        $this->purchaseAmountCalculator = $this->createMock(PurchaseAmountCalculator::class);
        $this->purchaseValidatedNotifier = $this->createMock(PurchaseValidatedNotifier::class);
        $this->purchaseInvoicesHandler = $this->createMock(PurchaseInvoicesHandler::class);

        $this->purchaseValidatedProcess = new PurchaseValidatedProcess(
            $this->em,
            $this->productSalesCounter,
            $this->sendcloudService,
            $this->paymentVentilator,
            $this->purchaseAmountCalculator,
            $this->purchaseValidatedNotifier,
            $this->purchaseInvoicesHandler
        );

        $this->purchase = PurchasePendingFactory::create();
    }

    public function testProcessChangePurchaseStatusToStatusPaid()
    {
        $this->em->expects($this->once())->method('flush');

        $this->purchaseValidatedProcess->process($this->purchase);
        $this->assertEquals(SiteConfig::STATUS_PAID, $this->purchase->getStatus());
    }

    public function testProcessAnnounceParcels()
    {
        $this->sendcloudService->expects($this->once())->method('announceParcels')->with($this->purchase);

        $this->purchaseValidatedProcess->process($this->purchase);
    }

    public function testProcessSendNotifications()
    {
        $this->purchaseValidatedNotifier->expects($this->once())->method('notify')->with($this->purchase);

        $this->purchaseValidatedProcess->process($this->purchase);
    }

    public function testProcessCalculateAmount()
    {
        $this->purchaseAmountCalculator->expects($this->once())->method('calculateVendorGroupsAmounts')->with($this->purchase);

        $this->purchaseValidatedProcess->process($this->purchase);
    }

    public function testProcessVentilateThePayment()
    {
        $this->paymentVentilator->expects($this->once())->method('ventilate')->with(
            $this->purchase
        );

        $this->purchaseValidatedProcess->process($this->purchase);
    }

    public function testProcessUpdateProductsCountSales()
    {
        $this->productSalesCounter->expects($this->once())->method('countSales')->with($this->purchase);

        $this->purchaseValidatedProcess->process($this->purchase);
    }
}