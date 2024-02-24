<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\DateTimeFormaterExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class DateTimeFormaterExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('date_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateGeoFormat']),
            new TwigFilter('datetime_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateTimeGeoFormat']),
            new TwigFilter('datetimesecond_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateTimeSecondGeoFormat']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('date_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateGeoFormat']),
            new TwigFunction('datetime_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateTimeGeoFormat']),
            new TwigFunction('datetimesecond_geoformat', [DateTimeFormaterExtensionRuntime::class, 'dateTimeSecondGeoFormat']),
        ];
    }
}
