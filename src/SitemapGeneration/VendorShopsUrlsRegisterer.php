<?php
namespace App\SitemapGeneration;

use App\Config\SiteConfig;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\PicturePathResolver;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\GoogleImage;
use Presta\SitemapBundle\Sitemap\Url\GoogleImageUrlDecorator;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class VendorShopsUrlsRegisterer
{
    public const SITEMAP_DOMAIN = 'vendor_shops';

    public function __construct(
        private UserRepository $userRepository,
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
        /** @var User[] */
        $vendors = $this->userRepository->createQueryBuilder('u')
                                        ->select('u', 'comp', 'compLogo')
                                        ->join('u.company', 'comp')
                                        ->leftJoin('comp.logo', 'compLogo')
                                        ->andWhere('u.roles LIKE :ROLE_VENDOR')
                                        ->andWhere('u.stripeConfirmed = 1')
                                        ->setParameter('ROLE_VENDOR', '%ROLE_VENDOR%')
                                        ->getQuery()
                                        ->getResult()
                                        ;

        foreach($vendors as $vendor)
        {
            //si pas de logo ce sera l'image par défaut
            $logoPath = $this->picturePathResolver->getPath($vendor->getCompany()->getLogo(), 'small_index');
            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $url = new UrlConcrete(
                    $urlGenerator->generate('vendorShop', [
                        '_locale' => $lang,
                        'companySlug' => $vendor->getCompany()->getSlug()
                    ], UrlGeneratorInterface::ABSOLUTE_URL),
                    null,
                    null,
                    0.9
                );
                $decoratedUrl = new GoogleImageUrlDecorator($url);
                $decoratedUrl->addImage(new GoogleImage($logoPath));
                $urlContainer->addUrl($decoratedUrl, self::SITEMAP_DOMAIN . '_' . $lang);
            }
        }
    }
}