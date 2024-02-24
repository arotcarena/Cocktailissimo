<?php
namespace App\Persister;

use App\Entity\Ingredient;
use App\Entity\TranslatableString;
use App\Image\PictureUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class IngredientPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private PictureUploader $pictureUploader
    )
    {

    }

    public function create(Ingredient $ingredient, FormInterface $form)
    {
        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(),
            'ingredient.jpg'
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
            $ingredient->setPicture($picture);
        }

        $ingredient->setName(
            (new TranslatableString)
            ->setEn($form->get('enName')->getData())
            ->setFr($form->get('frName')->getData())
            ->setEs($form->get('esName')->getData())
            ->setIt($form->get('itName')->getData())
        );

        $this->em->persist($ingredient);
        $this->em->flush();
    }

    public function update(Ingredient $ingredient, FormInterface $form)
    {
        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(),
            'ingredient.jpg'
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
            //s'il y a une ancienne picture on la supprime avant d'ajouter la nouvelle
            if($oldPicture = $ingredient->getPicture())
            {
                $this->em->remove($oldPicture);
            }
            $ingredient->setPicture($picture);
        }

        $ingredient->getName()
            ->setEn($form->get('enName')->getData())
            ->setFr($form->get('frName')->getData())
            ->setEs($form->get('esName')->getData())
            ->setIt($form->get('itName')->getData())
            ;
        $this->em->flush();
    }

}

