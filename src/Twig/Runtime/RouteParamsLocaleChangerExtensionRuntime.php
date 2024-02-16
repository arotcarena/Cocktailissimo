<?php

namespace App\Twig\Runtime;

use Twig\Extension\RuntimeExtensionInterface;

class RouteParamsLocaleChangerExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function changeLocale(array $routeParams, string $lang)
    {
        $routeParams['_locale'] = $lang;
        return $routeParams;
    }
}
