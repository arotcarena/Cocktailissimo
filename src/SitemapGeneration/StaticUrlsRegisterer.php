<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class StaticUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'static';

    /**
     * @param UrlContainerInterface $urlContainer
     * @param UrlGeneratorInterface $urlGenerator
     */
    public function register(UrlContainerInterface $urlContainer, UrlGeneratorInterface $urlGenerator): void
    {
        foreach([
            'home' => 1,
            'contact_becomeVendor' => 0.7,
            'search_index' => 0.7,
            'static_aPropos' => 0.4
        ] as $route => $priority)
        {
            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $url = new UrlConcrete(
                    $urlGenerator->generate($route, ['_locale' => $lang], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    $priority
                );
                $decoratedUrl = new GoogleImageUrlDecorator($url);
                $decoratedUrl->addImage(new GoogleImage(SiteConfig::SITE_URL . '/img/meta_image.jpg'));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }
    }
}