<?php
namespace App\Service\Sendcloud;

use App\Config\SecurityConfig;
use App\Entity\Purchase;
use App\HTTP\CurlRequest;
use App\Service\Sendcloud\Parcel\ParcelsCreator;

class SendcloudService
{
    public function __construct(
        private CurlRequest $curlRequest,
        private ParcelsCreator $parcelsCreator
    )
    {
        
    }

    private function curlGet(string $endpoint): mixed
    {
        return $this->curlRequest->get($endpoint, [
            'Authorization: Basic ' . base64_encode(SecurityConfig::SENDCLOUD_PUBLIC_KEY . ':' . SecurityConfig::SENDCLOUD_PRIVATE_KEY)
        ]);
    }
    private function curlPost(string $endpoint, array $params): mixed
    {
        return $this->curlRequest->post($endpoint, $params, [
            'Authorization: Basic ' . base64_encode(SecurityConfig::SENDCLOUD_PUBLIC_KEY . ':' . SecurityConfig::SENDCLOUD_PRIVATE_KEY)
        ]);
    }


    public function getSenderAddresses()
    {
        $data = $this->curlGet('https://panel.sendcloud.sc/api/v2/user/addresses/sender'); 
        return $data->sender_addresses;
    }

    public function announceParcels(Purchase $purchase)
    {
        foreach($purchase->getPurchaseVendorGroups() as $index => $purchaseVendorGroup)
        {
            $parcelData = $this->parcelsCreator->createParcel($purchaseVendorGroup, $index);

            //on envoie parcelData à sendcloud qui nous renvoie l'objet parcel sauvegardé contenant l'id
            $parcel = $this->curlPost('https://panel.sendcloud.sc/api/v2/parcels?errors=verbose-carrier', [
                'parcel' => $parcelData
            ]);
            //on ajoute cet id au shippingInfo : il permettra de retrouver le bon shippingInfo lors des mises à jour du parcel
            if($parcel)
            {
                $purchaseVendorGroup->getShippingInfo()->setParcelId($parcel->id);
            }
        }
    }
}