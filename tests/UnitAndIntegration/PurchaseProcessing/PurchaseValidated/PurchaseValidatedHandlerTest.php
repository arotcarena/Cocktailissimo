<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\PurchaseValidated;

use App\Entity\Purchase;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedHandler;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedProcess;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedVerificator;
use Monolog\Test\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use Stripe\PaymentIntent;

/**
 * @group Purchase
 */
class PurchaseValidatedHandlerTest extends TestCase
{
    private PurchaseValidatedProcess|MockObject $purchaseValidatedProcess;
    private PurchaseValidatedVerificator|MockObject $purchaseValidatedVerificator;

    private PurchaseValidatedHandler $purchaseValidatedHandler;

    public function setUp(): void
    {
        $this->purchaseValidatedProcess = $this->createMock(PurchaseValidatedProcess::class);
        $this->purchaseValidatedVerificator = $this->createMock(PurchaseValidatedVerificator::class);

        $this->purchaseValidatedHandler = new PurchaseValidatedHandler($this->purchaseValidatedProcess, $this->purchaseValidatedVerificator);
    }

    public function testHandleWithVerificationFailed()
    {
        $paymentIntent = new PaymentIntent('pi_id');
        $this->purchaseValidatedVerificator->expects($this->once())
                                            ->method('verify')
                                            ->with($paymentIntent)
                                            ->willReturn(null)
                                            ;

        $this->purchaseValidatedProcess->expects($this->never())->method('process');

        $this->purchaseValidatedHandler->handle($paymentIntent);
    }

    public function testHandleWithVerificationSuccess()
    {
        $paymentIntent = new PaymentIntent('pi_id');
        $purchase = new Purchase;
        $this->purchaseValidatedVerificator->expects($this->once())
                                            ->method('verify')
                                            ->with($paymentIntent)
                                            ->willReturn($purchase)
                                            ;

        $this->purchaseValidatedProcess->expects($this->once())
                                        ->method('process')
                                        ->with($purchase)
                                        ;

        $this->purchaseValidatedHandler->handle($paymentIntent);
    }
}