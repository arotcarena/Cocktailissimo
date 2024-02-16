<?php

namespace App\EventSubscriber;

use App\SitemapGeneration\BlogCategoriesUrlsRegisterer;
use App\SitemapGeneration\BlogItemsUrlsRegisterer;
use App\SitemapGeneration\ProductsUrlsRegisterer;
use App\SitemapGeneration\ShopCategoriesUrlsRegisterer;
use App\SitemapGeneration\StaticUrlsRegisterer;
use App\SitemapGeneration\VendorShopsUrlsRegisterer;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Presta\SitemapBundle\Event\SitemapPopulateEvent;

class SitemapSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private StaticUrlsRegisterer $staticUrlsRegisterer,
        private ShopCategoriesUrlsRegisterer $shopCategoriesUrlsRegisterer,
        private BlogCategoriesUrlsRegisterer $blogCategoriesUrlRegisterer,
        private VendorShopsUrlsRegisterer $vendorShopsUrlsRegisterer,
        private ProductsUrlsRegisterer $productsUrlsRegisterer,
        private BlogItemsUrlsRegisterer $blogItemsUrlsRegisterer
    )
    {

    }

    public static function getSubscribedEvents()
    {
        return [
            SitemapPopulateEvent::class => 'populate',
        ];
    }

    /**
     * @param SitemapPopulateEvent $event
     */
    public function populate(SitemapPopulateEvent $event): void
    {
        //static
        $this->staticUrlsRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
        //shop_categories
        //WITHOUT_SHOP // à décommenter
        // $this->shopCategoriesUrlsRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
        //blog_categories
        $this->blogCategoriesUrlRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
        //vendor_shops
        //WITHOUT_SHOP // à décommenter
        // $this->vendorShopsUrlsRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
        //products
        //WITHOUT_SHOP // à décommenter
        // $this->productsUrlsRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
        //blog_items
        $this->blogItemsUrlsRegisterer->register($event->getUrlContainer(), $event->getUrlGenerator());
    }
}