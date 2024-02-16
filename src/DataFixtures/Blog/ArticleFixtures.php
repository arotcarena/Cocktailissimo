<?php
namespace App\DataFixtures\Blog;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Article;
use App\Entity\TranslatableText;
use App\Entity\TranslatableString;
use App\Repository\UserRepository;
use App\Repository\RecipeRepository;
use App\Repository\ProductRepository;
use Bezhanov\Faker\Provider\Commerce;
use App\Repository\CategoryRepository;
use App\DataFixtures\User\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Shop\CategoryFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Blog\IngredientFixtures;
use App\DataFixtures\Shop\ProductFixtures;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ArticleFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private CategoryRepository $categoryRepository,
        private UserRepository $userRepository,
        private SluggerInterface $slugger,
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository
    )
    {
        $this->faker = Factory::create();
        $this->faker->addProvider(new Commerce($this->faker));
    }

    public function load(ObjectManager $manager)
    {
        $articleCategory = $this->categoryRepository->findOneBySlug('gazette', 'fr');
        $subCategories = $articleCategory->getSubCategories();

        $users = $this->userRepository->findAll();
        $products = $this->productRepository->findAll();
        $recipes = $this->recipeRepository->findAll();

        for ($i=0; $i < 30; $i++) { 
            $title = (new TranslatableString)
                    ->setEn($this->faker->productName())
                    ->setFr($this->faker->productName())
                    ->setEs($this->faker->productName())
                    ->setIt($this->faker->productName())
                ;
            $slug = (new TranslatableString)
                    ->setEn(strtolower($this->slugger->slug($title->getEn())))
                    ->setFr(strtolower($this->slugger->slug($title->getFr())))
                    ->setEs(strtolower($this->slugger->slug($title->getEs())))
                    ->setIt(strtolower($this->slugger->slug($title->getIt())))
                ;

            $article = (new Article)
                        ->setRef(substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN-0123456789', 5)), 0, 10))
                        ->setTitle($title)
                        ->setSubtitle(
                            (new TranslatableString)
                            ->setEn($this->faker->text(40))
                            ->setFr($this->faker->text(40))
                            ->setEs($this->faker->text(40))
                            ->setIt($this->faker->text(40))
                        )
                        ->setSlug($slug)
                        ->setSubCategory($this->faker->randomElement($subCategories))
                        ->setHtmlContent(
                            (new TranslatableText)
                            ->setEn('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setFr('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setEs('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setIt('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                        )
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setAuthor($this->faker->randomElement($users))

                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))
                        ->addLinkedProduct($this->faker->randomElement($products))

                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                        ->addLinkedRecipe($this->faker->randomElement($recipes))
                    ;                    ;
            $manager->persist($article);
        }

        $manager->flush();

    }

    public function getDependencies()
    {
        return [CategoryFixtures::class, IngredientFixtures::class, UserFixtures::class, ProductFixtures::class, RecipeFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}