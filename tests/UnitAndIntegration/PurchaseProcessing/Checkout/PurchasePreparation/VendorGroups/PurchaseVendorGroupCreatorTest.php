<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups;

use App\Entity\CustomPrice;
use App\Helper\ObjectHydrator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups\PurchaseVendorGroupCreator;
use App\Tests\Utils\Factory\CheckoutDataFactory;
use App\Tests\Utils\Factory\VendorFactory;
use PHPUnit\Framework\TestCase;


/**
 * @group Purchase
 */
class PurchaseVendorGroupCreatorTest extends TestCase
{
    private PurchaseVendorGroupCreator $purchaseVendorGroupCreator;

    public function setUp(): void
    {
        parent::setUp();

        $this->purchaseVendorGroupCreator = new PurchaseVendorGroupCreator(new ObjectHydrator);
    }

    public function testVendorGroupWeightIsCorrectlySet()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $this->assertEquals(
            100, 
            $purchaseVendorGroup->getWeight()
        );
    }

    public function testVendorGroupVendorDetailIsCorrectlySet()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $vendorDetail = $purchaseVendorGroup->getVendorDetail();

        $this->assertEquals(
            123456789,
            $vendorDetail->getIdentificationNumber()
        );
        $this->assertEquals(
            'Ets Jean', //depuis VendorFactory::create()
            $vendorDetail->getSocialName()
        );
        $this->assertEquals(
            'acct-test',
            $vendorDetail->getStripeConnectId()
        );
        $this->assertEquals(
            123456,
            $vendorDetail->getSendcloudId()
        );
        $this->assertEquals(
            'sender_address line one',
            $vendorDetail->getSenderAddress()->getLineOne()
        );
        $this->assertEquals(
            '01000',
            $vendorDetail->getSenderAddress()->getPostcode()
        );
        $this->assertEquals(
            'social_address line one',
            $vendorDetail->getSocialAddress()->getLineOne()
        );
        $this->assertEquals(
            '02000',
            $vendorDetail->getSocialAddress()->getPostcode()
        );
    }

    public function testVendorGroupPurchaseLinesCount()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $this->assertCount(
            2, 
            $purchaseVendorGroup->getPurchaseLines()
        );
    }

    public function testVendorGroupPurchaseLineUnitPriceIsCorrectlySet()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup1 = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[1], VendorFactory::create());

        $purchaseLine = $purchaseVendorGroup1->getPurchaseLines()->get(0);

        $this->assertEquals(
            100, // unitPrice de la purchaseLine du deuxième vendorGroup (dans CheckoutDataFactory::createCheckoutCartData())
            $purchaseLine->getUnitPrice()->getPriceHT()
        );
        $this->assertEquals(
            120,
            $purchaseLine->getUnitPrice()->getPriceTTC()
        );
        $this->assertEquals(
            120, 
            $purchaseLine->getUnitPrice()->getPriceToPay()
        );
        $this->assertEquals(
            CustomPrice::PAY_PRICE_TTC,
            $purchaseLine->getUnitPrice()->getPayType()
        );
    }

    public function testVendorGroupPurchaseLineTotalPriceIsCorrectlySet()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup1 = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[1], VendorFactory::create());

        $purchaseLine = $purchaseVendorGroup1->getPurchaseLines()->get(0);

        $this->assertEquals(
            200, // totalPrice de la purchaseLine du deuxième vendorGroup (dans CheckoutDataFactory::createCheckoutCartData())
            $purchaseLine->getTotalPrice()->getPriceHT()
        );
        $this->assertEquals(
            240,
            $purchaseLine->getTotalPrice()->getPriceTTC()
        );
        $this->assertEquals(
            240, 
            $purchaseLine->getTotalPrice()->getPriceToPay()
        );
        $this->assertEquals(
            CustomPrice::PAY_PRICE_TTC,
            $purchaseLine->getTotalPrice()->getPayType()
        );
    }

     public function testPersistSetCorrectPackagingLabelIntoPurchaseLines()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $purchaseLine = $purchaseVendorGroup->getPurchaseLines()->get(0);

        $this->assertEquals('packagingLabel fr', $purchaseLine->getPackagingLabel()->getFr());
    }
    public function testPersistSetCorrectProductDesignationIntoPurchaseLines()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $purchaseLine = $purchaseVendorGroup->getPurchaseLines()->get(0);

        $this->assertEquals('designation fr', $purchaseLine->getDesignation()->getFr());
    }
    public function testPersistSetCorrectProductHsCodeIntoPurchaseLines()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[0], VendorFactory::create());

        $purchaseLine2 = $purchaseVendorGroup->getPurchaseLines()->get(1);

        $this->assertEquals('hsCode2', $purchaseLine2->getHsCode());
    }
    public function testPersistSetCorrectProductOriginCountryIntoPurchaseLines()
    {
        $checkoutVendorGroups = CheckoutDataFactory::createCheckoutCartData()->vendorGroups;
        $purchaseVendorGroup2 = $this->purchaseVendorGroupCreator->create($checkoutVendorGroups[1], VendorFactory::create());

        $purchaseLine3 = $purchaseVendorGroup2->getPurchaseLines()->get(0);

        $this->assertEquals('UK', $purchaseLine3->getOriginCountry());
    }
}