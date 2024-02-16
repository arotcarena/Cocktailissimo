<?php
namespace App\Price\Vat;

use App\Price\CountryLocation;
use Symfony\Component\HttpFoundation\RequestStack;

class VatResolver
{

    public function __construct(
        private RequestStack $requestStack,
        private CountryLocation $countryLocation
    )
    {
        
    }

    /**
     * Undocumented function
     *
     * @param string|null $country
     * @param string|null $codeHS
     * @return integer rate %pour mille
     */
    public function getRate(string $country = null, string $codeHS = null): int
    {
        //récupérer le bon taux de tva selon pays et code HS
        //si pas de country, on récupère country grace à $this->countryLocationè->getCountry();
        //si pas de codeHS on prend le taux normal
        $rate = 20;

        //retourner systématiquement un int (rate * 10)
        return $rate * 10;
    }

 

}