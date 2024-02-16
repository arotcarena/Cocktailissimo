<?php
namespace App\Hydrator;

use App\Entity\Packaging;
use App\Entity\Purchase;
use App\Helper\VendorGroupLinesExtractor;
use App\Repository\PackagingRepository;

class PurchaseHydrator
{
    public function __construct(
        private PackagingRepository $packagingRepository,
        private VendorGroupLinesExtractor $vendorGroupLinesExtractor
    )
    {

    }

    public function hydratePurchaseWithPackagings(Purchase $purchase): void
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
            $purchaseLine->setPackaging(
                $packagingsByPublicRef[$purchaseLine->getPublicRef()]
            );
        }
    }
}