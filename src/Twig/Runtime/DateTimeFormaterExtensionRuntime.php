<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use App\Service\DateTimeZone\DateTimeZoneResolver;
use DateTime;
use DateTimeImmutable;
use DateTimeZone;
use Twig\Extension\RuntimeExtensionInterface;

class DateTimeFormaterExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private DateTimeZoneResolver $dateTimeZoneResolver
    )
    {
    }

    /**
     * @param DateTime|DateTimeImmutable $dateTime
     * @return string
     */
    public function dateGeoFormat($dateTime, $lang = SiteConfig::DEFAULT_LOCALE)
    {
        $dateTime->setTimezone(new DateTimeZone($this->dateTimeZoneResolver->resolve()));
        if($lang === 'en')
        {
            return $dateTime->format('Y/m/d');
        }
        return $dateTime->format('d/m/Y');
    }

    /**
     * @param DateTime|DateTimeImmutable $dateTime
     * @return string
     */
    public function dateTimeGeoFormat($dateTime, $lang = SiteConfig::DEFAULT_LOCALE)
    {
        $dateTime->setTimezone(new DateTimeZone($this->dateTimeZoneResolver->resolve()));
        if($lang === 'en')
        {
            return $dateTime->format('Y/m/d H:i');
        }
        return $dateTime->format('d/m/Y H:i');
    }
}
