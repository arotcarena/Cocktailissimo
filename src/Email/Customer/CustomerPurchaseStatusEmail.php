<?php
namespace App\Email\Customer;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\PurchaseVendorGroup;
use Symfony\Component\Mime\Email;

class CustomerPurchaseStatusEmail extends EmailFactory
{
    public function send(PurchaseVendorGroup $purchaseVendorGroup): void
    {
        switch($purchaseVendorGroup->getShippingInfo()->getStatus()) 
        {
            case SiteConfig::SHIPPING_STATUS_SENT:
                $this->sendEmail($this->createSentStatusEmail($purchaseVendorGroup));
                break;
            case SiteConfig::SHIPPING_STATUS_DELIVERED:
                $this->sendEmail($this->createDeliveredStatusEmail($purchaseVendorGroup));
                break;
            default:
                return;
        }
    }

    public function createSentStatusEmail(PurchaseVendorGroup $purchaseVendorGroup): Email 
    {
        $purchase = $purchaseVendorGroup->getPurchase();

        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getCustomerDetail()->getEmail())
            ->subject($this->translator->trans('purchase.status.sent.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase.status.sent.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/sent_status.html.twig', [
                'purchaseVendorGroup' => $purchaseVendorGroup
            ]));
    }

    public function createDeliveredStatusEmail(PurchaseVendorGroup $purchaseVendorGroup): Email
    {
        $purchase = $purchaseVendorGroup->getPurchase();

        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getCustomerDetail()->getEmail())
            ->subject($this->translator->trans('purchase.status.delivered.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase.status.delivered.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/delivered_status.html.twig', [
                'purchaseVendorGroup' => $purchaseVendorGroup
            ]));
    }
}