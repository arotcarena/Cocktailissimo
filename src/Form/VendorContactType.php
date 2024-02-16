<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\SubCategory;
use App\Entity\VendorContact;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class VendorContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('civility')
            ->add('firstName')
            ->add('lastName')
            ->add('companyName')
            ->add('identificationNumber')
            ->add('vatNumber')
            ->add('website')
            ->add('facebook')
            ->add('instagram')
            ->add('whyBecomeVendor')
            ->add('email')
            ->add('phone')
            ->add('socialAddress_lineOne', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.socialAddress')
                ]
            ])
            ->add('socialAddress_lineTwo', TextType::class, [
                'mapped' => false,
            ])
            ->add('socialAddress_postcode', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.postcode')
                ]
            ])
            ->add('socialAddress_city', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.city')
                ]
            ])
            ->add('socialAddress_country', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.country')
                ]
            ])
            ->add('socialAddress_state', TextType::class, [
                'mapped' => false,
            ])
            ->add('senderAddress_lineOne', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.senderAddress')
                ]
            ])
            ->add('senderAddress_lineTwo', TextType::class, [
                'mapped' => false
            ])
            ->add('senderAddress_postcode', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.postcode')
                ]
            ])
            ->add('senderAddress_city', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.city')
                ]
            ])
            ->add('senderAddress_country', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'assert.notBlank.country')
                ]
            ])
            ->add('senderAddress_state', TextType::class, [
                'mapped' => false,
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class
            ])
            ->add('subCategory', EntityType::class, [
                'class' => SubCategory::class
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => VendorContact::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
