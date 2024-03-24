<?php

namespace App\Form;

use App\Config\AdminCountries;
use App\Entity\Supplier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SupplierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('socialName', TextType::class)
            ->add('commercialName', TextType::class, [
                'required' => false
            ])
            ->add('identificationNumber', TextType::class)
            ->add('country', ChoiceType::class, [
                'choices' => AdminCountries::COUNTRY_CHOICES
            ])
            ->add('vatNumber', TextType::class, [
                'required' => false
            ])
            ->add('addressLineOne', TextType::class)
            ->add('addressLineTwo', TextType::class, [
                'required' => false
            ])
            ->add('addressPostcode', TextType::class)
            ->add('addressCity', TextType::class)
            ->add('addressCountry', TextType::class)
            ->add('addressState', TextType::class, [
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Supplier::class,
        ]);
    }
}
