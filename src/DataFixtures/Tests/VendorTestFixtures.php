<?php
namespace App\DataFixtures\Tests;

use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\LightAddress;
use App\Entity\User;
use App\Service\Stripe\StripeService;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class VendorTestFixtures extends Fixture
{
    public function __construct(
        private StripeService $stripeService
    )
    {
        
    }

    public function load(ObjectManager $manager)
    {
        $vendor = new User;
        $vendor
            ->setEmail('vendor_for_tests@mail.com')
            ->setStripeConfirmed(true) // car sinon aucun produit ne s'affichera
            ->setStripeConnectId('acct-'.random_int(1, 2000))
            ->setSendcloudId(123456)
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setPassword('password')
            ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO, SiteConfig::ROLE_VENDOR])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ->setFirstName('Jean')
            ->setLastName('Levendeur')
            ->setCompany(
                (new Company)
                ->setUser($vendor)
                ->setSocialName('Test company')
                ->setSlug('test-company-12345')
                ->setIdentificationNumber('0123456789')
                ->setCountry('FR')
                ->setVatNumber('0123456789')
                ->setSocialAddress(
                    (new LightAddress)
                    ->setLineOne('Rue de l\'impasse')
                    ->setPostcode('01000')
                    ->setCity('Mouzins les pins')
                    ->setCountry('FR')
                )
                ->setSenderAddress(
                    (new LightAddress)
                    ->setLineOne('Rue de l\'impasse')
                    ->setPostcode('01000')
                    ->setCity('Mouzins les pins')
                    ->setCountry('FR')
                )
            )
            ;
        $manager->persist($vendor);



        $manager->flush();
    }
}