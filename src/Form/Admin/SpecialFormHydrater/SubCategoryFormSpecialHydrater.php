<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\SubCategory;
use Symfony\Component\Form\FormInterface;

class SubCategoryFormSpecialHydrater 
{
    public function hydrateForm(SubCategory $subCategory, FormInterface $form)
    {
        //on remplit manuellement les champs du form qui correspondent aux Translatables de Category
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            if($subCategory->getMetaDescription())
            {
                $form->get($lang.'MetaDescription')->setData($subCategory->getMetaDescription()->$getLang());
            }
            if($subCategory->getShortDescription())
            {
                $form->get($lang.'ShortDescription')->setData($subCategory->getShortDescription()->$getLang());
            }
            if($subCategory->getLongHtmlDescription())
            {
                $form->get($lang.'LongHtmlDescription')->setData($subCategory->getLongHtmlDescription()->$getLang());
            }
        }
    }
}
