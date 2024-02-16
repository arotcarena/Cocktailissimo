<?php
namespace App\Convertor;

use App\Entity\RelayInfo;

class RelayInfoToArrayConvertor
{
    public function __construct(
        private LightAddressToArrayConvertor $lightAddressToArrayConvertor,
    )
    {
        
    }

    public function convert(RelayInfo $relayInfo): array 
    {
        return [
            'id' => $relayInfo->getId(),
            'relayId' => $relayInfo->getRelayId(),
            'code' => $relayInfo->getCode(),
            'name' => $relayInfo->getName(),
            'email' => $relayInfo->getEmail(),
            'phone' => $relayInfo->getPhone(),
            'address' => $this->lightAddressToArrayConvertor->convert($relayInfo->getAddress()),
            'latitude' => $relayInfo->getLatitude(),
            'longitude' => $relayInfo->getLongitude(),
            'distance' => $relayInfo->getDistance(),
            'formattedOpeningTimes' => $relayInfo->getFormattedOpeningTimes(),
            'homepage' => $relayInfo->getHomepage()
        ];
    }
}