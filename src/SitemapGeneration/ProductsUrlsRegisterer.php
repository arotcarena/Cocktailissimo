<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use App\Entity\User;
use App\Repository\ProductRepository;
use App\Service\PicturePathResolver;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ProductsUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'products';

    public function __construct(
        private ProductRepository $productRepository,
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
        $products = $this->productRepository->findAllForSitemap();

        foreach($products as $product)
        {
            //si pas de logo ce sera l'image par défaut
            $picturePath = $this->picturePathResolver->getPath(
                $product->getFirstPicture(), 'small_index'
            );

            $slug = $product->getSlug();
            $categorySlug = $product->getCategory()->getSlug();
            $subCategorySlug = $product->getSubCategory()->getSlug();
            $publicRef = $product->getBasePublicRef();

            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);

                $url = new UrlConcrete(
                    $urlGenerator->generate('product_show', [
                        '_locale' => $lang,
                        'slug' => $slug->$getLang(),
                        'categorySlug' => $categorySlug->$getLang(),
                        'subCategorySlug' => $subCategorySlug->$getLang(),
                        'publicRef' => $publicRef
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