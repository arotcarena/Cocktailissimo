<?php
namespace App\Tests\UnitAndIntegration\Controller\Webhook;

use App\Controller\Webhook\Stripe\PaymentSuccessWebhookController;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedHandler;
use App\Service\Stripe\StripeService;
use App\Tests\Utils\FixturesTrait;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Stripe\PaymentIntent;
use Symfony\Component\HttpFoundation\Response;

class PaymentSuccessWebhookControllerTest extends TestCase
{
    use FixturesTrait;

    private PaymentSuccessWebhookController $paymentSuccessWebhookController;

    private StripeService|MockObject $stripeService;

    private PurchaseValidatedHandler|MockObject $purchaseValidatedHandler;


    public function setUp(): void
    {
        $this->stripeService = $this->createMock(StripeService::class);
        $this->purchaseValidatedHandler = $this->createMock(PurchaseValidatedHandler::class);

        $this->paymentSuccessWebhookController = new PaymentSuccessWebhookController(
            $this->stripeService,
            $this->purchaseValidatedHandler
        );
    }

    public function testNoPaymentIntentResultInResponseError()
    {
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn(null);

        $response = $this->paymentSuccessWebhookController->paymentSuccess();
        $this->assertEquals(Response::HTTP_BAD_REQUEST, $response->getStatusCode());
    }

    public function testNoPaymentIntentMetadataPurchaseIdResultInResponseError()
    {
        $paymentIntent = new PaymentIntent('pi_1234');
        $paymentIntent->amount_received = 100;
        $paymentIntent->metadata = (object)[
            'otherKey' => 123456789
        ];
        
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn($paymentIntent);

        $response = $this->paymentSuccessWebhookController->paymentSuccess();
        $this->assertEquals(Response::HTTP_BAD_REQUEST, $response->getStatusCode());
    }

    public function testWhenNoPaymentIntentParamPurchaseValidatedProcessIsNotCalled()
    {
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn(null);

        $this->purchaseValidatedHandler->expects($this->never())->method('handle');

        $this->paymentSuccessWebhookController->paymentSuccess();
    }

    public function testWhenNoPaymentIntentMetadataPurchaseIdPurchaseValidatedProcessIsNotCalled()
    {
        $paymentIntent = new PaymentIntent('pi_1234');
        $paymentIntent->amount_received = 100;
        $paymentIntent->metadata = (object)[
            'otherKey' => 123456789
        ];
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn($paymentIntent);
        
        $this->purchaseValidatedHandler->expects($this->never())->method('handle');

        $this->paymentSuccessWebhookController->paymentSuccess();
    }

    public function testWhenCorrectPaymentIntentResponseIsSuccessful()
    {
        $paymentIntent = new PaymentIntent('pi_1234');
        $paymentIntent->amount_received = 100;
        $paymentIntent->metadata = (object)[
            'purchaseId' => 123456789
        ];
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn($paymentIntent);

        $response = $this->paymentSuccessWebhookController->paymentSuccess();
        $this->assertEquals(Response::HTTP_OK, $response->getStatusCode());
    }

    public function testWhenCorrectPaymentIntentPurchaseValidatedProcessIsCalled()
    {
        $paymentIntent = new PaymentIntent('pi_1234');
        $paymentIntent->amount_received = 100;
        $paymentIntent->metadata = (object)[
            'purchaseId' => 123456789
        ];
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('payment_intent.succeeded')
                            ->willReturn($paymentIntent);

        $this->purchaseValidatedHandler->expects($this->once())->method('handle')->with($paymentIntent);

        $this->paymentSuccessWebhookController->paymentSuccess();
    }
}