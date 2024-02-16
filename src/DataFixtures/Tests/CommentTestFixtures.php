<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Recipe;
use DateTimeImmutable;
use App\Entity\Comment;
use App\Repository\RecipeRepository;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Blog\RecipeFixtures;
use App\Entity\Answer;
use App\Entity\TranslatableString;
use App\Entity\TranslatableText;
use App\Repository\SubCategoryRepository;
use App\Repository\UserRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CommentTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public function __construct(
        private RecipeRepository $recipeRepository,
        private SubCategoryRepository $subCategoryRepository,
        private UserRepository $userRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $recipes = $this->recipeRepository->findAll();
        $users = $this->userRepository->findAll();

        $comment = (new Comment)
                    ->setRecipe($this->faker->randomElement($recipes))
                    ->setEmail('comment_with_4_children@mail.fr')
                    ->setFullName('comment with 4 children')
                    ->setContent('content')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('en')
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addAnswer(
                        (new Answer)
                        ->setType('admin')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('last added')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                ;
        $manager->persist($comment);


        //recipes for comment test
        // recipe1_for_comment_test comment=fr(2 answers) + comment=en(1 answer) 
        $recipe = (new Recipe)                              
                    ->setRef('recipe1_for_comment_test')       
                    ->setTitle(new TranslatableString)
                    ->setSlug(new TranslatableString)
                    ->addSubCategory($this->subCategoryRepository->findOneBy([]))
                    ->setHtmlContent(new TranslatableText)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        $manager->persist($recipe);

        $comment = (new Comment)
                    ->setEmail('mail@gmail.com')
                    ->setFullName('comment full name')
                    ->setContent('content')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('fr')
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addAnswer(
                        (new Answer)
                        ->setType('admin')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                ;
        $manager->persist($comment);
                
        $recipe->addComment($comment);

        $comment = (new Comment)
                    ->setEmail('mail@gmail.com')
                    ->setFullName('comment full name')
                    ->setContent('content')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('en')
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                ;
        $manager->persist($comment);
                
        $recipe->addComment($comment);


        // recipe2_for_comment_test comment=es(2 answers) + comment=fr(1 answer) 
        $recipe = (new Recipe)                              
                    ->setRef('recipe2_for_comment_test')       
                    ->setTitle(new TranslatableString)
                    ->setSlug(new TranslatableString)
                    ->addSubCategory($this->subCategoryRepository->findOneBy([]))
                    ->setHtmlContent(new TranslatableText)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        $manager->persist($recipe);

        $comment = (new Comment)
                    ->setEmail('mail@gmail.com')
                    ->setFullName('comment full name')
                    ->setContent('commentaire 1')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('es')
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                    ->addAnswer(
                        (new Answer)
                        ->setType('admin')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name of last child')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                ;
        $manager->persist($comment);
                
        $recipe->addComment($comment);

        $comment = (new Comment)
                    ->setEmail('mail@gmail.com')
                    ->setFullName('comment full name')
                    ->setContent('commentaire 2')
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('fr')
                    ->addAnswer(
                        (new Answer)
                        ->setType('customer')
                        ->setEmail('comment_child_email@mail.fr')
                        ->setFullName('full name')
                        ->setContent('content')
                        ->setCreatedAt(new DateTimeImmutable())
                    )
                ;
        $manager->persist($comment);
                
        $recipe->addComment($comment);



        //comment pour test delete
        $user = $this->faker->randomElement($users);
        $comment = (new Comment)
                    ->setUser($user)
                    ->setEmail($user->getEmail())
                    ->setFullName('comment for test delete')
                    ->setContent($this->faker->paragraph())
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setLang('en')
                ;
        $manager->persist($comment);


        $manager->flush();
    }


    public function getDependencies()
    {
        return [UserTestFixtures::class, RecipeFixtures::class, CategoryTestFixtures::class];
    }
}