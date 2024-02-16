<?php
namespace App\Service\Sendcloud\Parcel;


class ParcelValuesResolver
{
    /**
     * @param string $lineOne
     * @return string|null houseNumber ou null
     */
    public function resolveHouseNumber(string $lineOne): ?string
    {
        if (preg_match('/^\d+\w*/', $lineOne, $matches)) {
            return $matches[0];
        }
        return null;
    }
}