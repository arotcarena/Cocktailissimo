<?php
namespace App\Price;

use App\Entity\CustomPrice;

class PriceOperator
{
    public function multiply(CustomPrice $price, int $multiplier): CustomPrice
    {
        $totalPrice = new CustomPrice;
        $totalPrice->setPayType($price->getPayType())
                    ->setShowType($price->getShowType())
                    ->setVatRate($price->getVatRate())
                    ;

        if($price->getPriceHT() !== null)
        {
            $totalPrice->setPriceHT(
                $price->getPriceHT() * $multiplier
            );
        }
        if($price->getPriceTTC() !== null)
        {
            $totalPrice->setPriceTTC(
                $price->getPriceTTC() * $multiplier
            );
        }
        if($price->getVatAmount() !== null)
        {
            $totalPrice->setVatAmount(
                $price->getVatAmount() * $multiplier
            );
        }

        return $totalPrice;
    }


    /**
     * @param CustomPrice[] $prices
     * @return ?CustomPrice $totalPrice
     */
    public function add($prices): CustomPrice
    {
        if(count($prices) < 1)
        {
            return new CustomPrice;
        }

        $totalPrice = new CustomPrice;

        $totalPrice->setPayType($prices[0]->getPayType())
                    ->setShowType($prices[0]->getShowType())
                    //on ne met pas vatRate car chaque prix qu'on additionne peut avoir un vatRate différent
                    ;

        $totalPriceTTC = 0;
        $totalPriceHT = 0;
        $totalVatAmount = 0;

        foreach($prices as $price)
        {
            //important de vérifier égalité par rapport à null car la valeur peut être 0
            if($price->getPriceTTC() !== null)
            {
                $totalPriceTTC += $price->getPriceTTC();
            }
            if($price->getPriceHT() !== null)
            {
                $totalPriceHT += $price->getPriceHT();
            }
            if($price->getVatAmount() !== null)
            {
                $totalVatAmount += $price->getVatAmount();
            }
        }

        if($totalPriceHT > 0)
        {
            $totalPrice->setPriceHT($totalPriceHT);
        }
        if($totalPriceTTC > 0)
        {
            $totalPrice->setPriceTTC($totalPriceTTC);
        }
        if($totalVatAmount > 0)
        {
            $totalPrice->setVatAmount($totalVatAmount);
        }

        return $totalPrice;
    }

    
}