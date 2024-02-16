<?php
namespace App\Service\GeolocCountry;

use App\Config\SiteConfig;
use App\Entity\User;
use App\Helper\IpResolver;
use App\Repository\AddressRepository;
use App\Service\GeolocCountry\GeolocCountryStorage;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;
use Symfony\Contracts\Translation\TranslatorInterface;

class GeolocCountryService
{
    public function __construct(
        private GeolocCountryStorage $geolocCountryStorage,
        private Security $security,
        private AddressRepository $addressRepository,
        private GeoIpCountryResolver $geoIpCountryResolver,
        private IpResolver $ipResolver,
        private TranslatorInterface $translator
    )
    {
        
    }

    public function handleRequest(Request $request): void 
    {
        //en cas de param force_country on met cette valeur et on quitte
        if($forceCountry = $request->query->get('force_country'))
        {
            if($request->hasSession())
            {
                /** @var FlashBag */
                $flashBag = $request->getSession()->getBag('flashes');
                $flashBag->add('info', $this->translator->trans('info.on_checkout_force_country'));
            }
            $this->geolocCountryStorage->set($forceCountry);
            return;
        }

        //si un pays est déjà stocké on ne fait rien 
        if($this->geolocCountryStorage->get())
        {
            return;
        }

        //si pas de pays stocké ou si on a le param update_country alors on update
        $country = null;
        //on tente d'abord de récupérer le pays de la dernière adresse enregistrée par l'utilisateur
        /** @var User $user */
        if($user = $this->security->getUser())
        {
            $country = $this->addressRepository->findLastAddressCountryByUser($user);
        }
        
        //sinon on tente de récupérer le pays de l'adresse IP
        if(!$country)
        {
            if($ip = $this->ipResolver->resolve($request)) 
            {
                $country = $this->geoIpCountryResolver->resolve($ip);
            }
        }

        //sinon on met le pays par défaut
        if(!$country)
        {
            $country = SiteConfig::DEFAULT_GEOLOCATION_COUNTRY;
        }

        $this->geolocCountryStorage->set($country);
    }

   

    /**
     * ACCEPT LANGUAGE : MOINS FIABLE QUE GEOIP : à mettre si geoip ne fonctionne pas
     */
    // private function readBrowserMainCountry(Request $request): ?string
    // {
    //     $acceptLanguage = $request->headers->get('accept-language');
    //     preg_match_all('/-[A-Z]{2}\b/', $acceptLanguage, $matches);
    //     if(count($matches[0]) >= 1)
    //     {
    //         return trim($matches[0][0], "-");
    //     }
    //     return null;
    // }
}