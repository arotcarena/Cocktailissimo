<?php
namespace App\Persister;

use App\Entity\Highlight;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class HighlightPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
    )
    {
        
    }
    
    public function update(Highlight $highlight, FormInterface $form): void
    {
        $highlight->getRecipeTitle()
            ->setEn($form->get('enRecipeTitle')->getData())
            ->setFr($form->get('frRecipeTitle')->getData())
            ->setEs($form->get('esRecipeTitle')->getData())
            ->setIt($form->get('itRecipeTitle')->getData())
            ;
                
        $highlight->getRecipeDescription()
            ->setEn($form->get('enRecipeDescription')->getData())
            ->setFr($form->get('frRecipeDescription')->getData())
            ->setEs($form->get('esRecipeDescription')->getData())
            ->setIt($form->get('itRecipeDescription')->getData())
            ;

        $this->em->flush();
    }
}