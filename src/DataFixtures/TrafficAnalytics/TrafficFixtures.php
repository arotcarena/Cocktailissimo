<?php
namespace App\DataFixtures\TrafficAnalytics;

use App\Config\SiteConfig;
use App\Convertor\Admin\AnonymousPurchaseToArrayConvertor;
use App\DataFixtures\Blog\ArticleFixtures;
use App\DataFixtures\Blog\CommentFixtures;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Shop\CartFixtures;
use App\DataFixtures\Shop\CategoryFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use App\DataFixtures\Shop\QuestionFixtures;
use App\DataFixtures\User\UserFixtures;
use App\DataFixtures\Utils\ExampleUrlsGenerator;
use App\Entity\Visit;
use App\Entity\Visitor;
use App\Entity\VisitorAction;
use App\Helper\UniqueStringGenerator;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Repository\QuestionRepository;
use App\Repository\RecipeRepository;
use DateInterval;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class TrafficFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    public const EXAMPLE_USER_AGENTS = [
        'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 12; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 11; moto g power (2021)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36'
    ];

    private Generator $faker;

    public function __construct(
        private UniqueStringGenerator $uniqueStringGenerator,
        private ExampleUrlsGenerator $exampleUrlsGenerator,
        private PackagingRepository $packagingRepository,
        private PurchaseRepository $purchaseRepository,
        private AnonymousPurchaseToArrayConvertor $anonymousPurchaseToArrayConvertor,
        private ArticleRepository $articleRepository,
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository,
        private QuestionRepository $questionRepository,
        private CommentRepository $commentRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    

    public function load(ObjectManager $manager)
    {
        $urls = $this->exampleUrlsGenerator->getExhaustiveListOfPossibleUrls();
        $packagings = $this->packagingRepository->findAll();
        $purchases = $this->purchaseRepository->findAll();
        $articles = $this->articleRepository->findAll();
        $recipes = $this->recipeRepository->findAll();
        $products = $this->productRepository->findAll();
        $questions = $this->questionRepository->findAll();
        $comments = $this->commentRepository->findAll();


        for ($i=0; $i < 250; $i++) { 
            $visitorCreatedAt = new DateTimeImmutable($this->faker->dateTimeBetween('-3 years')->format('Y:m:d H:i:s'));
            $visitor = (new Visitor)
                        ->setCookieId($this->uniqueStringGenerator->generate(20))
                        ->setLang($this->faker->randomElement(SiteConfig::LANG_CHOICES))
                        ->setUserAgent($this->faker->randomElement(self::EXAMPLE_USER_AGENTS))
                        ->setOrigin($this->faker->randomElement(['fb', 'insta', 'social', null, null, null]))
                        ->setCreatedAt($visitorCreatedAt)
                        ;
            $manager->persist($visitor);

            //visites
            if(random_int(0, 9) > 4)
            {
                $route = $this->faker->randomElement(array_keys($urls));
                $url = $this->faker->randomElement($urls[$route]);
                $visit = (new Visit)
                            ->setRoute($route)
                            ->setUrl($url)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addVisit($visit);
                $manager->persist($visit);
            }
            if(random_int(0, 9) > 4)
            {
                $route = $this->faker->randomElement(array_keys($urls));
                $url = $this->faker->randomElement($urls[$route]);
                $visit = (new Visit)
                            ->setRoute($route)
                            ->setUrl($url)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addVisit($visit);
                $manager->persist($visit);
            }
            if(random_int(0, 9) > 4)
            {
                $route = $this->faker->randomElement(array_keys($urls));
                $url = $this->faker->randomElement($urls[$route]);
                $visit = (new Visit)
                            ->setRoute($route)
                            ->setUrl($url)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addVisit($visit);
                $manager->persist($visit);
            }
            if(random_int(0, 9) > 4)
            {
                $route = $this->faker->randomElement(array_keys($urls));
                $url = $this->faker->randomElement($urls[$route]);
                $visit = (new Visit)
                            ->setRoute($route)
                            ->setUrl($url)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addVisit($visit);
                $manager->persist($visit);
            }
            if(random_int(0, 9) > 4)
            {
                $route = $this->faker->randomElement(array_keys($urls));
                $url = $this->faker->randomElement($urls[$route]);
                $visit = (new Visit)
                            ->setRoute($route)
                            ->setUrl($url)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addVisit($visit);
                $manager->persist($visit);
            }

            //actions
            //register
            if(random_int(0, 9) > 7)
            {
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_PRE_REGISTER)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_REGISTER_CONFIRM)
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action)
                        ->setRole($this->faker->randomElement(['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR']))
                        ;
                $manager->persist($action);
            }
            //cart_create
            if(random_int(0, 9) > 6)
            {
                $cartCreateDate = new DateTimeImmutable(
                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                ->format('Y:m:d H:i:s')
                );
                $packaging = $this->faker->randomElement($packagings);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_CART_CREATE)
                            ->setDetail([
                                $packaging->getId() => random_int(1, 5)
                            ])
                            ->setCreatedAt($cartCreateDate)
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
                //cart_change
                if(random_int(0, 9) > 5)
                {
                    $packaging = $this->faker->randomElement($packagings);
                    $packaging2 = $this->faker->randomElement($packagings);
                    $action = (new VisitorAction)
                                ->setType(VisitorAction::TYPE_CART_CHANGE)
                                ->setDetail([
                                    $packaging->getId() => random_int(1, 5),
                                    $packaging2->getId() => random_int(1, 5)
                                ])
                                ->setCreatedAt($cartCreateDate->add((new DateInterval('PT'.random_int(0, 45).'M')))) // entre 0 et 45 min après cart_create
                                ;
                    $visitor->addAction($action);
                    $manager->persist($action);
                }
                if(random_int(0, 9) > 5)
                {
                    $packaging = $this->faker->randomElement($packagings);
                    $packaging2 = $this->faker->randomElement($packagings);
                    $action = (new VisitorAction)
                                ->setType(VisitorAction::TYPE_CART_CHANGE)
                                ->setDetail([
                                    $packaging->getId() => random_int(1, 5),
                                    $packaging2->getId() => random_int(1, 5)
                                ])
                                ->setCreatedAt($cartCreateDate->add((new DateInterval('PT'.random_int(0, 45).'M')))) // entre 0 et 45 min après cart_create
                                ;
                    $visitor->addAction($action);
                    $manager->persist($action);
                }
                if(random_int(0, 9) > 5)
                {
                    $packaging = $this->faker->randomElement($packagings);
                    $packaging2 = $this->faker->randomElement($packagings);
                    $action = (new VisitorAction)
                                ->setType(VisitorAction::TYPE_CART_CHANGE)
                                ->setDetail([
                                    $packaging->getId() => random_int(1, 5),
                                    $packaging2->getId() => random_int(1, 5)
                                ])
                                ->setCreatedAt($cartCreateDate->add((new DateInterval('PT'.random_int(0, 45).'M')))) // entre 0 et 45 min après cart_create
                                ;
                    $visitor->addAction($action);
                    $manager->persist($action);
                }
                if(random_int(0, 9) > 5)
                {
                    $packaging = $this->faker->randomElement($packagings);
                    $packaging2 = $this->faker->randomElement($packagings);
                    $action = (new VisitorAction)
                                ->setType(VisitorAction::TYPE_CART_CHANGE)
                                ->setDetail([
                                    $packaging->getId() => random_int(1, 5),
                                    $packaging2->getId() => random_int(1, 5)
                                ])
                                ->setCreatedAt($cartCreateDate->add((new DateInterval('PT'.random_int(0, 45).'M')))) // entre 0 et 45 min après cart_create
                                ;
                    $visitor->addAction($action);
                    $manager->persist($action);
                }
                //checkout
                if(random_int(0, 9) > 7)
                {
                    $checkoutStartDate = $cartCreateDate->add((new DateInterval('PT'.random_int(50, 70).'M')));  // entre 50 et 70 min après cart_create
                    $action = (new VisitorAction)
                                ->setType(VisitorAction::TYPE_CHECKOUT_START)
                                ->setDetail(
                                    ['cart' => 'créer une vraie VisitorAction de type CHECKOUT_START pour avoir un vrai cart ici']
                                )
                                ->setCreatedAt($checkoutStartDate)
                                ;
                    $visitor->addAction($action);
                    $manager->persist($action);

                    //checkout_prepare_payment
                    if(random_int(0, 9) > 2)
                    {
                        $checkoutPreparePaymentDate = $checkoutStartDate->add((new DateInterval('PT'.random_int(5, 15).'M'))); // entre 5 et 15 min après checkout_start
                        $action = (new VisitorAction)
                                    ->setType(VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT)
                                    ->setDetail(['amount' => random_int(10000, 100000)])
                                    ->setCreatedAt($checkoutPreparePaymentDate) 
                                    ;
                        $visitor->addAction($action);
                        $manager->persist($action);

                        //checkout_payment_attempt
                        if(random_int(0, 9) > 2)
                        {
                            $checkoutPaymentAttemptDate = $checkoutPreparePaymentDate->add((new DateInterval('PT'.random_int(1, 5).'M'))); // entre 1 et 5 min après checkout_prepare_payment
                            $action = (new VisitorAction)
                                        ->setType(VisitorAction::TYPE_CHECKOUT_PAYMENT_ATTEMPT)
                                        ->setCreatedAt($checkoutPaymentAttemptDate) 
                                        ;
                            $visitor->addAction($action);
                            $manager->persist($action);

                            //purchase_paid
                            if(random_int(0, 9) > 1)
                            {
                                $purchase = $this->faker->randomElement($purchases);
                                $purchasePaidDate = $checkoutPaymentAttemptDate->add((new DateInterval('PT'.random_int(5, 20).'S'))); // entre 5 et 20 s après checkout_payment_attempt
                                $action = (new VisitorAction)
                                            ->setType(VisitorAction::TYPE_PURCHASE_PAID)
                                            ->setDetail(
                                                $this->anonymousPurchaseToArrayConvertor->convert($purchase)
                                            )
                                            ->setCreatedAt($purchasePaidDate) 
                                            ;
                                $visitor->addAction($action);
                                $manager->persist($action);
                            }
                        }
                    }
                }
            }
            //comment
            //comment about recipe
            if(random_int(0, 9) > 8)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_COMMENT)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 8)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_COMMENT)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 8)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_COMMENT)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //comment about article
            if(random_int(0, 9) > 8)
            {
                $article = $this->faker->randomElement($articles);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_COMMENT)
                            ->setDetail([
                                'article' => $article->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 8)
            {
                $article = $this->faker->randomElement($articles);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_COMMENT)
                            ->setDetail([
                                'article' => $article->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //question
            //question about recipe
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $recipe = $this->faker->randomElement($recipes);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'recipe' => $recipe->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //question about product
            if(random_int(0, 9) > 7)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'product' => $product->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'product' => $product->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'product' => $product->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_QUESTION)
                            ->setDetail([
                                'product' => $product->getId()
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //review
            if(random_int(0, 9) > 8)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_REVIEW)
                            ->setDetail([
                                'product' => $product->getId(),
                                'rate' => random_int(1, 5)
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 8)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_REVIEW)
                            ->setDetail([
                                'product' => $product->getId(),
                                'rate' => random_int(1, 5)
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 8)
            {
                $product = $this->faker->randomElement($products);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_REVIEW)
                            ->setDetail([
                                'product' => $product->getId(),
                                'rate' => random_int(1, 5)
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //answer
            //answer about comment
            if(random_int(0, 9) > 7)
            {
                $comment = $this->faker->randomElement($comments);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_ANSWER)
                            ->setDetail([
                                'comment' => $comment->getId(),
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $comment = $this->faker->randomElement($comments);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_ANSWER)
                            ->setDetail([
                                'comment' => $comment->getId(),
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            //answer about question 
            if(random_int(0, 9) > 7)
            {
                $question = $this->faker->randomElement($questions);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_ANSWER)
                            ->setDetail([
                                'question' => $question->getId(),
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $question = $this->faker->randomElement($questions);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_ANSWER)
                            ->setDetail([
                                'question' => $question->getId(),
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
            if(random_int(0, 9) > 7)
            {
                $question = $this->faker->randomElement($questions);
                $action = (new VisitorAction)
                            ->setType(VisitorAction::TYPE_ANSWER)
                            ->setDetail([
                                'question' => $question->getId(),
                            ])
                            ->setCreatedAt(
                                new DateTimeImmutable(
                                    $this->faker->dateTimeBetween($visitorCreatedAt->format('Y:m:d H:i:s'))
                                                ->format('Y:m:d H:i:s')
                                )
                            )
                            ;
                $visitor->addAction($action);
                $manager->persist($action);
            }
        }        


        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ProductFixtures::class, 
            RecipeFixtures::class, 
            ArticleFixtures::class, 
            UserFixtures::class, 
            CategoryFixtures::class,
            CommentFixtures::class, 
            QuestionFixtures::class,
            CartFixtures::class
        ];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
    
}