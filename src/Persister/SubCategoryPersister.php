<?php
namespace App\Persister;

use App\Entity\SubCategory;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class SubCategoryPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
    )
    {
        
    }

    public function update(SubCategory $subCategory, FormInterface $form): void
    {
        $subCategory->getMetaDescription()
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
            ;
        $subCategory->getShortDescription()
            ->setEn($form->get('enShortDescription')->getData())
            ->setFr($form->get('frShortDescription')->getData())
            ->setEs($form->get('esShortDescription')->getData())
            ->setIt($form->get('itShortDescription')->getData())
            ;
        $subCategory->getLongHtmlDescription()
            ->setEn($form->get('enLongHtmlDescription')->getData())
            ->setFr($form->get('frLongHtmlDescription')->getData())
            ->setEs($form->get('esLongHtmlDescription')->getData())
            ->setIt($form->get('itLongHtmlDescription')->getData())
            ;
        
        $this->em->flush();
    }

}