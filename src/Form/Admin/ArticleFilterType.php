<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use App\Entity\SubCategory;
use App\Form\Admin\DataModel\ArticleFilter;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\AbstractType;
use App\Repository\SubCategoryRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ArticleFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('subCategory', EntityType::class, [
                'required' => false,
                'class' => SubCategory::class,
                'query_builder' => function (SubCategoryRepository $subCategoryRepository): QueryBuilder {
                    return $subCategoryRepository->createQueryBuilder('sc')
                                                ->join('sc.parentCategory', 'c')
                                                ->join('c.slug', 'cSlug')
                                                ->where('cSlug.en = :enCategorySlug')
                                                ->setParameter('enCategorySlug', SiteConfig::ARTICLE_SLUG_TRANS['en'])
                                                ;
                },
                'choice_label' => 'name.fr'
            ])
            ->add('q', TextType::class, [
                'required' => false,
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récents d\'abord' => 'createdAt_DESC',
                    'plus anciens d\'abord' => 'createdAt_ASC',
                    'plus vus d\'abord' => 'countViews_DESC',
                    'moins vus d\'abord' => 'countViews_ASC'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => ArticleFilter::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
