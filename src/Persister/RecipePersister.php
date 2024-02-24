<?php
namespace App\Persister;

use App\Entity\IngredientQuantity;
use App\Entity\Recipe;
use App\Entity\TranslatableText;
use App\Entity\TranslatableString;
use App\Image\PictureUploader;
use App\Repository\IngredientQuantityRepository;
use App\Repository\IngredientRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RecipePersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private IngredientQuantityRepository $ingredientQuantityRepository,
        private PictureUploader $pictureUploader,
        private IngredientRepository $ingredientRepository,
        private ValidatorInterface $validator
    )
    {
        
    }

    public function create(Recipe $recipe, FormInterface $form): void
    {
        //seul champ mappé : subCategory

        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(), 
            'recipe.jpg'
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
            $recipe->setPicture($picture);
        }

        $recipe 
            ->setTitle(
                (new TranslatableString)
                ->setEn($form->get('enTitle')->getData())
                ->setFr($form->get('frTitle')->getData())
                ->setEs($form->get('esTitle')->getData())
                ->setIt($form->get('itTitle')->getData())
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
            ->setCreatedAt(new DateTimeImmutable());
        ;

        //ingredientsQuantities
        $this->validateAndAddIngredientsQuantities($recipe, $form);

        $this->em->persist($recipe);
        $this->em->flush();
    }

    public function update(Recipe $recipe, FormInterface $form): void
    {
        //seul champ mappé : subCategory

        //on upload la photo qui a été entrée
        $picture = $this->pictureUploader->uploadBase64(
            $form->get('picture')->getData(), 
            'recipe.jpg'
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
            if($oldPicture = $recipe->getPicture())
            {
                $this->em->remove($oldPicture);
            }
            $recipe->setPicture($picture);
        }

        //on ajoute les autres champs non mappés
        // on a pas besoin de vérifier si la propriété n'est pas nulle car dans create on ajoute systématiquement un objet Translatable, avec propriétés à null si les champs sont vides
        $recipe->getTitle()
            ->setEn($form->get('enTitle')->getData())
            ->setFr($form->get('frTitle')->getData())
            ->setEs($form->get('esTitle')->getData())
            ->setIt($form->get('itTitle')->getData())
            ;
        $recipe->getSlug()
            ->setEn($form->get('enSlug')->getData())
            ->setFr($form->get('frSlug')->getData())
            ->setEs($form->get('esSlug')->getData())
            ->setIt($form->get('itSlug')->getData())
            ;

        $metaDescription = $recipe->getMetaDescription() ?: new TranslatableString;
        $metaDescription
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
            ;
        $recipe->setMetaDescription($metaDescription);
        
        $recipe->getHtmlContent()
            ->setEn($form->get('enHtmlContent')->getData())
            ->setFr($form->get('frHtmlContent')->getData())
            ->setEs($form->get('esHtmlContent')->getData())
            ->setIt($form->get('itHtmlContent')->getData())
            ;

        //ingredientsQuantities
        //on supprime d'abord tous les anciens ingredientsQuantities 
        foreach($recipe->getIngredientsQuantities() as $ingredientQuantity)
        {
            $this->em->remove($ingredientQuantity);
        }
        //puis on ajoute ceux entrés dans le form
        $this->validateAndAddIngredientsQuantities($recipe, $form);

        $this->em->flush();
    }
    
    private function validateAndAddIngredientsQuantities(Recipe $recipe, FormInterface $form): void
    {
        $ingredientsQuantitiesData = json_decode($form->get('ingredientsQuantities')->getData());
        foreach($ingredientsQuantitiesData as $ingredientQuantityData)
        {
            $ingredient = $this->ingredientRepository->find($ingredientQuantityData->ingredient->id);
            if(!$ingredient)
            {
                throw new Exception('L\'ingrédient avec l\'id '.$ingredientQuantityData->ingredient->id.' est introuvable');
            }
            $ingredientQuantity = (new IngredientQuantity)
                                    ->setIngredient($ingredient)
                                    ->setQuantity(
                                        (new TranslatableString)
                                        ->setEn($ingredientQuantityData->quantity->en)
                                        ->setFr($ingredientQuantityData->quantity->fr)
                                        ->setEs($ingredientQuantityData->quantity->es)
                                        ->setIt($ingredientQuantityData->quantity->it)
                                    );
            
            //les packagingChoices sont validés côté front mais on refait une validation juste au cas où
            $errors = $this->validator->validate($ingredientQuantity);
            if(count($errors) > 0)
            {
                throw new Exception('Un ingredientQuantity est invalide');
            }
            $recipe->addIngredientsQuantity($ingredientQuantity);
        }
    }
}