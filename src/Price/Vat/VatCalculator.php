<?php
namespace App\Price\Vat;

class VatCalculator
{
    /**
     * Renvoie le montant de TVA arrondi en centimes
     *
     * @param int $priceHT (en cts)
     * @param int $vatRate (en %mille)
     * @return int
     */
    public function calcVatAmountFromHT(int $priceHT, int $vatRate): int
    {
        $vatAmount = $priceHT * $vatRate / 1000;
        $vatAmountRounded = (int) (round($vatAmount, 0, PHP_ROUND_HALF_UP));

        return $vatAmountRounded;
    }

    /**
     * Calcule le prix HT à partir du prix TTC
     * 
     * @param int $priceTTC (en cts)
     * @param int $vatRate (en %mille)
     * @return int
     */
    public function calcPriceHTFromTTC(int $priceTTC, int $vatRate): int 
    {
        $vatAmount = $priceTTC - ($priceTTC / (1 + ($vatRate / 1000)));
        $vatAmountRounded = (int) (round($vatAmount, 0, PHP_ROUND_HALF_UP));
        
        $priceHT = $priceTTC - $vatAmountRounded;

        return $priceHT;
    }
}