<?php
namespace App\Convertor;

use App\Entity\Ingredient;
use App\Convertor\ConvertorTrait;
use App\Service\PicturePathResolver;

class IngredientToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    public function __construct(
        private PicturePathResolver $picturePathResolver
    )
    {
        
    }

    /**
     * @param Ingredient|Ingredient[] $data
     * @return array
     */
    public function convert($data, string $lang): array
    {
        $this->lang = $lang;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(Ingredient $ingredient): array 
    {
        $getLang = 'get' . ucfirst($this->lang);
        
        return [
            'id' => $ingredient->getId(),
            'name' => $ingredient->getName()->$getLang(),
            'picture' => [
                'path' => $this->picturePathResolver->getPath($ingredient->getPicture(), 'small_index'),
                'alt' => $this->picturePathResolver->getAlt($ingredient->getPicture(), $this->lang)
            ]
        ];
    }
}