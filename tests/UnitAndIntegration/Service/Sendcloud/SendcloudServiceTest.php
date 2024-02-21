<?php
namespace App\Tests\UnitAndIntegration\Service\Sendcloud;

use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\HTTP\CurlRequest;
use App\Service\Sendcloud\Parcel\ParcelsCreator;
use App\Service\Sendcloud\SendcloudService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group Purchase
 */
class SendcloudServiceTest extends TestCase
{
    private ParcelsCreator|MockObject $parcelsCreator;

    private CurlRequest|MockObject $curlRequest;

    private SendcloudService|MockObject $sendcloudService;
    
    public function setUp(): void 
    {
        $this->parcelsCreator = $this->createMock(ParcelsCreator::class);
        $this->curlRequest = $this->createMock(CurlRequest::class);

        $this->sendcloudService = new SendcloudService($this->curlRequest, $this->parcelsCreator);
    }

    public function testAnnounceParcelsCorrectPostParcels()
    {
        $purchaseVendorGroup1 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchaseVendorGroup2 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchaseVendorGroup3 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchase = (new Purchase)
                    ->addPurchaseVendorGroup($purchaseVendorGroup1)
                    ->addPurchaseVendorGroup($purchaseVendorGroup2)
                    ->addPurchaseVendorGroup($purchaseVendorGroup3)
                    ;

        $this->parcelsCreator->expects($this->exactly(3))
                            ->method('createParcel')
                            ->willReturn(['parcelData']);

        $this->curlRequest->expects($this->exactly(3))
                        ->method('post')
                        ->willReturn((object)['id' => 1], (object)['id' => 2], (object)['id' => 3])
                        ;
        
        $this->sendcloudService->announceParcels($purchase);
    }
    public function testAnnounceParcelsCorrectSetParcelIdOnPurchaseVendorGroupShippingInfo()
    {
        $purchaseVendorGroup1 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchaseVendorGroup2 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchaseVendorGroup3 = (new PurchaseVendorGroup)->setShippingInfo(new ShippingInfo);
        $purchase = (new Purchase)
                    ->addPurchaseVendorGroup($purchaseVendorGroup1)
                    ->addPurchaseVendorGroup($purchaseVendorGroup2)
                    ->addPurchaseVendorGroup($purchaseVendorGroup3)
                    ;

        $this->curlRequest->expects($this->exactly(3))
                        ->method('post')
                        ->willReturn((object)['id' => 1], (object)['id' => 2], (object)['id' => 3])
                        ;
        
        $this->sendcloudService->announceParcels($purchase);

        $this->assertEquals(1, $purchaseVendorGroup1->getShippingInfo()->getParcelId());
        $this->assertEquals(2, $purchaseVendorGroup2->getShippingInfo()->getParcelId());
        $this->assertEquals(3, $purchaseVendorGroup3->getShippingInfo()->getParcelId());
    }
}