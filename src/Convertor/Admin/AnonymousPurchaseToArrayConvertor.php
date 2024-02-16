<?php
namespace App\Convertor\Admin;

use App\Convertor\CustomPriceToArrayConvertor;
use App\Convertor\PurchaseToArrayConvertor;
use App\Entity\Purchase;

/**
 * Purchase anonyme pour TrafficAnalytics VisitorAction
 */
class AnonymousPurchaseToArrayConvertor
{
    public function __construct(
        private PurchaseToArrayConvertor $purchaseToArrayConvertor,
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor
    )
    {
        
    }

    public function convert(Purchase $purchase): array
    {
        return [
            'totalPrice' => $this->customPriceToArrayConvertor->convert($purchase->getTotalPrice()),
            'countArticles' => $purchase->getCountArticles(),
            'shippingCost' => $this->customPriceToArrayConvertor->convert($purchase->getShippingCost()),
            'articlesPrice' => $this->customPriceToArrayConvertor->convert($purchase->getArticlesPrice()),
        ];
    }
}