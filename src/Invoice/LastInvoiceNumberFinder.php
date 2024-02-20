<?php
namespace App\Invoice;

use App\Repository\PurchaseVendorGroupRepository;

class LastInvoiceNumberFinder
{
    public function __construct(
        private PurchaseVendorGroupRepository $purchaseVendorGroupRepository
    )
    {
        
    }

    /**
     * Cette fonction renvoie le tout dernier numéro de facture, ou 0 si aucune facture
     *
     * @return int
     */
    public function find(): int
    {
        //on récupére le dernier purchaseVendorGroup
        $lastVendorGroup = $this->purchaseVendorGroupRepository->findLast();
        if(!$lastVendorGroup)
        {
            return 0;
        }

        //on prend le plus grand des deux numéros
        $invoiceNumber = 0;
        foreach([
            $lastVendorGroup->getCommissionInvoiceNumber(),
            $lastVendorGroup->getSalesInvoiceNumber()
        ] as $n)
        {
            if($n && $n > $invoiceNumber)
            {
                $invoiceNumber = $n;
            }
        }
        return $invoiceNumber;
    }
}