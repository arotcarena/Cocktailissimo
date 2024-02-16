<?php

namespace App\Twig\Runtime;

use Twig\Extension\RuntimeExtensionInterface;

class ExcerptMakerExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function excerpt(string $text, int $words = 20): string
    {
        $parts = explode(' ', $text);
        if(count($parts) > $words)
        {
            $newParts = array_splice($parts, 0, $words);
            $string = implode(' ', $newParts);
            //on supprime les balises html éventuellement présentes (pour éviter qu'une balise reste ouverte)
            $string = str_replace(['<p>', '</p>', '[/b]', '[b]', '[/u]', '[u]'], '', $string);
            //on supprime les points, virgules etc... en fin de phrase
            return trim($string, " ,.:;?!\n\r\t\v\0") . '...';
        }
        return $text;
    }
}
