<?php
namespace App\DataFixtures\Shop;

use App\DataFixtures\Shop\ProductFixtures;
use App\DataFixtures\User\UserFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;
use Faker\Generator;

class CartFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $users = $this->userRepository->findAll();
        $products = $this->productRepository->findAll();

        for ($i=0; $i < count($users); $i++) { 
            $user = $users[$i];
            $product1 = $this->faker->randomElement($products);
            $product2 = $this->faker->randomElement($products);
            $product3 = $this->faker->randomElement($products);

            $cart = new Cart;
            $cart   
                ->setUser($user)
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($product1->getVendor())
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($product1->getPackagingChoices()->get(0))
                        ->setQuantity(3)
                    )
                )
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($product3->getVendor())
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($product3->getPackagingChoices()->get(0))
                        ->setQuantity(2)
                    )
                )
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor($product2->getVendor())
                    ->addCartLine(
                        (new CartLine)
                        ->setPackaging($product2->getPackagingChoices()->get(0))
                        ->setQuantity(1)
                    )
                )
                ;
            $manager->persist($cart);
        }
        
        


        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ProductFixtures::class,
            UserFixtures::class
        ];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}