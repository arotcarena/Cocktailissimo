<?php
namespace App\Tests\UnitAndIntegration\EventSubscriber;

use App\Counter\ProductReviewCounter;
use App\Counter\VendorReviewCounter;
use App\Entity\Product;
use App\Entity\Review;
use App\Entity\User;
use App\EventSubscriber\DoctrineEventSubscriber\ReviewSubscriber;
use App\Service\ReviewCalculator\ProductReviewCalculator;
use App\Service\ReviewCalculator\VendorReviewCalculator;
use App\Tests\Utils\FixturesTrait;
use Doctrine\Common\EventManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Event\PreRemoveEventArgs;
use Doctrine\ORM\Events;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;


/**
 * @group Review
 */
class ReviewSubscriberTest extends TestCase
{
    private ReviewSubscriber|MockObject $reviewSubscriberMock;
    private EventManager $eventManager;
    
    private EntityManagerInterface|MockObject $em;
    private ProductReviewCalculator|MockObject $productReviewCalculator;
    private VendorReviewCalculator|MockObject $vendorReviewCalculator;
    
    private ReviewSubscriber $reviewSubscriber;

    use FixturesTrait;

    public function setUp(): void
    {
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->productReviewCalculator = $this->createMock(ProductReviewCalculator::class);
        $this->vendorReviewCalculator = $this->createMock(VendorReviewCalculator::class);

        $this->reviewSubscriber = new ReviewSubscriber($this->em, $this->productReviewCalculator, $this->vendorReviewCalculator);

        $this->reviewSubscriberMock = $this->createMock(ReviewSubscriber::class);
        $this->eventManager = new EventManager;
        $this->reviewSubscriberMock->expects($this->once())
                                    ->method('getSubscribedEvents')
                                    ->willReturn($this->reviewSubscriber->getSubscribedEvents())
                                    ;
        $this->eventManager->addEventSubscriber($this->reviewSubscriberMock);
    }

    public function testPreRemoveIsCalledOnPreRemoveEvent()
    {
        $args = new PreRemoveEventArgs(new Product, $this->em);

        $this->reviewSubscriberMock->expects($this->once())
                                    ->method('preRemove')
                                    ->with($args)
                                    ;

        $this->eventManager->dispatchEvent(
            Events::preRemove,
            $args
        );
    }

    public function testPostRemoveIsCalledOnPostRemoveEvent()
    {
        $args = new PostRemoveEventArgs(new Product, $this->em);

        $this->reviewSubscriberMock->expects($this->once())
                                    ->method('postRemove')
                                    ->with($args)
                                    ;

        $this->eventManager->dispatchEvent(
            Events::postRemove,
            $args
        );
    }

    public function testPostUpdateIsCalledOnPostUpdateEvent()
    {
        $args = new PostUpdateEventArgs(new Review, $this->em);

        $this->reviewSubscriberMock->expects($this->once())
                                    ->method('postUpdate')
                                    ->with($args)
                                    ;

        $this->eventManager->dispatchEvent(
            Events::postUpdate,
            $args
        );
    }

    public function testOnProductPreRemoveProductIsMarkedAsRemoving()
    {
        $product = new Product;
        $this->reviewSubscriber->preRemove(new PreRemoveEventArgs($product, $this->em));

        $this->assertTrue($product->isRemoving());
    }

    public function testOnProductPostRemoveVendorNoteIsUpdated()
    {
        $vendor = new User;
        $product = (new Product)->setVendor($vendor);
        
        $this->vendorReviewCalculator->expects($this->once())->method('calculate')->with($vendor);

        $this->reviewSubscriber->postRemove(new PostRemoveEventArgs($product, $this->em));
    }

    public function testOnProductPostRemoveProductNoteNotUpdated()
    {
        $vendor = new User;
        $product = (new Product)->setVendor($vendor);
        
        $this->productReviewCalculator->expects($this->never())->method('calculate');
        
        $this->reviewSubscriber->postRemove(new PostRemoveEventArgs($product, $this->em));
    }

    public function testOnReviewPostRemoveWithReviewHavingProductBeingRemovingNothingHappens()
    {
        $product = (new Product)->setRemoving(true);
        $review = (new Review)->setProduct($product);
        
        $this->productReviewCalculator->expects($this->never())->method('calculate');
        $this->vendorReviewCalculator->expects($this->never())->method('calculate');

        $this->reviewSubscriber->postRemove(new PostRemoveEventArgs($review, $this->em));
    }

    public function testOnReviewPostRemoveProductAndVendorNotesAreUpdated()
    {
        $vendor = new User;
        $product = (new Product)->setVendor($vendor);
        $review = (new Review)->setProduct($product);
        
        $this->productReviewCalculator->expects($this->once())->method('calculate')->with($product);
        $this->vendorReviewCalculator->expects($this->once())->method('calculate')->with($vendor);

        $this->reviewSubscriber->postRemove(new PostRemoveEventArgs($review, $this->em));
    }

    public function testOnReviewPostUpdateProductAndVendorNotesAreUpdated()
    {
        $vendor = new User;
        $product = (new Product)->setVendor($vendor);
        $review = (new Review)->setProduct($product);

        $this->productReviewCalculator->expects($this->once())->method('calculate')->with($product);
        $this->vendorReviewCalculator->expects($this->once())->method('calculate')->with($vendor);

        $this->reviewSubscriber->postUpdate(new PostUpdateEventArgs($review, $this->em));
    }

    public function testOnProductPostUpdateNothingHappens()
    {
        $product = new Product;
        
        $this->productReviewCalculator->expects($this->never())->method('calculate');
        $this->vendorReviewCalculator->expects($this->never())->method('calculate');

        $this->reviewSubscriber->postUpdate(new PostUpdateEventArgs($product, $this->em));
    }


}