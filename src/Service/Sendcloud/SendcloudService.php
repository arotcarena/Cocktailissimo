<?php
namespace App\Service\Sendcloud;

use App\Config\SecurityConfig;
use App\Email\Admin\AdminNotificationEmail;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\HTTP\CurlRequest;
use App\Service\Sendcloud\Parcel\ParcelsCreator;
use Exception;

class SendcloudService
{
    public function __construct(
        private CurlRequest $curlRequest,
        private ParcelsCreator $parcelsCreator,
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
            $orderNumber = $purchase->getRef() . '-parcel#' . $index;
            $parcelData = $this->parcelsCreator->createParcel($purchaseVendorGroup, $orderNumber);
            
            //on envoie parcelData à sendcloud qui nous renvoie l'objet parcel sauvegardé contenant l'id, ou l'erreur
            $data = $this->curlPost('https://panel.sendcloud.sc/api/v2/parcels?errors=verbose-carrier', [
                'parcel' => $parcelData
            ]);
            
            if(isset($data->error))
            {
                throw new Exception(
                    'Une erreur a eu lieu au moment d\'annoncer un colis à sendcloud. Commande réf. ' . $purchase->getRef() . ', purchaseVendorGroup : #' . $purchaseVendorGroup->getId() . '. Code erreur sendcloud : ' . $data->error->code . ', Message d\'erreur de sendcloud : ' . $data->error->message
                );
            }
            //on ajoute cet id au shippingInfo : il permettra de retrouver le bon shippingInfo lors des mises à jour du parcel
            elseif(isset($data->parcel))
            {
                $parcel = $data->parcel;
                $purchaseVendorGroup->getShippingInfo()->setParcelId($parcel->id)
                                                        ->setTracking($parcel->tracking_number ?? null)
                                                        ;
            }
            //on ajoute aussi order_number
            $purchaseVendorGroup->getShippingInfo()->setOrderNumber($orderNumber);
        }
    }
}