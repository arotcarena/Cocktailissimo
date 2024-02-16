<?php
namespace App\DataFixtures\Shop;

use App\Config\SiteConfig;
use App\DataFixtures\Blog\RecipeFixtures;
use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\Category;
use App\Entity\TranslatableText;
use App\Entity\TranslatableString;
use Bezhanov\Faker\Provider\Commerce;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Shop\CategoryFixtures;
use App\DataFixtures\User\UserFixtures;
use App\Entity\Packaging;
use App\Entity\Picture;
use App\Repository\RecipeRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManagerInterface;


class ProductFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];

    private Generator $faker;

    public function __construct(
        private SluggerInterface $slugger,
        private CategoryRepository $categoryRepository,
        private RecipeRepository $recipeRepository,
        private EntityManagerInterface $em
    )
    {
        $this->faker = Factory::create();
        $this->faker->addProvider(new Commerce($this->faker));

    }
    
    public function load(ObjectManager $manager)
    {
        $categories = $this->categoryRepository->findAll();
        $vendors = $this->em->createQueryBuilder()
                            ->select('u')
                            ->from('App\Entity\User', 'u')
                            ->where('u.roles LIKE :role')
                            ->setParameter('role', '%'.SiteConfig::ROLE_VENDOR.'%')
                            ->getQuery()
                            ->getResult()
                            ;

        //ON NE VEUT PAS CREER DE PRODUITS DANS LES CATEGORIES GAZETTE OU RECETTES
        foreach($categories as $index => $category)
        {
            if($category->getName()->getFr() === 'Recettes' || $category->getName()->getFr() === 'Gazette')
            {
                unset($categories[$index]);
            }
        }

        $products = []; // pour suggestedProducts
        for ($i=0; $i < 100; $i++) { 
            $designation = (new TranslatableString)
                            ->setEn($this->faker->productName())
                            ->setFr($this->faker->productName())
                            ->setEs($this->faker->productName())
                            ->setIt($this->faker->productName())
                            ;
            /** @var Category */
            $category = $this->faker->randomElement($categories);
            $subCategory = $this->faker->randomElement($category->getSubCategories()->toArray());
            $product = new Product;
            $product->setVendor($this->faker->randomElement($vendors))
                    ->setDesignation($designation)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn(strtolower($this->slugger->slug($designation->getEn())))
                        ->setFr(strtolower($this->slugger->slug($designation->getFr())))
                        ->setEs(strtolower($this->slugger->slug($designation->getEs())))
                        ->setIt(strtolower($this->slugger->slug($designation->getIt())))
                    )
                    ->setMetaDescription(
                        (new TranslatableString)
                    )
                    ->setShortDescription(
                        (new TranslatableString)
                        ->setEn($this->faker->paragraph(1))
                        ->setFr($this->faker->paragraph(1))
                        ->setEs($this->faker->paragraph(1))
                        ->setIt($this->faker->paragraph(1))
                    )
                    ->setLongHtmlDescription(
                        (new translatableText)
                        ->setEn($this->faker->text(1000))
                        ->setFr($this->faker->text(1000))
                        ->setEs($this->faker->text(1000))
                        ->setIt($this->faker->text(1000))
                    )
                    ->setHsCode('code-douanier')
                    ->setOriginCountry('ES')
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->addPicture(
                        (new Picture)
                        ->setFileName('none.jpg')
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alt en')
                            ->setEn('alt fr')
                            ->setEn('alt es')
                            ->setEn('alt it')
                        )
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addPicture(
                        (new Picture)
                        ->setFileName('none.jpg')
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alt en')
                            ->setEn('alt fr')
                            ->setEn('alt es')
                            ->setEn('alt it')
                        )
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addPicture(
                        (new Picture)
                        ->setFileName('none.jpg')
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alt en')
                            ->setEn('alt fr')
                            ->setEn('alt es')
                            ->setEn('alt it')
                        )
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ;

            
            //base packaging
            $consumerPrice = random_int(1000, 200000);
            $businessPrice = $consumerPrice - random_int(0, (int)round($consumerPrice / 10));
            $weight = random_int(100, 250);
            $label = $this->faker->randomElement(self::PACKAGING_LABELS);

            $product
                ->addPackaging(
                    (new Packaging)
                    ->setPublicRef(substr(str_shuffle('0123456789azertyuiopqsdfghjklmwxcvbn'), 0, 8))
                    ->setPrivateRef(substr(str_shuffle('AZERTYUIOPQSDFGHJKLMWXCVBN0123456789012345678901234567890123456789'), 0, 8))
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($label)
                        ->setFr($label)
                        ->setEs($label)
                        ->setIt($label)
                    )
                    ->setConsumerPriceHT($consumerPrice)
                    ->setBusinessPriceHT($businessPrice)
                    ->setStock(random_int(0, 10))
                    ->setEanCode(str_shuffle('012345678901234579'))
                    ->setWeight(random_int(100, 5000))
                    ->setListPosition(1)
                );

            if(random_int(0, 10) < 8)
            {
                $consumerPrice += random_int(1000, 25000);
                $businessPrice = $consumerPrice - random_int(0, (int)round($consumerPrice / 10));
                $weight += random_int(10, 200);
                $label = $this->faker->randomElement(self::PACKAGING_LABELS);

                $product
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef(substr(str_shuffle('0123456789azertyuiopqsdfghjklmwxcvbn'), 0, 8))
                        ->setPrivateRef(substr(str_shuffle('AZERTYUIOPQSDFGHJKLMWXCVBN0123456789012345678901234567890123456789'), 0, 8))
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn($label)
                            ->setFr($label)
                            ->setEs($label)
                            ->setIt($label)
                        )
                        ->setConsumerPriceHT($consumerPrice)
                        ->setBusinessPriceHT($businessPrice)
                        ->setStock(random_int(0, 10))
                        ->setEanCode(str_shuffle('012345678901234579'))
                        ->setWeight(random_int(100, 5000))
                        ->setListPosition(2)
                    );

                $consumerPrice += random_int(1000, 25000);
                $businessPrice = $consumerPrice - random_int(0, (int)round($consumerPrice / 10));
                $weight = $weight + random_int(10, 200);
                $label = $this->faker->randomElement(self::PACKAGING_LABELS);

                $product
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef(substr(str_shuffle('0123456789azertyuiopqsdfghjklmwxcvbn'), 0, 8))
                        ->setPrivateRef(substr(str_shuffle('AZERTYUIOPQSDFGHJKLMWXCVBN0123456789012345678901234567890123456789'), 0, 8))
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn($label)
                            ->setFr($label)
                            ->setEs($label)
                            ->setIt($label)
                        )
                        ->setConsumerPriceHT($consumerPrice)
                        ->setBusinessPriceHT($businessPrice)
                        ->setStock(random_int(0, 10))
                        ->setEanCode(str_shuffle('012345678901234579'))
                        ->setWeight(random_int(100, 5000))
                        ->setListPosition(3)
                    );

                $consumerPrice += random_int(1000, 25000);
                $businessPrice = $consumerPrice - random_int(0, (int)round($consumerPrice / 10));
                $weight = $weight + random_int(10, 200);
                $label = $this->faker->randomElement(self::PACKAGING_LABELS);

                $product
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef(substr(str_shuffle('0123456789azertyuiopqsdfghjklmwxcvbn'), 0, 8))
                        ->setPrivateRef(substr(str_shuffle('AZERTYUIOPQSDFGHJKLMWXCVBN0123456789012345678901234567890123456789'), 0, 8))
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn($label)
                            ->setFr($label)
                            ->setEs($label)
                            ->setIt($label)
                        )
                        ->setConsumerPriceHT($consumerPrice)
                        ->setBusinessPriceHT($businessPrice)
                        ->setStock(random_int(0, 10))
                        ->setEanCode(str_shuffle('012345678901234579'))
                        ->setWeight(random_int(100, 5000))
                        ->setListPosition(4)
                    );
            }
            
            
            $manager->persist($product);
            $products[] = $product;
        }

        //AJOUT DES SUGGESTED PRODUCTS
        foreach($products as $product)
        {
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
        }

        // AJOUT DES LINKED RECIPES
        $recipes = $this->recipeRepository->findAll();
        /** @var Product $product */
        foreach($products as $product)
        {
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            $product->addLinkedRecipe($this->faker->randomElement($recipes));
            if(random_int(0, 10) < 7)
            {
                $product->addLinkedRecipe($this->faker->randomElement($recipes));
            }
            if(random_int(0, 10) < 7)
            {
                $product->addLinkedRecipe($this->faker->randomElement($recipes));
            }
            if(random_int(0, 10) < 7)
            {
                $product->addLinkedRecipe($this->faker->randomElement($recipes));
            }
            if(random_int(0, 10) < 7)
            {
                $product->addLinkedRecipe($this->faker->randomElement($recipes));
            }
        }


        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [CategoryFixtures::class, RecipeFixtures::class, UserFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}