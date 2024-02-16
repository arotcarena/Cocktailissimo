<?php
namespace App\Tests\UnitAndIntegration\Twig\Runtime;

use PHPUnit\Framework\TestCase;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;

/**
 * @group Twig
 */
class PriceFormaterExtensionRuntimeTest extends TestCase
{
    public function testCorrectlyFormatEuropeanStyle()
    {
        $priceFormater = new PriceFormaterExtensionRuntime();
        $this->assertEquals(
            $priceFormater->format(20000, 'fr'),
            '200,00 €'
        );
        $this->assertEquals(
            $priceFormater->format(200000, 'es'),
            '2 000,00 €'
        );
    }

    public function testCorrectlyFormatEnglishStyle()
    {
        $priceFormater = new PriceFormaterExtensionRuntime();
        $this->assertEquals(
            $priceFormater->format(20000, 'en'),
            '€200.00'
        );
        $this->assertEquals(
            $priceFormater->format(200000, 'en'),
            '€2,000.00'
        );
    }
    
    public function testDefaultFormatEnglishStyle()
    {
        $priceFormater = new PriceFormaterExtensionRuntime();
        $this->assertEquals(
            $priceFormater->format(20000),
            '€200.00'
        );
        $this->assertEquals(
            $priceFormater->format(200000),
            '€2,000.00'
        );
    }
}