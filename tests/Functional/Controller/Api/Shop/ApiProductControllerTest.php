<?php
namespace App\Tests\Functional\Controller\Api\Shop;

use App\DataFixtures\Blog\ArticleFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;



/**
 * @group FunctionalApi
 */
class ApiProductControllerTest extends FunctionalTest
{
    private ProductRepository $productRepository;

    public function setUp(): void
    {
        parent::setUp();

        $this->productRepository = static::getContainer()->get(ProductRepository::class);
        $this->loadFixtures([ProductTestFixtures::class]);
    }
    
    //INDEX
    public function testIndexCorrectCountProducts()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'fr']), [
            'q' => 'obj',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $result = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals($result->count, count($result->items));
    }
    public function testIndexFilters()
    {
        $products = $this->productRepository->filter(
            (new SearchParams)
            ->setQ('obj')
            ->setPage(1)
            ->setLimit(1000) // pour pas etre géné par la limit
            ,
            'en'
        );
        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'q' => 'obj',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnProducts = json_decode($this->client->getResponse()->getContent())->items;
        $this->assertEquals(count($products), count($returnProducts));
        $this->assertEquals($products[0]->getId(), $returnProducts[0]->id);
    }
    public function testIndexFilterCategory()
    {
        $productsTest = $this->productRepository->findAll();
        $category = $productsTest[0]->getCategory();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'categoryIds' => (string)$category->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnProducts = json_decode($this->client->getResponse()->getContent())->items;

        $expectedProducts = [];
        foreach($category->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }

        $this->assertCount(count($expectedProducts), $returnProducts);
    }
    public function testIndexFilterCategoryWithMultipleCategories()
    {
        $productsTest = $this->productRepository->findAll();
        $category = $productsTest[0]->getCategory();
        $category1 = $productsTest[1]->getCategory();
        if($category->getName()->getEn() === $category1->getName()->getEn())
        {
            $category1 = $productsTest[5]->getCategory();
            if($category->getName()->getEn() === $category1->getName()->getEn())
            {
                $this->fail('le test n\'est pas probant car les deux subCategories sélectionnées sont en fait la même');
            }
        }

        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'categoryIds' => (string)$category->getId() . ',' . (string)$category1->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnProducts = json_decode($this->client->getResponse()->getContent())->items;

        $expectedProducts = [];
        foreach($category->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }
        foreach($category1->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }

        $this->assertCount(count($expectedProducts), $returnProducts);
       
    }
    public function testIndexFilterSubCategory()
    {
        $productsTest = $this->productRepository->findAll();
        $subCategory = $productsTest[0]->getSubCategory();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'subCategoryIds' => (string)$subCategory->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnProducts = json_decode($this->client->getResponse()->getContent())->items;

        $expectedProducts = [];
        foreach($subCategory->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }

        $this->assertCount(count($expectedProducts), $returnProducts);

    }
    public function testIndexFilterSubCategoryWithMultipleSubCategories()
    {
        $productsTest = $this->productRepository->findAll();
        $subCategory = $productsTest[0]->getSubCategory();
        $subCategory1 = $productsTest[3]->getSubCategory();
        if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
        {
            $subCategory1 = $productsTest[5]->getSubCategory();
            if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
            {
                $this->fail('le test n\'est pas probant car les deux subCategories sélectionnées sont en fait la même');
            }
        }
        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'subCategoryIds' => (string)$subCategory->getId() . ',' . (string)$subCategory1->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnProducts = json_decode($this->client->getResponse()->getContent())->items;

        $expectedProducts = [];
        foreach($subCategory->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }
        foreach($subCategory1->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        }
        $this->assertCount(
            count($expectedProducts), 
            $returnProducts
        );
    }

    public function testIndexDatabaseQueryCount()
    {
        $this->client->enableProfiler();
        
        $this->client->request('GET', $this->urlGenerator->generate('api_product_index', ['_locale' => 'en']), [
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(5, $dbCollector->getQueryCount());
    }
    
    
    //getSuggestedProducts
    public function testGetSuggestedProductsWithNoIdParam()
    {
        $this->expectException(MissingMandatoryParametersException::class);
        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', ['_locale' => 'en']));
    }
    public function testGetSuggestedProductsWithInvalidIdParam()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => 9875642132456,
            '_locale' => 'en'
        ]));
        
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data);
    }
    public function testGetSuggestedProductsCorrectCount()
    {
        $products = $this->productRepository->findAll();
        $product = $products[0];
        $product->addSuggestedProduct($products[1]);
        $product->addSuggestedProduct($products[2]);
        //on persiste ces ajouts en db
        $this->client->getContainer()->get(EntityManagerInterface::class)->flush();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]));
        $this->assertEquals(
            $product->getSuggestedProducts()->count(),
            count(json_decode($this->client->getResponse()->getContent()))
        );
        $this->assertLessThanOrEqual($product->getSuggestedProducts()->count(), 2);
    }
    public function testGetSuggestedProductsContainCorrectKeys()
    {
        $product = $this->productRepository->findOneBySlug('product-with-suggested-products', 'en');
        $this->assertNotEquals(0, $product->getSuggestedProducts()->count(), 'le test est faussé, le product n\'a aucun suggestedProduct');

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals([
            'id', 'type', 'designation', 'basePackaging', 'firstPicture', 'stock', 'reviewNote', 'countReviews'
        ], array_keys(get_object_vars($data[0])));
    }
    public function testGetSuggestedProductsContainCorrectValues()
    {
        $product = $this->productRepository->findOneBySlug('product-with-suggested-products', 'en');
        $this->assertNotEquals(0, $product->getSuggestedProducts()->count(), 'le test est faussé, le product n\'a aucun suggestedProduct');

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            $product->getSuggestedProducts()->get(0)->getDesignation()->getEn(),
            $data[0]->designation
        );
        $this->assertEquals(
            $product->getSuggestedProducts()->get(0)->getBaseConsumerPriceHT(),
            $data[0]->basePackaging->price->priceHT
        );
    }
    public function testGetSuggestedProductsLimitWorks()
    {
        $product = $this->productRepository->findOneBySlug('product-with-suggested-products', 'en'); // produit avec 2 suggestedProducts

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetSuggestedProductsDatabaseQueryCount()
    {
        $product = $this->productRepository->findOneBySlug('product-with-suggested-products', 'en'); // produit avec 2 suggestedProducts

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getSuggestedProducts', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 1 à déduire (findOneBySlug ci dessus) */
        //1 pour les products et 1 pour les firstPictures et 1 pour les basePackaging
        $this->assertEquals(4, $dbCollector->getQueryCount());
    }

    //getLinkedRecipes
    public function testGetLinkedRecipesLimitWorks()
    {
        $product = $this->productRepository->findOneBySlug('product-with-linked-recipes', 'en'); // produit avec 6 linkedRecipes

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getLinkedRecipes', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedRecipesDatabaseQueryCount()
    {
        $product = $this->productRepository->findOneBySlug('product-with-linked-recipes', 'en'); // produit avec 6 linkedRecipes

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getLinkedRecipes', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 1 à déduire (findOneBySlug ci dessus) */
        // + 1 pour les recipes + 1 pour récupération des ingredients
        $this->assertEquals(3, $dbCollector->getQueryCount());
    }

    //getLinkedArticles
    public function testGetLinkedArticlesLimitWorks()
    {
        $this->loadFixtures([ProductFixtures::class, ArticleFixtures::class]);
        $product = $this->findEntity(ProductRepository::class);

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getLinkedArticles', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedArticlesDatabaseQueryCount()
    {
        $this->loadFixtures([ProductFixtures::class, ArticleFixtures::class]);
        $product = $this->findEntity(ProductRepository::class);

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_product_getLinkedArticles', [
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), ['limit' => 1]);

        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 1 à déduire (findEntity ci dessus) */
        // + 1 pour les articles
        $this->assertEquals(1 + 1, $dbCollector->getQueryCount());
    }


    //findByIds
    public function testFindByIdsWithNoIdsProvided()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_product_findByIds', ['_locale' => 'en']));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testFindByIdsReturnProducts()
    {
        $products = $this->productRepository->findBy([], [], 3);
        $this->client->request('POST', $this->urlGenerator->generate('api_product_findByIds', ['_locale' => 'en']), [], [], [], json_encode([
            $products[0]->getId(), $products[1]->getId(), $products[2]->getId()
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertIsArray($data);
        $this->assertNotNull($data[0]->designation);
        $this->assertNotNull($data[1]->designation);
        $this->assertNotNull($data[2]->designation);
    }
    public function testFindByIdsReturnCorrectProducts()
    {
        $products = $this->productRepository->findBy([], [], 3);
        $this->client->request('POST', $this->urlGenerator->generate('api_product_findByIds', ['_locale' => 'en']), [], [], [], json_encode([
            $products[0]->getId(), $products[1]->getId(), $products[2]->getId()
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals($products[0]->getId(), $data[0]->id);
        $this->assertEquals($products[0]->getId(), $data[0]->id);
        $this->assertEquals($products[0]->getId(), $data[0]->id);

        $this->assertEquals($products[0]->getDesignation()->getEn(), $data[0]->designation);
        $this->assertEquals($products[1]->getBaseConsumerPriceHT(), $data[1]->basePackaging->price->priceHT);
    }
    public function testFindByIdsReturnProductsInCorrectLang()
    {
        $products = $this->productRepository->findBy([], [], 2);
        $this->client->request('POST', $this->urlGenerator->generate('api_product_findByIds', ['_locale' => 'it']), [], [], [], json_encode([
            $products[0]->getId(), $products[1]->getId()
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals($products[0]->getDesignation()->getIt(), $data[0]->designation);
        
        $this->client->request('POST', $this->urlGenerator->generate('api_product_findByIds', ['_locale' => 'fr']), [], [], [], json_encode([
            $products[0]->getId(), $products[1]->getId()
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals($products[1]->getDesignation()->getFr(), $data[1]->designation);
    }
}