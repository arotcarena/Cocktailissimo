<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Ingredient;
use App\Image\PictureUploader;
use Symfony\Component\Form\FormInterface;

class IngredientFormSpecialHydrater 
{
    public function __construct(
        private PictureUploader $pictureUploader
    )
    {
        
    }

    public function hydrateForm(Ingredient $ingredient, FormInterface $form)
    {
        $form->get('picture')->setData(
            $this->pictureUploader->getPictureBase64($ingredient->getPicture())
        );

        //on remplit manuellement les champs non mappés
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'Name')->setData($ingredient->getName()->$getLang());

            if($picture = $ingredient->getPicture())
            {
                $form->get($lang.'Alt')->setData($picture->getAlt()->$getLang());
            }
        }
    }
}
