<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Utils\Factory;

use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\PostalDetail;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;

class PurchasePendingFactory
{
    public static function create(): Purchase
    {
        $purchase = new Purchase;
        $purchase->generateRef();

        $purchase
                ->setCustomerDetail(
                    (new CustomerDetail)
                    ->setEmail('purchase_email@gmail.com')
                    ->setCivility(SiteConfig::CIVILITY_F)
                    ->setFirstName('Julie')
                    ->setLastName('Jojoba')
                    ->setPhone('+33601020304')
                )
                ->setDeliveryDetail(new PostalDetail)
                ->setInvoiceDetail(new PostalDetail)
                ->setLang('fr')
                ->setArticlesPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(5000)
                )
                ->setShippingCost(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(500)
                )
                ->setTotalPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(5500)
                )
                ->setCountArticles(2)
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->addPurchaseLine(new PurchaseLine)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->addPurchaseLine(new PurchaseLine)
                )
                ;
        return $purchase;
    }
}