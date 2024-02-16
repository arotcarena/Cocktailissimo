<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Tests\Utils\FixturesTrait;
use App\Service\PicturePathResolver;
use App\Convertor\RecipeToArrayConvertor;
use App\DataFixtures\Blog\RecipeFixtures;
use App\Repository\RecipeRepository;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group Convertor
 */
class RecipeToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private UrlGeneratorInterface $urlGenerator;

    private PicturePathResolver $picturePathResolver;

    private RecipeToArrayConvertor $recipeConvertor;

    private RecipeRepository $recipeRepository;

    public function setUp(): void
    {
        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);
        $this->picturePathResolver = static::getContainer()->get(PicturePathResolver::class);
        $this->recipeConvertor = static::getContainer()->get(RecipeToArrayConvertor::class);
        $this->recipeRepository = static::getContainer()->get(RecipeRepository::class);

        $this->loadFixtures([RecipeFixtures::class]);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'en');

        $this->assertEquals(
            ['id', 'type', 'title', 'target', 'picture', 'createdAt', 'ingredients'],
            array_keys($returnRecipe)
        );
        $this->assertEquals(
            ['path', 'alt'],
            array_keys($returnRecipe['picture'])
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $recipes = $this->recipeRepository->findAll();
        $returnRecipe = $this->recipeConvertor->convert($recipes, 'en')[0];

        $this->assertEquals(
            ['id', 'type', 'title', 'target', 'picture', 'createdAt', 'ingredients'],
            array_keys($returnRecipe)
        );
        $this->assertEquals(
            ['path', 'alt'],
            array_keys($returnRecipe['picture'])
        );
    }
  
    public function testReturnCorrectRecipesCount()
    {
        $recipes = $this->recipeRepository->findAll();
        $returnRecipes = $this->recipeConvertor->convert($recipes, 'en');

        $this->assertCount(count($recipes), $returnRecipes);
    }
    public function testContainsCorrectTitle()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'en');

        $this->assertEquals(
            $recipe->getTitle()->getEn(),
            $returnRecipe['title']
        );
    }
    public function testContainsCorrectTitleLang()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'fr');

        $this->assertEquals(
            $recipe->getTitle()->getFr(),
            $returnRecipe['title']
        );
    }
    public function testContainsCorrectTarget()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $url = $this->urlGenerator->generate('recipe_show', [
            'slug' => $recipe->getSlug()->getEn(),
            'ref' => $recipe->getRef(),
            '_locale' => 'en'
        ]);

        $returnRecipe = $this->recipeConvertor->convert($recipe, 'en');

        $this->assertEquals(
            $url, 
            $returnRecipe['target']
        );
    }
    public function testContainsCorrectTargetLocale()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $url = $this->urlGenerator->generate('recipe_show', [
            'slug' => $recipe->getSlug()->getFr(),
            'ref' => $recipe->getRef(),
            '_locale' => 'fr'
        ]);

        $returnRecipe = $this->recipeConvertor->convert($recipe, 'fr');

        $this->assertEquals(
            $url, 
            $returnRecipe['target']
        );
    }

    public function testContainsCorrectPicturePath()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'en');

        $this->assertEquals(
            $this->picturePathResolver->getPath($recipe->getPicture(), 'index'),
            $returnRecipe['picture']['path']
        );
    }

    public function testContainsCorrectPictureAlt()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'en');

        $this->assertEquals(
            $this->picturePathResolver->getAlt($recipe->getPicture(), 'en'),
            $returnRecipe['picture']['alt']
        );
    }

    public function testContainsCorrectPictureAltLang()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $returnRecipe = $this->recipeConvertor->convert($recipe, 'fr');

        $this->assertEquals(
            $this->picturePathResolver->getAlt($recipe->getPicture(), 'fr'),
            $returnRecipe['picture']['alt']
        );
    }
}
