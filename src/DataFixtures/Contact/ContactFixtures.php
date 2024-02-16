<?php
namespace App\DataFixtures\Contact;

use App\Config\SiteConfig;
use App\Entity\Category;
use App\Entity\Contact;
use App\Entity\VendorContact;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class ContactFixtures extends Fixture implements FixtureGroupInterface
{
    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        for($i=0; $i < 50; $i++) 
        {
            $contact = new Contact;
            $contact
                    ->setCivility($this->faker->randomElement([SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M]))
                    ->setFirstName($this->faker->firstName())
                    ->setLastName($this->faker->lastName())
                    ->setEmail($this->faker->email())
                    ->setMessage($this->faker->paragraph())
                    ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                    ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s'))) 
                    ;

            $manager->persist($contact);
        }

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}