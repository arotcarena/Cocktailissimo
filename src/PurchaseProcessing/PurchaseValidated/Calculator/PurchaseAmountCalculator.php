<?php
namespace App\PurchaseProcessing\PurchaseValidated\Calculator;

use App\Config\SiteConfig;
use App\Config\VatRates;
use App\Entity\CustomPrice;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Price\PriceOperator;

class PurchaseAmountCalculator
{
    public function __construct(
        private PriceOperator $priceOperator 
    )
    {
        
    }

    public function calculateVendorGroupsAmounts(Purchase $purchase)
    {
        foreach($purchase->getPurchaseVendorGroups() as $vendorGroup)
        {
            $this->calculateVendorGroupPrices($vendorGroup);
            $this->calculateVendorGroupSharing($vendorGroup);
        }
    }

    private function calculateVendorGroupSharing(PurchaseVendorGroup $vendorGroup)
    {
        $articlesPrice = $vendorGroup->getArticlesPrice();

        $vendorRestAmount = $vendorGroup->getArticlesPrice()->getPriceToPay();

        //si le vendeur n'en est pas exempté, on calcule la commission
        if(!$vendorGroup->getVendor()->isCommissionFree())
        {
            $commissionHT = $articlesPrice->getPriceHT() * SiteConfig::COCKTAILISSIMO_COMMISSION;
            //on prend la tva systématiquement car en France les pros paient toujours la tva
            $vatRate = VatRates::FR_STANDARD;
            $commissionVat = $commissionHT * $vatRate / 1000;
            $commissionTTC = $commissionHT + $commissionVat;
            
            $vendorGroup->setCommissionPrice(
                (new CustomPrice)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setPriceHT($commissionHT)
                ->setVatRate($vatRate)
                ->setVatAmount($commissionVat)
                ->setPriceTTC($commissionTTC)
            );
              
            //on retire la commission du restAmount du vendeur
            $vendorRestAmount -= $commissionTTC;
        }

        $vendorGroup->setVendorRestAmount($vendorRestAmount);
    }

    private function calculateVendorGroupPrices(PurchaseVendorGroup $vendorGroup)
    {
        $linesTotalPrices = [];
        foreach($vendorGroup->getPurchaseLines() as $purchaseLine)
        {
            $linesTotalPrices[] = $purchaseLine->getTotalPrice();
        }
        $articlesPrice = $this->priceOperator->add($linesTotalPrices);
        $totalPrice = $this->priceOperator->add([
            $articlesPrice, 
            $vendorGroup->getShippingInfo()->getPrice()
        ]);

        $vendorGroup->setArticlesPrice($articlesPrice)
                            ->setTotalPrice($totalPrice);
    }
}