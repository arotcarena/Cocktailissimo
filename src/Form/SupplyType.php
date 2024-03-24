<?php

namespace App\Form;

use App\Config\AdminCountries;
use App\Entity\Packaging;
use App\Entity\Supplier;
use App\Entity\Supply;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SupplyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('packaging', EntityType::class, [
                'class' => Packaging::class,
                'choice_label' => 'publicRef'
            ])
            ->add('priceHT', NumberType::class)
            ->add('vatCountry', ChoiceType::class, [
                'choices' => AdminCountries::COUNTRY_CHOICES
            ])
            ->add('quantity', NumberType::class)
            ->add('supplier', EntityType::class, [
                'class' => Supplier::class
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Supply::class,
        ]);
    }
}
