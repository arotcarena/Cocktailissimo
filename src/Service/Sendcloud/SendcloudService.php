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
        $parcels = $this->parcelsCreator->createParcels($purchase);

        $returnParcels = [];
        foreach($parcels as $parcel)
        {
            $data = $this->curlPost('https://panel.sendcloud.sc/api/v2/parcels?errors=verbose-carrier', [
                'parcel' => $parcel
            ]);
            $returnParcels[] = $data;
        }
        return $returnParcels;
    }
}