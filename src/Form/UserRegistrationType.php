<?php

namespace App\Form;

use App\Config\SiteConfig;
use App\DataTransformer\PictureTransformer;
use App\Form\DataModel\UserRegistration;
use App\Image\PictureUploader;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserRegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', HiddenType::class)
            ->add('civility', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'M.' => SiteConfig::CIVILITY_M,
                    'Mme' => SiteConfig::CIVILITY_F
                ]
            ])
            ->add('firstName', TextType::class, [
                'required' => false,
            ])
            ->add('lastName', TextType::class, [
                'required' => false,
            ])
            ->add('email', TextType::class, [
                'required' => false
            ])
            ->add('plainPassword', PasswordType::class, [
                'required' => false,
                'always_empty' => false
            ])
            ->add('passwordConfirm', PasswordType::class, [
                'required' => false, 
                'always_empty' => false
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'assert.true.agreeTerms',
                    ]),
                ],
            ])
        ;

        if($options['type'] === 'pro')
        {
            $builder
                ->add('socialName', TextType::class, [
                    'constraints' => [
                        new NotBlank([
                            'message' => 'assert.notBlank.socialName'
                        ]),
                        new Length([
                            'max' => 200,
                            'maxMessage' => 'assert.maxLength'
                        ])
                    ]
                ])
                ->add('identificationNumber', TextType::class, [
                    'constraints' => [
                        new NotBlank([
                            'message' => 'assert.notBlank.identificationNumber'
                        ]),
                        new Length([
                            'max' => 200,
                            'maxMessage' => 'assert.maxLength'
                        ])
                    ]
                ])
                ->add('country', TextType::class, [
                    'constraints' => [
                        new NotBlank([
                            'message' => 'assert.notBlank.country'
                        ])
                    ]
                ])
                ->add('countryTrans', TextType::class, [
                    'mapped' => false
                ])
                ->add('vatNumber', TextType::class, [
                    'constraints' => [
                        new Length([
                            'max' => 200,
                            'maxMessage' => 'assert.maxLength'
                        ])
                    ]
                ])
            ;
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => UserRegistration::class,
            'csrf_token_id'   => 'register',
            'type' => 'user',
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
