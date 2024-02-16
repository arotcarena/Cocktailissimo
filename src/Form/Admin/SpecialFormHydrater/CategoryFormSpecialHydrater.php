<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Category;
use Symfony\Component\Form\FormInterface;

class CategoryFormSpecialHydrater 
{
    public function hydrateForm(Category $category, FormInterface $form)
    {
        //on remplit manuellement les champs du form qui correspondent aux Translatables de Category
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            if($category->getMetaDescription())
            {
                $form->get($lang.'MetaDescription')->setData($category->getMetaDescription()->$getLang());
            }
            if($category->getShortDescription())
            {
                $form->get($lang.'ShortDescription')->setData($category->getShortDescription()->$getLang());
            }
            if($category->getLongHtmlDescription())
            {
                $form->get($lang.'LongHtmlDescription')->setData($category->getLongHtmlDescription()->$getLang());
            }
        }
    }
}
