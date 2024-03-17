<?php
namespace App\Tests\UnitAndIntegration\Price\Vat;

use App\Config\VatLevels;
use App\Price\Vat\VatCalculator;
use App\Price\Vat\VatRatesStorage;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group price
 */
class VatCalculatorTest extends TestCase
{
    private VatCalculator $vatCalculator;

    public function setUp(): void
    {
        $this->vatCalculator = new VatCalculator;
    }

    public function testCalcVatAmountFromHT()
    {
        $this->assertEquals(
            2000,
            $this->vatCalculator->calcVatAmountFromHT(10000, 200)
        );
        $this->assertEquals(
            550,
            $this->vatCalculator->calcVatAmountFromHT(10000, 55)
        );
    }

    public function testCalcPriceHTFromTTC()
    {
        $this->assertEquals(
            10000,
            $this->vatCalculator->calcPriceHTFromTTC(12000, 200)
        );
        $this->assertEquals(
            10000,
            $this->vatCalculator->calcPriceHTFromTTC(10550, 55)
        );
    }
}