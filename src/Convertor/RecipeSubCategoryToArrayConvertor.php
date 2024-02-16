<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\SubCategory;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class RecipeSubCategoryToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    /**
     * @param SubCategory[]|SubCategory $data
     * @return array
     */
    public function convert($data, string $lang = 'en'): array 
    {
        $this->lang = $lang;

        return $this->convertOneOrMore($data);
    }

    /**
     * @param SubCategory $subCategory
     * @return array
     */
    private function convertOne($subCategory): array 
    {
        $getLang = 'get' . ucfirst($this->lang);

        return [
            'id' => $subCategory->getId(),
            'type' => 'subCategory',
            'name' => $subCategory->getName()->$getLang(),
            'target' => $this->urlGenerator->generate('recipe_subCategoryShow', [
                'subCategorySlug' => $subCategory->getSlug()->$getLang(),
                '_locale' => $this->lang
            ]),
            'picture' => [
                'path' => '/img/categories/'.$subCategory->getPicture(),
                'alt' => $subCategory->getPictureAlt()->$getLang()
            ],
            'smallPicture' => [
                'path' => '/img/categories/'.$subCategory->getSmallPicture(),
                'alt' => $subCategory->getSmallPictureAlt()->$getLang()
            ]
        ];
    }  
    
}
