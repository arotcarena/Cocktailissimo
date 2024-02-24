<?php
namespace App\Persister;

use App\Entity\LightAddress;
use App\Entity\VendorContact;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class VendorContactPersister
{
    public function __construct(
        private EntityManagerInterface $em,
    )
    {
        
    }

    public function persist(VendorContact $vendorContact, FormInterface $form, string $lang = 'en')
    {
        //on ajoute tous les champs non mappés
        $vendorContact->setSocialAddress(
                        (new LightAddress)
                        ->setLineOne($form->get('socialAddress_lineOne')->getData())
                        ->setLineTwo($form->get('socialAddress_lineTwo')->getData())
                        ->setPostcode($form->get('socialAddress_postcode')->getData())
                        ->setCity($form->get('socialAddress_city')->getData())
                        ->setCountry($form->get('socialAddress_country')->getData())
                        ->setState($form->get('socialAddress_state')->getData())
                    )
                    ->setSenderAddress(
                        (new LightAddress)
                        ->setLineOne($form->get('senderAddress_lineOne')->getData())
                        ->setLineTwo($form->get('senderAddress_lineTwo')->getData())
                        ->setPostcode($form->get('senderAddress_postcode')->getData())
                        ->setCity($form->get('senderAddress_city')->getData())
                        ->setCountry($form->get('senderAddress_country')->getData())
                        ->setState($form->get('senderAddress_state')->getData())
                    )
        //puis la langue et la date
                    ->setLang($lang)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;

        $this->em->persist($vendorContact);
        $this->em->flush();
    }
}