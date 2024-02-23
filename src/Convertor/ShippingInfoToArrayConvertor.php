<?php
namespace App\Convertor;

use App\Entity\ShippingInfo;
use App\Helper\DateTimeToString;

class ShippingInfoToArrayConvertor
{
    public function __construct(
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor,
        private RelayInfoToArrayConvertor $relayInfoToArrayConvertor,
        private DateTimeToString $dateTimeToString
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
            'sentAt' => $shippingInfo->getSentAt() ? $this->dateTimeToString->getDateString($shippingInfo->getSentAt(), $lang): null,
            'deliveredAt' => $shippingInfo->getDeliveredAt() ? $this->dateTimeToString->getDateString($shippingInfo->getDeliveredAt(), $lang): null,
            'canceledAt' => $shippingInfo->getCanceledAt() ? $this->dateTimeToString->getDateString($shippingInfo->getCanceledAt(), $lang): null,
            'returnSentAt' => $shippingInfo->getReturnSentAt() ? $this->dateTimeToString->getDateString($shippingInfo->getReturnSentAt(), $lang): null,
            'returnDeliveredAt' => $shippingInfo->getReturnDeliveredAt() ? $this->dateTimeToString->getDateString($shippingInfo->getReturnDeliveredAt(), $lang): null
        ];
    }
}