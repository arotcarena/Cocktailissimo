<?php
namespace App\Tests\UnitAndIntegration\EventListener\EntityListener;

use App\Config\SiteConfig;
use App\Email\Customer\CustomerPurchaseStatusEmail;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\EventSubscriber\DoctrineEventSubscriber\PurchaseShippingStatusSubscriber;
use Doctrine\Common\EventManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Events;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PurchaseShippingStatusSubscriberTest extends TestCase
{
    private CustomerPurchaseStatusEmail|MockObject $customerPurchaseStatusEmail;

    private PurchaseShippingStatusSubscriber $purchaseShippingStatusSubscriber;

    private EntityManagerInterface|MockObject $em;

    private EventManager $eventManager;

    public function setUp(): void
    {
        $this->customerPurchaseStatusEmail = $this->createMock(CustomerPurchaseStatusEmail::class);

        $this->em = $this->createMock(EntityManagerInterface::class);

        $this->purchaseShippingStatusSubscriber = new PurchaseShippingStatusSubscriber($this->customerPurchaseStatusEmail);

        $this->eventManager = new EventManager;
        $this->eventManager->addEventSubscriber($this->purchaseShippingStatusSubscriber);
    }

    public function testOnShippingInfoPreUpdateCustomerPurchaseStatusEmailIsCalled()
    {
        $this->customerPurchaseStatusEmail->expects($this->once())
                                            ->method('send')
                                            ;

        $shippingInfo = (new ShippingInfo)->setPurchaseVendorGroup(new PurchaseVendorGroup);
        $this->eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs($shippingInfo, $this->em));
    }

    public function testOnOtherEntityPreUpdateCustomerPurchaseStatusEmailIsNotCalled()
    {
        $this->customerPurchaseStatusEmail->expects($this->never())
                                            ->method('send')
                                            ;
        $this->eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs(new Product, $this->em));
    }

    public function testOnShippingInfoPostRemoveCustomerPurchaseStatusEmailIsNotCalled()
    {
        $this->customerPurchaseStatusEmail->expects($this->never())
                                            ->method('send')
                                            ;
        $shippingInfo = (new ShippingInfo)->setPurchaseVendorGroup(new PurchaseVendorGroup);
        $this->eventManager->dispatchEvent(Events::postRemove, new PostRemoveEventArgs($shippingInfo, $this->em));
    }

    public function testOnShippingInfoPreUpdateCustomerPurchaseStatusEmailIsCalledWithCorrectParam()
    {
        $shippingInfo = (new ShippingInfo)->setParcelId(1);
        $purchaseVendorGroup = (new PurchaseVendorGroup)->setShippingInfo($shippingInfo);

        $this->customerPurchaseStatusEmail->expects($this->once())
                                            ->method('send')
                                            ->with($purchaseVendorGroup)
                                            ;
        $this->eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs($shippingInfo, $this->em));
    }

    public function testOnShippingInfoPreUpdateWithStatusDeliveredPurchaseStatusIsUpdatedToTerminated()
    {
        $purchase = (new Purchase)->setStatus(SiteConfig::STATUS_PAID);
        $shippingInfo = (new ShippingInfo)->setStatus(SiteConfig::SHIPPING_STATUS_DELIVERED);
        $purchaseVendorGroup = (new PurchaseVendorGroup)
                                ->setShippingInfo($shippingInfo)
                                ->setPurchase($purchase)
                                ;

        $this->eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs($shippingInfo, $this->em));

        $this->assertEquals(SiteConfig::STATUS_TERMINATED, $purchase->getStatus());
    }
}