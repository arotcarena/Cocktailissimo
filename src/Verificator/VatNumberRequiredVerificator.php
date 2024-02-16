<?php
namespace App\Verificator;

use App\Config\Countries;
use App\Form\DataModel\UserRegistration;

class VatNumberRequiredVerificator
{

    public function verifyRegistration(UserRegistration $userRegistration)
    {
        if(in_array($userRegistration->getCountry(), Countries::EU_ISO))
        {
            if($userRegistration->getVatNumber() === null || $userRegistration->getVatNumber() === '')
            {
                return false;
            }
        }
        return true;
    }
}