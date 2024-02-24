<?php
namespace App\Email\Customer;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Purchase;
use App\Invoice\InvoiceManagement\InvoiceManager;
use App\Invoice\InvoiceTypes;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class CustomerPurchaseConfirmationEmail extends EmailFactory
{
    public function __construct(
        Environment $twig, 
        UrlGeneratorInterface $urlGenerator,
        TranslatorInterface $translator,
        private InvoiceManager $invoiceManager,
        private PriceFormaterExtensionRuntime $priceFormater
    )
    {
        parent::__construct($twig, $urlGenerator, $translator);
    }

    public function send(Purchase $purchase)
    {
        $lang = $purchase->getLang();

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getCustomerDetail()->getEmail())
            ->subject($this->translator->trans('purchase.confirmation.subject', [], 'emails', $lang))
            ->text($this->translator->trans('purchase.confirmation.text', [
                '{amount}' => $this->priceFormater->format(
                                $purchase->getTotalPrice()->getPriceToPay(),
                                $lang
                            ),
                '{ref}' => $purchase->getRef()
            ], 'emails', $lang))
            ->html($this->twig->render('email/customer/purchase_confirmation.html.twig', [
                'purchase' => $purchase
            ]));

        
        foreach($purchase->getPurchaseVendorGroups() as $purchaseVendorGroup)
        {
            if($salesInvoice = $this->invoiceManager->getPath($purchaseVendorGroup, InvoiceTypes::SALES, $lang))
            {
                $email->attachFromPath($salesInvoice);
            }
        }

        $this->sendEmail($email);
    }
}