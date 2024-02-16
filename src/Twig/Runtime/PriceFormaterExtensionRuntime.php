<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use Twig\Extension\RuntimeExtensionInterface;

class PriceFormaterExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function format(
        ?int $price, 
        string $lang = SiteConfig::DEFAULT_LOCALE, 
        string $currencySymbol = SiteConfig::DEFAULT_CURRENCY_SYMBOL
    )
    {
        if(!$price)
        {
            $price = 0;
        }
        else
        {
            //on veut le prix en euros et pas en cts
            $price = $price / 100;
        }

        //on formatte selon la locale
        if($lang === 'en')
        {
            return $currencySymbol . number_format($price, 2, '.', ',');
        }
        return number_format($price, 2, ',', ' ') . ' ' . $currencySymbol;
    }
}
