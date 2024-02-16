<?php
namespace App\DataFixtures\Shop;

use App\DataFixtures\User\UserFixtures;
use App\Entity\Answer;
use App\Repository\ProductRepository;
use App\Repository\QuestionRepository;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class AnswerFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository,
        private ProductRepository $productRepository,
        private QuestionRepository $questionRepository,
        private EntityManagerInterface $em
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $questions = $this->questionRepository->findAll();
        $admin = $this->em->createQuery('SELECT u FROM App\Entity\User u WHERE u.roles LIKE :adminRole')
                            ->setParameter('adminRole', '%ROLE_ADMIN%')
                            ->getResult()[0];
        $users = $this->em->createQuery('SELECT u FROM App\Entity\User u WHERE u.id != :id')
                            ->setParameter('id', $admin->getId())
                            ->getResult();

        foreach($questions as $question)
        {
            //on laisse quelques questions sans answers
            if(random_int(0, 10) > 2)
            {
                if(random_int(0, 10) > 5)
                {
                    $answer = new Answer;
                    $answer 
                        ->setType('admin')
                        ->setUser($admin)
                        ->setEmail($admin->getEmail())
                        ->setFullName($admin->getFirstName() . ' ' . $admin->getLastName())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
    
                    $question->addAnswer($answer);
    
                    $manager->persist($answer);
                }
                if(random_int(0, 10) > 4)
                {
                    $user = $this->faker->randomElement($users);
                    $answer = new Answer;
                    $answer 
                        ->setType('customer')
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
    
                    $question->addAnswer($answer);
    
                    $manager->persist($answer);
                }
                if(random_int(0, 10) > 4)
                {
                    $user = $this->faker->randomElement($users);
                    $answer = new Answer;
                    $answer 
                        ->setType('customer')
                        ->setUser($user)
                        ->setEmail($user->getEmail())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
    
                    $question->addAnswer($answer);
    
                    $manager->persist($answer);
                }
                if(random_int(0, 10) > 4)
                {
                    $answer = new Answer;
                    $answer 
                        ->setType('customer')
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
    
                    $question->addAnswer($answer);
    
                    $manager->persist($answer);
                }
                if(random_int(0, 10) > 4)
                {
                    $user = $this->faker->randomElement($users);
                    $answer = new Answer;
                    $answer 
                        ->setType('customer')
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->paragraph())
                        ->setCreatedAt(new DateTimeImmutable())
                        ;
    
                    $question->addAnswer($answer);
    
                    $manager->persist($answer);
                }
            }
        }
        $manager->flush();
    }


    public function getDependencies()
    {
        return [UserFixtures::class, QuestionFixtures::class];
    }
    public static function getGroups(): array
    {
        return ['dev'];
    }
}