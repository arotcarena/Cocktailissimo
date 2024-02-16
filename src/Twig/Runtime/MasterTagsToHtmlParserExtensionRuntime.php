<?php

namespace App\Twig\Runtime;

use App\Parser\LinkTagsParser;
use App\Parser\UrlCustomTagsConvertor;
use Twig\Extension\RuntimeExtensionInterface;

class MasterTagsToHtmlParserExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private LinkTagsParser $linkTagsParser
    )
    {
        
    }

    /**
     * @param string $text
     * @param string $lang (uniquement dans le cas d'un lien mort pour générer un lien vers la page erreur dans la bonne locale)
     * @return string
     */
    public function parse($text, $lang): string
    {
        if(!$text || !is_string($text))
        {
            return '';
        }
        return $this->linkTagsParser->masterToHtml($text, $lang);
    }
}
