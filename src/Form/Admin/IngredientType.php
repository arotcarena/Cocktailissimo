<?php

namespace App\Form\Admin;

use App\Entity\Ingredient;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class IngredientType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('picture', HiddenType::class, [
                'mapped' => false,
                'required' => false,
            ])
            ->add('enAlt', TextareaType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frAlt', TextareaType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esAlt', TextareaType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itAlt', TextareaType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('enName', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le nom est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frName', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le nom est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esName', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le nom est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itName', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le nom est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ingredient::class,
        ]);
    }
}
