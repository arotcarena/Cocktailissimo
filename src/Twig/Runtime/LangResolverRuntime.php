<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use Twig\Extension\RuntimeExtensionInterface;

class LangResolverRuntime implements RuntimeExtensionInterface
{
    public function resolve($value)
    {
        $lang = explode('/', $value)[1];
        if(in_array($lang, SiteConfig::SUPPORTED_LOCALES))
        {
            return $lang;
        }
        return SiteConfig::DEFAULT_LOCALE;
    }
}
