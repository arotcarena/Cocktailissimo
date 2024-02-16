<?php
namespace App\DataFixtures\Tests;

use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\LightAddress;
use App\Entity\User;
use App\Helper\CompanySlugCreator;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class DemoUsersTestFixtures extends Fixture
{
    public function __construct(
        private CompanySlugCreator $companySlugCreator,
        private UserPasswordHasherInterface $hasher
    )
    {
        
    }

    public function load(ObjectManager $manager)
    {
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
        $manager->persist($user);
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
        $manager->persist($pro);

        //vendor
        $senderAddress = (new LightAddress)
                                ->setLineOne('123 rue de l\'innovation')
                                ->setLineTwo('Zone d\'activité Technoparc')
                                ->setPostcode('13000')
                                ->setCity('Marseille')
                                ->setCountry('FR')
                                ;
        $manager->persist($senderAddress);

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
        $manager->persist($vendor);


        $manager->flush();
    }
}