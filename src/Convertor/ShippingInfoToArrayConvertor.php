<?php
namespace App\Convertor;

use App\Entity\ShippingInfo;

class ShippingInfoToArrayConvertor
{
    public function __construct(
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor,
        private RelayInfoToArrayConvertor $relayInfoToArrayConvertor
    )
    {
        
    }

    public function convert(ShippingInfo $shippingInfo): array 
    {
        return [
            'id' => $shippingInfo->getId(),
            'shippingMethodId' => $shippingInfo->getShippingMethodId(),
            'carrier' => $shippingInfo->getCarrier(),
            'name' => $shippingInfo->getName(),
            'price' => $this->customPriceToArrayConvertor->convert($shippingInfo->getPrice()),
            'leadTimeHours' => $shippingInfo->getLeadTimeHours(),
            'type' => $shippingInfo->getType(),
            'relayInfo' => $shippingInfo->getRelayInfo() ? $this->relayInfoToArrayConvertor->convert($shippingInfo->getRelayInfo()): null,
            'status' => $shippingInfo->getStatus(),
            'tracking' => $shippingInfo->getTracking()
        ];
    }
}