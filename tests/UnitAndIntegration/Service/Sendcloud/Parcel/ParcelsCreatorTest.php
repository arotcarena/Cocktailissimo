<?php
namespace App\Tests\UnitAndIntegration\Service\Sendcloud\Parcel;

use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\PostalDetail;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\RelayInfo;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Entity\VendorDetail;
use App\Service\Sendcloud\Parcel\ParcelsCreator;
use App\Service\Sendcloud\Parcel\ParcelValuesResolver;
use PHPUnit\Framework\TestCase;
use Symfony\Contracts\Translation\TranslatorInterface;


/**
 * @group Purchase
 */
class ParcelsCreatorTest extends TestCase
{
    private ParcelsCreator $parcelsCreator;

    public function setUp(): void
    {
        $translator = $this->createMock(TranslatorInterface::class);
        $translator->expects($this->any())->method('trans')->willReturn('translated content');

        $this->parcelsCreator = new ParcelsCreator($translator, new ParcelValuesResolver);
    }
    
    public function testCreateParcelSetPurchaseCompanyProperty()
    {
        $purchase = $this->createPurchase();
        $purchase->getCustomerDetail()->setCompany('Company');
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals('Company', $parcel['company_name']);
    }

    public function testCreateParcelWithoutPurchaseCompanyProperty()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertTrue(!isset($parcel['company_name']));
    }

    public function testCreateParcelServicePointIdPropertyNotIssetWhenAtHomeDelivery()
    {
        $purchase = $this->createPurchase();
        $atHomeParcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber'); // le premier purchaseVendorGroup est at home

        $this->assertTrue(!isset($atHomeParcel['to_service_point']));
    }

    public function testCreateParcelCorrectSetServicePointId()
    {
        $purchase = $this->createPurchase();
        $atRelayParcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(1), 'orderNumber'); // le deuxième purchaseVendorGroup est at relay

        $this->assertEquals(123123, $atRelayParcel['to_service_point']);
    }

    public function testCreateParcelSetCorrectShippingMethodId()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(1), 'orderNumber');

        $this->assertEquals(222222, $parcel['shipment']['id']);
    }

    public function testCreateParcelsSetCorrectSenderAddressId()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals(555, $parcel['sender_address']);
    }

    public function testCreateParcelsSetCorrectProductHsCode()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(1), 'orderNumber');

        $this->assertEquals('hs_code_3', $parcel['parcel_items'][0]['hs_code']);
    }

    public function testCreateParcelsSetCorrectProductOriginCountry()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals('ES', $parcel['parcel_items'][0]['origin_country']);
    }

    public function testCreateParcelsSetCorrectProductDescription()
    {
        $purchase = $this->createPurchase()->setLang('it');
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals('designation1 it', $parcel['parcel_items'][0]['description']);
    }

    public function testCreateParcelsSetCorrectProductId()
    {
        $purchase = $this->createPurchase()->setLang('it');
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals('publicRef1', $parcel['parcel_items'][0]['product_id']);
    }

    public function testCreateParcelsSetCorrectOrderNumberAndCustomsInvoiceNr()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(0), 'orderNumber');

        $this->assertEquals('orderNumber', $parcel['order_number']);
        $this->assertEquals('orderNumber', $parcel['customs_invoice_nr']);
    }

    public function testCreateParcelsSetCorrectCustomsShipmentType()
    {
        $purchase = $this->createPurchase();
        $parcel = $this->parcelsCreator->createParcel($purchase->getPurchaseVendorGroups()->get(1), 'orderNumber');

        $this->assertEquals(2, $parcel['customs_shipment_type']); // 2 = commercial goods
    }

    private function createPurchase(): Purchase
    {
        $postalDetail = (new PostalDetail)
                        ->setCivility(SiteConfig::CIVILITY_F)
                        ->setLineOne('street address')
                        ->setPostcode('75000')
                        ->setCity('Paris')
                        ->setCountry('FR')
                        ;

        return (new Purchase)
                ->setCustomerDetail(
                    (new CustomerDetail)
                    ->setEmail('email@mail.com')
                    ->setCivility(SiteConfig::CIVILITY_F)
                    ->setFirstName('firstName')
                    ->setLastName('lastName')
                    ->setPhone('0601020304')
                )
                ->setDeliveryDetail($postalDetail)
                ->setInvoiceDetail($postalDetail)
                ->setLang('en')
                ->setArticlesPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(400)
                )
                ->setShippingCost(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(100)
                )
                ->setTotalPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(500)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setSendcloudId(555)
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
                        ->setPublicRef('publicRef1')
                        ->setPackagingLabel(
                            (new TranslatableString)
                            ->setEn('label1 en')
                            ->setFr('label1 fr')
                            ->setEs('label1 es')
                            ->setIt('label1 it')
                        )
                        ->setDesignation(
                            (new TranslatableString)
                            ->setEn('designation1 en')
                            ->setFr('designation1 fr')
                            ->setEs('designation1 es')
                            ->setIt('designation1 it')
                        )
                        ->setUnitPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )
                        ->setHsCode('hs_code_1')
                        ->setOriginCountry('ES')
                        ->setUnitWeight(100)
                        ->setTotalWeight(200)       
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
                        ->setPublicRef('publicRef2')
                        ->setPackagingLabel(
                            (new TranslatableString)
                            ->setEn('label2 en')
                            ->setFr('label2 fr')
                            ->setEs('label2 es')
                            ->setIt('label2 it')
                        )
                        ->setDesignation(
                            (new TranslatableString)
                            ->setEn('designation2 en')
                            ->setFr('designation2 fr')
                            ->setEs('designation2 es')
                            ->setIt('designation2 it')
                        )
                        ->setUnitPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )
                        ->setHsCode('hs_code_2')
                        ->setOriginCountry('IT')
                        ->setUnitWeight(100)
                        ->setTotalWeight(200)       
                    )
                    ->setShippingInfo(
                        (new ShippingInfo)
                        ->setShippingMethodId(111111)
                        ->setCarrier('colissimo')
                        ->setName('Colissimo Home')
                        ->setPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(150)
                        )
                        ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                    )
                    ->setArticlesPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ->setPriceHT(400)
                    )
                    ->setTotalPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ->setPriceHT(550)
                    )
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setSendcloudId(777)
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(1)
                        ->setPublicRef('publicRef3')
                        ->setPackagingLabel(
                            (new TranslatableString)
                            ->setEn('label3 en')
                            ->setFr('label3 fr')
                            ->setEs('label3 es')
                            ->setIt('label3 it')
                        )
                        ->setDesignation(
                            (new TranslatableString)
                            ->setEn('designation3 en')
                            ->setFr('designation3 fr')
                            ->setEs('designation3 es')
                            ->setIt('designation3 it')
                        )
                        ->setUnitPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )  
                        ->setHsCode('hs_code_3')
                        ->setOriginCountry('DE')
                        ->setUnitWeight(300)
                        ->setTotalWeight(300)     
                    )
                    ->setShippingInfo(
                        (new ShippingInfo)
                        ->setShippingMethodId(222222)
                        ->setCarrier('colissimo')
                        ->setName('Colissimo Home')
                        ->setPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setType(SiteConfig::SHIPPING_TYPE_RELAY)
                        ->setRelayInfo(
                            (new RelayInfo)
                            ->setRelayId('123123')
                        )
                    )  
                    ->setArticlesPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ->setPriceHT(200)
                    )
                    ->setTotalPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ->setPriceHT(300)
                    )
                )
        ;
    }
}