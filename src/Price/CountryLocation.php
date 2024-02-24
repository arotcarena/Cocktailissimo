<?php
namespace App\Price;

use App\Config\SiteConfig;
use App\Service\GeolocCountry\GeolocCountryStorage;

class CountryLocation
{
    public function __construct(
        private GeolocCountryStorage $geolocCountryStorage
    )
    {
        
    }

    /**
     * return stored geoloc country or default geolocation country
     */
    public function getCountry(): string
    {
        return $this->geolocCountryStorage->get() ?: SiteConfig::DEFAULT_GEOLOCATION_COUNTRY;
    }
}