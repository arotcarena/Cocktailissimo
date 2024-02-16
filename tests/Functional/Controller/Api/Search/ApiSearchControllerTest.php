<?php
namespace App\Tests\Functional\Controller\Api\Search;

use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use Doctrine\ORM\EntityManagerInterface;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\ProductWithOrWithoutCategoryTestFixtures;
use App\Repository\RecipeRepository;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;



/**
 * @group FunctionalApi
 */
class ApiSearchControllerTest extends FunctionalTest
{

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([ProductFixtures::class, RecipeFixtures::class]);
    }

    //SEARCH
    public function testSearchWithEmptyQStringReturnZeroItems()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_search', ['_locale' => 'en']), [
            'q' => ''
        ]);
        $this->assertCount(
            0,
            json_decode($this->client->getResponse()->getContent())->items
        );
        $this->assertEquals(
            0,
            json_decode($this->client->getResponse()->getContent())->count
        );
    }
    public function testSearchReturnCorrectCount()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_search', ['_locale' => 'en']), [
            'q' => 'gloves',  // gloves est l'un des mots utilisé par faker::commerce donc il doit matcher plusieurs résultats en principe
            'limit' => 1000 // pour être sur de pas être géné par la limite
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $items = $data->items;
        $count = $data->count;

        $this->assertCount($count, $items);
    }
    public function testSearchReturnProductsAndRecipesConvertedToArray()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_search', ['_locale' => 'en']), [
            'q' => 'e' 
        ]);
        $items = json_decode($this->client->getResponse()->getContent())->items;

        $hasProducts = false;
        $hasRecipes = false;
        
        foreach($items as $item)
        {
            if($item->type === 'product')
            {
                $hasProducts = true;
            }
            elseif($item->type === 'recipe')
            {
                $hasRecipes = true;
            }
            else
            {
                $this->fail('certains items retournés ne sont ni instance de product ni de recipe');
            }
        }
        //WITHOUT_SHOP // a décommenter
        // $this->assertTrue($hasProducts, 'Aucun product dans les items retournés');
        $this->assertTrue($hasRecipes, 'Aucune recipe dans les items retournés');
    }
    public function testSearchApplyCorrectLimit()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_search', ['_locale' => 'en']), [
            'q' => 'gloves', // gloves est l'un des mots utilisé par faker::commerce donc il doit matcher plusieurs résultats en principe
            'limit' => 1
        ]);
        $items = json_decode($this->client->getResponse()->getContent())->items;

        $this->assertCount(
            1, 
            $items
        );
    }
   
    public function testSearchDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_search', ['_locale' => 'en']), [
            'q' => 'gloves', // gloves est l'un des mots utilisé par faker::commerce donc il doit matcher plusieurs résultats en principe
            'limit' => 1
        ]);
        $items = json_decode($this->client->getResponse()->getContent())->items;

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(5, $dbCollector->getQueryCount());
    }
}