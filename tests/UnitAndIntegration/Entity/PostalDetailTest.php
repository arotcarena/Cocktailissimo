<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Config\SiteConfig;
use DateTimeImmutable;
use App\Entity\PostalDetail;
use App\Entity\TranslatableString;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class PostalDetailTest extends EntityTest
{
    public function testValidPostalDetail()
    {
        $this->assertHasErrors(0, $this->createValidPostalDetail());
    }

    public function testInvalidCivility()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setCivility('')
        );
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setCivility('Autre chose que monsieur ou madame')
        );
    }
    public function testInvalidBlankFirstName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setFirstName('')
        );
    }
    public function testInvalidTooLongFirstName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setFirstName($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankLastName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setLastName('')
        );
    }
    public function testInvalidTooLongLastName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setLastName($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankLineOne()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setLineOne('')
        );
    }
    public function testInvalidTooLongLineOne()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setLineOne($this->moreThan200Caracters)
        );
    }
    public function testValidBlankLineTwo()
    {
        $this->assertHasErrors(
            0,
            $this->createValidPostalDetail()->setLineTwo('')
        );
    }
    public function testInvalidTooLongLineTwo()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setLineTwo($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankCity()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setCity('')
        );
    }
    public function testInvalidTooLongCity()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setCity($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankPostcode()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setPostcode('')
        );
    }
    public function testInvalidTooLongPostcode()
    {
        $this->assertHasErrors(
            1,
            $this->createValidPostalDetail()->setPostcode($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankCountry()
    {
        $this->assertHasErrors(
            1,
            (new PostalDetail)
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setFirstName('jean')
            ->setLastName('Delafontaine')
            ->setLineOne('22 route de la mer')
            ->setLineTwo('résidence des fleurs')
            ->setCity('Marseille')
            ->setPostcode('13000')
            ->setCreatedAt(new DateTimeImmutable())
        );
    }

    private function createValidPostalDetail(): PostalDetail
    {
        return (new PostalDetail)
                ->setCivility(SiteConfig::CIVILITY_M)
                ->setFirstName('jean')
                ->setLastName('Delafontaine')
                ->setLineOne('22 route de la mer')
                ->setLineTwo('résidence des fleurs')
                ->setCity('Marseille')
                ->setPostcode('13000')
                ->setCountry('FR')
                ->setCreatedAt(new DateTimeImmutable())
                ;
    }
}