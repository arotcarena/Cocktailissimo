<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Highlight;
use Symfony\Component\Form\FormInterface;

class HighlightFormSpecialHydrater 
{
    public function hydrateForm(Highlight $highlight, FormInterface $form)
    {
        //on remplit manuellement les champs non mappés
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'RecipeTitle')->setData($highlight->getRecipeTitle()->$getLang());

            $form->get($lang.'RecipeDescription')->setData($highlight->getRecipeDescription()->$getLang());
        }
    }
}
