<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Entity\User;
use App\Entity\Review;
use DateTimeImmutable;
use App\Entity\Product;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class ReviewTest extends EntityTest 
{
    public function testValidReview()
    {
        $this->assertHasErrors(0, $this->createValidReview());
    }
    public function testInvalidRate()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setRate(0)
        );
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setRate(-2)
        );
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setRate(6)
        );
    }
    public function testInvalidNullRate()
    {
        $review = (new Review)
                    ->setUser(new User)
                    ->setProduct(new Product)
                    ->setTitle('titre')
                    ->setEmail('email@valide.fr')
                    ->setFullName('Jean Michel')
                    ->setComment('Voici mon commentaire valide')
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        $this->assertHasErrors(1, $review);
    }
    public function testInvalidBlankFullName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setFullName('')
        );
    }
    public function testInvalidTooLongFullName()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setFullName($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankTitle()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setTitle('')
        );
    }
    public function testInvalidTooLongTitle()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setTitle($this->moreThan200Caracters)
        );
    }
    public function testInvalidBlankComment()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setComment('')
        );
    }
    public function testInvalidTooLongComment()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setComment($this->moreThan2000Caracters)
        );
    }
    public function testInvalidBlankEmail()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setEmail('')
        );
    }
    public function testInvalidTooLongEmail()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidReview()->setEmail($this->moreThan2000Caracters . 'emailvalide@gmail.fr')
        );
    }
    public function testInvalidEmail()
    {
        $this->assertHasErrors(
            1,
            $this->createValidReview()->setEmail('invalideemail.fr')
        );
    }
    public function createValidReview(): Review
    {
        return (new Review)
                ->setFullName('Jean Michel')
                ->setRate(4)
                ->setTitle('mon titre valide')
                ->setComment('Voici mon commentaire valide')
                ->setEmail('valid@email.fr')
                ;
    }
}