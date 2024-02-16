<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\IngredientQuantity;

class IngredientQuantityToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    public function __construct(
        private IngredientToArrayConvertor $ingredientToArrayConvertor,
    )
    {
        
    }

    /**
     * @param IngredientQuantity|IngredientQuantity[] $data
     * @return array
     */
    public function convert($data, string $lang): array
    {
        $this->lang = $lang;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(IngredientQuantity $ingredientQuantity): array 
    {
        return [
            'id' => $ingredientQuantity->getId(),
            'ingredient' => $this->ingredientToArrayConvertor->convert($ingredientQuantity->getIngredient(), $this->lang),
            'quantity' => [
                'en' => $ingredientQuantity->getQuantity()->getEn(),
                'fr' => $ingredientQuantity->getQuantity()->getFr(),
                'es' => $ingredientQuantity->getQuantity()->getEs(),
                'it' => $ingredientQuantity->getQuantity()->getIt(),
            ]
        ];
    }
}