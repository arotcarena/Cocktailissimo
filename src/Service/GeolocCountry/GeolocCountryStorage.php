<?php
namespace App\Service\GeolocCountry;

use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;

class GeolocCountryStorage
{
    public const GEOLOC_COUNTRY_SESSION_KEY = 'country';

    public function __construct(
        private RequestStack $requestStack,
        private VisitorActionSaver $visitorActionSaver
    )
    {
        
    }

    public function get(): ?string 
    {
        return $this->requestStack->getSession()->get(self::GEOLOC_COUNTRY_SESSION_KEY);
    }

    public function set(string $country): void
    {
        $session = $this->requestStack->getSession();

        //En cas de changement d'une geolocCountry pour une autre,
        //on crée une VisitorAction
        if($prevCountry = $session->get(self::GEOLOC_COUNTRY_SESSION_KEY))
        {
            if($prevCountry !== $country)
            {
                $this->visitorActionSaver->saveTypeGeolocCountryChange($country);
            }
        }

        $session->set(self::GEOLOC_COUNTRY_SESSION_KEY, $country);
        
        //pour le front : sessionStorage.C_ISO 
        /** @var FlashBag */
        $flashBag = $session->getBag('flashes');
        $flashBag->set('c_iso', $country);
    }
}