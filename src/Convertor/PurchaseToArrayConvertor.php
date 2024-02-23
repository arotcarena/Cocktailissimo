<?php
namespace App\Convertor;

use App\Convertor\AddressToArrayConvertor;
use App\Entity\Purchase;
use App\Convertor\ConvertorTrait;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class PurchaseToArrayConvertor
{
    use ConvertorTrait;

    private bool $full;

    private $lang = 'en';


    public function __construct(
        private ShippingInfoToArrayConvertor $shippingInfoConvertor,
        private AddressToArrayConvertor $addressConvertor,
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor,
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    
    /**
     * @param Purchase|Purchase[] $data
     * @param string $mode 
     * @return array
     */
    public function convert($data, string $lang, $full = false): array
    {
        $this->lang = $lang;
        $this->full = $full;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(Purchase $purchase): array 
    {
        $purchaseArray = [
            'id' => $purchase->getId(),
            'ref' => $purchase->getRef(),
            'status' => $purchase->getStatus(),
            'totalPrice' => $this->customPriceToArrayConvertor->convert($purchase->getTotalPrice()),
            'countArticles' => $purchase->getCountArticles(),
            'createdAt' => $purchase->getCreatedAt()->format('d/m/Y H:i')
        ];

        if($this->full)
        {
            $purchaseArray = array_merge($purchaseArray, [
                'email' => $purchase->getCustomerDetail()->getEmail(),
                'phone' => $purchase->getCustomerDetail()->getPhone(),
                'deliveryDetail' => $this->addressConvertor->convert($purchase->getDeliveryDetail()),
                'invoiceDetail' => $this->addressConvertor->convert($purchase->getInvoiceDetail()),
                'shippingCost' => $this->customPriceToArrayConvertor->convert($purchase->getShippingCost()),
                'articlesPrice' => $this->customPriceToArrayConvertor->convert($purchase->getArticlesPrice()),
                'purchaseVendorGroups' => $this->convertPurchaseVendorGroups($purchase->getPurchaseVendorGroups())
            ]);
        }
        return $purchaseArray;
    }

    /**
     * @param PurchaseVendorGroup[] $purchaseVendorGroups
     * @return array
     */
    public function convertPurchaseVendorGroups($purchaseVendorGroups): array
    {
        $purchaseVendorGroupsArray = [];
        foreach($purchaseVendorGroups as $purchaseVendorGroup)
        {
            $purchaseVendorGroupsArray[] = $this->convertPurchaseVendorGroup($purchaseVendorGroup);
        }
        return $purchaseVendorGroupsArray;
    }

    private function convertPurchaseVendorGroup(PurchaseVendorGroup $purchaseVendorGroup): array 
    {
        $vendor = $purchaseVendorGroup->getVendor();

        return [
            'id' => $purchaseVendorGroup->getId(),
            'vendor' => [
                'usualName' => $vendor ? $vendor->getCompany()->getUsualName(): $purchaseVendorGroup->getVendorDetail()->getSocialName(),
                'target' => $vendor ? (
                    $this->urlGenerator->generate('vendorShop', [
                        'companySlug' => $vendor->getCompany()->getSlug(),
                        '_locale' => $this->lang
                    ])
                ): null,
                'reviewNote' => $vendor ? $vendor->getReviewNote(): null,
                'countReviews' => $vendor ? $vendor->getCountReviews(): null,
            ],
            'purchaseLines' => $this->convertPurchaseLines($purchaseVendorGroup->getPurchaseLines()),
            'shippingInfo' => $this->shippingInfoConvertor->convert($purchaseVendorGroup->getShippingInfo(), $this->lang),
            'articlesPrice' => $this->customPriceToArrayConvertor->convert($purchaseVendorGroup->getArticlesPrice()),
            'totalPrice' => $this->customPriceToArrayConvertor->convert($purchaseVendorGroup->getTotalPrice()),
            'salesInvoiceNumber' => $purchaseVendorGroup->getSalesInvoiceNumber()
        ];
    }

    /**
     * Undocumented function
     *
     * @param PurchaseLine[] $purchaseLines
     * @return void
     */
    private function convertPurchaseLines($purchaseLines): array 
    {
        $purchaseLinesArray = [];
        foreach($purchaseLines as $purchaseLine)
        {
            $purchaseLinesArray[] = $this->convertPurchaseLine($purchaseLine);
        }
        return $purchaseLinesArray;
    }

    private function convertPurchaseLine(PurchaseLine $purchaseLine): array 
    {
        $getLang = 'get' . ucfirst($this->lang);

        return [
            'id' => $purchaseLine->getId(),
            'quantity' => $purchaseLine->getQuantity(),

            'publicRef' => $purchaseLine->getPublicRef(),
            'privateRef' => $purchaseLine->getPrivateRef(),
            'packagingLabel' => $purchaseLine->getPackagingLabel()->$getLang(),
            'designation' => $purchaseLine->getDesignation()->$getLang(),

            'unitPrice' => $this->customPriceToArrayConvertor->convert($purchaseLine->getUnitPrice()),
            'totalPrice' => $this->customPriceToArrayConvertor->convert($purchaseLine->getTotalPrice())
        ];
    }
}
