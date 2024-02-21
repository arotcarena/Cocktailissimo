<?php
namespace App\Service\Sendcloud\Parcel;

use App\Config\SiteConfig;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use Symfony\Contracts\Translation\TranslatorInterface;

class ParcelsCreator
{
    public function __construct(
        private TranslatorInterface $translator,
        private ParcelValuesResolver $parcelValuesResolver
    )
    {
        
    }

    /**
     * @param PurchaseVendorGroup $purchaseVendorGroup
     * @param integer $index (la position du purchaseVendorGroup au sein de la purchase)
     * @return array $parcel  (l'objet parcel prêt à être envoyé à sendcloud)
     */
    public function createParcel(PurchaseVendorGroup $purchaseVendorGroup, int $index): array
    {
        $purchase = $purchaseVendorGroup->getPurchase();

        $deliveryAddress = $purchase->getDeliveryDetail();

        $shippingInfo = $purchaseVendorGroup->getShippingInfo();

        $fullName = $this->translator->trans($deliveryAddress->getCivility(), [], 'configs', $purchase->getLang()) 
                    . ' ' . $deliveryAddress->getFirstName() . ' ' . $deliveryAddress->getLastName();

        $orderNumber = $purchase->getRef() . '-parcel#' . $index;

        $customerDetail = $purchase->getCustomerDetail();

        $parcel = [
            'request_label' => true,
            'name' => $fullName,
            'email' => $customerDetail->getEmail(),
            'telephone' => $customerDetail->getPhone(),
            'house_number' => $this->parcelValuesResolver->resolveHouseNumber($deliveryAddress->getLineOne()),
            'address' => $deliveryAddress->getLineOne(),
            'address_2' => $deliveryAddress->getLineTwo(),
            'city' => $deliveryAddress->getCity(),
            'postal_code' => $deliveryAddress->getPostcode(),
            'country' => $deliveryAddress->getCountry(),
            'customs_invoice_nr' => $orderNumber,
            'customs_shipment_type' => 2, // commercial goods
            'parcel_items' => $this->createItems($purchaseVendorGroup, $purchase->getLang()),
            'weight' => number_format($purchaseVendorGroup->getWeight() / 1000, 3), // en kg
            // 'length' => '', //en cm
            // 'width' => '',
            // 'height' => '',
            'order_number' => $orderNumber,
            'total_order_value' => number_format($purchaseVendorGroup->getTotalPrice()->getPriceToPay() / 100, 2, '.', ''),
            'total_order_value_currency' => 'EUR',
            'shipment' => [
                'id' => $shippingInfo->getShippingMethodId(),
                'name' => $shippingInfo->getName()
            ],
            'shipping_method_checkout_name' => $shippingInfo->getName(),
            'sender_address' => $purchaseVendorGroup->getVendor()->getSendcloudId(),
            'quantity' => 1,
            'total_insured_value' => 0,
            'is_return' => false,
            'apply_shipping_rules' => false,
            'request_label_async' => false

            // 'to_post_number' => 123456789 // en cas de locker (A TESTER)    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        ];

        if($state = $deliveryAddress->getState())
        {
            $parcel['country_state'] = $state; // obligatoire pour les envois vers AU, CA, IT, US  
        }
        if($company = $customerDetail->getCompany())
        {
            $parcel['company_name'] = $company;
        }
        if($shippingInfo->getType() === SiteConfig::SHIPPING_TYPE_RELAY)
        {
            $parcel['to_service_point'] = $shippingInfo->getRelayInfo()->getRelayId();
        }

        return $parcel;
    }


    /**
     * @param PurchaseVendorGroup $vendorGroup
     * @return array parcelItems
     */
    private function createItems(PurchaseVendorGroup $vendorGroup, string $lang = 'en'): array
    {
        $items = [];
        foreach($vendorGroup->getPurchaseLines() as $purchaseLine)
        {
            $getLang = 'get' . ucfirst($lang);
            $item = [
                'description' => $purchaseLine->getDesignation()->$getLang(),
                'hs_code' => $purchaseLine->getHsCode(),
                'origin_country' => $purchaseLine->getOriginCountry(),
                'product_id' => $purchaseLine->getPublicRef(),
                'quantity' => $purchaseLine->getQuantity(),
                'sku' => $purchaseLine->getPublicRef(),
                'value' => number_format($purchaseLine->getUnitPrice()->getPriceToPay() / 100, 2, '.', ''), // en euros
                'weight' => number_format($purchaseLine->getUnitWeight() / 1000, 3) // en kg
            ];

            $items[] = $item;
        }

        return $items;
    }
}