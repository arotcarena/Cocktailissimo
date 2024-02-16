<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Recipe;
use App\Image\PictureUploader;
use App\Service\PicturePathResolver;
use Symfony\Component\Form\FormInterface;

class RecipeFormSpecialHydrater 
{
    public function __construct(
        private PictureUploader $pictureUploader,
        private PicturePathResolver $picturePathResolver
    )
    {
        
    }

    public function hydrateForm(Recipe $recipe, FormInterface $form)
    {
        $form->get('picture')->setData(
            $this->pictureUploader->getPictureBase64($recipe->getPicture())
        );

        //ingredientsQuantities
        $ingredientsQuantitiesArray = [];
        foreach($recipe->getIngredientsQuantities() as $ingredientQuantity)
        {
            $ingredientsQuantitiesArray[] = [
                'id' => $ingredientQuantity->getId(),
                'ingredient' => [
                    'id' => $ingredientQuantity->getIngredient()->getId(),
                    'name' => $ingredientQuantity->getIngredient()->getName()->getFr(), //seulement pour affichage
                    'picture' => [
                        'path' => $this->picturePathResolver->getPath($ingredientQuantity->getIngredient()->getPicture(), 'small_index') //seulement pour affichage
                    ]
                ],
                'quantity' => [
                    'en' => $ingredientQuantity->getQuantity()->getEn(),
                    'fr' => $ingredientQuantity->getQuantity()->getFr(),
                    'es' => $ingredientQuantity->getQuantity()->getEs(),
                    'it' => $ingredientQuantity->getQuantity()->getIt(),
                ]
            ];
        }
        $form->get('ingredientsQuantities')->setData(json_encode($ingredientsQuantitiesArray));

        
        //on remplit manuellement les champs non mappés
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'Title')->setData($recipe->getTitle()->$getLang());
            
            $form->get($lang.'Slug')->setData($recipe->getSlug()->$getLang());
            
            if($recipe->getMetaDescription())
            {
                $form->get($lang.'MetaDescription')->setData($recipe->getMetaDescription()->$getLang());
            }

            $form->get($lang.'HtmlContent')->setData($recipe->getHtmlContent()->$getLang());

            if($picture = $recipe->getPicture())
            {
                $form->get($lang.'Alt')->setData($picture->getAlt()->$getLang());
            }
        }
    }
}
