<?php
namespace App\Tests\Functional\Controller\Api\Account;

use App\DataFixtures\Shop\ReviewFixtures;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\ProductWithOrWithoutStockTestFixtures;
use App\DataFixtures\Tests\UserTestFixtures;
use App\DataFixtures\Tests\VendorTestFixtures;
use App\DataFixtures\Tests\VendorWithOneProductTestFixtures;
use App\Entity\Product;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;

class ApiVendorDashboardControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([ReviewFixtures::class, UserTestFixtures::class, ProductTestFixtures::class, ProductWithOrWithoutStockTestFixtures::class, VendorTestFixtures::class]);
    }

    //auth
    public function testWithNoUser()
    {
        $packaging = $this->findEntity(PackagingRepository::class);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => $packaging->getId(),
            'stock' => 10,
            '_locale' => 'en'
        ]));
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login', ['_locale' => 'en']));
    }
    public function testWithRoleUser()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $this->loginUser($user);

        $packaging = $this->findEntity(PackagingRepository::class);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => $packaging->getId(),
            'stock' => 10,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }
    public function testWithRoleAdmin()
    {
        $admin = $this->findEntity(UserRepository::class, ['email' => 'admin@gmail.com']);
        $this->loginUser($admin);

        $packaging = $this->findEntity(PackagingRepository::class);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => $packaging->getId(),
            'stock' => 10,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }
    public function testWithRoleVendor()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->loginUser($vendor);

        $packaging = $this->findEntity(PackagingRepository::class);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => $packaging->getId(),
            'stock' => 10,
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }

    //updateStock
    public function testUpdateStockWithInexistantPackagingId()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->loginUser($vendor);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => 123456789,
            'stock' => 10,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testUpdateStockCorrectUpdateStock()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->loginUser($vendor);

        $packaging = $this->findEntity(PackagingRepository::class);
        $stock = $packaging->getStock();

        $newStock = $stock + 50;

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_updateStock', [
            'packagingId' => $packaging->getId(),
            'stock' => $newStock,
            '_locale' => 'en'
        ]));

        $packaging = $this->findEntity(PackagingRepository::class, ['id' => $packaging->getId()]);
        $this->assertEquals($newStock, $packaging->getStock());
    }

    //productIndex
    public function testProductIndexReturnArraysWithCorrectKeys()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->loginUser($vendor);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertEquals(
            ['id', 'designation', 'packagingChoices', 'pictures', 'target', 'category', 'subCategory', 'mainStock', 'reviewNote', 'countReviews', 'countViews', 'countCarts', 'countSales', 'createdAt'],
            array_keys(get_object_vars($data->items[0]))
        );
    }
    public function testProductIndexReturnsOnlyProductsFromCorrectVendor()
    {
        $this->loadFixtures([VendorWithOneProductTestFixtures::class]);
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_with_one_product@mail.com']);
        $this->loginUser($vendor);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(1, $data->items);
        $this->assertEquals('product for test vendor with one product', $data->items[0]->designation);
    }
    public function testProductIndexUseCorrectLang()
    {
        $this->loadFixtures([VendorWithOneProductTestFixtures::class]);
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_with_one_product@mail.com']);
        $this->loginUser($vendor);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'fr'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(1, $data->items);
        $this->assertEquals('produit pour test vendeur avec un seul produit', $data->items[0]->designation);
    }
    public function testProductIndexReturnsEvenProductsWithoutStock()
    {
        $this->loadFixtures([VendorWithOneProductTestFixtures::class]);
        //on récupère le produit du vendeur avec un seul produit pour passer son stock à 0
        /** @var EntityManagerInterface */
        $em = $this->client->getContainer()->get(EntityManagerInterface::class);
        /** @var Product */
        $product = $em->createQueryBuilder()
            ->select('p')
            ->from('App\Entity\Product', 'p')
            ->join('p.designation', 'designation')
            ->where('designation.en = :enDesignation')
            ->setParameter('enDesignation', 'product for test vendor with one product')
            ->getQuery()
            ->getResult()[0];
        $id = $product->getId();
        
        $product->getPackagingChoices()->get(0)->setStock(0);  // ce produit n'a qu'un packaging
        $em->flush();

        //on vérifie que le stock est bien à zéro
        /** @var Product */
        $product = $this->findEntity(ProductRepository::class, ['id' => $id]);
        $this->assertEquals(0, $product->getMainStock());
        $this->assertEquals(0, $product->getPackagingChoices()->get(0)->getStock());
        
        //on connecte le vendeur
        $vendor = $product->getVendor();
        $this->loginUser($vendor);

        //on vérifie qu'on peut bien voir le produit
        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertEquals('product for test vendor with one product', $data->items[0]->designation);
    }
    public function testProductIndexFiltersByCustomerPrice()
    { 
        $this->loadFixtures([VendorWithOneProductTestFixtures::class]);
        // one product with one packaging with customerPriceHT 100 and businessPriceHT 50
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_with_one_product@mail.com']);
        $this->loginUser($vendor);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]), [
            'maxPrice' => 99
        ]);

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(0, $data->items);

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]), [
            'minPrice' => 51
        ]);

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertCount(1, $data->items);
    }
    public function testProductIndexDatabaseQueryCount()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); //vendor avec beaucoup de products
        $this->loginUser($vendor);

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_vendorDashboard_product_index', [
            'page' => 1,
            'limit' => 1000,
            '_locale' => 'en'
        ]));

        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(4, $dbCollector->getQueryCount());
    }
}