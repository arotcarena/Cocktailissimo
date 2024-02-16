<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\DataFixtures\Blog\ArticleFixtures;
use App\Entity\Article;
use App\Tests\Utils\FixturesTrait;
use App\Entity\SubCategory;
use App\Repository\ArticleRepository;
use App\Tests\UnitAndIntegration\Entity\EntityTest;

/**
 * @group Entity
 */
class ArticleTest extends EntityTest
{
    use FixturesTrait;

    public function testValidArticle()
    {
        $this->assertHasErrors(0, $this->createValidArticle());
    }
    public function testInvalidBlankRef()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidArticle()->setRef('')
        );
    }
    public function testInvalidNotUniqueRef()
    {
        $this->loadFixtures([ArticleFixtures::class]);
        $article = $this->findEntity(ArticleRepository::class);
        $this->assertHasErrors(
            1,
            $this->createValidArticle()->setRef($article->getRef())
        );
    }

    public function testInvalidNoSubCategory()
    {
        $this->assertHasErrors(
            1, 
            (new Article)->setRef('ref')
        );
    }

    private function createValidArticle(): Article
    {
        return (new Article)
                ->setRef('ref')
                ->setSubCategory(new SubCategory)
            ;
    }
}