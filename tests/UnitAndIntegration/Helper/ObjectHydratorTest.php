<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Entity\Product;
use App\Entity\Review;
use App\Helper\ObjectHydrator;
use PHPUnit\Framework\TestCase;

/**
 * @group Helper
 */
class ObjectHydratorTest extends TestCase
{
    public function testHydrateWithParamArrayContainingInexistantFields()
    {
        $objectHydrator = new ObjectHydrator;

        $review = new Review;
        $objectHydrator->hydrate($review, [
            'email' => 'email@mail.fr',
            'fullName' => 'nom complet',
            'inexistantField' => 'nimportequoi'
        ]);
        $this->assertEquals(
            'email@mail.fr',
            $review->getEmail()
        );
        $this->assertEquals(
            'nom complet',
            $review->getFullName()
        );
    }
    public function testHydrateWithCorrectParamArray()
    {
        $objectHydrator = new ObjectHydrator;

        $review = new Review;
        $objectHydrator->hydrate($review, [
            'email' => 'email@mail.fr',
            'fullName' => 'nom complet',
            'comment' => 'commentaire'
        ]);
        $this->assertEquals(
            'email@mail.fr',
            $review->getEmail()
        );
        $this->assertEquals(
            'nom complet',
            $review->getFullName()
        );
        $this->assertEquals(
            'commentaire',
            $review->getComment()
        );
    }
    public function testHydrateWithStdClassParam()
    {
        $objectHydrator = new ObjectHydrator;

        $review = new Review;
        $objectHydrator->hydrate($review, (object)[
            'email' => 'email@mail.fr',
            'fullName' => 'nom complet',
            'comment' => 'commentaire'
        ]);
        $this->assertEquals(
            'email@mail.fr',
            $review->getEmail()
        );
        $this->assertEquals(
            'nom complet',
            $review->getFullName()
        );
        $this->assertEquals(
            'commentaire',
            $review->getComment()
        );
    }
    public function testHydrateWithExemptedField()
    {
        $objectHydrator = new ObjectHydrator;

        $review = new Review;
        $objectHydrator->hydrate($review, [
            'email' => 'email@mail.fr',
            'fullName' => 'nom complet',
            'comment' => 'commentaire'
        ], ['fullName']);
        $this->assertEquals(
            'email@mail.fr',
            $review->getEmail()
        );
        $this->assertEquals(
            null,
            $review->getFullName()
        );
        $this->assertEquals(
            'commentaire',
            $review->getComment()
        );
    }
}