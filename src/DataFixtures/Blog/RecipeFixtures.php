<?php
namespace App\DataFixtures\Blog;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Recipe;
use DateTimeImmutable;
use App\Entity\TranslatableText;
use App\Entity\IngredientQuantity;
use App\Entity\TranslatableString;
use Bezhanov\Faker\Provider\Commerce;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ObjectManager;
use App\Repository\IngredientRepository;
use App\DataFixtures\Shop\CategoryFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Blog\IngredientFixtures;
use Symfony\Component\String\Slugger\SluggerInterface;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class RecipeFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    private $units = [
        0 => [
            'en' => 'two cuyers of',
            'fr' => 'deux cuillères de',
            'es' => 'dos cucharas de',
            'it' => 'due cuchiaras de'
        ],
        2 => [
            'en' => '5 ml of',
            'fr' => '5 ml de',
            'es' => '5 ml de',
            'it' => '5 ml de'
        ],
        3 => [
            'en' => '10 cl of',
            'fr' => '10 cl de',
            'es' => '10 cl de',
            'it' => '10 cl de'
        ],
        3 => [
            'en' => 'one pinse of',
            'fr' => 'une pincée de',
            'es' => 'una pinçada de',
            'it' => 'uno pinccino de'
        ]
    ];


    public function __construct(
        private CategoryRepository $categoryRepository,
        private IngredientRepository $ingredientRepository,
        private SluggerInterface $slugger,
    )
    {
        $this->faker = Factory::create();
        $this->faker->addProvider(new Commerce($this->faker));
    }

    public function load(ObjectManager $manager)
    {
        $recipeCategory = $this->categoryRepository->findOneBySlug('recipes', 'en');
        $subCategories = $recipeCategory->getSubCategories();
        $ingredients = $this->ingredientRepository->findAll();
        


        /** @var Recipe[] */
        $recipes = [];
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

            $ingredient = $this->faker->randomElement($ingredients);
            $unit = $this->faker->randomElement($this->units);
            $iq1 = (new IngredientQuantity)
                                        ->setIngredient($ingredient)
                                        ->setQuantity(
                                            (new TranslatableString)
                                            ->setEn($unit['en'])
                                            ->setFr($unit['fr'])
                                            ->setEs($unit['es'])
                                            ->setIt($unit['it'])
                                        )
                                    ;
            
            $ingredient = $this->faker->randomElement($ingredients);
            $unit = $this->faker->randomElement($this->units);
            $iq2 = (new IngredientQuantity)
                                        ->setIngredient($ingredient)
                                        ->setQuantity(
                                            (new TranslatableString)
                                            ->setEn($unit['en'])
                                            ->setFr($unit['fr'])
                                            ->setEs($unit['es'])
                                            ->setIt($unit['it'])
                                        )
                                    ;

            $ingredient = $this->faker->randomElement($ingredients);
            $unit = $this->faker->randomElement($this->units);
            $iq3 = (new IngredientQuantity)
                                        ->setIngredient($ingredient)
                                        ->setQuantity(
                                            (new TranslatableString)
                                            ->setEn($unit['en'])
                                            ->setFr($unit['fr'])
                                            ->setEs($unit['es'])
                                            ->setIt($unit['it'])
                                        )
                                    ;

            

            $recipe = (new Recipe)
                        ->setTitle($title)
                        ->setRef(substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN-0123456789', 5)), 0, 10))
                        ->setSlug($slug)
                        ->addIngredientsQuantity($iq1)
                        ->addIngredientsQuantity($iq2)
                        ->addIngredientsQuantity($iq3)
                        ->setHtmlContent(
                            (new TranslatableText)
                            ->setEn('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setFr('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setEs('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                            ->setIt('<p>'.$this->faker->text(200).'</p><p>'.$this->faker->text(300).'</p>')
                        )
                        ->setCreatedAt(new DateTimeImmutable())
                        ->addSubCategory($this->faker->randomElement($subCategories))
                    ;
            $manager->persist($recipe);


            $recipes[] = $recipe;
        }

        for ($i=0; $i < 10; $i++) { 
            /** @var Recipe */
            $recipe = $this->faker->randomElement($recipes);

            $ingredient = $this->faker->randomElement($ingredients);
            $unit = $this->faker->randomElement($this->units);
            $iq1 = (new IngredientQuantity)
                                        ->setIngredient($ingredient)
                                        ->setQuantity(
                                            (new TranslatableString)
                                            ->setEn($unit['en'])
                                            ->setFr($unit['fr'])
                                            ->setEs($unit['es'])
                                            ->setIt($unit['it'])
                                        )
                                    ;
            $recipe->addIngredientsQuantity($iq1)
                    ;
        }

        $manager->flush();

    }

    public function getDependencies()
    {
        return [CategoryFixtures::class, IngredientFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}