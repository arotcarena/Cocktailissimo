<?php
namespace App\PurchaseProcessing\Checkout\PaymentIntent;

use App\Service\Stripe\PaymentIntent\PiSession;
use App\Service\Stripe\StripeService;
use Stripe\PaymentIntent;

class CheckoutPiResolver
{
    public function __construct(
        private StripeService $stripeService,
        private PiSession $piSession,
        private CheckoutPiCreator $checkoutPaymentIntentCreator
    )
    {
        
    }

    public function resolve(int $amount, string $country, string $email, string $fullName): ?PaymentIntent
    {
        //si un paymentIntent existe déjà dans la session, on l'update avec amount
        if($piId = $this->piSession->get())
        {
            return $this->stripeService->updatePaymentIntent($piId, $amount);
        }
        //sinon on le crée et on le stocke en session
        $paymentIntent = $this->checkoutPaymentIntentCreator->create($amount, $country, $email, $fullName);
        $this->piSession->set($paymentIntent->id);

        return $paymentIntent;
    }
}