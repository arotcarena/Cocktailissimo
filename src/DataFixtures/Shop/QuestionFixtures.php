<?php
namespace App\DataFixtures\Shop;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Repository\UserRepository;
use App\Repository\ProductRepository;
use App\DataFixtures\User\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use App\Entity\Question;
use App\Repository\RecipeRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class QuestionFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository,
        private EntityManagerInterface $em
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {

        $admin = $this->em->createQuery('SELECT u FROM App\Entity\User u WHERE u.roles LIKE :adminRole')
                            ->setParameter('adminRole', '%ROLE_ADMIN%')
                            ->getResult()[0];
        $users = $this->em->createQuery('SELECT u FROM App\Entity\User u WHERE u.id != :id')
                            ->setParameter('id', $admin->getId())
                            ->getResult();

        $products = $this->productRepository->findAll();
        $user = $this->faker->randomElement($users);


        $langs = ['en', 'fr', 'es', 'it'];


        $productsWithQuestions = [];
        foreach($products as $product)
        {
            //on laisse quelques produits sans questions
            if(random_int(0, 10) > 2)
            {
                $productsWithQuestions[] = $product;
                //on ajoute 3 qa par produit
                $question = (new Question)
                                    ->setProduct($product)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setProduct($product)
                                    ->setEmail($this->faker->email())
                                    ->setFullName($this->faker->name())
                                    ->setTitle($this->faker->sentence())
                                    ->setContent($this->faker->paragraph() . ' ?')
                                    ->setCreatedAt(new DateTimeImmutable())
                                    ->setLang($this->faker->randomElement($langs));
                                ;

                $manager->persist($question);
            }

           
        }


        //on rajoute aléatoirement des questionsAnswers sur les produits
        for ($i=0; $i < 500; $i++) 
        { 
            $question = (new Question)
                                    ->setProduct($this->faker->randomElement($productsWithQuestions))
                                    ;
            if(random_int(0, 10) > 5)
            {
                $question
                    ->setUser($user)
                    ->setEmail($user->getEmail())
                ;
            }
            else
            {
                $question 
                    ->setEmail($this->faker->email())
                ;
            }
            $question
                    ->setFullName($this->faker->name())
                    ->setTitle($this->faker->sentence())
                    ->setContent($this->faker->paragraph() . ' ?')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang($this->faker->randomElement($langs));
                    ;

            $manager->persist($question);
        }




        // recipes
        $recipes = $this->recipeRepository->findAll();
        $recipesWithQA = [];
        foreach($recipes as $recipe)
        {
            $user = $this->faker->randomElement($users);

            //on laisse quelques recipes sans question
            if(random_int(0, 10) > 2)
            {
                $recipesWithQA[] = $recipe;
                //on ajoute 3 qa par recipe
                $question = (new Question)
                                    ->setRecipe($recipe)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setRecipe($recipe)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

                $question = (new Question)
                                    ->setRecipe($recipe)
                                    ;
                if(random_int(0, 10) > 5)
                {
                    $question
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                    ;
                }
                else
                {
                    $question 
                        ->setEmail($this->faker->email())
                    ;
                }
                $question
                        ->setFullName($this->faker->name())
                        ->setTitle($this->faker->sentence())
                        ->setContent($this->faker->paragraph() . ' ?')
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($this->faker->randomElement($langs));
                        ;

                $manager->persist($question);

            }
        }


        //on rajoute aléatoirement des questions sur les recipes
        for ($i=0; $i < 500; $i++) 
        { 
            $user = $this->faker->randomElement($users);

            $question = (new Question)
                                    ->setRecipe($this->faker->randomElement($recipesWithQA))
                                    ;
            if(random_int(0, 10) > 5)
            {
                $question
                    ->setUser($user)
                    ->setEmail($user->getEmail())
                ;
            }
            else
            {
                $question 
                    ->setEmail($this->faker->email())
                ;
            }
            $question
                    ->setFullName($this->faker->name())
                    ->setTitle($this->faker->sentence())
                    ->setContent($this->faker->paragraph() . ' ?')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang($this->faker->randomElement($langs));
                    ;

            $manager->persist($question);
        }

        $manager->flush();
    }


    public function getDependencies()
    {
        return [UserFixtures::class, ProductFixtures::class, RecipeFixtures::class];
    }
    public static function getGroups(): array
    {
        return ['dev'];
    }
}