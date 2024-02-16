<?php
namespace App\Tests\IntegrationOnly\TrafficAnalytics\Counter;

use App\DataFixtures\Blog\ArticleFixtures;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Article;
use App\Entity\Company;
use App\Entity\Packaging;
use App\Entity\Recipe;
use App\Helper\UrlRefExtractor;
use App\Repository\ArticleRepository;
use App\Repository\CompanyRepository;
use App\Repository\PackagingRepository;
use App\Repository\RecipeRepository;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use App\TrafficAnalytics\Counter\EntityViewCounter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group TrafficAnalytics
 */
class EntityViewCounterTest extends KernelTestCase
{
    use FixturesTrait;

    private EntityViewCounter $entityViewCounter;
    private UrlGeneratorInterface $urlGenerator;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([ProductTestFixtures::class, RecipeFixtures::class, ArticleFixtures::class]);

        $this->entityViewCounter = new EntityViewCounter(
            static::getContainer()->get(PackagingRepository::class),
            static::getContainer()->get(RecipeRepository::class),
            static::getContainer()->get(ArticleRepository::class),
            static::getContainer()->get(CompanyRepository::class),
            new UrlRefExtractor,
            new EntityCountAdder(
                static::getContainer()->get(EntityManagerInterface::class)
            ),
        );

        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);
    }

    public function testViewWithInvalidRefInRequestUriNothingWillHappens()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        $product->setCountViews(5);
        $url = $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getFr(),
            'categorySlug' => $product->getCategory()->getSlug()->getFr(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getFr(),
            'publicRef' => 'invalid_publicRef',
            '_locale' => 'fr'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'product_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(5, $product->getCountViews());
    }

    public function testProductViewWillAddOneViewToProduct()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        $product->setCountViews(5);
        $url = $this->urlGenerator->generate('product_show', [
            'slug' => $product->getSlug()->getFr(),
            'categorySlug' => $product->getCategory()->getSlug()->getFr(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->getFr(),
            'publicRef' => $packaging->getPublicRef(),
            '_locale' => 'fr'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'product_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(6, $product->getCountViews());
    }

    //count recipe view
    public function testRecipeViewWillAddOneViewToProduct()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        $recipe->setCountViews(5);
        $url = $this->urlGenerator->generate('recipe_show', [
            'slug' => $recipe->getSlug()->getEn(),
            'ref' => $recipe->getRef(),
            '_locale' => 'en'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'recipe_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(6, $recipe->getCountViews());
    }

    //count article view
    public function testArticleViewWillAddOneViewToARticle()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        $article->setCountViews(5);
        $url = $this->urlGenerator->generate('article_show', [
            'slug' => $article->getSlug()->getEn(),
            'subCategorySlug' => $article->getSubCategory()->getSlug()->getEn(),
            'ref' => $article->getRef(),
            '_locale' => 'en'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'article_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(6, $article->getCountViews());
    }

    //count vendorShop view
    public function testVendorShopViewWillAddOneShopViewToCompany()
    {
        /** @var Company */
        $company = $this->findEntity(CompanyRepository::class);
        $company->setCountShopViews(5);
        $url = $this->urlGenerator->generate('vendorShop', [
            'companySlug' => $company->getSlug(),
            '_locale' => 'en'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'vendorShop'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(6, $company->getCountShopViews());
    }

    public function testArticleRefOnRecipeShowRequestUriNothingHappens()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        $article->setCountViews(5);
        $url = $this->urlGenerator->generate('recipe_show', [
            'slug' => $article->getSlug()->getEn(),
            'ref' => $article->getRef(),
            '_locale' => 'en'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'recipe_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(5, $article->getCountViews());
    }

    public function testRecipeRefOnArticleShowRequestUriNothingHappens()
    {
        /** @var Recipe */
        $recipe = $this->findEntity(RecipeRepository::class);
        $recipe->setCountViews(5);
        $url = $this->urlGenerator->generate('article_show', [
            'slug' => $recipe->getSlug()->getEn(),
            'subCategorySlug' => 'nimportequoi',
            'ref' => $recipe->getRef(),
            '_locale' => 'en'
        ]);

        $this->entityViewCounter->handleRequest(new Request([], [], ['_route' => 'article_show'], [], [], [
            'REQUEST_URI' => $url
        ]));

        $this->assertEquals(5, $recipe->getCountViews());
    }
}