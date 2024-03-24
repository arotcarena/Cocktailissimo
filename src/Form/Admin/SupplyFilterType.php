<?php

namespace App\Form\Admin;

use App\Entity\Supplier;
use App\Form\Admin\DataModel\SupplyFilter;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SupplyFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('supplier', EntityType::class, [
                'class' => Supplier::class,
                'required' => false
            ])
            ->add('startAt', DateTimeType::class, [
                'required' => false
            ])
            ->add('endAt', DateTimeType::class, [
                'required' => false
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récents d\'abord' => 'createdAt_DESC',
                    'plus anciens d\'abord' => 'createdAt_ASC',
                ]
            ])
            ->add('limit', ChoiceType::class, [
                'choices' => [
                    '5' => 5,
                    '10' => 10,
                    '20' => 20,
                    '50' => 50,
                    '100' => 100
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => SupplyFilter::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
