<?php

namespace App\Form\Admin;

use App\Config\Countries;
use App\Config\VatLevels;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\PositiveOrZero;

class VatRatesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        foreach(Countries::WITH_VAT_RATES as $country)
        {
            foreach(VatLevels::ADMIN_CHOICES as $vatLevel)
            {
                $builder->add($country . ':' . $vatLevel, NumberType::class, [
                    'required' => false,
                    'constraints' => [
                        new PositiveOrZero(message: 'Le taux doit être supérieur ou égal à zéro')
                    ]
                ]);
            }
        }
    }

   
}
