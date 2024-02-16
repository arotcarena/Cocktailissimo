<?php
namespace App\Persister;

use App\Entity\Article;
use App\Entity\TranslatableText;
use App\Entity\TranslatableString;
use App\Helper\DateTimeGenerator;
use App\Image\PictureUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;
use App\Repository\IngredientQuantityRepository;
use Symfony\Bundle\SecurityBundle\Security;

class ArticlePersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private PictureUploader $pictureUploader,
        private DateTimeGenerator $dateTimeGenerator,
        private IngredientQuantityRepository $ingredientQuantityRepository,
        private Security $security
    )
    {
        
    }

    public function create(Article $article, FormInterface $form): void
    {
        //un seul champ mappé : subCategory

        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(), 
            'article.jpg'
        );

        if($picture)
        {
            $picture->setAlt(
                (new TranslatableString)
                ->setEn($form->get('enAlt')->getData())
                ->setFr($form->get('frAlt')->getData())
                ->setEs($form->get('esAlt')->getData())
                ->setIt($form->get('itAlt')->getData())
            );
            $article->setPicture($picture);
        }


        $article 
        ->setTitle(
            (new TranslatableString)
            ->setEn($form->get('enTitle')->getData())
            ->setFr($form->get('frTitle')->getData())
            ->setEs($form->get('esTitle')->getData())
            ->setIt($form->get('itTitle')->getData())
        )
        ->setSubtitle(
            (new TranslatableString)
            ->setEn($form->get('enSubtitle')->getData())
            ->setFr($form->get('frSubtitle')->getData())
            ->setEs($form->get('esSubtitle')->getData())
            ->setIt($form->get('itSubtitle')->getData())
        )
        ->setSlug(
            (new TranslatableString)
            ->setEn($form->get('enSlug')->getData())
            ->setFr($form->get('frSlug')->getData())
            ->setEs($form->get('esSlug')->getData())
            ->setIt($form->get('itSlug')->getData())
        )
        ->setMetaDescription(
            (new TranslatableString)
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
        )
        ->setHtmlContent(
            (new TranslatableText)
            ->setEn($form->get('enHtmlContent')->getData())
            ->setFr($form->get('frHtmlContent')->getData())
            ->setEs($form->get('esHtmlContent')->getData())
            ->setIt($form->get('itHtmlContent')->getData())
        )
        ->setAuthor($this->security->getUser())
        ->setCreatedAt(
            $this->dateTimeGenerator->generateImmutable()
        );

        $this->em->persist($article);
        $this->em->flush();
    }

    public function update(Article $article, FormInterface $form): void
    {
        //un seul champ mappé : subCategory

        //On upload la photo qui a été entrée
        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(), 
            'article.jpg'
        );

        if($picture)
        {
            $picture->setAlt(
                (new TranslatableString)
                ->setEn($form->get('enAlt')->getData())
                ->setFr($form->get('frAlt')->getData())
                ->setEs($form->get('esAlt')->getData())
                ->setIt($form->get('itAlt')->getData())
            );
            //on supprime d'abord l'ancienne
            if($oldPicture = $article->getPicture())
            {
                $this->em->remove($oldPicture);
            }
            $article->setPicture($picture);
        }


        //on update les autres champs non mappés
        // on a pas besoin de vérifier si la propriété n'est pas nulle car dans create on ajoute systématiquement un objet Translatable, avec propriétés à null si les champs sont vides
        $article->getTitle()
            ->setEn($form->get('enTitle')->getData())
            ->setFr($form->get('frTitle')->getData())
            ->setEs($form->get('esTitle')->getData())
            ->setIt($form->get('itTitle')->getData())
                ;
        $article->getSubtitle()
            ->setEn($form->get('enSubtitle')->getData())
            ->setFr($form->get('frSubtitle')->getData())
            ->setEs($form->get('esSubtitle')->getData())
            ->setIt($form->get('itSubtitle')->getData())
                ;
        $article->getSlug()
            ->setEn($form->get('enSlug')->getData())
            ->setFr($form->get('frSlug')->getData())
            ->setEs($form->get('esSlug')->getData())
            ->setIt($form->get('itSlug')->getData())
                ;
                
        $metaDescription = $article->getMetaDescription() ?: new TranslatableString;
        $metaDescription
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
                ;
        $article->setMetaDescription($metaDescription);

        $article->getHtmlContent()
            ->setEn($form->get('enHtmlContent')->getData())
            ->setFr($form->get('frHtmlContent')->getData())
            ->setEs($form->get('esHtmlContent')->getData())
            ->setIt($form->get('itHtmlContent')->getData())
            ;

        $this->em->flush();
    }
}