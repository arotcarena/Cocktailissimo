<?php
namespace App\EventSubscriber\DoctrineEventSubscriber;

use App\Entity\Product;
use App\Entity\Review;
use App\Service\ReviewCalculator\ProductReviewCalculator;
use App\Service\ReviewCalculator\VendorReviewCalculator;
use Doctrine\ORM\Events;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Event\PreRemoveEventArgs;

class ReviewSubscriber implements EventSubscriber
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProductReviewCalculator $productReviewCalculator,
        private VendorReviewCalculator $vendorReviewCalculator
    )
    {
        
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postRemove,
            Events::preRemove,
            Events::postUpdate
        ];
    }

    public function preRemove(PreRemoveEventArgs $args): void
    {
        $entity = $args->getObject();

        if($entity instanceof Product)
        {
            $product = $entity;
            //on marque product avec isRemoving pour que ses reviews sachent qu'il s'agit d'un cascade remove
            $product->setRemoving(true);
        }
    }

    public function postRemove(PostRemoveEventArgs $args): void
    {
        $entity = $args->getObject();

        //s'il s'agit de la suppression d'un produit on met seulement à jour la note du vendeur
        if($entity instanceof Product)
        {
            $this->vendorReviewCalculator->calculate($entity->getVendor());

            $this->em->flush();
        }
        //s'il s'agit de la suppression d'une review seule on met à jour la note du produit et celle du vendeur
        elseif($entity instanceof Review && !$entity->getProduct()->isRemoving()) 
        {
            $this->updateProductAndVendorNote($entity);
        }
    }

    public function postUpdate(PostUpdateEventArgs $args): void
    {
        $entity = $args->getObject();

        if($entity instanceof Review)
        {
            $this->updateProductAndVendorNote($entity);
        }
    }

    private function updateProductAndVendorNote(Review $review)
    {
        $product = $review->getProduct();
        $vendor = $product->getVendor();

        $this->productReviewCalculator->calculate($product);
        $this->vendorReviewCalculator->calculate($vendor);

        $this->em->flush();
    }

}

