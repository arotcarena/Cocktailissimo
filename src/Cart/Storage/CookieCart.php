<?php
namespace App\Cart\Storage;

use App\Config\SiteConfig;

class CookieCart
{
    public function get(): array
    {
        return isset($_COOKIE['cart']) ? (array)json_decode($_COOKIE['cart']): [];
    }

    public function set(array $cart)
    {
        $options = [
            'expires' => time() + 3600*24*30*6,
            'path' => '/',
            'domain' => SiteConfig::SITE_DOMAIN,
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Lax'
        ];

        // //DELETE FOR PROD // ONLY FOR FUNCTIONAL TEST
        // if($_SERVER['APP_ENV'] === 'test')
        // {
        //     return;
        // }
        setcookie('cart', json_encode($cart), $options);
    }
}