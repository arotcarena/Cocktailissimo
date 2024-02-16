<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use Twig\Extension\RuntimeExtensionInterface;

class PathToUrlConvertorRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function convertPathToUrl(string $path)
    {
        if(str_contains($path, SiteConfig::SITE_URL))
        {
            return $path;
        }
        return SiteConfig::SITE_URL . $path;
    }
}
