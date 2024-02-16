<?php
namespace App\Price\Vat;

class VatCalculator
{
    public function calcPriceHT(int $priceTTC, string $country = null, string $codeHS = null): int 
    {
        //récupérer le bon taux de tva selon pays et code HS
        //si pas de country, on récupère country grace à $this->countryLocationè->getCountry();
        //si pas de codeHS on prend le taux normal
        $rate = 20;

        //on transforme le rate en int (rate * 10)
        $rate = 20 * 10;

        return $priceTTC / (1 + ($rate / 1000));
    }
}