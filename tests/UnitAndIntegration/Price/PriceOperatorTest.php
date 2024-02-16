<?php
namespace App\Tests\UnitAndIntegration\Price;

use App\Entity\CustomPrice;
use App\Price\PriceOperator;
use PHPUnit\Framework\TestCase;

/**
 * @group price
 */
class PriceOperatorTest extends TestCase
{
    public function testMultiply()
    {
        $price = (new CustomPrice)
                ->setPriceHT(100)
                ->setPriceTTC(120)   
                ->setVatRate(200)
                ->setVatAmount(20)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setShowType(CustomPrice::SHOW_PRICE_TTC)
                ;

        $result = (new PriceOperator)->multiply($price, 3);

        $this->assertEquals(300, $result->getPriceHT());
        $this->assertEquals(360, $result->getPriceTTC());
        $this->assertEquals(200, $result->getVatRate());
        $this->assertEquals(60, $result->getVatAmount());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $result->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $result->getShowType());
    }

    public function testAdd()
    {
        $priceA = (new CustomPrice)
                ->setPriceHT(100)
                ->setPriceTTC(120)   
                ->setVatRate(200)
                ->setVatAmount(20)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setShowType(CustomPrice::SHOW_PRICE_TTC)
                ;
        
        $priceB = (new CustomPrice)
                ->setPriceHT(200)
                ->setPriceTTC(220)   
                ->setVatRate(100)
                ->setVatAmount(20)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setShowType(CustomPrice::SHOW_PRICE_TTC)
                ;

        $result = (new PriceOperator)->add([$priceA, $priceB]);

        $this->assertEquals(300, $result->getPriceHT());
        $this->assertEquals(340, $result->getPriceTTC());
        $this->assertNull($result->getVatRate());
        $this->assertEquals(40, $result->getVatAmount());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $result->getPayType());
        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $result->getShowType());
    }

    public function testAddWithEmptyArray()
    {
        $result = (new PriceOperator)->add([]);

        $this->assertNull($result->getPriceHT());
        $this->assertNull($result->getPriceTTC());
        $this->assertNull($result->getPayType());
        $this->assertNull($result->getShowType());
    }
}