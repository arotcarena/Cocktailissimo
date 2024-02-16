<?php

namespace App\Form\Admin;

use App\Entity\Recipe;
use App\Config\SiteConfig;
use App\Entity\SubCategory;
use App\Parser\LinkTagsParser;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\AbstractType;
use App\Repository\SubCategoryRepository;
use App\DataTransformer\HtmlContentTransformer;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class RecipeType extends AbstractType
{
    public function __construct(
        private LinkTagsParser $linkTagsParser,
    )
    {

    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('picture', HiddenType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'La photo est obligatoire')
                ] 
            ])
            ->add('enAlt', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => (
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                )
            ])
            ->add('frAlt', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => (
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                )
            ])
            ->add('esAlt', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => (
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                )
            ])
            ->add('itAlt', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => (
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                )
            ])

            ->add('enTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('frTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('esTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])
            ->add('itTitle', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le titre est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum')
                ]
            ])

            ->add('enSlug', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-une-recette)')
                ]
            ])
            ->add('frSlug', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-une-recette)')
                ]
            ])
            ->add('esSlug', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-une-recette)')
                ]
            ])
            ->add('itSlug', TextType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new NotBlank(message: 'Le slug est obligatoire'),
                    new Length(max: 200, maxMessage: '200 caractères maximum'),
                    new Regex('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', message: 'Slug invalide (format requis : slug-d-une-recette)')
                ]
            ])

            ->add('enMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)'),
                ]
            ])
            ->add('frMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)'),
                ]
            ])
            ->add('esMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)'),
                ]
            ])
            ->add('itMetaDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum (à savoir : google coupe après 150 à 160 caractères environ)'),
                ]
            ])

            ->add('enHtmlContent', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                    new NotBlank(message: 'Le contenu est obligatoire')
                ]
            ])
            ->add('frHtmlContent', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                    new NotBlank(message: 'Le contenu est obligatoire')
                ]
            ])
            ->add('esHtmlContent', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                    new NotBlank(message: 'Le contenu est obligatoire')
                ]
            ])
            ->add('itHtmlContent', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                    new NotBlank(message: 'Le contenu est obligatoire')
                ]
            ])

            ->add('subCategories', EntityType::class, [
                'class' => SubCategory::class,
                'multiple' => true,
                'query_builder' => function (SubCategoryRepository $subCategoryRepository): QueryBuilder {
                    return $subCategoryRepository->createQueryBuilder('sc')
                                                ->join('sc.parentCategory', 'c')
                                                ->join('c.slug', 'cSlug')
                                                ->where('cSlug.en = :enCSlug')
                                                ->setParameter('enCSlug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                                            ;
                },
                'choice_label' => 'name.fr'
            ])

            ->add('ref', TextType::class)

            ->add('ingredientsQuantities', HiddenType::class, [
                'mapped' => false,
                'constraints' => [
                    new NotBlank(message: 'Les ingrédients sont obligatoires')
                ]
            ])
        ;

        $builder->get('enHtmlContent')->addModelTransformer(new HtmlContentTransformer('en', $this->linkTagsParser));
        $builder->get('frHtmlContent')->addModelTransformer(new HtmlContentTransformer('fr', $this->linkTagsParser));
        $builder->get('esHtmlContent')->addModelTransformer(new HtmlContentTransformer('es', $this->linkTagsParser));
        $builder->get('itHtmlContent')->addModelTransformer(new HtmlContentTransformer('it', $this->linkTagsParser));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
        ]);
    }
}
