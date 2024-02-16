<?php

namespace App\Form\Admin;

use App\Form\Admin\DataModel\QuestionOrCommentFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class QuestionOrCommentFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('aboutRecipe', CheckboxType::class, [
                'required' => false
            ])
            ->add('withoutAnswer', CheckboxType::class, [
                'required' => false
            ])
            ->add('withoutAdminAnswer', CheckboxType::class, [
                'required' => false
            ])
            ->add('withoutVendorAnswer', CheckboxType::class, [
                'required' => false
            ])
            ->add('q', TextType::class, [
                'required' => false,
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récentes d\'abord' => 'createdAt_DESC',
                    'plus anciennes d\'abord' => 'createdAt_ASC',
                ]
            ])
        ;

        if($options['type'] === 'question')
        {
            $builder
                ->add('aboutProduct', CheckboxType::class, [
                    'required' => false
                ]);
        }
        elseif($options['type'] === 'comment')
        {
            $builder
                ->add('aboutArticle', CheckboxType::class, [
                    'required' => false
                ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => QuestionOrCommentFilter::class,
            'type' => 'question'
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
