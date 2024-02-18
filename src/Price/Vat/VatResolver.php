<?php
namespace App\Price\Vat;

use App\Config\VatLevels;

class VatResolver
{
    public function __construct(
        private VatRatesStorage $vatRatesStorage
    )
    {
        
    }

    /**
     * Undocumented function
     *
     * @param string|null $country
     * @param string $vatLevel
     * @return integer rate %pour mille
     */
    public function getRate(string $country = null, string $vatLevel): int
    {
        $vatRates = $this->vatRatesStorage->get();
        
        $countryRates = $vatRates[$country];

        $rate = $countryRates[$vatLevel];

        //si le taux n'est pas renseigné pour ce vatLevel, on met taux standard du pays
        if(!$rate)
        {
            $rate = $countryRates[VatLevels::STANDARD];
        }
        //si même le taux standard n'est pas renseigné, on met taux français standard par défaut
        if(!$rate)
        {
            $rate = $vatRates['FR'][VatLevels::STANDARD];
        }

        //retourner systématiquement un int (rate * 10) %pour mille
        return (int) ($rate * 10);
    }
}