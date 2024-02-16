<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\Answer;
use App\Entity\Question;
use App\Tests\Utils\FixturesTrait;
use App\Entity\QuestionAnswer;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class QuestionTest extends EntityTest
{
    use FixturesTrait;

    public function testValidQuestion()
    {
        $this->assertHasErrors(0, $this->createValidQuestion());
    }

    public function testInvalidEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setEmail('invalid.email')
        );
    }
    public function testInvalidBlankEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setEmail('')
        );
    }
    public function testInvalidTooLongEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setEmail($this->moreThan200Caracters . '@gmail.com')
        );
    }

    public function testInvalidBlankFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setFullName('')
        );
    }
    public function testInvalidTooLongFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setFullName($this->moreThan200Caracters)
        );
    }

    public function testInvalidBlankTitle()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setTitle('')
        );
    }
    public function testInvalidTooLongTitle()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setTitle($this->moreThan200Caracters)
        );
    }

    public function testInvalidBlankQuestion()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setContent('')
        );
    }
    public function testInvalidTooLongQuestion()
    {
        $this->assertHasErrors(
            1,
            $this->createValidQuestion()->setContent($this->moreThan2000Caracters)
        );
    }

    private function createValidQuestion(): Question
    {
        return (new Question)
                ->setEmail('valid@email.fr')
                ->setFullName('full name')
                ->setTitle('title')
                ->setContent('My question is ...')
            ;
    }
}