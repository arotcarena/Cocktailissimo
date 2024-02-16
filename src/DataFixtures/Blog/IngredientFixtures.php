<?php
namespace App\DataFixtures\Blog;

use App\Entity\Ingredient;
use App\Entity\TranslatableString;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Faker\Factory;
use Faker\Generator;

class IngredientFixtures extends Fixture implements FixtureGroupInterface
{
    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('vodka')
                            ->setFr('vodka')
                            ->setEs('vodka')
                            ->setIt('vodka')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('whisky')
                            ->setFr('whisky')
                            ->setEs('whisky')
                            ->setIt('whisky')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('lime')
                            ->setFr('citron')
                            ->setEs('lemon')
                            ->setIt('limone')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('salt')
                            ->setFr('sel')
                            ->setEs('sal')
                            ->setIt('sal')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('apple juice')
                            ->setFr('jus de pomme')
                            ->setEs('sumo de manzana')
                            ->setIt('zuccho di mela')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('tomato juice')
                            ->setFr('jus de tomate')
                            ->setEs('sumo de tomate')
                            ->setIt('zuccho di pomodoro')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('sparkling water')
                            ->setFr('eau gazeuse')
                            ->setEs('agua gazeosa')
                            ->setIt('aqua frizzante')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('gin')
                            ->setFr('gin')
                            ->setEs('gin')
                            ->setIt('gin')
                        )
                    ;
        $manager->persist($ingredient);

        $ingredient = (new Ingredient)
                        ->setName(
                            (new TranslatableString)
                            ->setEn('tonic')
                            ->setFr('tonic')
                            ->setEs('tonic')
                            ->setIt('tonic')
                        )
                    ;
        $manager->persist($ingredient);

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}