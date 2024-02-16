<?php
namespace App\DataFixtures\Tests;

use App\Config\SiteConfig;
use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Address;
use App\Entity\TranslatableString;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class AddressTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }


    public function load(ObjectManager $manager)
    {
        $users = $this->userRepository->findAll();

        foreach($users as $user)
        {
            $address = (new Address)
                        ->setUser($user)
                        ->setCivility($this->faker->randomElement([SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F]))
                        ->setFirstName($this->faker->firstName())
                        ->setLastName($this->faker->lastName())
                        ->setLineOne($this->faker->streetAddress())
                        ->setPostcode($this->faker->postcode())
                        ->setCity($this->faker->city())
                        ->setCountry($this->faker->countryCode())
                        ->setCreatedAt(new DateTimeImmutable($this->faker->date('Y:m:d H:i:s')))
                    ;
            $manager->persist($address);
        }

        for ($i=0; $i < 10; $i++) { 
            $address = (new Address)
                        ->setUser($this->faker->randomElement($users))
                        ->setCivility($this->faker->randomElement([SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F]))
                        ->setFirstName($this->faker->firstName())
                        ->setLastName($this->faker->lastName())
                        ->setLineOne($this->faker->streetAddress())
                        ->setPostcode($this->faker->postcode())
                        ->setCity($this->faker->city())
                        ->setCountry($this->faker->countryCode())
                        ->setCreatedAt(new DateTimeImmutable($this->faker->date('Y:m:d H:i:s')))
                    ;
            $manager->persist($address);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserTestFixtures::class];
    }
    
}