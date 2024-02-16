<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use App\Entity\Article;
use App\Entity\Recipe;
use App\Repository\ArticleRepository;
use App\Repository\RecipeRepository;
use App\Service\PicturePathResolver;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class BlogItemsUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'blog_items';

    public function __construct(
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private PicturePathResolver $picturePathResolver
    )
    {
        
    }

      /**
     * @param UrlContainerInterface $urlContainer
     * @param UrlGeneratorInterface $urlGenerator
     */
    public function register(UrlContainerInterface $urlContainer, UrlGeneratorInterface $urlGenerator): void
    {
        //RECIPES
        /** @var Recipe[] */
        $recipes = $this->recipeRepository->createQueryBuilder('r')
                                            ->select('r', 'slug', 'pic')
                                            ->join('r.slug', 'slug')
                                            ->leftJoin('r.picture', 'pic')
                                            ->getQuery()
                                            ->getResult()
                                            ;
        foreach($recipes as $recipe)
        {
            $slug = $recipe->getSlug();
            $ref = $recipe->getRef();
            $picturePath = $this->picturePathResolver->getPath(
                $recipe->getPicture(), 'small_index'
            );

            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $url = new UrlConcrete(
                    $urlGenerator->generate('recipe_show', [
                        '_locale' => $lang,
                        'slug' => $slug->$getLang(),
                        'ref' => $ref
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($url);
                $decoratedUrl->addImage(new GoogleImage($picturePath));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }


        //ARTICLES
        /** @var Article[] */
        $articles = $this->articleRepository->createQueryBuilder('a')
                                            ->select('a', 'slug', 'pic', 'sc', 'scSlug')
                                            ->join('a.slug', 'slug')
                                            ->join('a.picture', 'pic')
                                            ->join('a.subCategory', 'sc')
                                            ->join('sc.slug', 'scSlug')
                                            ->getQuery()
                                            ->getResult()
                                            ;
        foreach($articles as $article)
        {
            $slug = $article->getSlug();
            $subCategorySlug = $article->getSubCategory()->getSlug();
            $ref = $article->getRef();
            $picturePath = $this->picturePathResolver->getPath(
                $article->getPicture(), 'small_index'
            );

            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $url = new UrlConcrete(
                    $urlGenerator->generate('article_show', [
                        '_locale' => $lang,
                        'slug' => $slug->$getLang(),
                        'subCategorySlug' => $subCategorySlug->$getLang(),
                        'ref' => $ref
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($url);
                $decoratedUrl->addImage(new GoogleImage($picturePath));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }
    }
}