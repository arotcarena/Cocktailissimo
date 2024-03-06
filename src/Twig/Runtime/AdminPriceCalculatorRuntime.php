<?php

namespace App\Twig\Runtime;

use App\Price\Vat\VatResolver;
use Twig\Extension\RuntimeExtensionInterface;

class AdminPriceCalculatorRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private VatResolver $vatResolver
    )
    {
        // Inject dependencies if needed
    }

    public function calcMarginRate(int $marginAmount, int $supplyPriceHT): int
    {
        return ($marginAmount / $supplyPriceHT) * 100;
    }

    public function getFrPriceTTC(int $priceHT, string $vatLevel): int
    {
        $vatRate = $this->vatResolver->getRate('FR', $vatLevel);
        $vatAmount = (int)($priceHT * $vatRate / 1000);
        return $priceHT + $vatAmount;
    }
}
