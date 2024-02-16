<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\Entity\Picture;
use App\Entity\Product;
use App\Tests\Utils\FixturesTrait;
use App\Repository\ProductRepository;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\ProductWithOrWithoutStockTestFixtures;
use App\Form\Admin\DataModel\ProductFilter;
use App\Form\DataModel\SearchParams;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;

/**
 * @group Repository
 */
class ProductRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private ProductRepository $productRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->productRepository = static::getContainer()->get(ProductRepository::class);
        $this->loadFixtures([ProductTestFixtures::class]);
    }
    //QSEARCH
    public function testQSearchReturnArrayOfProducts()
    {
        $products = $this->productRepository->qSearch('e', 'en');
        $this->assertInstanceOf(
            Product::class,
            $products[0]
        );
    }
    public function testQSearchReturnOnlyResultsContainingEntireQ()
    {
        $products = $this->productRepository->qSearch('on obj', 'fr');
        foreach($products as $product)
        {
            $this->assertFalse($product->getDesignation() === 'objet');
        }
    }
    public function testQSearchLookIntoDesignation()
    {
        $products = $this->productRepository->qSearch('objet', 'fr');
        $this->assertCount(2, $products);
    }
   
    public function testCountQSearchCorrectCount()
    {
        $count = $this->productRepository->countQSearch('mon objet', 'fr');
        $this->assertEquals(1, $count);
        
        $count = $this->productRepository->countQSearch('objet', 'fr');
        $this->assertEquals(2, $count);

        $this->loadFixtures([ProductWithOrWithoutStockTestFixtures::class]);
        $count = $this->productRepository->countQSearch('stock test', 'fr');
        $this->assertEquals(1, $count);
    }
    public function testQSearchApplyCorrectLimit()
    {
        $products = $this->productRepository->qSearch('obj', 'fr', 1);
        $this->assertCount(
            1, 
            $products
        );
    }
    public function testQSearchReturnProductWithFirstPicture()
    {
        $products = $this->productRepository->qSearch('obj', 'fr', 1);
        $this->assertInstanceOf(
            Picture::class,
            $products[0]->getFirstPicture()
        );
    }
    public function testQSearchReturnProductWithCorrectFirstPicture()
    {
        $products = $this->productRepository->qSearch('obj', 'fr', 4);
        
        foreach($products as $product)
        {
            $this->assertEquals(
                $product->getId(), 
                $product->getFirstPicture()->getProduct()->getId(),
                'la firstPicture placée dans product n\'appartient pas à ce product'
            );
            $this->assertEquals(
                1, 
                $product->getFirstPicture()->getListPosition(),
                'la firstPicture placée dans product a un listPosition != de 1'
            );
        }
    }
    public function testQSearchSelectOnlyProductsInStock()
    {
        $this->loadFixtures([ProductWithOrWithoutStockTestFixtures::class]);
        $products = $this->productRepository->qSearch('stock test', 'fr', 4);
        $this->assertCount(1, $products);
        $this->assertTrue($products[0]->getMainStock() > 0);
    }
    //enQSearch
    public function testQSearchWithParamLangFrDontSearchIntoEnFields()
    {
        $products = $this->productRepository->qSearch('my obj', 'fr');
        $this->assertCount(0, $products);

        $products = $this->productRepository->qSearch('ategory 1', 'fr');
        $this->assertCount(0, $products);
    }
    public function testQSearchWithParamLangEnDontSearchIntoFrFields()
    {
        $products = $this->productRepository->qSearch('on obj', 'en');
        $this->assertCount(0, $products);

        $products = $this->productRepository->qSearch('atégorie 1', 'en');
        $this->assertCount(0, $products);
    }
    public function testQSearchWithParamLangEnWorks()
    {
        $products = $this->productRepository->qSearch('y obj', 'en');
        $this->assertCount(1, $products);
        $this->assertEquals('my object', $products[0]->getDesignation()->getEn());
    }

    //FILTER
    public function testFilterQ()
    {
        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter(
            (new SearchParams)->setQ('on obj'),
            'fr'
        );
        $this->assertCount(1, $pagination->getItems());
        $this->assertEquals('mon-objet', $pagination->getItems()[0]->getSlug()->getFr());
    }
    public function testFilterQWithLangParamEn()
    {
        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter(
            (new SearchParams)->setQ('on obj'),
            'en'
        );
        $this->assertCount(0, $pagination->getItems());
        
        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter(
            (new SearchParams)->setQ('my obj'),
            'en'
        );
        $this->assertCount(1, $pagination->getItems());
        $this->assertEquals('my-object', $pagination->getItems()[0]->getSlug()->getEn());
    }
    public function testFilterCategory()
    {
        $product = $this->productRepository->findOneBy([]);
        $category = $product->getCategory();
        /*il faut supprimer les products dont le stock = 0 car ils ne seront pas retournés par le repository */
        $expectedProducts = [];
        foreach($category->getProducts() as $p)
        {
            if($p->getMainStock() > 0) 
            {
                $expectedProducts[] = $p;
            }
        } 

        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter(
            (new SearchParams)->setCategoryIds((string) $category->getId()), 'fr'
        );
        $this->assertEquals(count($expectedProducts), count($pagination->getItems()));
        foreach($pagination->getItems() as $returnProduct)
        {
            $this->assertEquals(
                $category->getId(),
                $returnProduct->getCategory()->getId()
            );
        }
    }
    public function testFilterWithEmptyQString()
    {
        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter(
            (new SearchParams)->setQ(''), 'en'
        );
        $this->assertTrue(count($pagination->getItems()) > 0, 'devrait retourner des products même si qSearch = ""');
    }

    //findByIdGroup
    public function testFindByIdGroupReturnCorrectProducts()
    {
        //il y a 7 products
        $products = $this->productRepository->findAll();
        $ids = [];
        $sentProducts = [];
        for($i=0; $i<5; $i++)
        {
            $ids[] = $products[$i]->getId();
            $sentProducts[$products[$i]->getId()] = $products[$i];
        }

        $return = $this->productRepository->findByIdGroup($ids);
        $returnProducts = [];
        foreach($return as $returnProduct)
        {
            $returnProducts[$returnProduct->getId()] = $returnProduct;
        }

        $this->assertEquals(
            count($ids),
            count($return)
        );
        foreach($sentProducts as $sentProduct)
        {
            $this->assertEquals(
                $sentProduct->getDesignation()->getEn(),
                $returnProducts[$sentProduct->getId()]->getDesignation()->getEn()
            );
        }
    }
}