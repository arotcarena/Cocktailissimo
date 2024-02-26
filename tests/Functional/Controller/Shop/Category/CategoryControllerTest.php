<?php
namespace App\Tests\Functional\Controller\Shop\Category;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\DataFixtures\Tests\DemoUsersTestFixtures;
use App\Repository\UserRepository;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalShop
 */
class CategoryControllerTest extends FunctionalTest
{
    private Category $category;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([CategoryTestFixtures::class, DemoUsersTestFixtures::class]);

         //WITHOUT_SHOP // a supprimer
         $this->client->loginUser(
            $this->findEntity(UserRepository::class, ['email' => 'consumer@email.com'])
        );
        
        $this->category = $this->findEntity(CategoryRepository::class);
    }

    public function testShowPageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('category_show', [
            'slug' => $this->category->getSlug()->getEn(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testShowWithInexistantCategorySlugParam()
    {
        $this->client->request('GET', $this->urlGenerator->generate('category_show', [
            'slug' => 'slug-inexistant',
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND);
    }
    public function testShowContainsCorrectBreadCrumb()
    {
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('category_show', [
            'slug' => $this->category->getSlug()->getEn(),
            '_locale' => 'en'
        ]));
        $this->assertSelectorTextContains('.breadcrumb-item', $this->category->getName()->getEn());
        $this->assertSelectorTextContains('.breadcrumb-home-link', $this->translator->trans('home', [], 'messages', 'en'));
        $this->assertEquals(
            $this->urlGenerator->generate('home', ['_locale' => 'en']),
            $crawler->filter('.breadcrumb-home-link')->attr('href')
        );
    }

    public function testShowDatabaseQueryCount()
    {
        $categorySlug = $this->category->getSlug()->getEn();

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('category_show', [
            'slug' => $categorySlug,
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 2 sont dans la classe de test */
        $this->assertLessThanOrEqual(2 + 8, $dbCollector->getQueryCount());
    }
    
}