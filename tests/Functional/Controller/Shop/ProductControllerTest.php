<?php 
namespace App\Tests\Functional\Controller\Shop;

use App\DataFixtures\Tests\DemoUsersTestFixtures;
use App\Entity\Product;
use App\Tests\Utils\FixturesTrait;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\InvalidParameterException;
use App\DataFixtures\Tests\ProductWithOrWithoutCategoryTestFixtures;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;

/**
 * @group FunctionalShop
 */
class ProductControllerTest extends FunctionalTest
{
    use FixturesTrait;

    private ProductRepository $productRepository;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([ProductWithOrWithoutCategoryTestFixtures::class, DemoUsersTestFixtures::class]);

        $this->productRepository = $this->client->getContainer()->get(ProductRepository::class);
        
        //WITHOUT_SHOP // à supprimer
        $demoUser = $this->findEntity(UserRepository::class, ['email' => 'consumer@email.com']);
        $this->client->loginUser($demoUser);
    }

    //TEST SHOW
    public function testShowRouteWithAllParams()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');

        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'categorySlug' => $product->getCategory()->getSlug()->getEn(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', $product->getDesignation()->getEn());

    }
    public function testShowMissingRouteParams()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');

        $this->expectException(MissingMandatoryParametersException::class);
        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
    }
    public function testShowWithEmptyStringSlugParam()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');

        $this->expectException(InvalidParameterException::class);
        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => '',
            'categorySlug' => $product->getCategory()->getSlug()->getEn(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
    }
    public function testShowWithWrongSlugParam()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');

        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'categorySlug' => 'un-slug-de-categorie-incorrect',
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }
    public function testShowWithInexistantPublicRefParam()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');

        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'categorySlug' => $product->getCategory()->getSlug()->getEn(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => 'inexistantpublicref',
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }
    public function testShowContainsCorrectBreadCrumb()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'categorySlug' => $product->getCategory()->getSlug()->getEn(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
        $this->assertSelectorTextContains('.breadcrumb-home-link', $this->translator->trans('home', [], 'messages', 'en'));
        $this->assertSelectorTextContains('.breadcrumb-link:nth-child(2)', $product->getCategory()->getName()->getEn());
        $this->assertSelectorTextContains('.breadcrumb-link:nth-child(3)', $product->getSubCategory()->getName()->getEn());
        $this->assertEquals(
            $this->urlGenerator->generate('home'),
            $crawler->filter('.breadcrumb-home-link')->attr('href')
        );
        $this->assertEquals(
            $this->urlGenerator->generate('category_show', ['slug' => $product->getCategory()->getSlug()->getEn(), '_locale' => 'en']),
            $crawler->filter('.breadcrumb-link')->attr('href')
        );
        $this->assertEquals(
            $this->urlGenerator->generate('subCategory_show', [
                'categorySlug' => $product->getCategory()->getSlug()->getEn(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
                '_locale' => 'en'
            ]),
            $crawler->filter('.breadcrumb-link:nth-child(3)')->attr('href')
        );
        $this->assertSelectorTextContains('.breadcrumb-item', $product->getDesignation()->getEn());
    }
    public function testShowAddCountViewToProduct()
    {
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');
        $this->client->request('GET', $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getEn(),
            'categorySlug' => $product->getCategory()->getSlug()->getEn(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
            'publicRef' => $product->getBasePublicRef(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
        /** @var Product */
        $product = $this->productRepository->findOneBySlug('product-with-category-and-subcategory-en', 'en');
        $this->assertEquals(1, $product->getCountViews());
    }
}