<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use Twig\Extension\RuntimeExtensionInterface;

class ReviewNoteFormaterExtensionRuntime implements RuntimeExtensionInterface
{
    public function format(?int $note, string $lang = SiteConfig::DEFAULT_LOCALE)
    { 
        if(!$note)
        {
            return '';
        }
        $decimalSeparator = $lang === 'en' ? '.': ',';
        $note = number_format($note / 10, 1, $decimalSeparator);
        if(explode($decimalSeparator, $note)[1] === '0')
        {
            $note = explode($decimalSeparator, $note)[0];
        }
        return $note;
    }
}
