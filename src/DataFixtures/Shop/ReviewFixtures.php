<?php
namespace App\DataFixtures\Shop;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Review;
use DateTimeImmutable;
use App\Config\SiteConfig;
use App\DataFixtures\User\UserFixtures;
use App\Repository\UserRepository;
use App\Repository\ProductRepository;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Shop\ProductFixtures;
use App\Entity\Answer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ReviewFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private $lang_choices = ['en', 'fr', 'es', 'it'];

    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository,
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $products = $this->productRepository->findAll();
        $users = $this->userRepository->findAll();
        $admin = $this->userRepository->findOneBy(['email' => 'fnsandin@gmail.com']);

        $productsWithReview = [];
        for($i = 0; $i < ceil((count($products) * 0.66)); $i++) { 
            $product = $products[$i];
            $productsWithReview[] = $product;
            $product->setReviewNote(random_int(10, 50));
            $vendor = $product->getVendor();

            $vendorAnswer = (new Answer)
                            ->setUser($vendor)
                            ->setType('vendor')
                            ->setEmail($vendor->getEmail())
                            ->setFullName($vendor->getCompany()->getUsualName())
                            ->setContent($this->faker->paragraph() . ' C\'était ma réponse de vendeur.')
                            ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ;
            $manager->persist($vendorAnswer);
            $adminAnswer = (new Answer)
                            ->setUser($admin)
                            ->setType('admin')
                            ->setEmail($admin->getEmail())
                            ->setFullName($admin->getFirstName())
                            ->setContent($this->faker->paragraph() . ' C\'était ma réponse d\'admin.')
                            ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ;
            $manager->persist($adminAnswer);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                        ->addAnswer($vendorAnswer)
                        ->addAnswer($adminAnswer)
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                            ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);



            $vendorAnswer = (new Answer)
                            ->setUser($vendor)
                            ->setType('vendor')
                            ->setEmail($vendor->getEmail())
                            ->setFullName($vendor->getCompany()->getUsualName())
                            ->setContent($this->faker->paragraph() . ' C\'était ma réponse de vendeur.')
                            ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ;
            $manager->persist($vendorAnswer);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                        ->addAnswer($vendorAnswer)
                        ;
            
                        
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }

            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);

            
         
            $adminAnswer = (new Answer)
                            ->setUser($admin)
                            ->setType('admin')
                            ->setEmail($admin->getEmail())
                            ->setFullName($admin->getFirstName())
                            ->setContent($this->faker->paragraph() . ' C\'était ma réponse d\'admin.')
                            ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ;
            $manager->persist($adminAnswer);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                        ->addAnswer($adminAnswer)
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $vendorAnswer1 = (new Answer)
                            ->setUser($vendor)
                            ->setType('vendor')
                            ->setEmail($vendor->getEmail())
                            ->setFullName($vendor->getCompany()->getUsualName())
                            ->setContent($this->faker->paragraph() . ' C\'était ma réponse de vendeur n°1.')
                            ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ;
                    $manager->persist($vendorAnswer1);
            
            $vendorAnswer2 = (new Answer)
                        ->setUser($vendor)
                        ->setType('vendor')
                        ->setEmail($vendor->getEmail())
                        ->setFullName($vendor->getCompany()->getUsualName())
                        ->setContent($this->faker->paragraph() . ' C\'était ma réponse de vendeur n°2.')
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                    ;
                $manager->persist($vendorAnswer2);
            
            $vendorAnswer3 = (new Answer)
                    ->setUser($vendor)
                    ->setType('vendor')
                    ->setEmail($vendor->getEmail())
                    ->setFullName($vendor->getCompany()->getUsualName())
                    ->setContent($this->faker->paragraph() . ' C\'était ma réponse de vendeur n°3.')
                    ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                ;
            $manager->persist($vendorAnswer3);
        

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                        ->addAnswer($vendorAnswer1)
                        ->addAnswer($vendorAnswer2)
                        ->addAnswer($vendorAnswer3)
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(true)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                    ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);


        }
        
        
        for ($i=0; $i < 500; $i++) { 

            $product = $this->faker->randomElement($productsWithReview);

            $review = (new Review)
                        ->setUser($this->faker->randomElement($users))
                        ->setProduct($product)
                        ->setUser($this->faker->randomElement($users))
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->paragraph(1))
                        ->setRate(random_int(1, 5))
                        ->setComment($this->faker->paragraph())
                        ->setEmail($this->faker->email())
                        ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                        ->setConfirmed(true)
                        ->setModerationStatus(SiteConfig::STATUS_PENDING)
                        ->setBought(false)
                        ->setCreatedAt(new DateTimeImmutable(($this->faker->dateTimeBetween())->format('Y:m:d H:h:i')))
                        ->setLang($this->faker->randomElement($this->lang_choices))
                        ;
            if(random_int(0, 9) <= 7)
            {
                $status = $this->faker->randomElement([SiteConfig::MODERATION_STATUS_ACCEPTED, SiteConfig::MODERATION_STATUS_REFUSED]);
                $review->setModerationStatus($status);
                if($status === SiteConfig::MODERATION_STATUS_ACCEPTED)
                {
                    if($productCountReviews = $product->getCountReviews())
                    {
                        $product->setCountReviews($productCountReviews + 1);
                    }
                    else
                    {
                        $product->setCountReviews(1);
                    }
                }
            }
            $manager->persist($review);
            
        }


        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserFixtures::class, ProductFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}