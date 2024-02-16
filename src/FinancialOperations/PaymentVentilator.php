<?php
namespace App\FinancialOperations;

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
            $accountId = $purchaseVendorGroup->getVendorDetail()->getStripeConnectId();

            if($amount = $purchaseVendorGroup->getVendorRestAmount())
            {
                $this->stripeService->createTransfer($amount, $accountId, $transferGroup);
            }
        }   
    }
}