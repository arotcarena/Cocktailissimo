<?php
namespace App\DataFixtures\Blog;

use Faker\Factory;
use App\Entity\User;
use Faker\Generator;
use App\Entity\Answer;
use DateTimeImmutable;
use App\Entity\Comment;
use App\Repository\UserRepository;
use App\Repository\RecipeRepository;
use App\DataFixtures\User\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CommentFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private RecipeRepository $recipeRepository,
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $recipes = $this->recipeRepository->findAll();
        $users = $this->userRepository->findAll();

        /** @var Comment[] */
        $comments = [];
        foreach($recipes as $recipe)
        {
            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }

            if(random_int(0, 10) > 4)
            {
                $user = $this->faker->randomElement($users);

                $comment = (new Comment)
                            ->setRecipe($recipe)
                            ->setUser($user)
                            ->setEmail($this->faker->email())
                            ->setFullName($this->faker->name())
                            ->setContent($this->faker->text(500))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setLang($this->faker->randomElement(['en', 'fr', 'es', 'it']))
                        ;
                $manager->persist($comment);
                $comments[] = $comment;
            }
        }

        foreach($comments as $comment)
        {
            if(random_int(0, 10) > 7)
            {
                /** @var User */
                $user = $this->faker->randomElement($users);

                $comment->addAnswer(
                    (new Answer)
                    ->setType($this->faker->randomElement(['admin', 'customer']))
                    ->setUser($user)
                    ->setEmail($this->faker->email())
                    ->setFullName($this->faker->name())
                    ->setContent($this->faker->text(500))
                    ->setCreatedAt(new DateTimeImmutable())
                );

                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
                if(random_int(0, 10) > 4)
                {
                    /** @var User */
                    $user = $this->faker->randomElement($users);

                    $comment->addAnswer(
                        (new Answer)
                        ->setType($this->faker->randomElement(['admin', 'customer']))
                        ->setUser($user)
                        ->setEmail($this->faker->email())
                        ->setFullName($this->faker->name())
                        ->setContent($this->faker->text(500))
                        ->setCreatedAt(new DateTimeImmutable())
                    );
                }
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [RecipeFixtures::class, UserFixtures::class];
    }
    public static function getGroups(): array
    {
        return ['dev'];
    }
}