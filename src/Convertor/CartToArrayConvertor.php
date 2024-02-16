<?php
namespace App\Convertor;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Convertor\ConvertorTrait;
use App\Entity\VendorGroup;
use App\Service\PicturePathResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CartToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private CustomPriceToArrayConvertor $customPriceConvertor,
        private PicturePathResolver $picturePathResolver,
        private VendorToArrayConvertor $vendorToArrayConvertor,
    )
    {
        
    }

    /**
     * @param Cart[]|Cart $data
     * @return array
     */
    public function convert($data, string $lang): array 
    {
        $this->lang = $lang;

        return $this->convertOneOrMore($data);
    }

    private function convertOne(Cart $cart): array 
    {
        return [
            'cartVendorGroups' => $this->convertCartVendorGroupsToArray($cart->getCartVendorGroups()),
            'count' => $cart->getCount(),
            'totalPrice' => $this->customPriceConvertor->convert($cart->getTotalPrice()),
        ];
    } 

    /**
     * @param CartVendorGroups[] $cartVendorGroups
     * @return array
     */
    private function convertCartVendorGroupsToArray($cartVendorGroups)
    {
        $vendorGroupsArray = [];
        foreach($cartVendorGroups as $vendorGroup)
        {
            $vendorGroupsArray[] = [
                'vendor' => $this->vendorToArrayConvertor->convert($vendorGroup->getVendor(), $this->lang),
                'cartLines' => $this->convertCartLinesToArray($vendorGroup->getCartLines()->toArray()),
                'weight' => $vendorGroup->getWeight(),
                'position' => $vendorGroup->getPosition(),
                'index' => $vendorGroup->getIndex()
            ];
        }
        return $vendorGroupsArray;
    }
    
    /**
     * @param CartLine[] $cartLines
     * @return array
     */
    private function convertCartLinesToArray($cartLines)
    {
        $cartLinesArray = [];
        foreach($cartLines as $cartLine)
        {   
            $cartLinesArray[] = $this->convertCartLinetoArray($cartLine);
        }
        return $cartLinesArray;
    }
    
    private function convertCartLinetoArray(CartLine $cartLine): array 
    {
        $getLang = 'get' . ucfirst($this->lang);

        $packaging = $cartLine->getPackaging();
        $product = $packaging->getProduct();

        return [
            'packaging' => [
                'id' => $packaging->getId(),
                'publicRef' => $packaging->getPublicRef(),
                'label' => $packaging->getLabel() ? $packaging->getLabel()->$getLang(): null,
                'target' => $this->urlGenerator->generate('product_show', [
                    'publicRef' => $packaging->getPublicRef(),
                    'slug' => $product->getSlug()->$getLang(),
                    'categorySlug' => $product->getCategory()->getSlug()->$getLang(),
                    'subCategorySlug' => $product->getSubCategory()->getSlug()->$getLang(),
                    '_locale' => $this->lang
                ]),
                'product' => [
                    'id' => $product->getId(),
                    'designation' => $product->getDesignation()->$getLang(),
                    'firstPicture' => [
                        'path' => $this->picturePathResolver->getPath($product->getFirstPicture(), 'index'),
                        'alt' => $this->picturePathResolver->getAlt($product->getFirstPicture(), $this->lang)
                    ],
                ],
                'stock' => $packaging->getStock()
            ],
            'quantity' => $cartLine->getQuantity(),
            'unitPrice' => $this->customPriceConvertor->convert($cartLine->getUnitPrice()),
            'totalPrice' => $this->customPriceConvertor->convert($cartLine->getTotalPrice()),
            'unitWeight' => $cartLine->getUnitWeight(),
            'totalWeight' => $cartLine->getTotalWeight()
        ];
    }
    

}