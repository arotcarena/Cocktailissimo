<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\Email\Admin\AdminNotificationEmail;
use App\Entity\ProcessedPaymentIntent;
use App\Entity\Purchase;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedVerificator;
use App\Repository\ProcessedPaymentIntentRepository;
use App\Repository\PurchaseRepository;
use App\Service\StockUpdater;
use App\Service\Stripe\StripeService;
use App\Tests\UnitAndIntegration\PurchaseProcessing\Utils\Factory\PurchasePendingFactory;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Stripe\PaymentIntent;

/**
 * @group Purchase
 */
class PurchaseValidatedVerificatorTest extends TestCase
{
    private PurchaseValidatedVerificator $purchaseValidatedVerificator;

    private PurchaseRepository|MockObject $purchaseRepository;
    private StripeService|MockObject $stripeService;
    private EntityManagerInterface|MockObject $em;
    private AdminNotificationEmail|MockObject $adminNotificationEmail;
    private StockUpdater|MockObject $stockUpdater;
    private ProcessedPaymentIntentRepository|MockObject $processedPaymentIntentRepository;

    private PaymentIntent $paymentIntent;
    private Purchase $purchase;

    public function setUp(): void
    {
        $this->purchaseRepository = $this->createMock(PurchaseRepository::class);
        $this->adminNotificationEmail = $this->createMock(AdminNotificationEmail::class);
        $this->stockUpdater = $this->createMock(StockUpdater::class);
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->stripeService = $this->createMock(StripeService::class);
        $this->processedPaymentIntentRepository = $this->createMock(ProcessedPaymentIntentRepository::class);

        $this->purchaseValidatedVerificator = new PurchaseValidatedVerificator(
            $this->purchaseRepository,
            $this->adminNotificationEmail,
            $this->stockUpdater,
            $this->em,
            $this->stripeService,
            $this->processedPaymentIntentRepository
        );

        $this->paymentIntent = new PaymentIntent('pi_id');
        $this->paymentIntent->metadata = (object)['purchaseId' => 1];
        $this->purchase = PurchasePendingFactory::create();
        $this->paymentIntent->amount_received = 5500; // purchase.totalPricePaid + purchase.shippingCost
    }

    public function testVerifySuccessReturnPurchase()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn($this->purchase);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->assertEquals(
            $this->purchase,
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyPaymentIntentAlreadyProcessedReturnNull()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn($this->purchase);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->processedPaymentIntentRepository->expects($this->once())
                                                ->method('findOneBy')
                                                ->with(['stringId' => 'pi_id'])
                                                ->willReturn(new ProcessedPaymentIntent)
                                                ;
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyNewPaymentIntentIsSavedAsProcessedPaymentIntent()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn($this->purchase);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->processedPaymentIntentRepository->expects($this->once())
                                                ->method('findOneBy')
                                                ->with(['stringId' => 'pi_id'])
                                                ->willReturn(null)
                                                ;
        $this->em->expects($this->once())->method('persist')->with(
            (new ProcessedPaymentIntent)
            ->setStringId('pi_id')
        );
        $this->em->expects($this->once())->method('flush');

        $this->purchaseValidatedVerificator->verify($this->paymentIntent);
    }

    public function testVerifyPaymentIntentWithNoPurchaseAssociatedReturnNull()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn(null);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyWhenPurchaseAlreadyPaidReturnNull()
    {
        $purchase = PurchasePendingFactory::create();
        $purchase->setStatus(SiteConfig::STATUS_PAID);

        $this->purchaseRepository->expects($this->any())
                                ->method('find')
                                ->with($this->paymentIntent->metadata->purchaseId)
                                ->willReturn($purchase);
        
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyPaymentIntentAndPurchaseHavingDifferentTotalAmountWillReturnNull()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn($this->purchase);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(true);

        $this->paymentIntent->amount_received = 5000; // cas ou on aurait oublié d'ajouter shippingCost
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyWhenStockErrorReturnNull()
    {
        $this->purchaseRepository->expects($this->any())->method('find')->with(1)->willReturn($this->purchase);
        $this->stockUpdater->expects($this->any())->method('handlePurchase')->with($this->purchase)->willReturn(false);

        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }
}