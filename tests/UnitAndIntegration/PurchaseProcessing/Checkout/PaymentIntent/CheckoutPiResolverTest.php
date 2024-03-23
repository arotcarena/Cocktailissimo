<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PaymentIntent;

use App\PurchaseProcessing\Checkout\PaymentIntent\CheckoutPiCreator;
use App\PurchaseProcessing\Checkout\PaymentIntent\CheckoutPiResolver;
use App\Service\Stripe\PaymentIntent\PiSession;
use App\Service\Stripe\StripeService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Stripe\PaymentIntent;

/**
 * @group Purchase
 */
class CheckoutPiResolverTest extends TestCase
{
    private PiSession|MockObject $piSession;

    private StripeService|MockObject $stripeService;

    private CheckoutPiCreator|MockObject $checkoutPiCreator;

    private CheckoutPiResolver $checkoutPiResolver;


    public function setUp(): void
    {
        $this->piSession = $this->createMock(PiSession::class);
        $this->stripeService = $this->createMock(StripeService::class);
        $this->checkoutPiCreator = $this->createMock(CheckoutPiCreator::class);

        $this->checkoutPiResolver = new CheckoutPiResolver($this->stripeService, $this->piSession, $this->checkoutPiCreator);
    }

    public function testResolveWithExistingPaymentIntentWillCallUpdatePaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn('pi_id');

        $pi = new PaymentIntent('pi_id');
        //pour éviter qu'on essaye de créer un nouveau paymentIntent
        //auquel cas si on gère pas pour que le mock renvoie un pi avec un id ça bug
        $pi->amount_received = 0;
        $pi->client_secret = 'client_secret';
        $this->stripeService->expects($this->once())
                            ->method('updatePaymentIntent')
                            ->willReturn($pi);

        $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
    }

    public function testResolveWithExistingValidAndYetNotPaidPaymentIntentWontCallCreatePaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn('pi_id');

        //pour que la méthode create ne soit pas appelée, il faut que le pi actuel soit valide (non payé et ayant un client_secret)
        $pi = new PaymentIntent('pi_id');
        $pi->amount_received = 0;
        $pi->client_secret = 'client_secret';
        $this->stripeService->expects($this->once())
                            ->method('updatePaymentIntent')
                            ->willReturn($pi);

        $this->checkoutPiCreator->expects($this->never())->method('create');

        $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
    }

    public function testResolveWithExistingPaymentIntentWillReturnCorrectPaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn('pi_id');
        //pour que la méthode create ne soit pas appelée, il faut que le pi actuel soit valide (non payé et ayant un client_secret)
        $pi = new PaymentIntent('updated_pi_id');
        $pi->amount_received = 0;
        $pi->client_secret = 'client_secret';
        $this->stripeService->expects($this->once())
                            ->method('updatePaymentIntent')
                            ->with('pi_id', 500)
                            ->willReturn($pi);

        $paymentIntent = $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
        $this->assertEquals('updated_pi_id', $paymentIntent->id);
    }

    public function testResolveWithNoExistingPaymentIntentWillCallCreatePaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
        $this->checkoutPiCreator->expects($this->once())
                            ->method('create')
                            ->willReturn(new PaymentIntent('pi_id'));

        $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
    }

    public function testResolveWithNoExistingPaymentIntentWillSetNewPaymentIntentIdInSession()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
        $this->checkoutPiCreator->expects($this->once())
                            ->method('create')
                            ->willReturn(new PaymentIntent('created_pi_id'));

        $this->piSession->expects($this->once())->method('set')->with('created_pi_id');

        $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
    }

    public function testResolveWithNoExistingPaymentIntentWontCallUpdatePaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
        $this->checkoutPiCreator->expects($this->once())->method('create')->willReturn(new PaymentIntent('pi_id'));

        $this->stripeService->expects($this->never())->method('updatePaymentIntent');

        $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
    }

    public function testResolveWithNoExistingPaymentIntentWillReturnCorrectPaymentIntent()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
       
        $this->checkoutPiCreator->expects($this->once())
                            ->method('create')
                            ->with(500, 'FR', 'email@mail.com', 'Jean Badaud')
                            ->willReturn(new PaymentIntent('created_pi_id'));

        $paymentIntent = $this->checkoutPiResolver->resolve(500, 'FR', 'email@mail.com', 'Jean Badaud');
        $this->assertEquals('created_pi_id', $paymentIntent->id);
    }
}