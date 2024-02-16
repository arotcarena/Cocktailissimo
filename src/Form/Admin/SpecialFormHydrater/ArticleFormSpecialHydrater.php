<?php
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Article;
use App\Image\PictureUploader;
use Symfony\Component\Form\FormInterface;

class ArticleFormSpecialHydrater 
{

    public function __construct(
        private PictureUploader $pictureUploader
    )
    {

    }

    public function hydrateForm(Article $article, FormInterface $form)
    {
        $form->get('picture')->setData(
            $this->pictureUploader->getPictureBase64($article->getPicture())
        );

        //on remplit manuellement les champs non mappés
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'Title')->setData($article->getTitle()->$getLang());

            $form->get($lang.'Subtitle')->setData($article->getSubtitle()->$getLang());
            
            $form->get($lang.'Slug')->setData($article->getSlug()->$getLang());
            
            if($article->getMetaDescription())
            {
                $form->get($lang.'MetaDescription')->setData($article->getMetaDescription()->$getLang());
            }

            $form->get($lang.'HtmlContent')->setData($article->getHtmlContent()->$getLang());

            if($picture = $article->getPicture())
            {
                $form->get($lang.'Alt')->setData($picture->getAlt()->$getLang());
            }
        }
    }
}
