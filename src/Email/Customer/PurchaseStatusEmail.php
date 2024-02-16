<?php
namespace App\Email\Customer;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Purchase;
use Symfony\Component\Mime\Email;

class PurchaseStatusEmail extends EmailFactory
{
    public function send(Purchase $purchase, string $newStatus): void
    {
        switch($newStatus) 
        {
            case SiteConfig::STATUS_PAID:
                $this->sendEmail($this->createPaidStatusEmail($purchase));
                break;
            case SiteConfig::STATUS_SENT:
                $this->sendEmail($this->createSentStatusEmail($purchase));
                break;
            case SiteConfig::STATUS_DELIVERED:
                $this->sendEmail($this->createDeliveredStatusEmail($purchase));
                break;
            case SiteConfig::STATUS_CANCELED:
                $this->sendEmail($this->createCanceledStatusEmail($purchase));
                break;
            default:
                return;
            
        }
    }

    public function createPaidStatusEmail(Purchase $purchase): Email 
    {
        $isAtHomeDelivery = $purchase->getShippingInfo()['mode'] === SiteConfig::DELIVERY_MODE_HOME;

        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getUser()->getEmail())
            ->subject($this->translator->trans('purchase_status.paid.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase_status.paid.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/paid_status.html.twig', [
                'purchase' => $purchase,
                'isAtHomeDelivery' => $isAtHomeDelivery,
            ]));
    }

    public function createSentStatusEmail(Purchase $purchase): Email 
    {
        $isAtHomeDelivery = $purchase->getShippingInfo()['mode'] === SiteConfig::DELIVERY_MODE_HOME;
        
        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getUser()->getEmail())
            ->subject($this->translator->trans('purchase_status.sent.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase_status.sent.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/sent_status.html.twig', [
                'purchase' => $purchase,
                'isAtHomeDelivery' => $isAtHomeDelivery,
            ]));
    }

    public function createDeliveredStatusEmail(Purchase $purchase): Email
    {
        $isAtHomeDelivery = $purchase->getShippingInfo()['mode'] === SiteConfig::DELIVERY_MODE_HOME;
        
        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getUser()->getEmail())
            ->subject($this->translator->trans('purchase_status.delivered.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase_status.delivered.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/delivered_status.html.twig', [
                'purchase' => $purchase,
                'isAtHomeDelivery' => $isAtHomeDelivery,
            ]));
    }

    public function createCanceledStatusEmail(Purchase $purchase): Email
    {
        $isAtHomeDelivery = $purchase->getShippingInfo()['mode'] === SiteConfig::DELIVERY_MODE_HOME;
        
        return (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($purchase->getUser()->getEmail())
            ->subject($this->translator->trans('purchase_status.canceled.subject', [], 'emails', $purchase->getLang()))
            ->text($this->translator->trans('purchase_status.canceled.text', [
                'ref' => $purchase->getRef()
            ], 'emails', $purchase->getLang()))
            ->html($this->twig->render('email/customer/purchaseStatus/canceled_status.html.twig', [
                'purchase' => $purchase,
                'isAtHomeDelivery' => $isAtHomeDelivery,
            ]));

    }
}