<?php
namespace App\Tests\Functional\Controller\Api\Blog;

use App\DataFixtures\Shop\CategoryFixtures;
use App\Repository\CategoryRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalApi
 */
class ApiRecipeSubCategoriesControllerTest extends FunctionalTest 
{
    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([CategoryFixtures::class]);
    }

    public function testGetSubCategoriesReturnCorrectCountSubCategories()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getSubCategories', [
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(9, $data, 'Ce test a été écrit quand il y avait 9 sous-catégories recette : ça a peut-être changé depuis');
    }

    public function testGetSubCategoriesDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_recipe_getSubCategories', [
            '_locale' => 'en'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertEquals(1, $dbCollector->getQueryCount());
    }
}