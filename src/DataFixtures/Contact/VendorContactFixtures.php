<?php
namespace App\DataFixtures\Contact;

use App\Config\SiteConfig;
use App\DataFixtures\Shop\CategoryFixtures;
use App\Entity\Category;
use App\Entity\LightAddress;
use App\Entity\VendorContact;
use App\Repository\CategoryRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class VendorContactFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private CategoryRepository $categoryRepository
    )
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $categories = $this->categoryRepository->findAll();

        for($i=0; $i < 50; $i++) 
        {
            /** @var Category */ 
            $category = $this->faker->randomElement($categories);
            $subCategory = $this->faker->randomElement($category->getSubCategories()->toArray());

            $vendorContact = new VendorContact;
            $vendorContact
                    ->setCivility($this->faker->randomElement([SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M]))
                    ->setFirstName($this->faker->firstName())
                    ->setLastName($this->faker->lastName())
                    ->setCompanyName($this->faker->company())
                    ->setIdentificationNumber(str_repeat(random_int(0, 9), 10))
                    ->setWhyBecomeVendor($this->faker->paragraph())
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setEmail($this->faker->email())
                    ->setSocialAddress(
                        (new LightAddress)
                        ->setLineOne($this->faker->streetAddress())
                        ->setPostcode($this->faker->postcode())
                        ->setCity($this->faker->city())
                        ->setCountry($this->faker->randomElement(['FR', 'IT', 'ES', 'DE', 'BE', 'CH', 'GB']))
                    )
                    ->setSenderAddress(
                        (new LightAddress)
                        ->setLineOne($this->faker->streetAddress())
                        ->setPostcode($this->faker->postcode())
                        ->setCity($this->faker->city())
                        ->setCountry($this->faker->randomElement(['FR', 'IT', 'ES', 'DE', 'BE', 'CH', 'GB']))
                    )
                    ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                    ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s'))) 
                    ;

            $manager->persist($vendorContact);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [CategoryFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}