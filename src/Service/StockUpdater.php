<?php
namespace App\Service;

use App\Entity\Packaging;
use App\Entity\Purchase;
use App\Helper\VendorGroupLinesExtractor;
use App\Repository\PackagingRepository;
use Doctrine\ORM\EntityManagerInterface;

class StockUpdater
{
    public function __construct(
        private EntityManagerInterface $em,
        private PackagingRepository $packagingRepository,
        private VendorGroupLinesExtractor $vendorGroupLinesExtractor
    )
    {

    }

    /**
     * Undocumented function
     *
     * @param Purchase $purchase
     * @return boolean (true if ok, false if not enough stock)
     */
    public function handlePurchase(Purchase $purchase): bool 
    {
        $packagings = $this->packagingRepository->findPackagingsByPurchase($purchase);

        /** @var Packaging[] */
        $packagingsByPublicRef = [];
        foreach($packagings as $packaging)
        {
            $packagingsByPublicRef[$packaging->getPublicRef()] = $packaging;
        }

        $purchaseLines = $this->vendorGroupLinesExtractor->extractPurchaseLines($purchase);
        foreach($purchaseLines as $purchaseLine)
        {
            //si le product a été supprimé
            if(!isset($packagingsByPublicRef[$purchaseLine->getPublicRef()]))
            {
                return false;
            }
            $packaging = $packagingsByPublicRef[$purchaseLine->getPublicRef()];
            //si le stock est insuffisant
            if($purchaseLine->getQuantity() > $packaging->getStock())
            {
                return false;
            }

            //si tout est bon, on update le stock
            $packaging->setStock($packaging->getStock() - $purchaseLine->getQuantity());
            if($packaging->getStock() < 0) // ça ne peut pas arriver mais juste au cas où
            {
                $packaging->setStock(0);
            }
        }
        $this->em->flush();
        return true;
    }

}