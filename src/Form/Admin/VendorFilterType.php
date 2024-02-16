<?php

namespace App\Form\Admin;

use App\Form\Admin\DataModel\VendorFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class VendorFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('q', TextType::class, [
                'required' => false,
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récents d\'abord' => 'createdAt_DESC',
                    'plus anciens d\'abord' => 'createdAt_ASC',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => VendorFilter::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
