<?php
namespace App\Helper;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use stdClass;

class VendorGroupLinesExtractor
{
    /**
     * @return CartLine[]
     */
    public function extractCartLines(Cart $cart)
    {
        $cartLines = [];

        foreach($cart->getCartVendorGroups() as $vendorGroup)
        {
            $cartLines = array_merge(
                $cartLines,
                $vendorGroup->getCartLines()->toArray()
            );
        }
        return $cartLines;
    }

    /**
     * @return PurchaseLine[]
     */
    public function extractPurchaseLines(Purchase $purchase)
    {
        $purchaseLines = [];

        foreach($purchase->getPurchaseVendorGroups() as $vendorGroup)
        {
            $purchaseLines = array_merge(
                $purchaseLines,
                $vendorGroup->getPurchaseLines()->toArray()
            );
        }
        return $purchaseLines;
    }

    /**
     * @param stdClass[] $stdVendorGroups
     * @return stdClass[] $stdCartLines
     */
    public function extractStdVendorGroupsCartLines($stdVendorGroups)
    {
        $stdCartLines = [];

        foreach($stdVendorGroups as $stdVendorGroup)
        {
            $stdCartLines = array_merge(
                $stdCartLines,
                $stdVendorGroup->cartLines
            );
        }
        return $stdCartLines;
    }
}