<?php
namespace App\Tests\IntegrationOnly\Utils\Convertor;

use App\Entity\CustomPrice;
use stdClass;

class CustomPriceToStdConvertor
{
    public static function convert(?CustomPrice $price): stdClass
    {
        if(!$price)
        {
            return null;
        }

        return (object)[
            'priceHT' => $price->getPriceHT(),
            'priceTTC' => $price->getPriceTTC(),
            'payType' => $price->getPaytype(),
            'showType' => $price->getShowType(),
            'vatRate' => $price->getVatRate(),
            'vatAmount' => $price->getVatAmount(),
            'priceToPay' => $price->getPriceToPay()
        ];
    }
}