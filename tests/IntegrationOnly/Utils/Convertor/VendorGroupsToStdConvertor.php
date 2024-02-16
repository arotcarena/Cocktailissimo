<?php
namespace App\Tests\IntegrationOnly\Utils\Convertor;

use App\Entity\CartLine;
use App\Entity\VendorGroup;
use App\Tests\IntegrationOnly\Utils\Convertor\CustomPriceToStdConvertor;
use stdClass;

class VendorGroupsToStdConvertor
{
    /**
     * @param VendorGroup[] $vendorGroups
     * @return stdClass[]
     */
    public function convert($vendorGroups)
    {
        $vendorGroupsArray = [];
        foreach($vendorGroups as $vendorGroup)
        {
            $vendor = $vendorGroup->getVendor();
            $company = $vendor->getCompany();

            $vendorGroupsArray[] = (object)[
                'vendor' => (object)[
                    'id' => $vendor->getId(),
                    'sendcloudId' => $vendor->getSendcloudId(),
                    'senderAddress' => $senderAddressArray ?? null,
                    'company' => [
                        'id' => $company->getId(),
                        'usualName' => $company->getUsualName(),
                        'country' => $company->getCountry(),
                    ],
                    'target' => 'https://localhost:8000',
                    'countReviews' => $vendor->getCountReviews(),
                    'reviewNote' => $vendor->getReviewNote()
                ],
                'cartLines' => $this->convertCartLinesToStdClass($vendorGroup->getCartLines()->toArray()),
                'weight' => $vendorGroup->getWeight(),
                'position' => $vendorGroup->getPosition(),
                'index' => $vendorGroup->getIndex()
            ];
        }
        return $vendorGroupsArray;
    }
    
    /**
     * @param CartLine[] $cartLines
     * @return stdClass[]
     */
    private function convertCartLinesToStdClass($cartLines)
    {
        $cartLinesArray = [];
        foreach($cartLines as $cartLine)
        {   
            $cartLinesArray[] = $this->convertCartLinetoStdClass($cartLine);
        }
        return $cartLinesArray;
    }
    
    private function convertCartLinetoStdClass(CartLine $cartLine): stdClass 
    {
        $packaging = $cartLine->getPackaging();
        $product = $packaging->getProduct();

        return (object)[
            'packaging' => (object)[
                'id' => $packaging->getId(),
                'publicRef' => $packaging->getPublicRef(),
                'label' => $packaging->getLabel() ? $packaging->getLabel()->getEn(): null,
                'target' => 'https://localhost:8000',
                'product' => [
                    'id' => $product->getId(),
                    'designation' => $product->getDesignation()->getEn(),
                    'firstPicture' => (object)[
                        'path' => 'https://localhost:8000/img/default.jpg',
                        'alt' => 'alt'
                    ],
                ],
                'weight' => $packaging->getWeight(),
                'stock' => $packaging->getStock()
            ],
            'quantity' => $cartLine->getQuantity(),
            'unitPrice' => CustomPriceToStdConvertor::convert($cartLine->getUnitPrice()),
            'totalPrice' => CustomPriceToStdConvertor::convert($cartLine->getTotalPrice()),
            'unitWeight' => $cartLine->getUnitWeight(),
            'totalWeight' => $cartLine->getTotalWeight()
        ];
    }

}