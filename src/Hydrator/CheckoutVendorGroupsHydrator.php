<?php
namespace App\Hydrator;

use App\Entity\Cart;
use App\Helper\VendorGroupLinesExtractor;
use stdClass;

class CheckoutVendorGroupsHydrator
{
    public function __construct(
        private VendorGroupLinesExtractor $vendorGroupLinesExtractor
    )
    {
        
    }
    /**
     * Hydrate checkoutVendorGroups with necessary data to create a Purchase (ex: hsCode)
     *
     * @param stdClass[] $vendorGroups
     * @param Cart $cart
     * @return void
     */
    public function hydrate(array $vendorGroups, Cart $cart): void
    {
        $cartLines = $this->vendorGroupLinesExtractor->extractCartLines($cart);
        //on indexe par pakagingId
        $cartLinesByPackagingId = [];
        foreach($cartLines as $cartLine)
        {
            $cartLinesByPackagingId[$cartLine->getPackaging()->getId()] = $cartLine;
        }

        $checkoutCartLines = $this->vendorGroupLinesExtractor->extractStdVendorGroupsCartLines($vendorGroups);
        foreach($checkoutCartLines as $checkoutCartLine)
        {
            $cartLine = $cartLinesByPackagingId[$checkoutCartLine->packaging->id];
            
            $packaging = $cartLine->getPackaging();
            $product = $packaging->getProduct();

            $checkoutCartLine->packaging->privateRef = $packaging->getPrivateRef();

            $checkoutCartLine->packaging->label = (object)[
                'en' => $packaging->getLabel()->getEn(),
                'fr' => $packaging->getLabel()->getFr(),
                'es' => $packaging->getLabel()->getEs(),
                'it' => $packaging->getLabel()->getIt()
            ];

            $checkoutCartLine->packaging->product->designation = (object)[
                'en' => $product->getDesignation()->getEn(),
                'fr' => $product->getDesignation()->getFr(),
                'es' => $product->getDesignation()->getEs(),
                'it' => $product->getDesignation()->getIt()
            ];

            $checkoutCartLine->packaging->product->hsCode = $product->getHsCode();
            $checkoutCartLine->packaging->product->originCountry = $product->getOriginCountry();
        }
    }
}