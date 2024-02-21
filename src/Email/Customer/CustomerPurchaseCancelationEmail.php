<?php
namespace App\Email\Customer;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Purchase;
use Symfony\Component\Mime\Email;

class CustomerPurchaseCancelationEmail extends EmailFactory
{
    public function send(Purchase $purchase)
    {
        $lang = $purchase->getLang();

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getCustomerDetail()->getEmail())
            ->subject($this->translator->trans('purchase.cancelation.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase.cancelation.text', [
                '{ref}' => $purchase->getRef()
            ], 'emails', $lang))
            ->html($this->twig->render('email/customer/purchase_cancelation.html.twig', [
                'purchase' => $purchase
            ]));

        $this->sendEmail($email);
    }
}