<?php
namespace App\Persister;

use App\Entity\User;
use App\Entity\Company;
use App\Config\SiteConfig;
use App\Image\PictureUploader;
use App\Helper\DateTimeGenerator;
use App\Form\DataModel\UserRegistration;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class UserPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private UserPasswordHasherInterface $hasher,
        private DateTimeGenerator $dateTimeGenerator,
        private ValidatorInterface $validator,
        private TokenGeneratorInterface $tokenGenerator,
        private PictureUploader $pictureUploader
    )
    {
        
    }

    public function persist(UserRegistration $userRegistration, string $type = 'user'): User
    {
        $user = new User;
        $user
            ->setCivility($userRegistration->civility)
            ->setFirstName($userRegistration->firstName)
            ->setLastName($userRegistration->lastName)
            ->setEmail($userRegistration->email)
            ->setPassword(
                $this->hasher->hashPassword($user, $userRegistration->plainPassword)
            )
            ->setRoles([SiteConfig::ROLE_USER])
            ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
            ;

        if($type === 'pro')
        {
            //on ajoute le rôle pro
            $user->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO]);

            //on ajoute la company
            $company = new Company;
            $company
                ->setSocialName($userRegistration->socialName)
                ->setIdentificationNumber($userRegistration->identificationNumber)
                ->setCountry($userRegistration->country)
                ->setVatNumber($userRegistration->vatNumber)
                ;

            $user->setCompany($company);
        }
        
        /** pour la vérification de l'email */
        $user->setConfirmationToken(
            $this->tokenGenerator->generateToken()
        )
        ->setConfirmationTokenExpireAt(
            time() + SiteConfig::TOKEN_TIME_VALIDITY
        );

        $this->em->persist($user);
        $this->em->flush();
        return $user;
    }
}