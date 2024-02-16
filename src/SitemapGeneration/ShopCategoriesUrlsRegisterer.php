<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use App\Repository\CategoryRepository;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ShopCategoriesUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'shop_categories';

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
        $categories = $this->categoryRepository->findProductCategoriesForSitemap();
        $subCategories = [];
        foreach($categories as $category)
        {
            $subCategories = array_merge($subCategories, $category->getSubCategories()->toArray());

            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $categoryUrl = new UrlConcrete(
                    $urlGenerator->generate('category_show', [
                        '_locale' => $lang,
                        'slug' => $category->getSlug()->$getLang()
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($categoryUrl);
                $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/categories/' . $category->getPicture()));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }

        /** @var SubCategory $subCategory */
        foreach($subCategories as $subCategory)
        {
            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $subCategoryUrl = new UrlConcrete(
                    $urlGenerator->generate('subCategory_show', [
                        '_locale' => $lang,
                        'categorySlug' => $subCategory->getParentCategory()->getSlug()->$getLang(),
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