<?php

namespace App\Form\Admin;

use Symfony\Component\Form\AbstractType;
use App\DataTransformer\HtmlContentTransformer;
use App\Entity\Category;
use App\Parser\LinkTagsParser;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class CategoryType extends AbstractType
{
    public function __construct(
        private LinkTagsParser $linkTagsParser
    )
    {

    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
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

            ->add('enShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum'),
                ]
            ])
            ->add('frShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum'),
                ]
            ])
            ->add('esShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum'),
                ]
            ])
            ->add('itShortDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 250, maxMessage: '250 caractères maximum'),
                ]
            ])

            ->add('enLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                ]
            ])
            ->add('frLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                ]
            ])
            ->add('esLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
                ]
            ])
            ->add('itLongHtmlDescription', TextareaType::class, [
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Length(max: 5000, maxMessage: '5000 caractères maximum'),
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
            'data_class' => Category::class,
        ]);
    }
}
