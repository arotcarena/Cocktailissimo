<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups;

use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\RelayInfo;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Entity\VendorDetail;
use App\Helper\ObjectHydrator;
use stdClass;

class PurchaseVendorGroupCreator
{
    public function __construct(
        private ObjectHydrator $objectHydrator
    )
    {
        
    }

    public function create(stdClass $checkoutVendorGroup, User $vendor): PurchaseVendorGroup
    {
        $purchaseVendorGroup = new PurchaseVendorGroup;

        foreach($checkoutVendorGroup->cartLines as $checkoutCartLine)
        {
            $purchaseLine = $this->createPurchaseLine($checkoutCartLine);
            $purchaseVendorGroup->addPurchaseLine($purchaseLine);
        }

        $shippingInfo = $this->createShippingInfo($checkoutVendorGroup->shippingMethod);
        
        $purchaseVendorGroup
                    ->setVendor($vendor)
                    ->setVendorDetail($this->createVendorDetail($vendor))
                    ->setShippingInfo($shippingInfo)
                    ->setWeight($checkoutVendorGroup->weight)
                    ;

        return $purchaseVendorGroup;  
    }

    private function createPurchaseLine(stdClass $checkoutCartLine): PurchaseLine
    {
        $packaging = $checkoutCartLine->packaging;
        $product = $packaging->product;

        return (new PurchaseLine)
                ->setQuantity($checkoutCartLine->quantity)
                
                ->setPublicRef($packaging->publicRef)
                ->setPrivateRef($packaging->privateRef)
                
                ->setPackagingLabel(
                    (new TranslatableString)
                    ->setEn($packaging->label->en)
                    ->setFr($packaging->label->fr)
                    ->setEs($packaging->label->es)
                    ->setIt($packaging->label->it)
                )
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn($product->designation->en)
                    ->setFr($product->designation->fr)
                    ->setEs($product->designation->es)
                    ->setIt($product->designation->it)
                )
                ->setHsCode($product->hsCode)
                ->setOriginCountry($product->originCountry)

                ->setUnitPrice(
                    $this->objectHydrator->hydrate(new CustomPrice, $checkoutCartLine->unitPrice)
                )
                ->setTotalPrice(
                    $this->objectHydrator->hydrate(new CustomPrice, $checkoutCartLine->totalPrice)
                )
                ->setUnitWeight($checkoutCartLine->unitWeight)
                ->setTotalWeight($checkoutCartLine->totalWeight)
                ;
    }

    private function createVendorDetail(User $vendor): VendorDetail
    {
        $company = $vendor->getCompany();
        $senderAddress = $company->getSenderAddress();
        $socialAddress = $company->getSocialAddress();

        return (new VendorDetail)
                ->setStripeConnectId($vendor->getStripeConnectId())
                ->setSendcloudId($vendor->getSendcloudId())
                ->setSocialName($company->getSocialName())
                ->setIdentificationNumber($company->getIdentificationNumber())
                ->setSocialAddress(
                    (new LightAddress)
                    ->setLineOne($socialAddress->getLineOne())
                    ->setLineTwo($socialAddress->getLineTwo())
                    ->setPostcode($socialAddress->getPostcode())
                    ->setCity($socialAddress->getCity())
                    ->setCountry($socialAddress->getCountry())
                    ->setState($socialAddress->getState())
                )
                ->setSenderAddress(
                    (new LightAddress)
                    ->setLineOne($senderAddress->getLineOne())
                    ->setLineTwo($senderAddress->getLineTwo())
                    ->setPostcode($senderAddress->getPostcode())
                    ->setCity($senderAddress->getCity())
                    ->setCountry($senderAddress->getCountry())
                    ->setState($senderAddress->getState())
                )
                ->setVatNumber($company->getVatNumber())
            ;
    }

    private function createShippingInfo(stdClass $shippingMethod): ShippingInfo
    {
        $shippingInfo = (new ShippingInfo)
                        ->setShippingMethodId($shippingMethod->id)
                        ->setCarrier($shippingMethod->carrier)
                        ->setName($shippingMethod->name)
                        ->setPrice(
                            $this->objectHydrator->hydrate(new CustomPrice, $shippingMethod->price)
                        )
                        ->setLeadTimeHours($shippingMethod->leadTimeHours)
                        ->setType($shippingMethod->type)
                        ;

        if($shippingMethod->relay)
        {
            $shippingInfo->setRelayInfo(
                $this->createRelayInfo($shippingMethod->relay)
            );
        }

        return $shippingInfo;
    }

    private function createRelayInfo(stdClass $relay): RelayInfo
    {
        return (new RelayInfo)
                ->setRelayId($relay->id)
                ->setCode($relay->code)
                ->setName($relay->name)
                ->setEmail($relay->email)
                ->setPhone($relay->phone)
                ->setShopType($relay->shopType)
                ->setAddress(
                    $this->createRelayAddress($relay->address)
                )
                ->setLatitude($relay->latitude)
                ->setLongitude($relay->longitude)
                ->setDistance($relay->distance)
                ->setFormattedOpeningTimes((array)$relay->formattedOpeningTimes)
                ->setHomepage($relay->homepage)
                ;
    }

    private function createRelayAddress(stdClass $address): LightAddress
    {
        return (new LightAddress)
                ->setLineOne($address->lineOne)
                ->setPostcode($address->postcode)
                ->setCity($address->city)
                ->setCountry($address->country)
                ;
    }
}