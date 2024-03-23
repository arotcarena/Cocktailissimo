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

    public function resolve(int $amount, string $country, string $email, string $fullName): PaymentIntent
    {
        $paymentIntent = null;
        //si un paymentIntent existe déjà dans la session, on l'update avec amount
        if($piId = $this->piSession->get())
        {
            $paymentIntent = $this->stripeService->updatePaymentIntent($piId, $amount);
            //on vérifie que le paymentIntent n'est pas déjà payé, et qu'il a bien un client_secret
            //(dans le cas d'un pi déjà payé amount_received vaut null et client_secret aussi)
            //sinon on laisse s'exécuter la création d'un nouveau paymentIntent
            if($paymentIntent && $paymentIntent->amount_received === 0 && $paymentIntent->client_secret)
            {
                return $paymentIntent;
            }
        }
        //sinon on le crée et on le stocke en session
        $paymentIntent = $this->checkoutPaymentIntentCreator->create($amount, $country, $email, $fullName);
        $this->piSession->set($paymentIntent->id);

        return $paymentIntent;
    }
}