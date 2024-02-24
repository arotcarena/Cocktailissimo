<?php
namespace App\Service\DateTimeZone;

use App\Config\SiteConfig;
use App\Service\GeolocCountry\GeolocCountryStorage;
use DateTimeZone;

class DateTimeZoneResolver
{
    public const DEFAULT_DATETIME_ZONE = 'Europe/Paris';

    public function __construct(
        private GeolocCountryStorage $geolocCountryStorage
    )
    {
        
    }

    public function resolve(): string 
    {
        $country = $this->geolocCountryStorage->get() ?: SiteConfig::DEFAULT_GEOLOCATION_COUNTRY;
        
        $result = DateTimeZone::listIdentifiers(DateTimeZone::PER_COUNTRY, $country);

        return $result[0] ?? self::DEFAULT_DATETIME_ZONE;
    }
}