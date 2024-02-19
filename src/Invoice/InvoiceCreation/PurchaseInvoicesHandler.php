<?php
namespace App\Invoice\InvoiceCreation;

use App\Entity\Purchase;
use App\Invoice\InvoicePrefix;
use App\Invoice\InvoiceTypes;
use App\Invoice\LastInvoiceNumberFinder;
use Doctrine\ORM\EntityManagerInterface;

class PurchaseInvoicesHandler
{
    public function __construct(
        private LastInvoiceNumberFinder $lastInvoiceNumberFinder,
        private InvoiceCreator $invoiceCreator,
        private EntityManagerInterface $em
    )
    {
        
    }

    /**
     * @param Purchase $purchase
     */
    public function createInvoices(Purchase $purchase)
    {
        $invoiceNumber = $this->lastInvoiceNumberFinder->find();
        $lang = $purchase->getLang();

        foreach($purchase->getPurchaseVendorGroups() as $purchaseVendorGroup)
        {
            //sales invoice
            $invoiceNumber++;
            $purchaseVendorGroup->setSalesInvoiceNumber($invoiceNumber);
            $this->invoiceCreator->create('fr', InvoiceTypes::SALES, $purchaseVendorGroup, $invoiceNumber);
            
            if($lang !== 'fr')
            {
                $this->invoiceCreator->create($lang, InvoiceTypes::SALES, $purchaseVendorGroup, $invoiceNumber);
            }

            //commission invoice
            if($purchaseVendorGroup->getCommissionPrice())
            {
                $invoiceNumber++;
                $purchaseVendorGroup->setCommissionInvoiceNumber($invoiceNumber);
                $this->invoiceCreator->create('fr', InvoiceTypes::COMMISSION, $purchaseVendorGroup, $invoiceNumber);

                if($lang !== 'fr')
                {
                    $this->invoiceCreator->create($lang, InvoiceTypes::COMMISSION, $purchaseVendorGroup, $invoiceNumber);
                }
            }
        }

        $this->em->flush();
    }
}