<?php

namespace App\Form\Admin;

use App\Entity\Post;
use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use App\DataTransformer\IframeTransformer;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('enTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('iframe', TextareaType::class)

            ->add('linkedProducts', EntityType::class, [
                'required' => false,
                'class' => Product::class,
                'choice_label' => 'id',
                'multiple' => true
            ])

            ->add('createdAt', DateTimeType::class)
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
