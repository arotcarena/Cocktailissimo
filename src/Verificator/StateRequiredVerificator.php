<?php
namespace App\Verificator;

use App\Config\Countries;

class StateRequiredVerificator
{
    public function verify(string $country, ?string $state): bool
    {
        if(in_array($country, Countries::STATE_REQUIRED))
        {
            if(!$state || $state === '')
            {
                return false;
            }
        }
        return true;
    }
}