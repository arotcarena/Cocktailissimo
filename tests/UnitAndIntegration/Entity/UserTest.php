<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\User;
use DateTimeImmutable;
use App\Config\SiteConfig;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class UserTest extends EntityTest
{
    public function testValidUser()
    {
        $this->assertHasErrors(0, $this->createValidUser());
    }
    public function testInvalidEmail()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setEmail('invalide@mail.')
        );
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setEmail('invalidemail')
        );
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setEmail('invalidemail.fr')
        );
    }
    public function testInvalidBlankEmail()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setEmail('')
        );
    }
    public function testInvalidTooLongEmail()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setEmail($this->moreThan200Caracters . '@mail.com')
        );
    }
    public function testInvalidCivility()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setCivility('invalid_civility')
        );
    }
    public function testInvalidBlankFirstName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setFirstName('')
        );
    }
    public function testInvalidTooLongFirstName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setFirstName($this->moreThan200Caracters)
        );
    }
    public function testValidBlankLastName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setLastName('')
        );
    }
    public function testInvalidTooLongLastName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidUser()->setLastName($this->moreThan200Caracters)
        );
    }

    private function createValidUser(): User
    {
        return (new User)
                ->setEmail('emailvalide@gmail.com')
                ->setCivility(SiteConfig::CIVILITY_M)
                ->setFirstName('prénom')
                ->setLastName('nom')
                ;
    }
}