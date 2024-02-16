<?php
namespace App\PurchaseProcessing\Checkout\PaymentIntent;

use App\Entity\Purchase;
use App\Service\Stripe\Customer\CustomerResolver;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\PaymentIntent;

class CheckoutPiCreator
{
    public function __construct(
        private StripeService $stripeService,
        private CustomerResolver $customerResolver,
        private EntityManagerInterface $em
    )
    {
        
    }

    public function create(int $amount, string $country, string $email, string $fullName): PaymentIntent
    {
        //on crée une purchase vide pour pouvoir passer l'id au paymentIntent
        //la ref est automatiquement générée dans Purchase
        $purchase = new Purchase;
        $this->em->persist($purchase);
        $this->em->flush();

        //on crée ou on récupère le customerId déjà existant (si nécessaire il est persisté dans user)
        $customerId = $this->customerResolver->resolve($country, $email, $fullName);

        //on crée paymentIntent
        $paymentIntent = $this->stripeService->createPaymentIntent(
            $amount,
            ['purchaseId' => $purchase->getId()],     // ce purchaseId sera ensuite passé par stripe à mon webhook qui écoute l'event payment_intent_succeeded
            $customerId,
            $purchase->getRef() //transfer_group : pour lier ce paiement avec le(s) virement(s) qui seront faits au(x) vendeur(s)
        );

        return $paymentIntent;
    }
}