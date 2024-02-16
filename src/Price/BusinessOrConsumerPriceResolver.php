<?php
namespace App\Price;

use App\Entity\Packaging;
use Symfony\Bundle\SecurityBundle\Security;

class BusinessOrConsumerPriceResolver
{
    public function __construct(
        private Security $security
    )
    {
        
    }

    public function resolve(Packaging $packaging)
    {
        return $this->security->isGranted('ROLE_PRO') ? $packaging->getBusinessPriceHT(): $packaging->getConsumerPriceHT();
    }
}