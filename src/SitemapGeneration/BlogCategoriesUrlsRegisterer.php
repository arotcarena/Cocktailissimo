<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use App\Repository\CategoryRepository;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class BlogCategoriesUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'blog_categories';

    public function __construct(
        private CategoryRepository $categoryRepository
    )
    {
        
    }

      /**
     * @param UrlContainerInterface $urlContainer
     * @param UrlGeneratorInterface $urlGenerator
     */
    public function register(UrlContainerInterface $urlContainer, UrlGeneratorInterface $urlGenerator): void
    {
        $recipesCategory = $this->categoryRepository->findRecipeCategoryForSitemap();
        $articlesCategory = $this->categoryRepository->findArticleCategoryForSitemap();

        //category
        foreach(SiteConfig::LANG_CHOICES as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            //recipe
            $url = new UrlConcrete(
                $urlGenerator->generate('recipe_index', [
                    '_locale' => $lang,
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                null,
                null,
                0.9
            );
            $decoratedUrl = new GoogleImageUrlDecorator($url);
            $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/categories/' . $recipesCategory->getPicture()));
            $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);

            //article
            $url = new UrlConcrete(
                $urlGenerator->generate('recipe_index', [
                    '_locale' => $lang,
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                null,
                null,
                0.9
            );
            $decoratedUrl = new GoogleImageUrlDecorator($url);
            $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/categories/' . $recipesCategory->getPicture()));
            $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
        }

        //recipeSubCategory
        /** @var SubCategory $subCategory */
        foreach($recipesCategory->getSubCategories() as $subCategory)
        {
            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $subCategoryUrl = new UrlConcrete(
                    $urlGenerator->generate('recipe_subCategoryShow', [
                        '_locale' => $lang,
                        'subCategorySlug' => $subCategory->getSlug()->$getLang()
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($subCategoryUrl);
                $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/categories/' . $subCategory->getSmallPicture()));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }

        //articleSubCategory
        /** @var SubCategory $subCategory */
        foreach($articlesCategory->getSubCategories() as $subCategory)
        {
            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $subCategoryUrl = new UrlConcrete(
                    $urlGenerator->generate('article_subCategoryShow', [
                        '_locale' => $lang,
                        'subCategorySlug' => $subCategory->getSlug()->$getLang()
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($subCategoryUrl);
                $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/categories/' . $subCategory->getSmallPicture()));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }
    }
}