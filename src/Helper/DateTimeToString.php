<?php
namespace App\Helper;

use App\Config\SiteConfig;
use DateTime;
use DateTimeImmutable;

class DateTimeToString
{
    /**
     * @param DateTimeImmutable|DateTime $dateTime
     * @param string $lang
     * @return void
     */
    public function getDateString($dateTime, string $lang = SiteConfig::DEFAULT_LOCALE)
    {
        if($lang === 'en')
        {
            return $dateTime->format('m/d/Y');
        }
        return $dateTime->format('d/m/Y');
    }
}