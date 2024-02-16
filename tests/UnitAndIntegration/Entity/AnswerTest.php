<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\Answer;
use App\Tests\Utils\FixturesTrait;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class AnswerTest extends EntityTest
{
    use FixturesTrait;

    public function testValidAnswer()
    {
        $this->assertHasErrors(0, $this->createValidAnswer());
    }

    public function testInvalidEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setEmail('invalid.email')
        );
    }
    public function testInvalidBlankEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setEmail('')
        );
    }
    public function testInvalidTooLongEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setEmail($this->moreThan200Caracters . '@gmail.com')
        );
    }

    public function testInvalidBlankFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setFullName('')
        );
    }
    public function testInvalidTooLongFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setFullName($this->moreThan200Caracters)
        );
    }

    public function testInvalidBlankTitle()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setContent('')
        );
    }
    public function testInvalidTooLongTitle()
    {
        $this->assertHasErrors(
            1,
            $this->createValidAnswer()->setContent($this->moreThan2000Caracters)
        );
    }

    private function createValidAnswer(): Answer
    {
        return (new Answer)
                ->setEmail('valid@email.fr')
                ->setFullName('full name')
                ->setContent('title')
            ;
    }
}