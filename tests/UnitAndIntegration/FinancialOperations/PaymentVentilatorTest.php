<?php
namespace App\Tests\UnitAndIntegration\FinancialOperations;

use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Entity\User;
use App\Entity\VendorDetail;
use App\FinancialOperations\PaymentVentilator;
use App\Service\Stripe\StripeService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PaymentVentilatorTest extends TestCase
{
    private PaymentVentilator $paymentVentilator;

    private MockObject|StripeService $stripeService;


    public function setUp(): void
    {
        $this->stripeService = $this->createMock(StripeService::class);     

        $this->paymentVentilator = new PaymentVentilator($this->stripeService);
    }

    public function testVentilateSendCorrectTransfers()
    {
        $this->stripeService->expects($this->exactly(2))
                            ->method('createTransfer')
                            ->with(500, 'acct-test')
                            ;

        $this->paymentVentilator->ventilate(
            $this->createPurchase()
        );
    }

    public function testVentilateWithVendorGroupVendorRestAmountNull()
    {
        $purchase = $this->createPurchase();
        foreach($purchase->getPurchaseVendorGroups() as $vendorGroup)
        {
            $vendorGroup->setVendorRestAmount(null);
        }

        
        $this->stripeService->expects($this->never())
                            ->method('createTransfer')
                            ;

        $this->paymentVentilator->ventilate($purchase);
    }

    private function createPurchase(): Purchase
    {
        return (new Purchase)
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorRestAmount(500)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorRestAmount(500)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test-3')
                        ->setCommissionFree(true) // on le met en cas de changement mais pour l'instant ne sert à rien
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test-3')
                    )
                );
    }
}