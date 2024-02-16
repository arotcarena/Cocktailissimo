<?php
namespace App\Convertor;

use App\Entity\CustomPrice;

class CustomPriceToArrayConvertor
{
    public function convert(CustomPrice $price): array
    {
        return [
            'priceHT' => $price->getPriceHT(),
            'priceTTC' => $price->getPriceTTC(),
            'payType' => $price->getPayType(),
            'showType' => $price->getShowType(),
            'vatRate' => $price->getVatRate(),
            'vatAmount' => $price->getVatAmount(),
            'priceToPay' => $price->getPriceToPay()
        ];
    }
}