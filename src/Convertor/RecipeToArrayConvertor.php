<?php
namespace App\Convertor;

use App\Entity\Recipe;
use App\Convertor\ConvertorTrait;
use App\Service\PicturePathResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class RecipeToArrayConvertor
{
    use ConvertorTrait;

    private string $lang = 'en';

    private string $img_filter;

    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private PicturePathResolver $picturePathResolver
    )
    {
        
    }

    /**
     * @param Recipe[]|Recipe $data
     * @return array
     */
    public function convert($data, string $lang, string $img_filter = 'index'): array 
    {
        $this->lang = $lang;

        $this->img_filter = $img_filter;

        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Recipe $recipe
     * @return array
     */
    private function convertOne($recipe): array 
    {
        $getLang = 'get' . ucfirst($this->lang);

        return [
            'id' => $recipe->getId(),
            'type' => 'recipe',
            'title' => $recipe->getTitle()->$getLang(),
            'target' => $this->urlGenerator->generate('recipe_show', [
                'slug' => $recipe->getSlug()->$getLang(),
                'ref' => $recipe->getRef(),
                '_locale' => $this->lang
            ]),
            'picture' => [
                'path' => $this->picturePathResolver->getPath($recipe->getPicture(), $this->img_filter),
                'alt' => $this->picturePathResolver->getAlt($recipe->getPicture(), $this->lang)
            ],
            'createdAt' => $recipe->getCreatedAt()->format('d/m/Y'),
            'ingredients' => $this->resolveIngredientNames($recipe->getIngredientNames())
        ];
    }  
    
    /**
         * Undocumented function
         *
         * @param TranslatableString[] $ingredientNames
         * @return array
         */
        private function resolveIngredientNames($ingredientNames): array 
        {
            $getLang = 'get' . ucfirst($this->lang);
            $transNames = [];
            $i = 0;
            foreach($ingredientNames as $ingredientName)
            {
                if($i >= 3) 
                {
                    $transNames[] = '...';
                    return $transNames;
                }
                $transNames[] = $ingredientName->$getLang();
                $i++;
            }
            return $transNames;
        }
    
}
