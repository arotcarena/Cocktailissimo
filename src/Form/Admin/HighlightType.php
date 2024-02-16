<?php

namespace App\Form\Admin;

use Symfony\Component\Form\AbstractType;
use App\Entity\Article;
use App\Entity\Highlight;
use App\Entity\Product;
use App\Entity\Recipe;
use App\Parser\LinkTagsParser;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class HighlightType extends AbstractType
{
    public function __construct(
        private LinkTagsParser $linkTagsParser,
    )
    {

    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('product', EntityType::class, [
                'class' => Product::class,
                'required' => false,
                'choice_label' => 'basePublicRef'
            ])
            ->add('article', EntityType::class, [
                'class' => Article::class,
                'required' => false,
                'choice_label' => 'ref'
            ])
            ->add('recipe', EntityType::class, [
                'class' => Recipe::class,
                'required' => false,
                'choice_label' => 'ref'
            ])

            ->add('enRecipeTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frRecipeTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esRecipeTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itRecipeTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('enRecipeDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum')
                ]
            ])
            ->add('frRecipeDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum')
                ]
            ])
            ->add('esRecipeDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum')
                ]
            ])
            ->add('itRecipeDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum')
                ]
            ])

        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Highlight::class,
        ]);
    }
}
