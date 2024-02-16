<?php
namespace App\DataFixtures\Tests;

use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\TranslatableString;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProductMoreExpansiveTestFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private UserRepository $userRepository
    )
    {
        
    }

    public function load(ObjectManager $manager)
    {
        $category = $this->categoryRepository->findOneBy([]);
        $vendor = $this->userRepository->findOneBy(['email' => 'vendor_for_tests@mail.com']);
        $subCategory = $category->getSubCategories()->get(0);

        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef('packaging_with_price_one_million')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn('label')
                        ->setFr('label')
                        ->setEs('label')
                        ->setIt('label')
                    )
                    ->setConsumerPriceHT(9900000) // 99 000
                    ->setBusinessPriceHT(9900000)
                    ->setStock(50)
                    ->setEanCode('0123456789')
                    ->setWeight(100)
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('designation')
                    ->setFr('designation')
                    ->setEs('designation')
                    ->setIt('designation')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('slug')
                    ->setFr('slug')
                    ->setEs('slug')
                    ->setIt('slug')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($product);

        $manager->flush();
    }

    public function getDependencies()
    {
        return [CategoryTestFixtures::class, VendorTestFixtures::class];
    }
}