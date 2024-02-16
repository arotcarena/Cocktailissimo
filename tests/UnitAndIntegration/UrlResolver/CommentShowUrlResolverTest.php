<?php 
namespace App\Tests\UnitAndIntegration\UrlResolver;

use App\Entity\Article;
use App\Entity\Recipe;
use App\Entity\Comment;
use App\Entity\SubCategory;
use App\Entity\TranslatableString;
use App\UrlResolver\CommentShowUrlResolver;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CommentShowUrlResolverTest extends KernelTestCase
{
    private UrlGeneratorInterface $urlGenerator;

    private CommentShowUrlResolver $commentShowUrlResolver;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);

        $this->commentShowUrlResolver = new CommentShowUrlResolver($this->urlGenerator);
    }

    public function testWithCommentHavingNoOwner()
    {
        $this->assertNull($this->commentShowUrlResolver->resolve(new Comment));
    }
    public function testWithCommentHavingArticleAsOwner()
    {
        $article = $this->createArticle();

        $this->assertEquals(
            $this->urlGenerator->generate('article_show', [
                'ref' => $article->getRef(),
                'slug' => $article->getSlug()->getEn(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getEn(),
                '_locale' => 'en'
            ]),
            $this->commentShowUrlResolver->resolve(
                (new Comment)
                ->setArticle($article)
                ->setLang('en')
            )
        );
    }
    public function testWithCommentHavingRecipeAsOwner()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getEn(),
                '_locale' => 'en'
            ]),
            $this->commentShowUrlResolver->resolve(
                (new Comment)
                ->setRecipe($recipe)
                ->setLang('en')
            )
        );
    }
    public function testCorrectLocaleIsSet()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getFr(),
                '_locale' => 'fr'
            ]),
            $this->commentShowUrlResolver->resolve(
                (new Comment)
                ->setRecipe($recipe)
                ->setLang('fr')
            )
        );

        $article = $this->createArticle();

        $this->assertEquals(
            $this->urlGenerator->generate('article_show', [
                'ref' => $article->getRef(),
                'slug' => $article->getSlug()->getEs(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getEs(),
                '_locale' => 'es'
            ]),
            $this->commentShowUrlResolver->resolve(
                (new Comment)
                ->setArticle($article)
                ->setLang('es')
            )
        );
    }

    public function testParamForceLang()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getFr(),
                '_locale' => 'fr'
            ]),
            $this->commentShowUrlResolver->resolve(
                (new Comment)
                ->setRecipe($recipe)
                ->setLang('it'),
                'fr'
            )
        );
    }


    private function createRecipe(): Recipe
    {
        return (new Recipe)
                ->setRef('recipe')
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('recipe-slug-en')
                    ->setFr('recipe-slug-fr')
                    ->setEs('recipe-slug-es')
                    ->setIt('recipe-slug-it')
                )
            ;
    }

    private function createArticle(): Article
    {
        return (new Article)
                ->setRef('article')
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('article-slug-en')
                    ->setFr('article-slug-fr')
                    ->setEs('article-slug-es')
                    ->setIt('article-slug-it')
                )
                ->setSubCategory(
                    (new SubCategory)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('article-subCategorySlug-en')
                        ->setFr('article-subCategorySlug-fr')
                        ->setEs('article-subCategorySlug-es')
                        ->setIt('article-subCategorySlug-it')
                    )
                )
            ;
    }
}