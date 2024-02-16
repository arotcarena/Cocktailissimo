<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Post;
use Symfony\Component\Form\FormInterface;

class PostFormSpecialHydrater 
{
    public function hydrateForm(Post $post, FormInterface $form)
    {
        //on remplit manuellement les champs du form qui correspondent aux Translatables de Ingredient
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'Title')->setData($post->getTitle()->$getLang());
           
        }
    }
}
