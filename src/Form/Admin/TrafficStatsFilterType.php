<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use App\Entity\Visitor;
use App\Form\Admin\DataModel\TrafficFilter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class TrafficStatsFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('startAt', DateType::class, [
                'required' => false,
            ])
            ->add('endAt', DateType::class, [
                'required' => false,
            ])
            ->add('origin', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Facebook' => 'fb',
                    'Instagram' => 'insta'
                ]
            ])
            ->add('role', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Pro' => 'ROLE_PRO'
                ]
            ])
            ->add('lang', ChoiceType::class, [
                'required' => false,
                'choices' => SiteConfig::LANG_CHOICES_WITH_LABELS
            ])
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => TrafficFilter::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
