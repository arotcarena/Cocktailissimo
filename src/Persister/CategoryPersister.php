<?php
namespace App\Persister;

use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class CategoryPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
    )
    {
        
    }

    public function update(Category $category, FormInterface $form): void
    {
        $category->getMetaDescription()
            ->setEn($form->get('enMetaDescription')->getData())
            ->setFr($form->get('frMetaDescription')->getData())
            ->setEs($form->get('esMetaDescription')->getData())
            ->setIt($form->get('itMetaDescription')->getData())
            ;
        $category->getShortDescription()
            ->setEn($form->get('enShortDescription')->getData())
            ->setFr($form->get('frShortDescription')->getData())
            ->setEs($form->get('esShortDescription')->getData())
            ->setIt($form->get('itShortDescription')->getData())
            ;
        $category->getLongHtmlDescription()
            ->setEn($form->get('enLongHtmlDescription')->getData())
            ->setFr($form->get('frLongHtmlDescription')->getData())
            ->setEs($form->get('esLongHtmlDescription')->getData())
            ->setIt($form->get('itLongHtmlDescription')->getData())
            ;

        $this->em->flush();
    }
  
}