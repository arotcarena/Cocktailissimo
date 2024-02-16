<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\Comment;
use App\Tests\Utils\FixturesTrait;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class CommentTest extends EntityTest
{
    use FixturesTrait;

    public function testValidComment()
    {
        $this->assertHasErrors(0, $this->createValidComment());
    }

    public function testInvalidEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setEmail('invalid.email')
        );
    }
    public function testInvalidBlankEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setEmail('')
        );
    }
    public function testInvalidTooLongEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setEmail($this->moreThan200Caracters . '@gmail.com')
        );
    }

    public function testInvalidBlankFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setFullName('')
        );
    }
    public function testInvalidTooLongFullName()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setFullName($this->moreThan200Caracters)
        );
    }

    public function testInvalidBlankContent()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setContent('')
        );
    }
    public function testInvalidTooLongContent()
    {
        $this->assertHasErrors(
            1,
            $this->createValidComment()->setContent($this->moreThan2000Caracters)
        );
    }

    private function createValidComment(): Comment
    {
        return (new Comment)
                ->setEmail('valid@email.fr')
                ->setFullName('full name')
                ->setContent('contenu')
            ;
    }
}