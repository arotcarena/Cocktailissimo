<?php
namespace App\Price;

use App\Config\SiteConfig;
use App\Entity\User;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;

class CountryLocation
{
    public function __construct(
        private RequestStack $requestStack,
        private Security $security
    )
    {
        
    }

    public function getCountry(User $user = null): string
    {
        if(!$user)
        {
            /** @var User */
            $user = $this->security->getUser();
        }
        if($user && $user->getCompany())
        {
            return $user->getCompany()->getCountry();
        }
        return $this->requestStack->getSession()->get('country', SiteConfig::DEFAULT_GEOLOCATION_COUNTRY);
    }
}