<?php
namespace App\Persister;

use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\TranslatableString;
use App\Entity\TranslatableText;
use App\Helper\DateTimeGenerator;
use App\Helper\ObjectArrayByIdIndexor;
use App\Helper\ObjectHydrator;
use App\Helper\PackagingListPositionHydrator;
use App\Image\PictureUploader;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use stdClass;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ProductPersister 
{
    public function __construct(
        private DateTimeGenerator $dateTimeGenerator,
        private EntityManagerInterface $em,
        private PictureUploader $pictureUploader,
        private ObjectHydrator $objectHydrator,
        private ValidatorInterface $validator,
        private PackagingListPositionHydrator $packagingListPositionHydrator
    )
    {

    }

    public function create(Product $product, FormInterface $form)
    {
        //upload et ajout des photos entrées
        foreach([
            'One' => 1,
            'Two' => 2,
            'Three' => 3
        ] as $label => $position)
        {
            $pictureField = $form->get('picture'.$label)->getData();
            if($pictureField)
            {
                $picture = $this->pictureUploader->uploadBase64($pictureField, 'product.jpg');
                if($picture)
                {
                    $picture->setListPosition($position)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn($form->get('enAlt'.$label)->getData())
                            ->setFr($form->get('frAlt'.$label)->getData())
                            ->setEs($form->get('esAlt'.$label)->getData())
                            ->setIt($form->get('itAlt'.$label)->getData())
                        )
                        ;
                    $product->addPicture($picture);
                }
            }
            
        }
        
        //puis tous les champs non mappés
        $product
            ->setDesignation(
                (new TranslatableString)
                ->setEn($form->get('enDesignation')->getData())
                ->setFr($form->get('frDesignation')->getData())
                ->setEs($form->get('esDesignation')->getData())
                ->setIt($form->get('itDesignation')->getData())
            )
            ->setSlug(
                (new TranslatableString)
                ->setEn($form->get('enSlug')->getData())
                ->setFr($form->get('frSlug')->getData())
                ->setEs($form->get('esSlug')->getData())
                ->setIt($form->get('itSlug')->getData())
            )
            ->setShortDescription(
                (new TranslatableString)
                ->setEn($form->get('enShortDescription')->getData())
                ->setFr($form->get('frShortDescription')->getData())
                ->setEs($form->get('esShortDescription')->getData())
                ->setIt($form->get('itShortDescription')->getData())
            )
            ->setLongHtmlDescription(
                (new TranslatableText)
                ->setEn($form->get('enLongHtmlDescription')->getData())
                ->setFr($form->get('frLongHtmlDescription')->getData())
                ->setEs($form->get('esLongHtmlDescription')->getData())
                ->setIt($form->get('itLongHtmlDescription')->getData())
            )
            ->setMetaDescription(
                (new TranslatableString)
                ->setEn($form->get('enMetaDescription')->getData())
                ->setFr($form->get('frMetaDescription')->getData())
                ->setEs($form->get('esMetaDescription')->getData())
                ->setIt($form->get('itMetaDescription')->getData())
            )
            ->setCreatedAt($this->dateTimeGenerator->generateImmutable());
        ;

        //on ajoute les packagingChoices
        $packagingChoicesData = json_decode($form->get('packagingChoices')->getData());
        //on hydrate PackagingChoicesData avec les listPosition (déduits à partir de la propriété base (bool) présente)
        $this->packagingListPositionHydrator->hydrate($packagingChoicesData);

        foreach($packagingChoicesData as $packagingData)
        {
            $packaging = $this->createPackaging($packagingData);

            $errors = $this->validator->validate($packaging);
            if(count($errors) > 0)
            {
                throw new Exception('Un packaging est invalide');
            }
            $product->addPackaging($packaging);
        }

        
        $this->em->persist($product);
        $this->em->flush();
    }

    public function update(Product $product, FormInterface $form)
    {
         //on détache et supprime toutes les pictures actuelles du product
        foreach($product->getPictures() as $picture)
        {
            $product->removePicture($picture);
            $this->em->remove($picture);
        }
        //puis on upload et ajoute les photos entrées
        foreach([
            'One' => 1,
            'Two' => 2,
            'Three' => 3
        ] as $label => $position)
        {
            $pictureField = $form->get('picture'.$label)->getData();
            if($pictureField)
            {
                $picture = $this->pictureUploader->uploadBase64($pictureField, 'product.jpg');
                if($picture)
                {
                    $picture->setListPosition($position)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn($form->get('enAlt'.$label)->getData())
                            ->setFr($form->get('frAlt'.$label)->getData())
                            ->setEs($form->get('esAlt'.$label)->getData())
                            ->setIt($form->get('itAlt'.$label)->getData())
                        )
                        ;
                    $product->addPicture($picture);
                }
            }
        }

        //puis on modifie tous les champs non mappés
        // on a pas besoin de vérifier si la propriété n'est pas nulle car dans create on ajoute systématiquement un objet Translatable, avec propriétés à null si les champs sont vides
        $product->getDesignation()
            ->setEn($form->get('enDesignation')->getData())
            ->setFr($form->get('frDesignation')->getData())
            ->setEs($form->get('esDesignation')->getData())
            ->setIt($form->get('itDesignation')->getData())
            ;
        $product->getSlug()
            ->setEn($form->get('enSlug')->getData())
            ->setFr($form->get('frSlug')->getData())
            ->setEs($form->get('esSlug')->getData())
            ->setIt($form->get('itSlug')->getData())
            ;

        $shortDescription = $product->getShortDescription() ?: new TranslatableString;
        $shortDescription
            ->setEn($form->get('enShortDescription')->getData())
            ->setFr($form->get('frShortDescription')->getData())
            ->setEs($form->get('esShortDescription')->getData())
            ->setIt($form->get('itShortDescription')->getData())
            ;
        $product->setShortDescription($shortDescription);

        $longHtmlDescription = $product->getLongHtmlDescription() ?: new TranslatableText;
        $longHtmlDescription
            ->setEn($form->get('enLongHtmlDescription')->getData())
            ->setFr($form->get('frLongHtmlDescription')->getData())
            ->setEs($form->get('esLongHtmlDescription')->getData())
            ->setIt($form->get('itLongHtmlDescription')->getData())
            ;
        $product->setLongHtmlDescription($longHtmlDescription);

        $metaDescription = $product->getMetaDescription() ?: new TranslatableString;
        $metaDescription
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
            ;
        $product->setMetaDescription($metaDescription);


        //PackagingChoices
        //on ajoute, modifie ou supprime les packagingChoices

        $packagingChoicesData = json_decode($form->get('packagingChoices')->getData());
        //on hydrate PackagingChoicesData avec les listPosition (déduits à partir de la propriété base (bool) présente)
        $this->packagingListPositionHydrator->hydrate($packagingChoicesData);

        $prevPackagings = $product->getPackagingChoices()->toArray();
        $prevPackagingsById = (new ObjectArrayByIdIndexor)->index($prevPackagings);

        foreach($packagingChoicesData as $packagingData)
        {
            //si le packaging existait déjà dans ce product on le modifie
            if(isset($prevPackagingsById[$packagingData->id]))
            {
                $packaging = $prevPackagingsById[$packagingData->id];
                $this->updatePackaging($packaging, $packagingData);
                //on supprime le packaging du tableau des anciens packagings
                unset($prevPackagingsById[$packagingData->id]);
            }
            else //sinon on le crée et on l'ajoute au product
            {
                $packaging = $this->createPackaging($packagingData);
                $product->addPackaging($packaging);
            }
            //on valide le packaging (créé ou modifié)
            $errors = $this->validator->validate($packaging);
            if(count($errors) > 0)
            {
                throw new Exception('Un packaging est invalide');
            }
        }
        //maintenant il faut supprimer les packagings restant dans le tableau des anciens packagings (qui sont ceux qui n'ont pas été conservés)
        foreach($prevPackagingsById as $prevPackaging)
        {
            $this->em->remove($prevPackaging);
        }

        $this->em->flush();
    }


    private function createPackaging(stdClass $packagingData): Packaging
    {
        $packaging = new Packaging;

        $this->objectHydrator->hydrate($packaging, (array)$packagingData);
        //on doit entrer les Translatable
        //si on a pas entré de label alors on laisse packaging.label à null
        if($packagingData->enLabel !== '' || $packagingData->frLabel !== '' || $packagingData->esLabel !== '' || $packagingData->itLabel !== '')
        {
            $packaging->setLabel(
                (new TranslatableString)
                ->setEn($packagingData->enLabel)
                ->setFr($packagingData->frLabel)
                ->setEs($packagingData->esLabel)
                ->setIt($packagingData->itLabel)
            );
        }

        return $packaging;
    }


    private function updatePackaging(Packaging $packaging, stdClass $packagingData): Packaging
    {
        $this->objectHydrator->hydrate($packaging, (array)$packagingData);
        //on doit entrer les Translatable

        //si on a pas entré de label
        if($packagingData->enLabel === '' || $packagingData->frLabel === '' || $packagingData->esLabel === '' || $packagingData->itLabel === '')
        {
            //et si packaging avait un label on l'efface
            if($label = $packaging->getLabel())
            {
                $this->em->remove($packaging->getLabel());
            }
        }
        else //si on a entré un label
        {
            //et si packaging avait un label on le modifie
            if($label = $packaging->getLabel())
            {
                $label
                    ->setEn($packagingData->enLabel)
                    ->setFr($packagingData->frLabel)
                    ->setEs($packagingData->esLabel)
                    ->setIt($packagingData->itLabel)
                    ;
            }
            else //et si packaging n'avait pas de label on en crée un
            {
                $packaging->setLabel(
                    (new TranslatableString)
                    ->setEn($packagingData->enLabel)
                    ->setFr($packagingData->frLabel)
                    ->setEs($packagingData->esLabel)
                    ->setIt($packagingData->itLabel)
                );
            }
        }

        return $packaging;
    }


   

}