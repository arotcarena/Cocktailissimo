<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use App\DataTransformer\PriceTransformer;
use App\Entity\Category;
use App\Entity\SubCategory;
use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use App\Form\Admin\DataModel\ProductFilter;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
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
            ->add('minPrice', NumberType::class, [
                'required' => false
            ])
            ->add('maxPrice', NumberType::class, [
                'required' => false
            ])
            ->add('minStock', NumberType::class, [
                'required' => false
            ])
            ->add('maxStock', NumberType::class, [
                'required' => false
            ])
            ->add('q', TextType::class, [
                'required' => false
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récents d\'abord' => 'createdAt_DESC',
                    'plus anciens d\'abord' => 'createdAt_ASC',
                    'du moins cher au plus cher' => 'price_ASC',
                    'du plus cher au moins cher' => 'price_DESC',
                    'meilleures notes d\'abord' => 'note_DESC',
                    'plus mauvaises notes d\'abord' => 'note_ASC',
                    'plus vus d\'abord' => 'countViews_DESC',
                    'moins vus d\'abord' => 'countViews_ASC',
                    'plus mis dans panier d\'abord' => 'countCarts_DESC',
                    'moins mis dans panier d\'abord' => 'countCarts_ASC',
                    'plus achetés d\'abord' => 'countSales_DESC',
                    'moins achetés d\'abord' => 'countSales_ASC'  
                ]
            ])
        ;

        $builder->get('minPrice')->addModelTransformer(new PriceTransformer);
        $builder->get('maxPrice')->addModelTransformer(new PriceTransformer);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => ProductFilter::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
