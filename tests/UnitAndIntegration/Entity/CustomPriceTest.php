<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\CustomPrice;
use PHPUnit\Framework\TestCase;

/**
 * @group Entity
 */
class CustomPriceTest extends TestCase
{
    public function testGetPriceToPay()
    {
        $price = $this->createCustomPrice();
        $this->assertEquals(100, $price->getPriceToPay());

        $price->setPayType(CustomPrice::PAY_PRICE_TTC);
        $this->assertEquals(200, $price->getPriceToPay());
    }

    private function createCustomPrice(): CustomPrice
    {
        return (new CustomPrice)
                ->setPriceHT(100)
                ->setPriceTTC(200)
                ->setPayType(CustomPrice::PAY_PRICE_HT)
                ;
    }
}