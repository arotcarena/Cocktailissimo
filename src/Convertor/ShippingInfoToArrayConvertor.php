<?php
namespace App\Convertor;

use App\Entity\ShippingInfo;
use App\Twig\Runtime\DateTimeFormaterExtensionRuntime;

class ShippingInfoToArrayConvertor
{
    public function __construct(
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor,
        private RelayInfoToArrayConvertor $relayInfoToArrayConvertor,
        private DateTimeFormaterExtensionRuntime $dateTimeFormater,
    )
    {
        
    }

    public function convert(ShippingInfo $shippingInfo, string $lang = 'en'): array 
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
            'tracking' => $shippingInfo->getTracking(),
            'sentAt' => $shippingInfo->getSentAt() ? $this->dateTimeFormater->dateTimeGeoFormat($shippingInfo->getSentAt(), $lang): null,
            'deliveredAt' => $shippingInfo->getDeliveredAt() ? $this->dateTimeFormater->dateTimeGeoFormat($shippingInfo->getDeliveredAt(), $lang): null,
            'canceledAt' => $shippingInfo->getCanceledAt() ? $this->dateTimeFormater->dateTimeGeoFormat($shippingInfo->getCanceledAt(), $lang): null,
            'returnSentAt' => $shippingInfo->getReturnSentAt() ? $this->dateTimeFormater->dateTimeGeoFormat($shippingInfo->getReturnSentAt(), $lang): null,
            'returnDeliveredAt' => $shippingInfo->getReturnDeliveredAt() ? $this->dateTimeFormater->dateTimeGeoFormat($shippingInfo->getReturnDeliveredAt(), $lang): null
        ];
    }
}