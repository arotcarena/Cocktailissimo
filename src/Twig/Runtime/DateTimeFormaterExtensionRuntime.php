<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use App\Service\DateTimeZone\DateTimeZoneResolver;
use DateTime;
use DateTimeImmutable;
use DateTimeZone;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\RuntimeExtensionInterface;

class DateTimeFormaterExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private DateTimeZoneResolver $dateTimeZoneResolver,
        private TranslatorInterface $translator
    )
    {
    }

    /**
     * @param DateTime|DateTimeImmutable $dateTime
     * @param string $forceLang
     * @return string
     */
    public function dateGeoFormat($dateTime, $forceLang = null)
    {
        $dateTime->setTimezone(new DateTimeZone($this->dateTimeZoneResolver->resolve()));

        $lang = $forceLang ?: $this->translator->getLocale();
        if($lang === 'en')
        {
            return $dateTime->format('Y/m/d');
        }
        return $dateTime->format('d/m/Y');
    }

    /**
     * @param DateTime|DateTimeImmutable $dateTime
     * @param string $forceLang
     * @return string
     */
    public function dateTimeGeoFormat($dateTime, $forceLang = null)
    {
        $zoneDateTime = $dateTime->setTimezone(
            new DateTimeZone($this->dateTimeZoneResolver->resolve())
        );

        $lang = $forceLang ?: $this->translator->getLocale();
        if($lang === 'en')
        {
            return $zoneDateTime->format('Y/m/d H:i');
        }
        return $zoneDateTime->format('d/m/Y H:i');
    }

    /**
     * @param DateTime|DateTimeImmutable $dateTime
     * @param string $forceLang
     * @return string
     */
    public function dateTimeSecondGeoFormat($dateTime, $forceLang = null)
    {
        $zoneDateTime = $dateTime->setTimezone(
            new DateTimeZone($this->dateTimeZoneResolver->resolve())
        );

        $lang = $forceLang ?: $this->translator->getLocale();
        if($lang === 'en')
        {
            return $zoneDateTime->format('Y/m/d H:i:s');
        }
        return $zoneDateTime->format('d/m/Y H:i:s');
    }
}
