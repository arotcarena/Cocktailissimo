<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Repository\UserRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\Answer;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class AnswerTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $users = $this->userRepository->findAll();

        //answer for test delete
        $user = $this->faker->randomElement($users);
        $answer = (new Answer)
                    ->setType('customer')
                    ->setUser($user)
                    ->setEmail($user->getEmail())
                    ->setFullName('answer for test delete')
                    ->setContent($this->faker->paragraph())
                    ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($answer);


        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserTestFixtures::class];
    }
}