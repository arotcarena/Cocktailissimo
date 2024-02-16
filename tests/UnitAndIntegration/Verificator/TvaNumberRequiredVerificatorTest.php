<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Form\DataModel\UserRegistration;
use App\Verificator\VatNumberRequiredVerificator;
use PHPUnit\Framework\TestCase;

class VatNumberRequiredVerificatorTest extends TestCase
{
    public function testWithIsoOutEU()
    {
        $userRegistration = (new UserRegistration)
                                ->setCountry('US')
                                ;
        $this->assertTrue(
            (new VatNumberRequiredVerificator)->verifyRegistration($userRegistration)
        );
    }

    public function testWithIsoInEUAndNullOrBlankVatNumber()
    {
        $userRegistration = (new UserRegistration)
                                ->setCountry('FR')
                                ;
        $this->assertFalse(
            (new VatNumberRequiredVerificator)->verifyRegistration($userRegistration)
        );

        $userRegistration = (new UserRegistration)
                                ->setCountry('FR')
                                ->setVatNumber('')
                                ;
        $this->assertFalse(
            (new VatNumberRequiredVerificator)->verifyRegistration($userRegistration)
        );
    }

    public function testWithIsoInEUAndVatNumber()
    {
        $userRegistration = (new UserRegistration)
                                ->setCountry('FR')
                                ->setVatNumber('123456789')
                                ;
        $this->assertTrue(
            (new VatNumberRequiredVerificator)->verifyRegistration($userRegistration)
        );
    }
}