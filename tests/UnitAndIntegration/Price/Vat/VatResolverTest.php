<?php
namespace App\Tests\UnitAndIntegration\Price\Vat;

use App\Config\VatLevels;
use App\Price\Vat\VatRatesStorage;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group price
 */
class VatResolverTest extends TestCase
{
    private VatResolver $vatResolver;

    private VatRatesStorage|MockObject $vatRatesStorage;


    public function setUp(): void 
    {
        $this->vatRatesStorage = $this->createMock(VatRatesStorage::class);

        $this->vatResolver = new VatResolver($this->vatRatesStorage);
    }

    public function testWithExistantCountryVatLevel()
    {
        $this->vatRatesStorage->expects($this->once())
                            ->method('get')
                            ->willReturn([
                                'FR' => [
                                    VatLevels::SUPER_REDUCE => 10
                                ]
                            ]);

        $this->assertEquals(100, $this->vatResolver->getRate('FR', VatLevels::SUPER_REDUCE)); //le taux retourné est en %pour mille
    }

    public function testWithInExistantCountryVatLevelButExistantCountryStandardVatLevel()
    {
        $this->vatRatesStorage->expects($this->once())
                            ->method('get')
                            ->willReturn([
                                'FR' => [
                                    VatLevels::STANDARD => 20,
                                    VatLevels::SUPER_REDUCE => null
                                ]
                            ]);

        $this->assertEquals(200, $this->vatResolver->getRate('FR', VatLevels::SUPER_REDUCE)); //le taux retourné est en %pour mille
    } 

    public function testWithInExistantCountryVatLevelAndInexistantCountryStandardVatLevel()
    {
        $this->vatRatesStorage->expects($this->once())
                            ->method('get')
                            ->willReturn([
                                'FR' => [
                                    VatLevels::STANDARD => null,
                                    VatLevels::SUPER_REDUCE => null
                                ]
                            ]);

        $this->assertEquals(VatResolver::DEFAULT_VAT_RATE * 10, $this->vatResolver->getRate('FR', VatLevels::SUPER_REDUCE)); //le taux retourné est en %pour mille
    } 
}