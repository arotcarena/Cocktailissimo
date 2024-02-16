<?php
namespace App\Tests\Functional\Controller\Api\Blog;

use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use Doctrine\ORM\EntityManagerInterface;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\DataFixtures\Blog\IngredientFixtures;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\ProductWithOrWithoutCategoryTestFixtures;
use App\Repository\IngredientRepository;
use App\Repository\RecipeRepository;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;



/**
 * @group FunctionalApi
 */
class ApiIngredientController extends FunctionalTest
{
    private IngredientRepository $ingredientRepository;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([IngredientFixtures::class]);
        
        $this->ingredientRepository = $this->client->getContainer()->get(IngredientRepository::class);
    }

    //SEARCH
    public function testSearchWithEmptyQStringReturnZeroItems()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_ingredient_qSearch', ['_locale' => 'en']), [
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

    public function testSearchReturnCorrectKeys()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_ingredient_qSearch', ['_locale' => 'en']), [
            'q' => 'e' 
        ]);
        $items = json_decode($this->client->getResponse()->getContent());

        if(count($items) === 0)
        {
            $this->fail('le test n\'est pas probant, il n\'y a aucun ingredient trouvé');
        }

        $this->assertEquals(
            ['id', 'name', 'picture'],
            array_keys(get_object_vars($items[0]))
        );
        $this->assertEquals(
            ['id', 'name', 'picture'],
            array_keys(get_object_vars($items[1]))
        );

        $this->assertEquals(
            ['path', 'alt'],
            array_keys(get_object_vars($items[0]->picture))
        );
    }
    public function testSearchApplyCorrectLimit()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_ingredient_qSearch', ['_locale' => 'en']), [
            'q' => 'e',
            'limit' => 1
        ]);
        if(count($this->ingredientRepository->findAll()) === 0)
        {
            $this->fail('le test n\'est pas probant car il n\'y a pas d\'ingrédient.');
        }
        $items = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(
            1, 
            $items
        );
    }
   
    public function testSearchDatabaseQueriesCount()
    {
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_ingredient_qSearch', ['_locale' => 'en']), [
            'q' => 'e', // gloves est l'un des mots utilisé par faker::commerce donc il doit matcher plusieurs résultats en principe
            'limit' => 1
        ]);
        $items = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertEquals(1, $dbCollector->getQueryCount());
    }
}