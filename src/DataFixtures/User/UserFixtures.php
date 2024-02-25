<?php

namespace App\DataFixtures\User;

use App\Config\SecurityConfig;
use Faker\Factory;
use App\Entity\User;
use DateTimeImmutable;
use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\LightAddress;
use App\Helper\CompanySlugCreator;
use App\Helper\DevReplaceSpecialCars;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class UserFixtures extends Fixture implements FixtureGroupInterface
{
    public function __construct(
        private UserPasswordHasherInterface $hasher,
        private DevReplaceSpecialCars $devReplaceSpecialCars,
        private CompanySlugCreator $companySlugCreator
    )
    {

    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');


        
        // 5 not confirmed users
        for ($i=0; $i < 5; $i++) { 
            $civility = $faker->randomElement([SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F]);
            $firstName = $civility === SiteConfig::CIVILITY_M ? $faker->firstNameMale(): $faker->firstNameFemale();
            $lastName = $faker->lastName();
            $email = $this->createEmail($firstName, $lastName, $faker);

            $user = new User;
            $user 
                ->setEmail($email)
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCivility($civility)
                ->setFirstName($firstName)
                ->setLastName($lastName)
                ->setConfirmed(false)
                ->setCreatedAt(new DateTimeImmutable($faker->date('Y:m:d') . ' ' .$faker->time('H:i:s')))
                ;
            $manager->persist($user);
        }

        // 5 confirmed users
        for ($i=0; $i < 5; $i++) { 
            $civility = $faker->randomElement([SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F]);
            $firstName = $civility === SiteConfig::CIVILITY_M ? $faker->firstNameMale(): $faker->firstNameFemale();
            $lastName = $faker->lastName();
            $email = $firstName . $faker->randomElement(['', '.', '-']) . $lastName . $faker->randomElement(['', $faker->randomDigit()]) .'@'. $faker->randomElement(['sfr.fr', 'gmail.com', 'orange.fr', 'wanadoo.fr']);

            $user = new User;
            $user 
                ->setEmail($email)
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCivility($civility)
                ->setFirstName($firstName)
                ->setLastName($lastName)
                ->setConfirmed(true)
                ->setCreatedAt(new DateTimeImmutable($faker->date('Y:m:d') . ' ' .$faker->time('H:i:s')))
                ;
            $manager->persist($user);
        }

        //restricted_user
        $restrictedUser = new User;
        $restrictedUser
            ->setEmail('restricted.user@gmail.com')
            ->setPassword(
                $this->hasher->hashPassword($user, 'password')
            )
            ->setRoles([SiteConfig::ROLE_USER_RESTRICTED])
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setFirstName('jean')
            ->setLastName('restreint')
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable('2012:12:15 12:10:05'))
            ;
        $manager->persist($restrictedUser);
        
        //admin
        $admin = new User;
        $admin
            ->setEmail(SecurityConfig::ADMIN_USERNAME)
            ->setFirstName('Nina')
            ->setLastName('Sandin')
            ->setPassword(
                $this->hasher->hashPassword($admin, SecurityConfig::ADMIN_PASSWORD)
            )
            ->setRoles(['ROLE_USER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN'])
            ->setCivility(SiteConfig::CIVILITY_F)
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable('2012:12:15 12:10:05'))
            ;
        $manager->persist($admin);

        //COCKTAILISSIMO MAIN VENDOR
        $senderAddress = (new LightAddress)
        ->setLineOne('101 bis rue Georges Lassalle')
        ->setPostcode('40220')
        ->setCity('Tarnos')
        ->setCountry('FR')
        ;
        $manager->persist($senderAddress);

        $vendor = new User;
        $vendor
        ->setEmail('contact@cocktailissimo.com')
        ->setCivility(SiteConfig::CIVILITY_F)
        ->setPassword(
            $this->hasher->hashPassword($vendor, SecurityConfig::ADMIN_PASSWORD)
        )
        ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO, SiteConfig::ROLE_VENDOR])
        ->setConfirmed(true)
        ->setCreatedAt(new DateTimeImmutable())
        ->setFirstName('Nina')
        ->setLastName('Sandin')
        ->setCompany(
            (new Company)
            ->setUser($vendor)
            ->setSocialName('SAS Cocktailissimo')
            ->setCommercialName('Cocktailissimo')
            ->setIdentificationNumber(SiteConfig::COCKTAILISSIMO_IDENTIFICATION_NUMBER)
            ->setCountry('FR')
            ->setVatNumber(SiteConfig::COCKTAILISSIMO_VAT_NUMBER)
            ->setSocialAddress(
                (new LightAddress)
                ->setLineOne('101 bis rue Georges Lassalle')
                ->setPostcode('40220')
                ->setCity('Tarnos')
                ->setCountry('FR')
            )
            ->setSenderAddress($senderAddress)
        )
        ->setStripeConfirmed(true)
        ->setStripeConnectId('cocktailissimo')
        ;

        $this->companySlugCreator->create($vendor->getCompany());

        $manager->persist($vendor);

        //test user
        $confirmedUser = new User;
        $confirmedUser
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setFirstName('Jean')
            ->setLastName('Démonstrator')
            ->setEmail('confirmed.user@gmail.com')
            ->setPassword(
                $this->hasher->hashPassword($confirmedUser, 'password')
            )
            ->setRoles([SiteConfig::ROLE_USER])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ;
        $manager->persist($confirmedUser);

        //test user
        $user = new User;
        $user
            ->setEmail('special@gmail.com')
            ->setPassword(
                $this->hasher->hashPassword($user, 'password')
            )
            ->setRoles([SiteConfig::ROLE_USER])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ;
        $manager->persist($user);


        //pros
        for ($i=0; $i < 20; $i++) { 
            $pro = new User;
            $pro
                ->setEmail('pro'.$i.'@mail.com')
                ->setCivility($faker->randomElement([SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M]))
                ->setPassword(
                    $this->hasher->hashPassword($pro, 'password')
                )
                ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO])
                ->setConfirmed(true)
                ->setCreatedAt(new DateTimeImmutable(($faker->dateTime())->format('Y:m:d H:i:s')))
                ->setFirstName($faker->firstName())
                ->setLastName($faker->lastName())
                ->setCompany(
                    (new Company)
                    ->setUser($pro)
                    ->setSocialName($faker->company())
                    ->setIdentificationNumber(substr(str_shuffle(str_repeat('0123456789', 5)), 0, 11))
                    ->setCountry($faker->randomElement(['FR', 'IT', 'ES', 'DE', 'BE']))
                    ->setVatNumber(substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbn-0123456789', 5)), 0, 15))
                )
                ;
            $manager->persist($pro);
        }

        //vendors
        for ($i=0; $i < 3; $i++) { 

            $senderAddress = (new LightAddress)
                                ->setLineOne($faker->streetAddress())
                                ->setPostcode($faker->randomElement(['64600', '64000', '33000', '47000', '40000', '31000', '13000', '75016', '69000', '59000']))
                                ->setCity($faker->city())
                                ->setCountry('FR')
                                ;
            $manager->persist($senderAddress);

            $vendor = new User;
            $vendor
                ->setEmail('vendor'.$i.'@mail.com')
                ->setCivility($faker->randomElement([SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M]))
                ->setPassword(
                    $this->hasher->hashPassword($vendor, 'password')
                )
                ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO, SiteConfig::ROLE_VENDOR])
                ->setConfirmed(true)
                ->setCreatedAt(new DateTimeImmutable($faker->dateTime()->format('Y:m:d H:i:s')))
                ->setFirstName($faker->firstName())
                ->setLastName($faker->lastName())
                ->setCompany(
                    (new Company)
                    ->setUser($vendor)
                    ->setSocialName($faker->company())
                    ->setIdentificationNumber(substr(str_shuffle(str_repeat('0123456789', 5)), 0, 11))
                    ->setCountry('FR')
                    ->setVatNumber(substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbn-0123456789', 5)), 0, 15))
                    ->setSocialAddress(
                        (new LightAddress)
                        ->setLineOne($faker->streetAddress())
                        ->setPostcode($faker->postcode())
                        ->setCity($faker->city())
                        ->setCountry($faker->randomElement(['FR', 'IT', 'ES', 'BE', 'DE']))
                    )
                    ->setSenderAddress($senderAddress)
                )
                ->setReviewNote(random_int(10, 50))
                ->setCountReviews(random_int(1, 500))
                ->setStripeConfirmed(true)
                ->setStripeConnectId('acct-'.random_int(1, 1000))
                ->setSendcloudId(random_int(1000, 9999))
                ;
            if(random_int(0, 9) > 2)
            {
                $vendor->getCompany()->setCommercialName($faker->company());
            }
            $this->companySlugCreator->create($vendor->getCompany());

            $manager->persist($vendor);
        }


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


    private function createEmail(string $firstName, string $lastName, $faker): string
    {
        return  
                $this->devReplaceSpecialCars->replace(strtolower(trim($firstName))) . 
                $faker->randomElement(['', '.', '-']) . 
                $this->devReplaceSpecialCars->replace(strtolower(trim($lastName))) . 
                $faker->randomElement(['', $faker->randomDigit()]) .
                '@'. 
                $faker->randomElement(['sfr.fr', 'gmail.com', 'orange.fr', 'wanadoo.fr'])
                ;

    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}
