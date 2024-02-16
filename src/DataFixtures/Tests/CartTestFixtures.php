<?php
namespace App\DataFixtures\Tests;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\VendorGroup;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CartTestFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository
    )
    {

    }

    public function load(ObjectManager $manager)
    {
        $user = $this->userRepository->findOneBy(['email' => 'user@gmail.com']);
        $confirmedUser = $this->userRepository->findOneBy(['email' => 'confirmed_user@gmail.com']);


        $product1 = $this->productRepository->findOneBySlug('objet', 'fr');
        $product2 = $this->productRepository->findOneBySlug('mon-objet', 'fr');
        $product3 = $this->productRepository->findOneBySlug('public-ref-test', 'fr');
        


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

        $cart = new Cart;
        $cart   
            ->setUser($confirmedUser)
            ->addCartVendorGroup(
                (new CartVendorGroup)
                ->setVendor($product1->getVendor())
                ->addCartLine(
                    (new CartLine)
                    ->setPackaging($product1->getPackagingChoices()->get(0))
                    ->setQuantity(4)
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


        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ProductTestFixtures::class,
            UserTestFixtures::class
        ];
    }
}