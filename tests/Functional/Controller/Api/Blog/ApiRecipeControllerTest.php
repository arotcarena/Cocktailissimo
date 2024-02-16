<?php
namespace App\Tests\Functional\Api\Blog;

use App\DataFixtures\Blog\ArticleFixtures;
use App\Entity\Recipe;
use App\Form\DataModel\SearchParams;
use App\Repository\RecipeRepository;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;


/**
 * @group FunctionalApi
 */
class ApiRecipeControllerTest extends FunctionalTest
{
    private ProductRepository $productRepository;

    private RecipeRepository $recipeRepository;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([RecipeFixtures::class, ProductFixtures::class, ArticleFixtures::class]);

        $this->productRepository = $this->client->getContainer()->get(ProductRepository::class);
        $this->recipeRepository = $this->client->getContainer()->get(RecipeRepository::class);
    }

    //findLastsWithProducts

    public function testFindLastsWithProductsParamLimitWorks()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'en'
        ]), [
            'limit' => 10
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(10, $data);
    }

    public function testFindLastsWithProductsParamOffsetWorks()
    {
        $firstProduct = $this->productRepository->findBy([], ['createdAt' => 'DESC'], 1)[0];
        $firstRecipe = $this->recipeRepository->findBy([], ['createdAt' => 'DESC'], 1)[0];
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'en'
        ]), [
            'limit' => 5,
            'offset' => 10
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        foreach($data as $d)
        {
            $this->assertNotEquals($firstProduct->getId(), $d->id);
            $this->assertNotEquals($firstRecipe->getId(), $d->id);
        }
    }

    public function testFindLastsWithProductsContainsRecipesAndProducts()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'en'
        ]), [
            'limit' => 5,
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $hasProducts = false;
        $hasRecipes = false;
        foreach($data as $d)
        {
            if($d->type === 'product')
            {
                $hasProducts = true;
            }
            elseif($d->type = 'recipe')
            {
                $hasRecipes = true;
            }
        }
        //WITHOUT_SHOP // a décommenter
        // $this->assertTrue($hasProducts, 'Aucun product dans l\'array retourné');
        $this->assertTrue($hasRecipes, 'Aucune recipe dans l\'array retourné');
    }

    public function testFindLastsWithProductsReturnDataContainsCorrectKeys()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'en'
        ]), [
            'limit' => 5,
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $product = null;
        $recipe = null;
        foreach($data as $d)
        {
            if($d->type === 'product')
            {
                $product = $d;
            }
            elseif($d->type === 'recipe')
            {
                $recipe = $d;
            }
            if($product && $recipe)
            {
                break;
            }
        }
        //WITHOUT_SHOP // à décommenter
        // $this->assertEquals([
        //     'id', 'type', 'designation', 'category', 'subCategory', 'price', 'target', 'subCategoryTarget', 'firstPicture', 'stock', 'reviewNote', 'countReviews' 
        // ], array_keys(get_object_vars($product)));

        $this->assertEquals([
            'id', 'type', 'title', 'target', 'picture' , 'createdAt', 'ingredients'
        ], array_keys(get_object_vars($recipe)));
    }
    
    public function testFindLastsWithProductsReturnDataContainsCorrectLang()
    {
        $firstProduct = $this->productRepository->findBy([], ['createdAt' => 'DESC'], 1)[0];
        $firstRecipe = $this->recipeRepository->findBy([], ['createdAt' => 'DESC'], 1)[0];
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'fr'
        ]), [
            'limit' => 5,
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $product = null;
        $recipe = null;
        foreach($data as $d)
        {
            if(!$product && $d->type === 'product')
            {
                $product = $d;
            }
            elseif(!$recipe && $d->type === 'recipe')
            {
                $recipe = $d;
            }
        }
        //WITHOUT_SHOP // à décommenter
        // $this->assertEquals(
        //     $firstProduct->getDesignation()->getFr(),
        //     $product->designation
        // );
        $this->assertEquals(
            $firstRecipe->getTitle()->getFr(),
            $recipe->title
        );
    }

    public function testFindLastsWithProductsDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLastsWithProducts', [
            '_locale' => 'en'
        ]), [
            'limit' => 20,
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(4, $dbCollector->getQueryCount());       
    }

    //INDEX
    public function testIndexCorrectCountRecipes()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas être géné par la limite
        ]);
        $result = json_decode($this->client->getResponse()->getContent());

        if(count($result->items) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }
        $this->assertEquals($result->count, count($result->items));
    }
    public function testIndexFilters()
    {
        $recipes = $this->recipeRepository->filter(
            (new SearchParams)
            ->setQ('e')
            ->setPage(1)
            ->setLimit(1000) // pour pas etre géné par la limit
            ,
            'en'
        );
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnRecipes = json_decode($this->client->getResponse()->getContent())->items;

        if(count($returnRecipes) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }
        $this->assertEquals(count($recipes), count($returnRecipes));
        $this->assertEquals($recipes[0]->getId(), $returnRecipes[0]->id);
    }
    public function testIndexContainsOnlyRecipeItems()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnRecipes = json_decode($this->client->getResponse()->getContent())->items;

        if(count($returnRecipes) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }

        foreach($returnRecipes as $recipe)
        {
            $this->assertEquals('recipe', $recipe->type);
        }
    }
    public function testIndexFilterSubCategory()
    {
        $recipesTest = $this->recipeRepository->findAll();
        $subCategory = $recipesTest[0]->getSubCategories()->get(0);
        

        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'subCategoryIds' => $subCategory->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnRecipes = json_decode($this->client->getResponse()->getContent())->items;

        $this->assertCount($subCategory->getRecipes()->count(), $returnRecipes);
    }
    public function testIndexFilterSubCategoryWithMultipleSubCategories()
    {
        $recipesTest = $this->recipeRepository->findAll();
        $subCategory = $recipesTest[0]->getSubCategories()->get(0);
        $subCategory1 = $recipesTest[3]->getSubCategories()->get(0);
        if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
        {
            $subCategory1 = $recipesTest[5]->getSubCategories()->get(0);
            if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
            {
                $this->fail('le test n\'est pas probant car les deux subCategories sélectionnées sont en fait la même');
            }
        }
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'subCategoryIds' => (string)$subCategory->getId() . ',' . (string)$subCategory1->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnRecipes = json_decode($this->client->getResponse()->getContent())->items;

        $this->assertCount(
            ($subCategory1->getRecipes()->count() + $subCategory->getRecipes()->count()), 
            $returnRecipes
        );
    }
    public function testIndexDatabaseQueryCount()
    {
        $this->client->enableProfiler();
        
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_index', ['_locale' => 'en']), [
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertEquals(4, $dbCollector->getQueryCount());
    }

    //getLinkedProducts
    public function testGetLinkedProductsLimitWorks()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        if($recipe->getLinkedProducts()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car la Recipe a moins de 2 linkedProducts');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLinkedProducts', [
            'id' => $recipe->getId(),
            '_locale' => 'en',
        ]), ['limit' => 1]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedProductsDatabaseQueryCount()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        if($recipe->getLinkedProducts()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car la Recipe a moins de 2 linkedProducts');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLinkedProducts', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /** 2 à soustraire pour le findEntity et getLinkedProducts ci dessus */
        /* 1 pour récupérer les products + 1 pour hydrater avec firstPicture + 1 pour hydrater avec basePackaging */
        $this->assertEquals(2 + 3, $dbCollector->getQueryCount());
    }
    

    //getLinkedArticles
    public function testGetLinkedArticlesLimitWorks()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        if($recipe->getLinkedArticles()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car la Recipe a moins de 2 linkedArticles');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLinkedArticles', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedArticlesDatabaseQueryCount()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        if($recipe->getLinkedArticles()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car la Recipe a moins de 2 linkedArticles');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getLinkedArticles', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 2 à soustraire pour findentity et getLinkedArticles ci-dessus */
        $this->assertEquals(2 + 1, $dbCollector->getQueryCount());
    }

    //getSimilarRecipes
    public function testGetSimilarRecipesLimitWorks()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        $similarRecipesExpected = $this->recipeRepository->findSimilarRecipes($recipe->getId(), 20);
        if(count($similarRecipesExpected) < 2)
        {
            $this->fail('Le test n\'est pas probant, la Recipe a moins de deux similar recipes');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getSimilarRecipes', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetSimilarRecipesDontReturnCurrentRecipe()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
     
        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getSimilarRecipes', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1000]);

        $data = json_decode($this->client->getResponse()->getContent());

        $success = true;
        foreach($data as $d)
        {
            if($d->id === $recipe->getId())
            {
                $this->fail('La recette courante est retournée dans les résultats de getSimilarRecipes');
                $success = false;
            }
        }
        $this->assertTrue($success);
    }
    public function testGetSimilarRecipesDatabaseQueryCount()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        $similarRecipesExpected = $this->recipeRepository->findSimilarRecipes($recipe->getId(), 20);
        if(count($similarRecipesExpected) < 2)
        {
            $this->fail('Le test n\'est pas probant, la Recipe a moins de deux similar recipes');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getSimilarRecipes', [
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /** 1 a déduire pour findEntity ci dessus, puis diviser par deux car on fait déjà appel a la même fonction recipeRepository.findSimilarRecipe ci dessus */
        //on attend 2 queries donc (2 * 2) + 1 = 5 
        $this->assertEquals(5, $dbCollector->getQueryCount());
    }

}