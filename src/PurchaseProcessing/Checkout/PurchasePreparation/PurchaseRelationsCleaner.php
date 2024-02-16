<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation;

use App\Entity\Purchase;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Cette classe sert à supprimer de la database toutes les relations enfant de la purchase (pour éviter d'accumuler des lignes inutiles (sans parent) en base de donnée)
 * Ceci permet ensuite d'ajouter de nouvelle relations directement sans se soucier de vérifier si des relations sont déjà existantes et devoir les modifier le cas échéant
 */
class PurchaseRelationsCleaner
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {
        
    }

    public function clean(Purchase $purchase): Purchase
    {
        $needsToFlush = false;
        //relation OneToMany
        foreach($purchase->getPurchaseVendorGroups() as $vendorGroup)
        {
            $this->em->remove($vendorGroup);
            $needsToFlush = true;
        }
        // relations OneToOne
        foreach([
            'customerDetail', 'deliveryDetail', 'invoiceDetail', 'articlesPrice', 'shippingCost', 'totalPrice'
        ] as $relationName)
        {
            $getRelation = 'get' . ucfirst($relationName);
            if($relation = $purchase->$getRelation())
            {
                $this->em->remove($relation);
                $needsToFlush = true;
            }
        }

        if($needsToFlush)
        {
            $this->em->flush();
        }

        return $purchase;
    }
}