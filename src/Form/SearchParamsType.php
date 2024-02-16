<?php

namespace App\Form;

use App\DataTransformer\MultipleChoicesTransformer;
use App\Form\DataModel\SearchParams;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchParamsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('vendorId')
            ->add('q')
            ->add('categoryIds')
            ->add('subCategoryIds')
            ->add('minPrice')
            ->add('maxPrice')
            ->add('minStock')
            ->add('maxStock')
            ->add('sortBy')
            ->add('limit')
            ->add('page')
            ->add('ingredientIds')
            ->add('lang')
            ->add('withoutAnswer')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => SearchParams::class
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
