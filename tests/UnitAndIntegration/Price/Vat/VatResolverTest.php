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

    public function testWithInExistantCountryVatLevelAndInexistantCountryStandardVatLevelDefaultValueIsFRStandardVatLevel()
    {
        $this->vatRatesStorage->expects($this->once())
                            ->method('get')
                            ->willReturn([
                                'FR' => [
                                    VatLevels::STANDARD => 20
                                ],
                                'ES' => [
                                    VatLevels::STANDARD => null,
                                    VatLevels::SUPER_REDUCE => null
                                ]
                            ]);

        $this->assertEquals(20 * 10, $this->vatResolver->getRate('ES', VatLevels::SUPER_REDUCE), 'ce test échouera si le taux fr de tva standard n\'est plus 20');// 20 = taux fr standard //le taux retourné est en %pour mille
    } 
}