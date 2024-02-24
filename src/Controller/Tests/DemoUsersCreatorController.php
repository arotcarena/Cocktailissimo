<?php
namespace App\Controller\Tests;

use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\LightAddress;
use App\Entity\User;
use App\Helper\CompanySlugCreator;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class DemoUsersCreatorController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private UserRepository $userRepository,
        private UserPasswordHasherInterface $hasher,
        private CompanySlugCreator $companySlugCreator,
    )
    {
        
    }

    #[Route('/tests/demo-users-create', name: 'tests_demo_users_create')]
    public function create(): JsonResponse
    {
        //demo
        //consumer
        $user = new User;
        $user 
            ->setEmail('consumer@email.com')
            ->setPassword(
                $this->hasher->hashPassword($user, 'demo')
            )
            ->setRoles(['ROLE_USER'])
            ->setCivility(SiteConfig::CIVILITY_F)
            ->setFirstName('Julie')
            ->setLastName('Durand')
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ;
        $this->em->persist($user);
        //pro
        $pro = new User;
        $pro
            ->setEmail('pro@email.com')
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setPassword(
                $this->hasher->hashPassword($pro, 'demo')
            )
            ->setRoles(['ROLE_USER', 'ROLE_PRO'])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ->setFirstName('Pierre')
            ->setLastName('Dupont')
            ->setCompany(
                (new Company)
                ->setUser($pro)
                ->setSocialName('Dupont SAS')
                ->setIdentificationNumber('12345678901234')
                ->setCountry('FR')
                ->setVatNumber('FR12345678901')
            )
            ;
        $this->em->persist($pro);

        //vendor
        $senderAddress = (new LightAddress)
                                ->setLineOne('123 rue de l\'innovation')
                                ->setLineTwo('Zone d\'activité Technoparc')
                                ->setPostcode('13000')
                                ->setCity('Marseille')
                                ->setCountry('FR')
                                ;
        $this->em->persist($senderAddress);

        $vendor = new User;
        $vendor
            ->setEmail('vendor@email.com')
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setPassword(
                $this->hasher->hashPassword($vendor, 'demo')
            )
            ->setRoles(['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR'])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ->setFirstName('Pierre')
            ->setLastName('Marchand')
            ->setCompany(
                (new Company)
                ->setUser($vendor)
                ->setSocialName('Marchand SAS')
                ->setCommercialName('Prestige Boissons')
                ->setIdentificationNumber('12345678901234')
                ->setCountry('FR')
                ->setVatNumber('FR12345678901')
                ->setSocialAddress(
                    (new LightAddress)
                    ->setLineOne('12 rue de la Liberté')
                    ->setPostcode('13000')
                    ->setCity('Marseille')
                    ->setCountry('FR')
                )
                ->setSenderAddress($senderAddress)
            )
            ->setStripeConnectId('acct-1234')
            ->setSendcloudId(123456789)
            ->setReviewNote(47)
            ->setCountReviews(237)
            ;
        $this->companySlugCreator->create($vendor->getCompany());
        $this->em->persist($vendor);


        $this->em->flush();


        return $this->json('ok');
    }
}