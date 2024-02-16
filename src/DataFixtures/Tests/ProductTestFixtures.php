<?php
namespace App\DataFixtures\Tests;

use App\DataFixtures\Blog\RecipeFixtures;
use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\Category;
use Bezhanov\Faker\Provider\Commerce;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\Entity\Packaging;
use App\Entity\Picture;
use App\Entity\TranslatableString;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ProductTestFixtures extends Fixture implements DependentFixtureInterface
{
    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];

    private Generator $faker;
    private Generator $en_faker;


    public function __construct(
        private SluggerInterface $slugger,
        private CategoryRepository $categoryRepository,
        private RecipeRepository $recipeRepository,
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create();
        $this->faker->addProvider(new Commerce($this->faker));

        $this->en_faker = Factory::create('en_EN');
        $this->en_faker->addProvider(new Commerce($this->faker));
    }
    
    public function load(ObjectManager $manager)
    {
        $categories = $this->categoryRepository->findAll();
        $vendor = $this->userRepository->findOneBy(['email' => 'vendor_for_tests@mail.com']);
  

        $products = []; // pour suggestedProducts
        for ($i=0; $i < 5; $i++) { 
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
                        ->setStock(random_int(1, 50))
                        ->setEanCode(str_shuffle('0123456789'))
                        ->setWeight(random_int(50, 10000))
                        ->setListPosition(1)
                    )
                    ->setVendor($vendor)
                    ->setDesignation($designation)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn(strtolower($this->slugger->slug($designation->getEn())))
                        ->setFr(strtolower($this->slugger->slug($designation->getFr())))
                        ->setEs(strtolower($this->slugger->slug($designation->getEs())))
                        ->setIt(strtolower($this->slugger->slug($designation->getIt())))
                    )
                    ->setHsCode('code-douanier')
                    ->setOriginCountry('ES')
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s')))
                    ->addPicture(
                        (new Picture)
                        ->setListPosition(2)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setFileName('fichier')
                        ->setFileSize(5)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alternative text')
                            ->setFr('texte alternatif')
                            ->setEs('alternativo text')
                            ->setIt('alternativo text')
                        )
                    )
                    ->addPicture(
                        (new Picture)
                        ->setListPosition(1)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setFileName('fichier')
                        ->setFileSize(5)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alternative text')
                            ->setFr('texte alternatif')
                            ->setEs('alternativo text')
                            ->setIt('alternativo text')
                        )
                    )
                    ->addPicture(
                        (new Picture)
                        ->setListPosition(3)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setFileName('fichier')
                        ->setFileSize(5)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('alternative text')
                            ->setFr('texte alternatif')
                            ->setEs('alternativo text')
                            ->setIt('alternativo text')
                        )
                    )
                    ;
            if(random_int(0, 9) > 2)
            {
                $product
                    ->setReviewNote(random_int(10, 50))
                    ->setCountReviews(random_int(1, 1500))
                ;
            }
            $manager->persist($product);
            $products[] = $product;
        }

        foreach($products as $product)
        {
            $suggestedProduct = $this->faker->randomElement($products);
            if($product->getSlug() !== $suggestedProduct->getSlug())
            {
                $product->addSuggestedProduct($suggestedProduct);
            }
        }

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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('my object')
                    ->setFr('mon objet')
                    ->setEs('mi objeto')
                    ->setIt('il mio object')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('my-object')
                    ->setFr('mon-objet')
                    ->setEs('mi-objeto')
                    ->setIt('il-mio-object')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ->addPicture(
                    (new Picture)
                    ->setListPosition(2)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text')
                        ->setFr('texte alternatif')
                        ->setEs('alternativo text')
                        ->setIt('alternativo text')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(1)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text')
                        ->setFr('texte alternatif')
                        ->setEs('alternativo text')
                        ->setIt('alternativo text')
                    )
                )
                ->addSuggestedProduct($this->faker->randomElement($products))
                ;
        $manager->persist($product);
        $monObjet = $product; // pour product with suggestedProducts


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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('object')
                    ->setFr('objet')
                    ->setEs('es objeto')
                    ->setIt('it object')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('object')
                    ->setFr('objet')
                    ->setEs('es-objeto')
                    ->setIt('it-object')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ->addPicture(
                    (new Picture)
                    ->setListPosition(3)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text')
                        ->setFr('texte alternatif')
                        ->setEs('alternativo text')
                        ->setIt('alternativo text')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(1)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for test')
                        ->setFr('texte alternatif pour test')
                        ->setEs('alternativo text por test')
                        ->setIt('alternativo text per test')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(2)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for test')
                        ->setFr('texte alternatif pour test')
                        ->setEs('alternativo text por test')
                        ->setIt('alternativo text per test')
                    )
                )
                ->addSuggestedProduct($this->faker->randomElement($products))
                ;
        $manager->persist($product);
        $objet = $product; // pour product with suggestedProducts



        $category = $this->faker->randomElement($categories);
        $subCategory = $this->faker->randomElement($category->getSubCategories()->toArray());
        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef('test-publicRef')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                    )
                    ->setConsumerPriceHT(random_int(1000, 200000))
                    ->setBusinessPriceHT(random_int(1000, 200000))
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('public ref test en designation')
                    ->setFr('public ref test')
                    ->setEs('public ref test es designation')
                    ->setIt('public ref test it designation')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('public-ref-test')
                    ->setFr('public-ref-test')
                    ->setEs('public-ref-test')
                    ->setIt('public-ref-test')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
                ->addPicture(
                    (new Picture)
                    ->setListPosition(2)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for test')
                        ->setFr('texte alternatif pour test')
                        ->setEs('alternativo text por test')
                        ->setIt('alternativo text per test')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(1)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for test')
                        ->setFr('texte alternatif pour test')
                        ->setEs('alternativo text por test')
                        ->setIt('alternativo text per test')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(3)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for test')
                        ->setFr('texte alternatif pour test')
                        ->setEs('alternativo text por test')
                        ->setIt('alternativo text per test')
                    )
                )
                ->addSuggestedProduct($this->faker->randomElement($products))
                ;
        $manager->persist($product);


        /*product with suggestedProducts*/
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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('en designation for product with suggestedProducts')
                    ->setFr('product with suggestedProducts')
                    ->setEs('es designation for product with suggestedProducts')
                    ->setIt('it designation for product with suggestedProducts')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-with-suggested-products')
                    ->setFr('product-with-suggested-products')
                    ->setEs('product-with-suggested-products')
                    ->setIt('product-with-suggested-products')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCreatedAt(new DateTimeImmutable())
                ->addSuggestedProduct($objet)
                ->addSuggestedProduct($monObjet)
                ;
        $manager->persist($product);


        /*product with no stock*/
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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('product with no stock')
                    ->setFr('en designation for product with no stock')
                    ->setEs('es designation for product with no stock')
                    ->setIt('it designation for product with no stock')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-with-no-stock-en-slug')
                    ->setFr('product-with-no-stock')
                    ->setEs('product-with-no-stock-es-slug')
                    ->setIt('product-with-no-stock-it-slug')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCreatedAt(new DateTimeImmutable())
                ->addSuggestedProduct($this->faker->randomElement($products))
                ;
        $manager->persist($product);


        /* product with specific category */
        $category = $this->categoryRepository->findOneBy(['slug' => 'categorie-1']);
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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('product with specific category')
                    ->setFr('en designation for product with specific category')
                    ->setEs('es designation for product with specific category')
                    ->setIt('it designation for product with specific category')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-with-specific-category')
                    ->setFr('product-with-specific-category')              
                    ->setEs('product-with-specific-category')
                    ->setIt('product-with-specific-category')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCreatedAt(new DateTimeImmutable())
                ->addSuggestedProduct($this->faker->randomElement($products))
                ;
        $manager->persist($product);

        /*product with all fields*/
        $category = $this->faker->randomElement($categories);
        $subCategory = $category->getSubCategories()->get(1);
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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                ) 
                ->setVendor($vendor)
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('product with all fields')
                    ->setFr('en designation for product with all fields')
                    ->setEs('es designation for product with all fields')
                    ->setIt('it designation for product with all fields')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-with-all-fields')
                    ->setFr('product-with-all-fields')              
                    ->setEs('product-with-all-fields')
                    ->setIt('product-with-all-fields')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCreatedAt(new DateTimeImmutable())
                ->addSuggestedProduct($objet)
                ->addSuggestedProduct($monObjet)
                ->addPicture(
                    (new Picture)
                    ->setListPosition(3)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for picture 3')
                        ->setFr('texte alternatif pour picture 3')
                        ->setEs('alternativo text por picture 3')
                        ->setIt('alternativo text per picture 3')
                    )
                )
                ->addPicture(
                    (new Picture)
                    ->setListPosition(1)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setFileName('fichier')
                    ->setFileSize(5)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alternative text for picture 1')
                        ->setFr('texte alternatif pour picture 1')
                        ->setEs('alternativo text por picture 1')
                        ->setIt('alternativo text per picture 1')
                    )
                )
                ;
        $manager->persist($product);



        /* product with linkedRecipes */
        $recipes = $this->recipeRepository->findAll();
        /*product with all fields*/
        $category = $this->faker->randomElement($categories);
        $subCategory = $category->getSubCategories()->get(1);
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
                    ->setStock(random_int(1, 50))
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('product with linked recipes')
                    ->setFr('product with linked recipes')
                    ->setEs('product with linked recipes')
                    ->setIt('product with linked recipes')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-with-linked-recipes')
                    ->setFr('product-with-linked-recipes')              
                    ->setEs('product-with-linked-recipes')
                    ->setIt('product-with-linked-recipes')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCreatedAt(new DateTimeImmutable())
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ->addLinkedRecipe($this->faker->randomElement($recipes))
                ;
        $manager->persist($product);



        //product for price filter test // price = 10M€
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
                    ->setConsumerPriceHT(1000000000)  // 10M
                    ->setBusinessPriceHT(1000000000) // 10M
                    ->setStock(10)
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation($designation)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn(strtolower($this->slugger->slug($designation->getEn())))
                    ->setFr(strtolower($this->slugger->slug($designation->getFr())))
                    ->setEs(strtolower($this->slugger->slug($designation->getEs())))
                    ->setIt(strtolower($this->slugger->slug($designation->getIt())))
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s')))
                ;
        $manager->persist($product);




        //2 products with stock 0 for adminFilter test
        for($i = 0; $i < 2; $i++)
        {
            $designation = (new TranslatableString)
            ->setEn('stock test')
            ->setFr('stock test')
            ->setEs('stock test')
            ->setIt('stock test')
            ;
            /** @var Category */
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
                    ->setConsumerPriceHT(1000)  
                    ->setBusinessPriceHT(1000) 
                    ->setStock(0)
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation($designation)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn(strtolower($this->slugger->slug($designation->getEn())))
                    ->setFr(strtolower($this->slugger->slug($designation->getFr())))
                    ->setEs(strtolower($this->slugger->slug($designation->getEs())))
                    ->setIt(strtolower($this->slugger->slug($designation->getIt())))
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s')))
                ;
            $manager->persist($product);
        }

        //1 product with stock 1M for adminFilter test
        for($i = 0; $i < 2; $i++)
        {
            $designation = (new TranslatableString)
            ->setEn('product for admin filter test minStock')
            ->setFr('product for admin filter test minStock')
            ->setEs('product for admin filter test minStock')
            ->setIt('product for admin filter test minStock')
            ;
            /** @var Category */
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
                    ->setConsumerPriceHT(1000)  
                    ->setBusinessPriceHT(1000) 
                    ->setStock(1000000)
                    ->setEanCode(str_shuffle('0123456789'))
                    ->setWeight(random_int(50, 10000))
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation($designation)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn(strtolower($this->slugger->slug($designation->getEn())))
                    ->setFr(strtolower($this->slugger->slug($designation->getFr())))
                    ->setEs(strtolower($this->slugger->slug($designation->getEs())))
                    ->setIt(strtolower($this->slugger->slug($designation->getIt())))
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable($this->faker->dateTime()->format('Y:m:d H:i:s')))
                ;
            $manager->persist($product);
        }

        
        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [CategoryTestFixtures::class, RecipeFixtures::class, VendorTestFixtures::class];
    }
}