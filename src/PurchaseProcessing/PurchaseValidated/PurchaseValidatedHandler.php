<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use Stripe\PaymentIntent;

class PurchaseValidatedHandler
{
    public function __construct(
        private PurchaseValidatedProcess $purchaseValidatedProcess,
        private PurchaseValidatedVerificator $purchaseValidatedVerificator
    )
    {
        
    }

    public function handle(PaymentIntent $paymentIntent)
    {
        //on vérifie que le paiement effectué et la purchase associée sont conformes
        if($purchase = $this->purchaseValidatedVerificator->verify($paymentIntent))
        {
            //on accepte définitivement la purchase et on fait tous les traitements
            $this->purchaseValidatedProcess->process($purchase);
        }
    }
}