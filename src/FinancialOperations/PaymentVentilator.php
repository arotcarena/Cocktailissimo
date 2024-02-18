<?php
namespace App\FinancialOperations;

use App\Config\SiteConfig;
use App\Entity\Purchase;
use App\Service\Stripe\StripeService;

class PaymentVentilator
{
    public function __construct(
        private StripeService $stripeService
    )
    {
        
    }

    /**
     * @param StripeService $stripeService
     * @param Purchase $purchase
     */
    public function ventilate(Purchase $purchase): void
    {
        $transferGroup = $purchase->getRef();

        foreach($purchase->getPurchaseVendorGroups() as $purchaseVendorGroup)
        {
            $vendorDetail = $purchaseVendorGroup->getVendorDetail();

            $accountId = $vendorDetail->getStripeConnectId();

            //si le vendeur est cocktailissimo vendorRestAmount n'a pas été configuré donc = null donc aucun transfert
            if($amount = $purchaseVendorGroup->getVendorRestAmount())
            {
                $this->stripeService->createTransfer($amount, $accountId, $transferGroup);
            }
        }   
    }
}