<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\TranslatableString;
use Bezhanov\Faker\Provider\Commerce;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\Entity\Packaging;
use App\Repository\UserRepository;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ProductWithOrWithoutStockTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;
    
    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];


    public function __construct(
        private SluggerInterface $slugger,
        private CategoryRepository $categoryRepository,
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create();
        $this->faker->addProvider(new Commerce($this->faker));
    }

    public function load(ObjectManager $manager)
    {
        $products = []; // pour suggestedProducts

        $categories = $this->categoryRepository->findAll();
        $vendor = $this->userRepository->findOneBy(['email' => 'vendor_for_tests@mail.com']);
        
        //stock
        $category = $this->faker->randomElement($categories);
        $subCategory = $this->faker->randomElement($category->getSubCategories()->toArray());
        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef(str_shuffle('aAzZrR1234567890'))
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                    )
                    ->setConsumerPriceHT(random_int(1000, 200000))
                    ->setBusinessPriceHT(random_int(1000, 200000))
                    ->setStock(0)
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('en stock test')
                    ->setFr('stock test')
                    ->setEs('es stock test')
                    ->setIt('it stock test')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('stock-test-1-en')
                    ->setFr('stock-test-1')              
                    ->setEs('stock-test-1-es')
                    ->setIt('stock-test-1-it')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($product);
        $products[] = $product;

        $category = $this->faker->randomElement($categories);
        $subCategory = $this->faker->randomElement($category->getSubCategories()->toArray());
        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef(str_shuffle('aAzZrR1234567890'))
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                    )
                    ->setConsumerPriceHT(random_int(1000, 200000))
                    ->setBusinessPriceHT(random_int(1000, 200000))
                    ->setStock(1)
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('en stock test')
                    ->setFr('stock test')
                    ->setEs('es stock test')
                    ->setIt('it stock test')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('stock-test-2-en')
                    ->setFr('stock-test-2')              
                    ->setEs('stock-test-2-es')
                    ->setIt('stock-test-2-it')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($product);
        $products[] = $product;

        foreach($products as $product)
        {
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [CategoryTestFixtures::class, VendorTestFixtures::class];
    }
}