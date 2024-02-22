<?php

namespace App\Form\Admin;

use App\Config\SiteConfig;
use Symfony\Component\Form\AbstractType;
use App\Form\Admin\DataModel\PurchaseFilter;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class PurchaseFilterType extends AbstractType
{
    public function __construct(
        private TranslatorInterface $translator
    )
    {
        
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('status', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    $this->translator->trans(SiteConfig::STATUS_PENDING, [], 'configs', 'fr') => SiteConfig::STATUS_PENDING,
                    $this->translator->trans(SiteConfig::STATUS_PAID, [], 'configs', 'fr') => SiteConfig::STATUS_PAID,
                    $this->translator->trans(SiteConfig::STATUS_TERMINATED, [], 'configs', 'fr') => SiteConfig::STATUS_TERMINATED
                ]
            ])
            ->add('sortBy', ChoiceType::class, [
                'required' => false,
                'choices' => [
                    'Plus récentes d\'abord' => 'createdAt_DESC',
                    'Plus anciennes d\'abord' => 'createdAt_ASC',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PurchaseFilter::class,
            'method' => 'GET',
            'csrf_protection' => false
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
