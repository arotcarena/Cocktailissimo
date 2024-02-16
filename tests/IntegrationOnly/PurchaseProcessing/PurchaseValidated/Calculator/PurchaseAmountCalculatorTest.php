<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\PurchaseValidated\Calculator;

use App\Entity\CustomPrice;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\Entity\User;
use App\Price\PriceOperator;
use App\PurchaseProcessing\PurchaseValidated\Calculator\PurchaseAmountCalculator;
use PHPUnit\Framework\TestCase;

/**
 * @group Purchase
 */
class PurchaseAmountCalculatorTest extends TestCase
{
    private PurchaseAmountCalculator $purchaseAmountCalculator;

    public function setUp(): void
    {
        parent::setUp();

        $this->purchaseAmountCalculator = new PurchaseAmountCalculator(new PriceOperator);
    }

    public function testVendorGroupArticlesPriceIsCorrectlySet()
    {
        $purchase = $this->createPurchase();

        $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);

        //priceHT
        $this->assertEquals(
            20000, // chiffre calculé en ajoutant les priceHT des purchaseLines.totalPrice
            $purchase->getPurchaseVendorGroups()->get(0)->getArticlesPrice()->getPriceHT()
        );
        //priceTTC
        $this->assertEquals(
            36000,
            $purchase->getPurchaseVendorGroups()->get(1)->getArticlesPrice()->getPriceTTC()
        );
        //priceToPay
        $this->assertEquals(
            24000, 
            $purchase->getPurchaseVendorGroups()->get(0)->getArticlesPrice()->getPriceToPay()
        );
        $this->assertEquals(
            20000, 
            $purchase->getPurchaseVendorGroups()->get(2)->getArticlesPrice()->getPriceToPay()
        );
        //payType
        $this->assertEquals(
            CustomPrice::PAY_PRICE_TTC, 
            $purchase->getPurchaseVendorGroups()->get(0)->getArticlesPrice()->getPayType()
        );
        $this->assertEquals(
            CustomPrice::PAY_PRICE_HT, 
            $purchase->getPurchaseVendorGroups()->get(2)->getArticlesPrice()->getPayType()
        );
    }
    
    public function testVendorGroupTotalPriceIsCorrectlySet()
    {
        $purchase = $this->createPurchase();

        $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);

        //priceHT
        $this->assertEquals(
            21000, // chiffre calculé en ajoutant les priceHT des purchaseLines.totalPrice
            $purchase->getPurchaseVendorGroups()->get(0)->getTotalPrice()->getPriceHT()
        );
        //priceTTC
        $this->assertEquals(
            38400,
            $purchase->getPurchaseVendorGroups()->get(1)->getTotalPrice()->getPriceTTC()
        );
        //priceToPay
        $this->assertEquals(
            25200, 
            $purchase->getPurchaseVendorGroups()->get(0)->getTotalPrice()->getPriceToPay()
        );
        $this->assertEquals(
            21000, 
            $purchase->getPurchaseVendorGroups()->get(2)->getTotalPrice()->getPriceToPay()
        );
        //payType
        $this->assertEquals(
            CustomPrice::PAY_PRICE_TTC, 
            $purchase->getPurchaseVendorGroups()->get(0)->getTotalPrice()->getPayType()
        );
        $this->assertEquals(
            CustomPrice::PAY_PRICE_HT, 
            $purchase->getPurchaseVendorGroups()->get(2)->getTotalPrice()->getPayType()
        );
    }

    public function testVendorGroupCommissionPriceIsCorrectlySet()
    {
        $purchase = $this->createPurchase();

        $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);

        /** @var PurchaseVendorGroup */
        $vendorGroup1 = $purchase->getPurchaseVendorGroups()->get(0);
        $vendorGroup2 = $purchase->getPurchaseVendorGroups()->get(1);
        $this->assertEquals(240, $vendorGroup1->getCommissionPrice()->getPriceToPay());
        $this->assertEquals(CustomPrice::PAY_PRICE_TTC, $vendorGroup1->getCommissionPrice()->getPayType());
        $this->assertEquals(200, $vendorGroup1->getCommissionPrice()->getPriceHT());
        $this->assertEquals(240, $vendorGroup1->getCommissionPrice()->getPriceTTC());

        $this->assertEquals(null, $vendorGroup2->getCommissionPrice());
    }

    public function testVendorGroupVendorRestAmountIsCorrectlySet()
    {
        $purchase = $this->createPurchase();

        $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);

        /** @var PurchaseVendorGroup */
        $vendorGroup1 = $purchase->getPurchaseVendorGroups()->get(0);
        $vendorGroup2 = $purchase->getPurchaseVendorGroups()->get(1);
        $vendorGroup3 = $purchase->getPurchaseVendorGroups()->get(2);

        $this->assertEquals(23760, $vendorGroup1->getVendorRestAmount());
        $this->assertEquals(36000, $vendorGroup2->getVendorRestAmount());
        $this->assertEquals(19760, $vendorGroup3->getVendorRestAmount());
    }

    /**
     * Purchase avec juste les properties utiles pour les tests
     */
    private function createPurchase(): Purchase
    {
        $purchase = new Purchase;
        $purchase->generateRef();

        return $purchase
                    ->addPurchaseVendorGroup(
                        (new PurchaseVendorGroup)
                        ->setVendor(
                            (new User)
                            ->setCommissionFree(false)
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(10000)
                                ->setPriceTTC(12000)
                                ->setVatRate(200)
                                ->setVatAmount(2000)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(10000)
                                ->setPriceTTC(12000)
                                ->setVatRate(200)
                                ->setVatAmount(2000)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                        ->setShippingInfo(
                            (new ShippingInfo)
                            ->setPrice(
                                (new CustomPrice)
                                ->setPriceHT(1000)
                                ->setPriceTTC(1200)
                                ->setVatRate(200)
                                ->setVatAmount(200)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                    )
                    ->addPurchaseVendorGroup(
                        (new PurchaseVendorGroup)
                        ->setVendor(
                            (new User)
                            ->setCommissionFree(true)
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(20000)
                                ->setPriceTTC(24000)
                                ->setVatRate(200)
                                ->setVatAmount(4000)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(10000)
                                ->setPriceTTC(12000)
                                ->setVatRate(200)
                                ->setVatAmount(2000)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                        ->setShippingInfo(
                            (new ShippingInfo)
                            ->setPrice(
                                (new CustomPrice)
                                ->setPriceHT(2000)
                                ->setPriceTTC(2400)
                                ->setVatRate(200)
                                ->setVatAmount(400)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            )
                        )
                    )
                    ->addPurchaseVendorGroup(
                        (new PurchaseVendorGroup)
                        ->setVendor(
                            (new User)
                            ->setCommissionFree(false)
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(10000)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                            )
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPriceHT(10000)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                            )
                        )
                        ->setShippingInfo(
                            (new ShippingInfo)
                            ->setPrice(
                                (new CustomPrice)
                                ->setPriceHT(1000)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                            )
                        )
                    ); 
    }
}