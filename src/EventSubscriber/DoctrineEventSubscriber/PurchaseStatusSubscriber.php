<?php
namespace App\EventSubscriber\DoctrineEventSubscriber;

use App\Email\Customer\CustomerPurchaseStatusEmail;
use App\Entity\ShippingInfo;
use Doctrine\ORM\Events;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PostUpdateEventArgs;

class PurchaseStatusSubscriber implements EventSubscriber
{
    public function __construct(
        private CustomerPurchaseStatusEmail $customerPurchaseStatusEmail,
    )
    {

    }


    public function getSubscribedEvents()
    {
        return [
            Events::postUpdate
        ];
    }

    /**
     * Envoi le mail de mise à jour du statut de livraison
     */
    public function postUpdate(PostUpdateEventArgs $args): void
    {
        $entity = $args->getObject();
        
        if ($entity instanceof ShippingInfo) {
            $this->customerPurchaseStatusEmail->send($entity->getPurchaseVendorGroup());
        }
    }
}

