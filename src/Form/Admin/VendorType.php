<?php

namespace App\Form\Admin;

use App\Config\AdminCountries;
use App\Config\SiteConfig;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\Choice;

class VendorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            //user
            ->add('civility', ChoiceType::class, [
                'choices' => [
                    'Madame' => SiteConfig::CIVILITY_F,
                    'Monsieur' => SiteConfig::CIVILITY_M
                ],
                'constraints' => [
                    new Choice(choices: [SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M], message: 'La civilité est obligatoire')
                ]
            ])
            ->add('firstName', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Le prénom du contact est obligatoire')
                ]
            ])
            ->add('lastName', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Le nom du contact est obligatoire')
                ]
            ])
            ->add('email', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'L\'adresse email de contact est obligatoire')
                ]
            ])
            ->add('phone', TextType::class, [
                'required' => false
            ])

            //company
            ->add('logo', HiddenType::class, [
                'required' => false
            ])
            ->add('socialName', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'La désignation sociale de l\'entreprise est obligatoire')
                ]
            ])
            ->add('commercialName', TextType::class)
            ->add('identificationNumber', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Le n° Siret ou équivalent est obligatoire')
                ]
            ])
            ->add('vatNumber', TextType::class, [
                'required' => false
            ])
                //socialAddress
            ->add('socialAddress_lineOne', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'L\'adresse du siège social est obligatoire')
                ]
            ])
            ->add('socialAddress_lineTwo', TextType::class, [
                'required' => false
            ])
            ->add('socialAddress_postcode', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Le code postal est obligatoire')
                ]
            ])
            ->add('socialAddress_city', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'La ville est obligatoire')
                ]
            ])
            ->add('socialAddress_country', ChoiceType::class, [
                'choices' => AdminCountries::COUNTRY_CHOICES,
                'constraints' => [
                    new Choice(choices: AdminCountries::COUNTRY_CHOICES, message: 'Le pays est obligatoire')
                ]
            ])
            ->add('socialAddress_state', TextType::class, [
                'required' => false
            ])
                //senderAddress
            ->add('senderAddress_lineOne', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'L\'adresse du siège social est obligatoire')
                ]
            ])
            ->add('senderAddress_lineTwo', TextType::class, [
                'required' => false
            ])
            ->add('senderAddress_postcode', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'Le code postal est obligatoire')
                ]
            ])
            ->add('senderAddress_city', TextType::class, [
                'constraints' => [
                    new NotBlank(message: 'La ville est obligatoire')
                ]
            ])
            ->add('senderAddress_country', ChoiceType::class, [
                'choices' => AdminCountries::COUNTRY_CHOICES,
                'constraints' => [
                    new Choice(choices: AdminCountries::COUNTRY_CHOICES, message: 'Le pays est obligatoire')
                ]
            ])
            ->add('senderAddress_state', TextType::class, [
                'required' => false
            ])

            //description
            ->add('enDescription', TextareaType::class, [
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('frDescription', TextareaType::class, [
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('esDescription', TextareaType::class, [
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('itDescription', TextareaType::class, [
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])


            //commissionFree
            ->add('commissionFree', ChoiceType::class, [
                'choices' => [
                    'OUI' => false,
                    'NON' => true
                ],
                'constraints' => [
                    new Choice(choices: [false, true])
                ]
            ])
            ;

    }
 
}
