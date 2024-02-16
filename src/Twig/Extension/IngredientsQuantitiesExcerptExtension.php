<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\IngredientsQuantitiesExcerptExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class IngredientsQuantitiesExcerptExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('ingredients_quantities_excerpt', [IngredientsQuantitiesExcerptExtensionRuntime::class, 'excerpt']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('ingredients_quantities_excerpt', [IngredientsQuantitiesExcerptExtensionRuntime::class, 'excerpt']),
        ];
    }
}
