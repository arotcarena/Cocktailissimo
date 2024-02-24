<?php
namespace App\Persister;

use App\Entity\Post;
use App\Entity\TranslatableString;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormInterface;

class PostPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
    )
    {

    }

    public function create(Post $post, FormInterface $form)
    {
        $post
            ->setTitle(
                (new TranslatableString)
                ->setEn($form->get('enTitle')->getData())
                ->setFr($form->get('frTitle')->getData())
                ->setEs($form->get('esTitle')->getData())
                ->setIt($form->get('itTitle')->getData())
            )
        ;

        $this->em->persist($post);
        $this->em->flush();
    }

    public function update(Post $post, FormInterface $form)
    {
        $post->getTitle()
            ->setEn($form->get('enTitle')->getData())
            ->setFr($form->get('frTitle')->getData())
            ->setEs($form->get('esTitle')->getData())
            ->setIt($form->get('itTitle')->getData())
            ;
        
        $this->em->flush();
    }

}