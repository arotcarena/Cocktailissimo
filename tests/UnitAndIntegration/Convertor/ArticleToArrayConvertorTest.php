<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Tests\Utils\FixturesTrait;
use App\Service\PicturePathResolver;
use App\Repository\ArticleRepository;
use App\Convertor\ArticleToArrayConvertor;
use App\DataFixtures\Blog\ArticleFixtures;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group Convertor
 */
class ArticleToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private UrlGeneratorInterface $urlGenerator;

    private PicturePathResolver $picturePathResolver;

    private ArticleToArrayConvertor $articleConvertor;

    private ArticleRepository $articleRepository;

    public function setUp(): void
    {
        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);
        $this->picturePathResolver = static::getContainer()->get(PicturePathResolver::class);
        $this->articleConvertor = static::getContainer()->get(ArticleToArrayConvertor::class);
        $this->articleRepository = static::getContainer()->get(ArticleRepository::class);

        $this->loadFixtures([ArticleFixtures::class]);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'en');

        $this->assertEquals(
            ['id', 'type', 'title', 'subtitle', 'target', 'picture', 'createdAt'], 
            array_keys($returnArticle)
        );
        $this->assertEquals(
            ['path', 'alt'],
            array_keys($returnArticle['picture'])
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $articles = $this->articleRepository->findAll();
        $returnArticle = $this->articleConvertor->convert($articles, 'en')[0];

        $this->assertEquals(
            ['id', 'type', 'title', 'subtitle', 'target', 'picture', 'createdAt'], 
            array_keys($returnArticle)
        );
        $this->assertEquals(
            ['path', 'alt'],
            array_keys($returnArticle['picture'])
        );
    }
  
    public function testReturnCorrectArticlesCount()
    {
        $articles = $this->articleRepository->findAll();
        $returnArticles = $this->articleConvertor->convert($articles, 'en');

        $this->assertCount(count($articles), $returnArticles);
    }
    public function testContainsCorrectTitle()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'en');

        $this->assertEquals(
            $article->getTitle()->getEn(),
            $returnArticle['title']
        );
    }
    public function testContainsCorrectTitleLang()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'fr');

        $this->assertEquals(
            $article->getTitle()->getFr(),
            $returnArticle['title']
        );
    }
    public function testContainsCorrectTarget()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $url = $this->urlGenerator->generate('article_show', [
            'slug' => $article->getSlug()->getEn(),
            'ref' => $article->getRef(),
            'subCategorySlug' => $article->getSubCategory()->getSlug()->getEn(),
            '_locale' => 'en'
        ]);

        $returnArticle = $this->articleConvertor->convert($article, 'en');

        $this->assertEquals(
            $url, 
            $returnArticle['target']
        );
    }
    public function testContainsCorrectTargetLocale()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $url = $this->urlGenerator->generate('article_show', [
            'slug' => $article->getSlug()->getFr(),
            'ref' => $article->getRef(),
            'subCategorySlug' => $article->getSubCategory()->getSlug()->getFr(),
            '_locale' => 'fr'
        ]);

        $returnArticle = $this->articleConvertor->convert($article, 'fr');

        $this->assertEquals(
            $url, 
            $returnArticle['target']
        );
    }

    public function testContainsCorrectPicturePath()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'en');

        $this->assertEquals(
            $this->picturePathResolver->getPath($article->getPicture(), 'index'),
            $returnArticle['picture']['path']
        );
    }

    public function testContainsCorrectPictureAlt()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'en');

        $this->assertEquals(
            $this->picturePathResolver->getAlt($article->getPicture(), 'en'),
            $returnArticle['picture']['alt']
        );
    }

    public function testContainsCorrectPictureAltLang()
    {
        $article = $this->findEntity(ArticleRepository::class);
        $returnArticle = $this->articleConvertor->convert($article, 'fr');

        $this->assertEquals(
            $this->picturePathResolver->getAlt($article->getPicture(), 'fr'),
            $returnArticle['picture']['alt']
        );
    }
}
