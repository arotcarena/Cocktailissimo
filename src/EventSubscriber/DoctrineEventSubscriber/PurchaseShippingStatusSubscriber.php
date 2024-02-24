<?php
namespace App\EventSubscriber\DoctrineEventSubscriber;

use App\Config\SiteConfig;
use App\Email\Customer\CustomerPurchaseStatusEmail;
use App\Entity\ShippingInfo;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Events;

class PurchaseShippingStatusSubscriber implements EventSubscriber
{
    public function __construct(
        private CustomerPurchaseStatusEmail $customerPurchaseStatusEmail
    )
    {
        
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postUpdate
        ];
    }

    public function postUpdate(PostUpdateEventArgs $args)
    {
        $entity = $args->getObject();

        if($entity instanceof ShippingInfo)
        {
            $this->customerPurchaseStatusEmail->send($entity->getPurchaseVendorGroup());

            if($entity->getStatus() === SiteConfig::SHIPPING_STATUS_DELIVERED)
            {
                $entity->getPurchaseVendorGroup()->getPurchase()->setStatus(SiteConfig::STATUS_TERMINATED);
            }
        }
    }
}