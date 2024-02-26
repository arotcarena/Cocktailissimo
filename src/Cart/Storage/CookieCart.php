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
        //DELETE FOR PROD
        //pour éviter de faire planter les tests
        if($_SERVER['APP_ENV'] === 'test')
        {
            return;
        }

        $options = [
            'expires' => time() + 3600*24*30*6,
            'path' => '/',
            'domain' => SiteConfig::SITE_DOMAIN,
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Lax'
        ];
        
        setcookie('cart', json_encode($cart), $options);
    }
}