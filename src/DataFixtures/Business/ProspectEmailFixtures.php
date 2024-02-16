<?php
namespace App\DataFixtures\Business;

use Faker\Factory;
use DateTimeImmutable;
use App\Entity\ProspectEmail;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class ProspectEmailFixtures  extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($i=0; $i < 50; $i++) { 
            $prospectEmail = (new ProspectEmail)
                                ->setEmail($faker->email())
                                ->setSentAt(new DateTimeImmutable($faker->dateTimeBetween()->format('Y:m:d H:i:s')))
                                ->setLang($faker->randomElement(['en', 'fr', 'es', 'it']))
                            ;
            $manager->persist($prospectEmail);
        }

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}