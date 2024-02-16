<?php
namespace App\Service\GeolocCountry;

use App\Config\SecurityConfig;
use Exception;
use GeoIp2\WebService\Client;

class GeoIpCountryResolver
{
    public function resolve(string $ip): ?string
    {
        // le param 3 "locales", sert seulement à déterminer la langue de traduction si l'on souhaite afficher le nom entier du pays
        $client = new Client(
            SecurityConfig::MAXMIND_GEOIP_ACCOUNT_ID, 
            SecurityConfig::MAXMIND_GEOIP_LICENSE_KEY,
            ['en'], 
            ['host' => 'geolite.info']
        );
        try
        {
            $record = $client->country($ip);
            return $record->country->isoCode;
        }
        catch(Exception $e)
        {
            return null;
        }
    }
}