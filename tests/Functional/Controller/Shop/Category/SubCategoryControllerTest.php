<?php
namespace App\Tests\Functional\Controller\Shop\Category;

use App\Entity\SubCategory;
use App\Tests\Functional\FunctionalTest;
use App\Repository\SubCategoryRepository;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\DataFixtures\Tests\DemoUsersTestFixtures;
use App\Repository\UserRepository;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;


/**
 * @group FunctionalShop
 */
class SubCategoryControllerTest extends FunctionalTest
{
    private SubCategory $subCategory;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([CategoryTestFixtures::class, DemoUsersTestFixtures::class]);

        //WITHOUT_SHOP // a supprimer
        $this->client->loginUser(
            $this->findEntity(UserRepository::class, ['email' => 'consumer@email.com'])
        );

        $this->subCategory = $this->findEntity(SubCategoryRepository::class);
    }

    public function testShowPageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('subCategory_show', [
            'categorySlug' => $this->subCategory->getParentCategory()->getSlug()->getEn(),
            'subCategorySlug' => $this->subCategory->getSlug()->getEn(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testShowWithInexistantCategorySlugParam()
    {
        $this->client->request('GET', $this->urlGenerator->generate('subCategory_show', [
            'categorySlug' => 'slug-inexistant',
            'subCategorySlug' => $this->subCategory->getSlug()->getEn(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }
    public function testShowWithInexistantSubCategorySlugParam()
    {
        $this->client->request('GET', $this->urlGenerator->generate('subCategory_show', [
            'categorySlug' => $this->subCategory->getParentCategory()->getSlug()->getEn(),
            'subCategorySlug' => 'slug-inexistant',
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }
    public function testShowContainsCorrectBreadCrumb()
    {
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('subCategory_show', [
            'categorySlug' => $this->subCategory->getParentCategory()->getSlug()->getEn(),
            'subCategorySlug' => $this->subCategory->getSlug()->getEn(),
            '_locale' => 'en'
        ]));
        $this->assertSelectorTextContains('.breadcrumb-home-link', $this->translator->trans('home', [], 'messages', 'en'));
        $this->assertEquals(
            $this->urlGenerator->generate('home', ['_locale' => 'en']),
            $crawler->filter('.breadcrumb-home-link')->attr('href')
        );
        $this->assertSelectorTextContains('.breadcrumb-link', $this->subCategory->getParentCategory()->getName()->getEn());
        $this->assertEquals(
            $this->urlGenerator->generate('category_show', ['slug' => $this->subCategory->getParentCategory()->getSlug()->getEn(), '_locale' => 'en']),
            $crawler->filter('.breadcrumb-link')->attr('href')
        );
        $this->assertSelectorTextContains('.breadcrumb-item', $this->subCategory->getName()->getEn());
    }

    public function testShowDatabaseQueryCount()
    {
        $categorySlug = $this->subCategory->getParentCategory()->getSlug()->getEn();
        $subCategorySlug = $this->subCategory->getSlug()->getEn();

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('subCategory_show', [
            'categorySlug' => $categorySlug,
            'subCategorySlug' => $subCategorySlug,
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 5 dans la classe de test */
        $this->assertLessThanOrEqual(5 + 7, $dbCollector->getQueryCount());
    }
}