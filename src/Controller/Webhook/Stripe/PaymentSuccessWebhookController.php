<?php
namespace App\Controller\Webhook\Stripe;

use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedHandler;
use App\Service\Stripe\StripeService;
use Stripe\PaymentIntent;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class PaymentSuccessWebhookController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private PurchaseValidatedHandler $purchaseValidatedHandler
    )
    {
        
    }

    // #[Route('/debug-webhook')]
    // public function debugWebhook()
    // {
    //     dd(json_decode(file_get_contents('C:\Users\Vico\Cocktailissimo\public\test_webhook_stripe.json')));
    // }

    #[Route('/webhook/stripe/payment-success', name: 'webhook_stripe_paymentSuccess')]
    public function paymentSuccess(): Response
    {
        //si les données transmises par stripe ne sont pas correctes on retourne une réponse 400 pour que le webhook soit renvoyé
        /** @var PaymentIntent */
        $paymentIntent = $this->stripeService->extractWebhookSubject('payment_intent.succeeded');
        if((!$paymentIntent instanceof PaymentIntent) || !isset($paymentIntent->metadata->purchaseId))
        {
            return new Response('', Response::HTTP_BAD_REQUEST);
        }
        // file_put_contents('C:\Users\Vico\Cocktailissimo\public\test_webhook_stripe'.time().'.json', json_encode($paymentIntent));
        
        //ceci valide paymentIntent et la purchase associée
        //si c'est validé la purchase est acceptée et tous les traitements sont faits
        $this->purchaseValidatedHandler->handle($paymentIntent);

        //on retourne une réponse 200 dans tous les cas car on ne veut pas que le webhook soit renvoyé
        return new Response('');
    }
}

