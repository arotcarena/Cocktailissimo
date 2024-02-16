<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Recipe;
use App\Entity\SubCategory;
use App\Entity\User;
use App\Entity\Visitor;
use App\Entity\VisitorAction;
use App\Form\Admin\DataModel\TrafficFilter;
use App\Repository\SubCategoryRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use IntlDateFormatter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Contracts\Translation\TranslatorInterface;

class TrafficFilterType extends AbstractType
{
    public function __construct(
        private TranslatorInterface $translator
    )
    {
        
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('startAt', DateTimeType::class, [
                'required' => false,
            ])
            ->add('endAt', DateTimeType::class, [
                'required' => false,
            ])
            ->add('origin', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Facebook' => 'fb',
                    'Instagram' => 'insta',
                ]
            ])
            ->add('role', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Pro' => 'ROLE_PRO',
                    'Vendeur' => 'ROLE_VENDOR',
                    'Admin' => 'ROLE_ADMIN',
                    'Super Admin' => 'ROLE_SUPER_ADMIN'
                ]
            ])
            ->add('lang', ChoiceType::class, [
                'required' => false,
                'choices' => SiteConfig::LANG_CHOICES_WITH_LABELS
            ])
        ;

        if($options['visitor_action'])
        {
            $builder->add('actionType', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    $this->translator->trans(VisitorAction::TYPE_PRE_REGISTER, [], 'configs', 'fr') => VisitorAction::TYPE_PRE_REGISTER,
                    $this->translator->trans(VisitorAction::TYPE_REGISTER_CONFIRM, [], 'configs', 'fr') => VisitorAction::TYPE_REGISTER_CONFIRM,
                    $this->translator->trans(VisitorAction::TYPE_DELETE_ACCOUNT, [], 'configs', 'fr') => VisitorAction::TYPE_DELETE_ACCOUNT,
                    $this->translator->trans(VisitorAction::TYPE_CART_CREATE, [], 'configs', 'fr') => VisitorAction::TYPE_CART_CREATE,
                    $this->translator->trans(VisitorAction::TYPE_CART_CHANGE, [], 'configs', 'fr') => VisitorAction::TYPE_CART_CHANGE,
                    $this->translator->trans(VisitorAction::TYPE_CHECKOUT_START, [], 'configs', 'fr') => VisitorAction::TYPE_CHECKOUT_START,
                    $this->translator->trans(VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT, [], 'configs', 'fr') => VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT,
                    $this->translator->trans(VisitorAction::TYPE_CHECKOUT_PAYMENT_ATTEMPT, [], 'configs', 'fr') => VisitorAction::TYPE_CHECKOUT_PAYMENT_ATTEMPT,
                    $this->translator->trans(VisitorAction::TYPE_COMMENT, [], 'configs', 'fr') => VisitorAction::TYPE_COMMENT,
                    $this->translator->trans(VisitorAction::TYPE_QUESTION, [], 'configs', 'fr') => VisitorAction::TYPE_QUESTION,
                    $this->translator->trans(VisitorAction::TYPE_REVIEW, [], 'configs', 'fr') => VisitorAction::TYPE_REVIEW,
                    $this->translator->trans(VisitorAction::TYPE_ANSWER, [], 'configs', 'fr') => VisitorAction::TYPE_ANSWER,
                ]
            ]);
        }
        else
        {
            $builder->add('recipe', EntityType::class, [
                'required' => false,
                'class' => Recipe::class,
                'choice_label' => 'adminLabel'
            ])
            ->add('article', EntityType::class, [
                'required' => false,
                'class' => Article::class,
                'choice_label' => 'adminLabel'
            ])
            ->add('product', EntityType::class, [
                'required' => false,
                'class' => Product::class,
                'choice_label' => 'adminLabel'
            ])
            ->add('vendor', EntityType::class, [
                'required' => false,
                'class' => User::class,
                'query_builder' => function (UserRepository $userRepository): QueryBuilder {
                    return $userRepository->createQueryBuilder('u')
                                ->where('u.roles LIKE :role')
                                ->setParameter('role', '%ROLE_VENDOR%')
                                ;
                },
                'choice_label' => 'company'
            ])

            ->add('category', EntityType::class, [
                'required' => false,
                'class' => Category::class,
                'choice_label' => 'name.fr'
            ])

            ->add('productSubCategory', EntityType::class, [
                'required' => false,
                'class' => SubCategory::class,
                'query_builder' => function (SubCategoryRepository $subCategoryRepository): QueryBuilder {
                    return $subCategoryRepository->createQueryBuilder('sc')
                        ->join('sc.parentCategory', 'c')
                        ->join('c.slug', 'slug')
                        ->andWhere('slug.en != :enRecipeSlug')
                        ->andWhere('slug.en != :enArticleSlug')
                        ->setParameter('enRecipeSlug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                        ->setParameter('enArticleSlug', SiteConfig::ARTICLE_SLUG_TRANS['en'])
                        ;
                },
                'choice_label' => 'name.fr'
            ])
            ->add('recipeSubCategory', EntityType::class, [
                'required' => false,
                'class' => SubCategory::class,
                'query_builder' => function (SubCategoryRepository $subCategoryRepository): QueryBuilder {
                    return $subCategoryRepository->createQueryBuilder('sc')
                        ->join('sc.parentCategory', 'c')
                        ->join('c.slug', 'slug')
                        ->where('slug.en = :enRecipeSlug')
                        ->setParameter('enRecipeSlug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                        ;
                },
                'choice_label' => 'name.fr'
            ])
            ->add('articleSubCategory', EntityType::class, [
                'required' => false,
                'class' => SubCategory::class,
                'query_builder' => function (SubCategoryRepository $subCategoryRepository): QueryBuilder {
                    return $subCategoryRepository->createQueryBuilder('sc')
                        ->join('sc.parentCategory', 'c')
                        ->join('c.slug', 'slug')
                        ->where('slug.en = :enArticleSlug')
                        ->setParameter('enArticleSlug', SiteConfig::ARTICLE_SLUG_TRANS['en'])
                        ;
                },
                'choice_label' => 'name.fr'
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => TrafficFilter::class,
            'visitor_action' => false
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
