<?php
namespace App\FinancialOperations;

use App\Entity\Purchase;
use App\Service\Stripe\StripeService;
use Exception;

class PaymentVentilator
{
    public function __construct(
        private StripeService $stripeService,
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
            //si le vendeur n'est pas cocktailissimo on lui envoie sa part
            if($amount = $purchaseVendorGroup->getVendorRestAmount())
            {
                try
                {
                    $this->stripeService->createTransfer($amount, $accountId, $transferGroup);
                }
                catch(Exception $e)
                {
                    throw new Exception(
                        'Une erreur est survenue lors d\'un virement stripe dans PaymentVentilator. Commande réf. ' 
                        . $purchase->getId() . ', vendeur : ' . $vendorDetail->getSocialName() . ' (stripeConnectId : ' . $accountId . '). Message erreur stripe : ' . $e->getMessage() 
                    );
                }
            }
        }   
    }
}