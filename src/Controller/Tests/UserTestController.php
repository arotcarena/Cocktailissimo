<?php
namespace App\Controller\Tests;

use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserTestController extends AbstractController
{
    #[Route('/user/create/julie', name: 'user_create_julie')]
    public function create(EntityManagerInterface $em, UserPasswordHasherInterface $hasher)
    {
        $user = new User;
        $user->setEmail('juliegallot@hotmail.com')
            ->setPassword(
                $hasher->hashPassword($user, 'julie64')
            )
            ->setCivility('civility_f')
            ->setFirstName('Julie')
            ->setLastName('Gallot')
            ->setRoles(['ROLE_ADMIN'])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ;
        $em->persist($user);
        $em->flush();

        return $this->json('id = '.$user->getId());
    }
}