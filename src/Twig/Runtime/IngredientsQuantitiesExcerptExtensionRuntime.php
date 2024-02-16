<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use App\Entity\IngredientQuantity;
use Twig\Extension\RuntimeExtensionInterface;

class IngredientsQuantitiesExcerptExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private ExcerptMakerExtensionRuntime $excerptMaker
    )
    {
        // Inject dependencies if needed
    }

    /**
     * @param IngredientQuantity[] $ingredientsQuantities
     * @return void
     */
    public function excerpt($ingredientsQuantities, string $locale = SiteConfig::DEFAULT_LOCALE, int $words = 20)
    {
        $getLang = 'get' . ucfirst($locale);
        $iqStrings = [];
        foreach($ingredientsQuantities as $ingredientQuantity)
        {
            $iqStrings[] = $ingredientQuantity->getQuantity()->$getLang() . ' ' . $ingredientQuantity->getIngredient()->getName()->$getLang();
        }
        $ingredientsQuantitiesString = implode(', ', $iqStrings);

        return $this->excerptMaker->excerpt($ingredientsQuantitiesString, $words);
    }
}
