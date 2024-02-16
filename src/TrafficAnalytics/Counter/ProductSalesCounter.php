<?php
namespace App\TrafficAnalytics\Counter;

use App\Entity\Purchase;
use App\Helper\VendorGroupLinesExtractor;
use App\Hydrator\PurchaseHydrator;
use Doctrine\ORM\EntityManagerInterface;

class ProductSalesCounter
{
    public function __construct(
        private EntityManagerInterface $em,
        private PurchaseHydrator $purchaseHydrator,
        private VendorGroupLinesExtractor $vendorGroupLinesExtractor,
        private EntityCountAdder $entityCountAdder
    )
    {

    }

    public function countSales(Purchase $purchase)
    {
        $this->purchaseHydrator->hydratePurchaseWithPackagings($purchase);
        $purchaseLines = $this->vendorGroupLinesExtractor->extractPurchaseLines($purchase);

        foreach($purchaseLines as $purchaseLine)
        {
            $product = $purchaseLine->getPackaging()->getProduct();
            $this->entityCountAdder->addCount($product, 'countSales', $purchaseLine->getQuantity());
        }
        $this->em->flush();
    }
}