<?php
namespace App\Email\Customer;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Purchase;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use Symfony\Component\Mime\Email;

class CustomerPurchaseConfirmationEmail extends EmailFactory
{

    public function send(Purchase $purchase)
    {
        // $priceFormater = new PriceFormaterExtensionRuntime;


        // $email = (new Email())
        //     ->from(SiteConfig::EMAIL_NOREPLY)
        //     ->to($purchase->getEmail())
        //     //->cc('cc@example.com')
        //     //->bcc('bcc@example.com')
        //     //->replyTo('fabien@example.com')
        //     //->priority(Email::PRIORITY_HIGH)
        //     ->subject($this->translator->trans('purchase_confirmation.subject', [], 'emails', $purchase->getLang()))
        //     ->text($this->translator->trans('purchase_confirmation.text', [
        //         'amount' => $priceFormater->format(
        //                         $purchase->getTotalPrice() + $purchase->getShippingInfo()['price']
        //                     ),
        //         'ref' => $purchase->getRef()
        //     ], 'emails', $purchase->getLang()))
        //     ->html($this->twig->render('email/customer/purchase_confirmation.html.twig', [
        //         'purchase' => $purchase,
        //         'isAtHomeDelivery' => $isAtHomeDelivery
        //     ]));

        // $this->sendEmail($email);
    }
}