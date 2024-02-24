<?php
namespace App\Email\Admin\Exceptions;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\PurchaseVendorGroup;
use Symfony\Component\Mime\Email;

class AdminInvoiceGenerationExceptionEmail extends EmailFactory
{
    public function send(PurchaseVendorGroup $purchaseVendorGroup, string $lang, string $type, $errorMessage)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY)
                ->to(SiteConfig::EMAIL_ADMIN)
                ->subject('Erreur lors de la génération d\'une facture')
                ->text('Une erreur a eu lieu au moment de la génération de la facture du purchaseVendorGroup #' .$purchaseVendorGroup->getId())
                ->html($this->twig->render('admin/email/exceptions/invoice_generation_exception.html.twig', [
                    'purchaseVendorGroup' => $purchaseVendorGroup,
                    'lang' => $lang,
                    'type' => $type,
                    'errorMessage' => $errorMessage
                ]));

        $this->sendEmail($email);
    }
}

