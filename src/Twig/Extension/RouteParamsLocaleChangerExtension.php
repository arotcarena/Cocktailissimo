<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\RouteParamsLocaleChangerExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class RouteParamsLocaleChangerExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('route_params_locale_changer', [RouteParamsLocaleChangerExtensionRuntime::class, 'changeLocale']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('route_params_locale_changer', [RouteParamsLocaleChangerExtensionRuntime::class, 'changeLocale']),
        ];
    }
}
