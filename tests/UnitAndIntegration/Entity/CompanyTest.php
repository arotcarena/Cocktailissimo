<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\Company;
use App\Tests\UnitAndIntegration\Entity\EntityTest;
use App\Tests\Utils\FixturesTrait;

/**
 * @group Entity
 */
class CompanyTest extends EntityTest
{
    use FixturesTrait;


    public function testValidCompany()
    {
        $this->assertHasErrors(0, $this->createValidCompany());
    }
    public function testInvalidBlankSocialName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setSocialName('')
        );
    }
    public function testInvalidBlankIdentificationNumber()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setIdentificationNumber('')
        );
    }
    public function testInvalidBlankIso()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setCountry('')
        );
    }
    public function testInvalidTooLongSocialName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setSocialName($this->moreThan200Caracters)
        );
    }
    public function testInvalidTooLongIdentificationNumber()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setIdentificationNumber($this->moreThan200Caracters)
        );
    }
    public function testInvalidTooLongVatNumber()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setVatNumber($this->moreThan200Caracters)
        );
    }
    public function testInvalidTooCommercialName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidCompany()->setCommercialName($this->moreThan200Caracters)
        );
    }
    
    public function testUsualNameWithNoCommercialName()
    {
        $this->assertEquals(
            'social name',
            $this->createValidCompany()->getUsualName()
        );
    }

    public function testUsualNameWithCommercialName()
    {
        $this->assertEquals(
            'commercial name',
            $this->createValidCompany()->setCommercialName('commercial name')->getUsualName()
        );
    }

    private function createValidCompany(): Company
    {
        return (new Company)
                ->setSocialName('social name')
                ->setIdentificationNumber('0123456789')
                ->setCountry('FR')
                ;
    }
}