<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\AdminPriceCalculatorRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AdminPriceCalculatorExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('fr_price_ttc', [AdminPriceCalculatorRuntime::class, 'getFrPriceTTC']),
            new TwigFilter('calc_margin_rate', [AdminPriceCalculatorRuntime::class, 'calcMarginRate']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('fr_price_ttc', [AdminPriceCalculatorRuntime::class, 'getFrPriceTTC']),
            new TwigFunction('calc_margin_rate', [AdminPriceCalculatorRuntime::class, 'calcMarginRate']),
        ];
    }
}
