<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\DataFixtures\Blog\RecipeFixtures;
use App\Tests\Utils\FixturesTrait;
use App\Entity\IngredientQuantity;
use App\Entity\Recipe;
use App\Entity\SubCategory;
use App\Repository\RecipeRepository;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class RecipeTest extends EntityTest
{
    use FixturesTrait;

    public function testValidRecipe()
    {
        $this->assertHasErrors(0, $this->createValidRecipe());
    }
    public function testInvalidBlankRef()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidRecipe()->setRef('')
        );
    }
    public function testInvalidNotUniqueRef()
    {
        $this->loadFixtures([RecipeFixtures::class]);
        $recipe = $this->findEntity(RecipeRepository::class);
        $this->assertHasErrors(
            1,
            $this->createValidRecipe()->setRef($recipe->getRef())
        );
    }

    public function testInvalidNoSubCategory()
    {
        $this->assertHasErrors(
            1, 
            (new Recipe)->setRef('ref')->addIngredientsQuantity(new IngredientQuantity)
        );
    }

    private function createValidRecipe(): Recipe
    {
        return (new Recipe)
                ->setRef('ref')
                ->addSubCategory(new SubCategory)

            ;
    }
}