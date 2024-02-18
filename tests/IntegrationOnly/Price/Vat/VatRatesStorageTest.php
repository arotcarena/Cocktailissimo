<?php
namespace App\Tests\IntegrationOnly\Price\Vat;

use App\Config\VatLevels;
use App\Price\Vat\VatRatesStorage;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group price
 */
class VatRatesStorageTest extends KernelTestCase
{
    private VatRatesStorage $vatRatesStorage;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->vatRatesStorage = static::getContainer()->get(VatRatesStorage::class);

    }

    public function testGet()
    {
        $vatRates = $this->vatRatesStorage->get();

        $this->assertIsArray($vatRates);
        $this->assertIsArray($vatRates['FR']);
        $this->assertIsInt($vatRates['FR'][VatLevels::STANDARD]);
    }
}