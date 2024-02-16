<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Answer;
use DateTimeImmutable;
use App\Entity\Product;
use App\Repository\UserRepository;
use App\Repository\ProductRepository;
use App\DataFixtures\User\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\SubCategoryRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\Entity\Packaging;
use App\Entity\Question;
use App\Entity\TranslatableString;
use App\Entity\User;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class QuestionTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository,
        private EntityManagerInterface $em,
        private SubCategoryRepository $subCategoryRepository,
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $subCategory = $this->subCategoryRepository->findOneBy([]);
        $category = $subCategory->getParentCategory();
        $vendor = $this->userRepository->findOneBy(['email' => 'vendor_for_tests@mail.com']);
        $users = $this->userRepository->findAll();
        

        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef('product_for_question_test') // question=fr(adminAnswer, customerAnswer) + question=en(customerAnswer * 2)  
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                    )
                    ->setConsumerPriceHT(100)
                    ->setBusinessPriceHT(100)
                    ->setStock(1)
                    ->setEanCode('code-barre')
                    ->setWeight(1500)
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(new TranslatableString)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-1-slug-en')
                    ->setFr('product-1-slug-fr')
                    ->setEs('product-1-slug-es')
                    ->setIt('product-1-slug-it')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
            ;
       
        $manager->persist($product);

        $product2 = new Product;
        $product2->addPackaging(
            (new Packaging)
            ->setPublicRef('product2_for_question_test') // question=en(customerAnswer) 
            ->setLabel(
                (new TranslatableString)
                ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
            )
            ->setConsumerPriceHT(100)
            ->setBusinessPriceHT(100)
            ->setStock(1)
            ->setEanCode(str_shuffle('0123456789'))
            ->setWeight(1500)
            ->setListPosition(1)
        )  
                ->setVendor($vendor)
                ->setDesignation(new TranslatableString)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-2-slug-en')
                    ->setFr('product-2-slug-fr')
                    ->setEs('product-2-slug-es')
                    ->setIt('product-2-slug-it')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
            ;
       
        $manager->persist($product2);

        /** @var User */
        $admin = $this->em->createQuery('SELECT u FROM App\Entity\User u WHERE u.roles LIKE :adminRole')
                            ->setParameter('adminRole', '%ROLE_ADMIN%')
                            ->getResult()[0];

        //product 1    The question=fr(adminAnswer, customerAnswer) + The question 2=en(customerAnswer * 2)   lang = fr
        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('The question')
                            ->setContent('question with adminAnswer & customerAnswer')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('fr')
                            ->addAnswer(
                                (new Answer)
                                ->setType('admin')
                                ->setUser($admin)
                                ->setEmail($admin->getEmail())
                                ->setFullName('admin')
                                ->setContent('content of admin answer of question with admin and customer answer')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer1@gmail.com')
                                ->setFullName('customer1')
                                ->setContent('content of customer answer of question with admin and customer answer')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;

        $manager->persist($question);

        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('The question 2')
                            ->setContent('question with 2 customerAnswers')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('en')
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer1@gmail.com')
                                ->setFullName('customer1')
                                ->setContent('content')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer2@gmail.com')
                                ->setFullName('customer2')
                                ->setContent('content')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;

        $manager->persist($question);

        //product 2    question=en(customerAnswer)
        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product2)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle($this->faker->sentence())
                            ->setContent('question with 1 customerAnswer')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('en')
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer1@gmail.com')
                                ->setFullName('customer1')
                                ->setContent('content')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;

        $manager->persist($question);


        //question pour test query count (pour vérifier si la target vendor est bien récupérée une seule fois, car si ce n'est pas le cas ça devrait faire 3 requêtes supplémentaires
        //à chaque answer vendor
                                
        $product = new Product;
        $product->addPackaging(
                    (new Packaging)
                    ->setPublicRef('product_with_3_questions_with_5_vendor_answers')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                        ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                    )
                    ->setConsumerPriceHT(100)
                    ->setBusinessPriceHT(100)
                    ->setStock(1)
                    ->setEanCode('code-barre')
                    ->setWeight(1500)
                    ->setListPosition(1)
                )
                ->setVendor($vendor)
                ->setDesignation(new TranslatableString)
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-2-slug-en')
                    ->setFr('product-2-slug-fr')
                    ->setEs('product-2-slug-es')
                    ->setIt('product-2-slug-it')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('ES')
                ->setCategory($category)
                ->setSubCategory($subCategory)
                ->setCreatedAt(new DateTimeImmutable())
            ;
       
        $manager->persist($product);

        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('Question with 5 vendor answers')
                            ->setContent('question with 5 vendor answers')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('fr')
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 2')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 3')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 4')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 5')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;
        $manager->persist($question);

        //on ajoute 2 autres questions avec 3 vendor answers chacune
        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('Second Question with 5 vendor answers')
                            ->setContent('second question with 5 vendor answers')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('fr')
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 2')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 3')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 4')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 5')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;
        $manager->persist($question);

        
        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('Third Question with 5 vendor answers')
                            ->setContent('third question with 5 vendor answers')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('fr')
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 2')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 3')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 4')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of vendor answer 5')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;
        $manager->persist($question);




        
        //question avec 10 answers (le test 10 answers max n'existe plus mais cette question est utile sur d'autres tests)
        $user = $this->faker->randomElement($users);
        $question = (new Question)
                            ->setProduct($product2)
                            ->setUser($user)
                            ->setEmail($user->getEmail())
                            ->setFullName($this->faker->name())
                            ->setTitle('question_for_test_max_answers')
                            ->setContent('question_for_test_max_answers')
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang('es')
                            ->addAnswer(
                                (new Answer)
                                ->setType('admin')
                                ->setUser($admin)
                                ->setEmail($admin->getEmail())
                                ->setFullName('admin')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer1@gmail.com')
                                ->setFullName('customer1')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('vendor')
                                ->setUser($vendor)
                                ->setEmail($vendor->getEmail())
                                ->setFullName($vendor->getCompany()->getUsualName())
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer2@gmail.com')
                                ->setFullName('customer2')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer3@gmail.com')
                                ->setFullName('customer3')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer4@gmail.com')
                                ->setFullName('customer4')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer5@gmail.com')
                                ->setFullName('customer5')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer6@gmail.com')
                                ->setFullName('customer6')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer7@gmail.com')
                                ->setFullName('customer7')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ->addAnswer(
                                (new Answer)
                                ->setType('customer')
                                ->setEmail('customer8@gmail.com')
                                ->setFullName('customer8')
                                ->setContent('content of answer for test max answers')
                                ->setCreatedAt(new DateTimeImmutable())
                            )
                            ;

        $manager->persist($question);

        $manager->flush();
    }


    public function getDependencies()
    {
        return [UserFixtures::class, CategoryTestFixtures::class, VendorTestFixtures::class];
    }
}