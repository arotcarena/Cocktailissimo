<?php
namespace App\Price;

use App\Config\SiteConfig;
use Symfony\Component\HttpFoundation\RequestStack;

class CountryLocation
{
    public function __construct(
        private RequestStack $requestStack
    )
    {
        
    }

    public function getCountry(): string
    {
        return $this->requestStack->getSession()->get('country', SiteConfig::DEFAULT_GEOLOCATION_COUNTRY);
    }
}