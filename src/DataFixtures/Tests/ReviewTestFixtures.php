<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Review;
use DateTimeImmutable;
use App\Config\SiteConfig;
use App\Repository\UserRepository;
use App\Repository\ProductRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Tests\UserTestFixtures;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Answer;
use App\Entity\Company;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Repository\CategoryRepository;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ReviewTestFixtures extends Fixture implements DependentFixtureInterface
{
    private $lang_choices = ['en', 'fr', 'es', 'it'];

    private Generator $faker;

    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository,
        private CategoryRepository $categoryRepository,
        private UserPasswordHasherInterface $hasher
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $products = $this->productRepository->findAll();
        $users = $this->userRepository->findAll();

        $randomProduct = $this->faker->randomElement($products);

        for ($i=0; $i < 20; $i++) { 
            $review = (new Review)
                        ->setProduct($this->faker->randomElement($products))
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
                    if(random_int(0, 9) < 6)
                    {
                        $review
                            ->setModerationStatus($this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]));
                    }
            $manager->persist($review);
        }


        //reviews pour les tests confirmationToken
        $review = (new Review)
                    ->setProduct($this->faker->randomElement($products))
                    ->setUser($this->faker->randomElement($users))
                    ->setFullName($this->faker->name())
                    ->setTitle($this->faker->paragraph(1))
                    ->setRate(random_int(1, 5))
                    ->setComment($this->faker->paragraph())
                    ->setEmail('review_with_valid_confirmation_token@mail.fr')
                    ->setConfirmed(false) // important puisqu'on veut vérifier la confirmation
                    ->setBought(true)
                    ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                    ->setLang($this->faker->randomElement($this->lang_choices))
                    ->setConfirmationToken('ajfkdlsiehjhfkld')
                    ->setConfirmationTokenExpireAt(time() + SiteConfig::TOKEN_TIME_VALIDITY)
                ;
        $manager->persist($review);

        $user = $this->faker->randomElement($users);
        $review = (new Review)
                    ->setProduct($this->faker->randomElement($products))
                    ->setUser($this->faker->randomElement($users))
                    ->setEmail($user->getEmail())
                    ->setFullName($this->faker->name())
                    ->setTitle($this->faker->paragraph(1))
                    ->setRate(random_int(1, 5))
                    ->setComment($this->faker->paragraph())
                    ->setConfirmed(false) // important puisqu'on veut vérifier la confirmation
                    ->setBought(true)
                    ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                    ->setLang($this->faker->randomElement($this->lang_choices))
                    ->setConfirmationToken('ajfkdlsiehjhfkld')
                    ->setConfirmationTokenExpireAt(time() - 1)
                ;
        $manager->persist($review);

        /*pour les tests apiReviewController.filterByProductId/filterByVendorId */
        $vendorOfProductWith3Reviews = new User;
        $vendorOfProductWith3Reviews
                    ->setEmail('vendor-of-product-with-3-reviews-confirmed-and-moderated@gmail.com')
                    ->setPassword(
                        $this->hasher->hashPassword($vendorOfProductWith3Reviews, 'password')
                    )
                    ->setCivility(SiteConfig::CIVILITY_F)
                    ->setFirstName('prénom')
                    ->setLastName('nom')
                    ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO, SiteConfig::ROLE_VENDOR])
                    ->setCompany(
                        (new Company)
                        ->setIdentificationNumber('0123456789')
                        ->setSocialName('social name')
                        ->setSlug('company-slug')
                        ->setCountry('FR')
                    )
                    ->setConfirmed(true)
                    ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($vendorOfProductWith3Reviews);

        $category = $this->categoryRepository->findOneBy([]);
        $subCategory = $category->getSubCategories()->get(0);
        $product = (new Product)
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef('product-with-3-reviews-confirmed-and-moderated')
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                            ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                            ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                            ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                        )
                        ->setConsumerPriceHT(random_int(2000, 20000))
                        ->setBusinessPriceHT(random_int(2000, 20000))
                        ->setStock(100)
                        ->setEanCode('code-barre')
                        ->setWeight(1500)
                        ->setListPosition(1)
                    )
                    ->setVendor($vendorOfProductWith3Reviews)
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
                    ->setShortDescription(new TranslatableString)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setHsCode('code-douanier')
                    ->setOriginCountry('ES')
                    ;
        $manager->persist($product);

        /*review avec confirmed true et moderation status accepted*/
        $user = $this->faker->randomElement($users);
        $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setEmail($user->getEmail())
                        ->setProduct($product)
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);
            /*review avec confirmed true et moderation status accepted*/
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                    ->setProduct($product)
                    ->setUser($this->faker->randomElement($users))
                    ->setEmail($user->getEmail())
                    ->setFullName($this->faker->name())
                    ->setTitle($this->faker->paragraph(1))
                    ->setRate(random_int(1, 5))
                    ->setComment($this->faker->paragraph())
                    ->setConfirmed(true)
                    ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                    ->setBought(true)
                    ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                    ->setLang($this->faker->randomElement($this->lang_choices))
                ;
            $manager->persist($review);
            /*review avec confirmed true et moderation status accepted*/
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                ->setProduct($product)
                ->setEmail($user->getEmail())
                ->setUser($this->faker->randomElement($users))
                ->setFullName($this->faker->name())
                ->setTitle($this->faker->paragraph(1))
                ->setRate(random_int(1, 5))
                ->setComment($this->faker->paragraph())
                ->setConfirmed(true)
                ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                ->setBought(true)
                ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                ->setLang($this->faker->randomElement($this->lang_choices))
            ;
            $manager->persist($review);
            /* review avec confirmed false */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(false)
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);
            /* review avec moderation status refused */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                        ->setProduct($product)
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_REFUSED)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);
            /*review avec moderation status pending */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                        ->setProduct($product)
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);
            /* review sans moderation status */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(true)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);






            /* review with 5 answers confirmed and accepted */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                        ->setProduct($randomProduct)
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setTitle('review with 5 answers')
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            $manager->persist($review);

            $vendor = $randomProduct->getVendor();
            $answer = (new Answer)
                        ->setEmail($this->faker->email())
                        ->setUser($vendor)
                        ->setReview($review)
                        ->setType('vendor')
                        ->setFullName($this->faker->firstName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
            $manager->persist($answer);
            $answer = (new Answer)
                        ->setEmail($this->faker->email())
                        ->setUser($vendor)
                        ->setReview($review)
                        ->setType('vendor')
                        ->setFullName($this->faker->firstName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
            $manager->persist($answer);
            $answer = (new Answer)
                        ->setEmail($this->faker->email())
                        ->setUser($vendor)
                        ->setReview($review)
                        ->setType('vendor')
                        ->setFullName($this->faker->firstName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
            $manager->persist($answer);
            $answer = (new Answer)
                        ->setEmail($this->faker->email())
                        ->setUser($vendor)
                        ->setReview($review)
                        ->setType('vendor')
                        ->setFullName($this->faker->firstName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
            $manager->persist($answer);
            $answer = (new Answer)
                        ->setEmail($this->faker->email())
                        ->setUser($vendor)
                        ->setReview($review)
                        ->setType('vendor')
                        ->setFullName($this->faker->firstName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
            $manager->persist($answer);


            /*review with expired confirmation email */
            $user = $this->faker->randomElement($users);
            $review = (new Review)
                            ->setUser($this->faker->randomElement($users))
                            ->setEmail('review_with_expired_confirmation_token@mail.fr')
                            ->setProduct($product)
                            ->setFullName($this->faker->name())
                            ->setTitle($this->faker->paragraph(1))
                            ->setRate(random_int(1, 5))
                            ->setComment($this->faker->paragraph())
                            ->setConfirmationToken('token')
                            ->setConfirmationTokenExpireAt(time() - 1)                            
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('en')
                        ;
            $manager->persist($review);

        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserTestFixtures::class, ProductTestFixtures::class, CategoryTestFixtures::class];
    }
}