<?php

namespace App\Form\Admin;

use App\Config\AdminCountries;
use App\Entity\Product;
use App\Entity\Category;
use App\Config\SiteConfig;
use App\Config\VatLevels;
use App\DataTransformer\HtmlContentTransformer;
use App\Entity\SubCategory;
use Symfony\Component\Form\AbstractType;
use App\Entity\Article;
use App\Entity\Recipe;
use App\Entity\User;
use App\Parser\LinkTagsParser;
use App\Repository\UserRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\Choice;

class ProductType extends AbstractType
{
    public function __construct(
        private LinkTagsParser $linkTagsParser,
    )
    {
        
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('pictureOne', HiddenType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'La photo principale est obligatoire')
                ]
            ])
            ->add('enAltOne', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frAltOne', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esAltOne', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itAltOne', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('pictureTwo', HiddenType::class, [
                'mapped' => false,
                'required' => false
            ])
            ->add('enAltTwo', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frAltTwo', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esAltTwo', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itAltTwo', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('pictureThree', HiddenType::class, [
                'mapped' => false,
                'required' => false
            ])
            ->add('enAltThree', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frAltThree', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esAltThree', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itAltThree', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('enDesignation', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'La désignation est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frDesignation', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'La désignation est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esDesignation', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'La désignation est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itDesignation', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'La désignation est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            
            ->add('enSlug', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-un-produit)')
                ]
            ])
            ->add('frSlug', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-un-produit)')
                ]
            ])
            ->add('esSlug', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-un-produit)')
                ]
            ])
            ->add('itSlug', TextType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-un-produit)')
                ]
            ])

            ->add('enShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('enLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('frLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('esLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])
            ->add('itLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 2500, maxMessage: '2500 caractères maximum')
                ]
            ])

            ->add('enMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)')
                ]
            ])
            ->add('frMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)')
                ]
            ])
            ->add('esMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)')
                ]
            ])
            ->add('itMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)')
                ]
            ])

            ->add('brand', TextType::class, [
                'required' => false
            ])

            ->add('vendor', EntityType::class, [
                'required' => false,
                'class' => User::class,
                'query_builder' => function (UserRepository $userRepository): QueryBuilder {
                    return $userRepository->createQueryBuilder('u')
                                        ->where('u.roles LIKE :role')
                                        ->setParameter('role', '%'.SiteConfig::ROLE_VENDOR.'%')
                                        ->orderBy('u.createdAt', 'DESC')
                                    ;
                },
                'choice_label' => 'company'
            ])

            ->add('category', EntityType::class, [
                'required' => false,
                'class' => Category::class,
                'choice_label' => 'name.fr'
                ])
            ->add('subCategory', EntityType::class, [
                'required' => false,
                'class' => SubCategory::class,
                'choice_label' => 'name.fr'
                ])

            ->add('suggestedProducts', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'class' => Product::class,
                'choice_label' => 'id'
            ])

            ->add('linkedRecipes', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'class' => Recipe::class,
                'choice_label' => 'ref'
            ])

            ->add('linkedArticles', EntityType::class, [
                'required' => false,
                'multiple' => true,
                'class' => Article::class,
                'choice_label' => 'ref'
            ])
            
            ->add('hsCode', TextType::class)
            ->add('originCountry', ChoiceType::class, [
                'choices' => AdminCountries::COUNTRY_CHOICES,
                'constraints' => [
                    new Choice(choices: AdminCountries::COUNTRY_CHOICES, message: 'Le pays d\'origine est obligatoire')
                ]
            ])

            ->add('vatLevel', ChoiceType::class, [
                'choices' => VatLevels::ADMIN_CHOICES,
                'constraints' => [
                    new Choice(
                        choices: VatLevels::CHOICES,
                        message: 'Le niveau de TVA est obligatoire'    
                    )
                ]
            ])

            ->add('packagingChoices', HiddenType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Vous devez entrer au moins 1 conditionnement')
                ]
            ])
        ;

        $builder->get('enLongHtmlDescription')->addModelTransformer(new HtmlContentTransformer('en', $this->linkTagsParser));
        $builder->get('frLongHtmlDescription')->addModelTransformer(new HtmlContentTransformer('fr', $this->linkTagsParser));
        $builder->get('esLongHtmlDescription')->addModelTransformer(new HtmlContentTransformer('es', $this->linkTagsParser));
        $builder->get('itLongHtmlDescription')->addModelTransformer(new HtmlContentTransformer('it', $this->linkTagsParser));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class
        ]);
    }
}
