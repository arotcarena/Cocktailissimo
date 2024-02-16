<?php
namespace App\Tests\Functional\Api\Blog;

use App\Entity\Article;
use App\Form\DataModel\SearchParams;
use App\Repository\ArticleRepository;
use App\Tests\Functional\FunctionalTest;
use App\DataFixtures\Blog\ArticleFixtures;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalApi
 */
class ApiArticleControllerTest extends FunctionalTest
{
    private ArticleRepository $articleRepository;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([ArticleFixtures::class]);

        $this->articleRepository = $this->client->getContainer()->get(ArticleRepository::class);
    }

    //INDEX
    public function testIndexCorrectCountArticles()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas être géné par la limite
        ]);
        $result = json_decode($this->client->getResponse()->getContent());

        if(count($result->items) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }
        $this->assertEquals($result->count, count($result->items));
    }
    public function testIndexFilters()
    {
        $articles = $this->articleRepository->filter(
            (new SearchParams)
            ->setQ('e')
            ->setPage(1)
            ->setLimit(1000) // pour pas etre géné par la limit
            ,
            'en'
        );
        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnArticles = json_decode($this->client->getResponse()->getContent())->items;

        if(count($returnArticles) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }
        $this->assertEquals(count($articles), count($returnArticles));
        $this->assertEquals($articles[0]->getId(), $returnArticles[0]->id);
    }
    public function testIndexContainsOnlyArticleItems()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'q' => 'e',
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnArticles = json_decode($this->client->getResponse()->getContent())->items;

        if(count($returnArticles) === 0)
        {
            $this->fail('Le test n\'est pas probant aucune recipe ne correspond à la recherche "e"');
        }

        foreach($returnArticles as $article)
        {
            $this->assertEquals('article', $article->type);
        }
    }
    public function testIndexFilterSubCategory()
    {
        $articlesTest = $this->articleRepository->findAll();
        $subCategory = $articlesTest[0]->getSubCategory();

        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'subCategoryIds' => $subCategory->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnArticles = json_decode($this->client->getResponse()->getContent())->items;

        $this->assertCount($subCategory->getArticles()->count(), $returnArticles);

    }
    public function testIndexFilterSubCategoryWithMultipleSubCategories()
    {
        $articlesTest = $this->articleRepository->findAll();
        $subCategory = $articlesTest[0]->getSubCategory();
        $subCategory1 = $articlesTest[2]->getSubCategory();
        if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
        {
            $subCategory1 = $articlesTest[5]->getSubCategory();
            if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
            {
                $subCategory1 = $articlesTest[6]->getSubCategory();
                if($subCategory->getName()->getEn() === $subCategory1->getName()->getEn())
                {
                    $this->fail('le test n\'est pas probant car les deux subCategories sélectionnées sont en fait la même');
                }
            }
        }
        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'subCategoryIds' => (string)$subCategory->getId() . ',' . (string)$subCategory1->getId(),
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);
        $returnArticles = json_decode($this->client->getResponse()->getContent())->items;

        $this->assertCount(
            ($subCategory1->getArticles()->count() + $subCategory->getArticles()->count()), 
            $returnArticles
        );
    }
    public function testIndexDatabaseQueryCount()
    {
        $this->client->enableProfiler();
        
        $this->client->request('GET', $this->urlGenerator->generate('api_article_index', ['_locale' => 'en']), [
            'page' => 1,
            'limit' => 1000 // pour pas etre géné par la limit
        ]);

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertEquals(3, $dbCollector->getQueryCount());
    }
    
    //getLinkedProducts
    public function testGetLinkedProductsLimitWorks()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        if($article->getLinkedProducts()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car l\'article a moins de 2 linkedProducts');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLinkedProducts', [
            'id' => $article->getId(),
            '_locale' => 'en',
        ]), ['limit' => 1]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedProductsDatabaseQueryCount()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        if($article->getLinkedProducts()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car la Recipe a moins de 2 linkedProducts');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLinkedProducts', [
            'id' => $article->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /** 2 à soustraire pour le findEntity et getLinkedProducts ci dessus */
        /* 1 pour récupérer les products + 1 pour hydrater avec firstPicture + 1 pour hydrater avec basePackaging */
        $this->assertEquals(2 + 3, $dbCollector->getQueryCount());
    }

    //getLinkedRecipes
    public function testGetLinkedRecipesLimitWorks()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        if($article->getLinkedRecipes()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car l\'article a moins de 2 linkedRecipes');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLinkedRecipes', [
            'id' => $article->getId(),
            '_locale' => 'en',
        ]), ['limit' => 1]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }
    public function testGetLinkedRecipesDatabaseQueryCount()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        if($article->getLinkedRecipes()->count() < 2)
        {
            $this->fail('Le test n\'est pas probant car l\'article a moins de 2 linkedRecipes');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLinkedRecipes', [
            'id' => $article->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /** 2 à soustraire pour le findEntity et getLinkedProducts ci dessus */
        /* 1 pour récupérer les products et 1 pour hydrater avec firstPicture */
        $this->assertEquals(2 + 2, $dbCollector->getQueryCount());
    }

    //getLastArticles
    public function testGetLastArticlesLimitWorks()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);

        $this->assertTrue(
        count($this->articleRepository->findAll()) >= 2,
        'Le test n\'est pas probant car il y a moins de 2 articles au total'
        );
        
        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLastArticles', [
            'id' => $article->getId(),
            '_locale' => 'en',
        ]), ['limit' => 1]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data);
    }

    public function testGetLastArticlesExcludeCurrentArticle()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        
        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLastArticles', [
            'id' => $article->getId(),
            '_locale' => 'en',
        ]), ['limit' => 1000]);
        $data = json_decode($this->client->getResponse()->getContent());

        $success = true;
        foreach($data as $d)
        {
            if($d->id === $article->getId())
            {
                $this->fail('L\'article courant n\'est pas exclu de la liste des derniers articles');
            }
        }
        $this->assertTrue($success);
    }

    public function testGetLastArticlesDatabaseQueryCount()
    {
        /** @var Article */
        $article = $this->findEntity(ArticleRepository::class);
        if(count($this->articleRepository->findAll()) < 3)
        {
            $this->fail('Le test n\'est pas probant car il y a moins de 3 articles');
        }

        $this->client->enableProfiler();
        $this->client->request('GET', $this->urlGenerator->generate('api_article_getLastArticles', [
            'id' => $article->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /** 2 à soustraire pour le findEntity et findAll ci dessus */
        /* 1 pour récupérer les articles */
        $this->assertEquals(2 + 1, $dbCollector->getQueryCount());
    }
}