<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use App\Form\Admin\DataModel\UserFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserFilterType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('role', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Tous' => null,
                    'Utilisateur' => 'ROLE_USER',
                    'Pro' => 'ROLE_PRO',
                    'Vendeur' => 'ROLE_VENDOR',
                    'Admin' => 'ROLE_ADMIN',
                    'Super Admin' => 'ROLE_SUPER_ADMIN'
                ]
            ])
            ->add('q', TextType::class, [
                'required' => false,
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'plus récents d\'abord' => 'createdAt_DESC',
                    'plus anciens d\'abord' => 'createdAt_ASC',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'GET',
            'csrf_protection' => false,
            'data_class' => UserFilter::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
