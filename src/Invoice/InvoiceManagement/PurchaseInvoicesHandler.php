<?php
namespace App\Invoice\InvoiceManagement;

use App\Config\SiteConfig;
use App\Entity\Purchase;
use App\Invoice\InvoiceTypes;
use App\Invoice\LastInvoiceNumberFinder;
use Doctrine\ORM\EntityManagerInterface;

class PurchaseInvoicesHandler
{
    public function __construct(
        private LastInvoiceNumberFinder $lastInvoiceNumberFinder,
        private InvoiceManager $invoiceManager,
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

            //la facture de vente est en 2 langues : langue du client et français (cocktailissimo)
            $this->invoiceManager->create(SiteConfig::ADMIN_LANG, InvoiceTypes::SALES, $purchaseVendorGroup);
            
            if($lang !== SiteConfig::ADMIN_LANG)
            {
                $this->invoiceManager->create($lang, InvoiceTypes::SALES, $purchaseVendorGroup);
            }

            //commission invoice
            if($purchaseVendorGroup->getCommissionPrice())
            {
                $invoiceNumber++;
                $purchaseVendorGroup->setCommissionInvoiceNumber($invoiceNumber);
                //la facture de commission est uniquement en français (le client est cocktailissimo)
                $this->invoiceManager->create(SiteConfig::ADMIN_LANG, InvoiceTypes::COMMISSION, $purchaseVendorGroup);
            }
        }

        $this->em->flush();
    }
}