<?php
namespace App\Tests\UnitAndIntegration\Service\Sendcloud;

use App\Entity\Purchase;
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
        $purchase = new Purchase;
        $this->parcelsCreator->expects($this->once())
                            ->method('createParcels')
                            ->with($purchase)
                            ->willReturn(['parcel1', 'parcel2', 'parcel3']);

        $this->curlRequest->expects($this->exactly(3))
                        ->method('post')
                        ->willReturn('returnParcel1', 'returnParcel2', 'returnParcel3')
                        ;
        
        $this->sendcloudService->announceParcels($purchase);
    }
    public function testAnnounceParcelsCorrectReturnPostReturns()
    {
        $purchase = new Purchase;
        $this->parcelsCreator->expects($this->once())
                            ->method('createParcels')
                            ->with($purchase)
                            ->willReturn(['parcel1', 'parcel2', 'parcel3']);

        $this->curlRequest->expects($this->exactly(3))
                        ->method('post')
                        ->willReturn('returnParcel1', 'returnParcel2', 'returnParcel3')
                        ;
        
        $return = $this->sendcloudService->announceParcels($purchase);

        $this->assertEquals(['returnParcel1', 'returnParcel2', 'returnParcel3'], $return);
    }
}