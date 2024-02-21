<?php
namespace App\Tests\UnitAndIntegration\EventSubscriber;

use App\Email\Customer\CustomerPurchaseStatusEmail;
use App\Entity\Product;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\EventSubscriber\DoctrineEventSubscriber\PurchaseStatusSubscriber;
use Doctrine\Common\EventManager;
use Doctrine\Migrations\EventDispatcher;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Doctrine\ORM\Events;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PurchaseStatusSubscriberTest extends TestCase
{
    private CustomerPurchaseStatusEmail|MockObject $customerPurchaseStatusEmail;

    private PurchaseStatusSubscriber $purchaseStatusSubscriber;

    private EntityManagerInterface|MockObject $em;

    public function setUp(): void
    {
        $this->customerPurchaseStatusEmail = $this->createMock(CustomerPurchaseStatusEmail::class);

        $this->em = $this->createMock(EntityManagerInterface::class);

        $this->purchaseStatusSubscriber = new PurchaseStatusSubscriber($this->customerPurchaseStatusEmail);
    }

    public function testOnShippingInfoPostUpdateCustomerPurchaseStatusEmailIsCalled()
    {
        $eventManager = new EventManager;
        $eventManager->addEventSubscriber($this->purchaseStatusSubscriber);

        $this->customerPurchaseStatusEmail->expects($this->once())
                                            ->method('send')
                                            ;

        $shippingInfo = (new ShippingInfo)->setPurchaseVendorGroup(new PurchaseVendorGroup);
        $eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs($shippingInfo, $this->em));
    }

    public function testOnOtherEntityPostUpdateCustomerPurchaseStatusEmailIsNotCalled()
    {
        $eventManager = new EventManager;
        $eventManager->addEventSubscriber($this->purchaseStatusSubscriber);

        $this->customerPurchaseStatusEmail->expects($this->never())
                                            ->method('send')
                                            ;
        $eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs(new Product, $this->em));
    }

    public function testOnShippingInfoPostRemoveCustomerPurchaseStatusEmailIsNotCalled()
    {
        $eventManager = new EventManager;
        $eventManager->addEventSubscriber($this->purchaseStatusSubscriber);

        $this->customerPurchaseStatusEmail->expects($this->never())
                                            ->method('send')
                                            ;
        $eventManager->dispatchEvent(Events::preUpdate, new PostRemoveEventArgs(new Product, $this->em));
    }

    public function testOnShippingInfoPostUpdateCustomerPurchaseStatusEmailIsCalledWithCorrectParam()
    {
        $eventManager = new EventManager;
        $eventManager->addEventSubscriber($this->purchaseStatusSubscriber);

        $shippingInfo = (new ShippingInfo)->setParcelId(1);
        $purchaseVendorGroup = (new PurchaseVendorGroup)->setShippingInfo($shippingInfo);

        $this->customerPurchaseStatusEmail->expects($this->once())
                                            ->method('send')
                                            ->with($purchaseVendorGroup)
                                            ;
        $eventManager->dispatchEvent(Events::postUpdate, new PostUpdateEventArgs($shippingInfo, $this->em));
    }
}