<?php
namespace App\Verificator;

use App\Entity\Product;
use App\Helper\VendorGroupLinesExtractor;
use App\Repository\PurchaseRepository;

class UserBoughtProductVerificator
{
    public function __construct(
        private PurchaseRepository $purchaseRepository,
        private VendorGroupLinesExtractor $vendorGroupLinesExtractor
    )
    {

    }

    public function verify(string $email, Product $product): bool
    {
        //on récupère toutes les publicRefs du produit pour pouvoir les comparer aux publicRefs des purchases
        $publicRefs = [];
        foreach($product->getPackagingChoices() as $packaging)
        {
            $publicRefs[] = $packaging->getPublicRef();
        }

        //on récupère toutes les purchases avec cet email, et on compare les publicRefs
        $purchases = $this->purchaseRepository->findByCustomerEmail($email);

        foreach($purchases as $purchase)
        {
            $purchaseLines = $this->vendorGroupLinesExtractor->extractPurchaseLines($purchase);
            foreach($purchaseLines as $purchaseLine)
            {
                if(in_array($purchaseLine->getPublicRef(), $publicRefs))
                {
                    return true;
                }   
            }
        }
        return false;
    }
}