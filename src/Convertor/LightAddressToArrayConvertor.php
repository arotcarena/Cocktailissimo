<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\LightAddress;

class LightAddressToArrayConvertor
{
    use ConvertorTrait;

    /**
     * @param LightAddress[]|LightAddress $data
     * @return array
     */
    public function convert($data): array 
    {
        return $this->convertOneOrMore($data);
    }

    private function convertOne(LightAddress $lightAddress): array 
    {
        return [
            'id' => $lightAddress->getId(),
            'lineOne' => $lightAddress->getLineOne(),
            'lineTwo' => $lightAddress->getLineTwo(),
            'postcode' => $lightAddress->getPostcode(),
            'city' => $lightAddress->getCity(),
            'country' => $lightAddress->getCountry(),
            'state' => $lightAddress->getState()
        ];
    }  
    
}