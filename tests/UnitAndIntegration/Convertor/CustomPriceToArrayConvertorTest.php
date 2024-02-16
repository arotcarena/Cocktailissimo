<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Convertor\CustomPriceToArrayConvertor;
use App\Entity\CustomPrice;
use PHPUnit\Framework\TestCase;

/**
 * @group Convertor
 */
class CustomPriceToArrayConvertorTest extends TestCase
{
    public function testContainsCorrectKeysWhenConvertOne()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());
        $this->assertEquals(
            ['priceHT', 'priceTTC', 'payType', 'showType', 'vatRate', 'vatAmount', 'priceToPay'],
            array_keys($returnPrice)
        );
    }

    public function testReturnCorrectPriceHT()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(100, $returnPrice['priceHT']);
    }
    public function testReturnCorrectPriceTTC()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(120, $returnPrice['priceTTC']);
    }
    public function testReturnCorrectUse()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $returnPrice['payType']);
    }
    public function testReturnCorrectShow()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(CustomPrice::SHOW_PRICE_TTC, $returnPrice['showType']);
    }
    public function testReturnCorrectVatRate()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(200, $returnPrice['vatRate']);
    }
    public function testReturnCorrectVatAmount()
    {
        $returnPrice = (new CustomPriceToArrayConvertor)->convert($this->createCustomPrice());

        $this->assertEquals(20, $returnPrice['vatAmount']);
    }

    private function createCustomPrice(): CustomPrice
    {
        return (new CustomPrice)
                ->setPriceHT(100)
                ->setPriceTTC(120)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setShowType(CustomPrice::SHOW_PRICE_TTC)
                ->setVatRate(200)
                ->setVatAmount(20)
                ;
    }

}
