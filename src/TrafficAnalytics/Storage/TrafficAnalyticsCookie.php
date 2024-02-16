<?php
namespace App\TrafficAnalytics\Storage;

use App\Config\SiteConfig;

class TrafficAnalyticsCookie
{
    public const TA_COOKIE = 'coc_ta';

    public function get(): ?string
    {
        return $_COOKIE[self::TA_COOKIE] ?? null;
    }

    public function set(string $cookieValue)
    {
        $options = [
            'expires' => time() + SiteConfig::TA_COOKIE_EXPIRATION_TIME,
            'path' => '/',
            'domain' => SiteConfig::SITE_DOMAIN,
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Lax'
        ];

        // //DELETE FOR PROD // ONLY FOR FUNCTIONALTEST
        // if($_SERVER['APP_ENV'] === 'test') 
        // {
        //     return;
        // }
        setcookie(self::TA_COOKIE, $cookieValue, $options);
    }
}