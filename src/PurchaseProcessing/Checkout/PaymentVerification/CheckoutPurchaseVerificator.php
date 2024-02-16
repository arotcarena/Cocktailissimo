<?php
namespace App\PurchaseProcessing\Checkout\PaymentVerification;

use App\Config\SiteConfig;
use App\Entity\Purchase;

class CheckoutPurchaseVerificator
{
    /**
     * @param Purchase|null $purchase
     * @return string|null $errorMessage
     */
    public function verify(?Purchase $purchase): ?string 
    {
        if(!$purchase)
        {
            return 'error';
        }
        //on vérifie si la purchase est déjà payée
        if($purchase->getStatus() !== SiteConfig::STATUS_PENDING)
        {
            return 'error.purchase_payment.already_paid';
        }
        return null;
    }
}