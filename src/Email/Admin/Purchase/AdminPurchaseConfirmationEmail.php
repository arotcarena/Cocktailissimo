<?php
namespace App\Email\Admin\Purchase;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Purchase;
use App\Invoice\InvoiceDownloader;
use App\Invoice\InvoiceManagement\InvoiceManager;
use App\Invoice\InvoiceTypes;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class AdminPurchaseConfirmationEmail extends EmailFactory
{
    public function __construct(
        Environment $twig, 
        UrlGeneratorInterface $urlGenerator,
        TranslatorInterface $translator,
        private InvoiceManager $invoiceManager
    )
    {
        parent::__construct($twig, $urlGenerator, $translator);
    }

    public function send(Purchase $purchase)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY)
                ->to(SiteConfig::EMAIL_ADMIN)
                ->subject('Une commande a été passée')
                ->text('Une commande a été passée')
                ->html($this->twig->render('admin/email/purchase/purchase_confirmation.html.twig', [
                    'purchase' => $purchase,
                ]));

        foreach($purchase->getPurchaseVendorGroups() as $purchaseVendorGroup)
        {
            $salesInvoice = $this->invoiceManager->getPath('fr', InvoiceTypes::SALES, $purchaseVendorGroup->getSalesInvoiceNumber());
            $email->attachFromPath($salesInvoice);

            $commissionInvoice = $this->invoiceManager->getPath('fr', InvoiceTypes::COMMISSION, $purchaseVendorGroup->getCommissionInvoiceNumber());
            $email->attach($commissionInvoice);
        }

        $this->sendEmail($email);
    }
}