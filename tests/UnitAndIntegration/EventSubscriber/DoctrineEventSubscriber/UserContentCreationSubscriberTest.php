<?php
namespace App\Tests\UnitAndIntegration\EventSubscriber;

use App\Entity\Answer;
use App\Entity\Comment;
use App\Entity\Product;
use App\Entity\Question;
use App\Entity\Review;
use App\EventSubscriber\DoctrineEventSubscriber\UserContentCreationSubscriber;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Doctrine\Common\EventManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PostPersistEventArgs;
use Doctrine\ORM\Events;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @group TrafficAnalytics
 */
class UserContentCreationSubscriberTest extends TestCase
{
    private UserContentCreationSubscriber $userContentCreationSubscriber;

    private VisitorActionSaver|MockObject $visitorActionSaver;
    private RequestStack|MockObject $requestStack;

    private EventManager $eventManager;


    public function setUp(): void
    {
        $this->visitorActionSaver = $this->createMock(VisitorActionSaver::class);
        $this->requestStack = $this->createMock(RequestStack::class);

        $this->userContentCreationSubscriber = new UserContentCreationSubscriber(
            $this->visitorActionSaver,
            $this->requestStack
        );

        $this->eventManager = new EventManager;
        $this->eventManager->addEventSubscriber($this->userContentCreationSubscriber);
    }

    //lors des tests par exemple le subscriber ne doit pas fonctionner car il n'y a pas de request et ça causerait des erreurs
    public function testWhenNoRequestSubscriberDontWork()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(null);
        $this->assertSubscriberDontWork();
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Product,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    public function testWhenProductCreatedSubscriberDontWork()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(new Request());
        $this->assertSubscriberDontWork();
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Product,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    public function testWhenCommentCreatedVisitorActionSaveTypeComment()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(new Request());
        $this->assertVisitorActionSaverCall('saveTypeComment');
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Comment,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    public function testWhenCommentCreatedVisitorActionSaveTypeQuestion()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(new Request());
        $this->assertVisitorActionSaverCall('saveTypeQuestion');
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Question,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    public function testWhenCommentCreatedVisitorActionSaveTypeReview()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(new Request());
        $this->assertVisitorActionSaverCall('saveTypeReview');
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Review,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    public function testWhenCommentCreatedVisitorActionSaveTypeAnswer()
    {
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(new Request());
        $this->assertVisitorActionSaverCall('saveTypeAnswer');
        $this->eventManager->dispatchEvent(Events::postPersist, new PostPersistEventArgs(
            new Answer,
            $this->createMock(EntityManagerInterface::class)
        ));
    }

    private function assertVisitorActionSaverCall(string $methodCalled)
    {
        $this->visitorActionSaver->expects($this->once())->method($methodCalled);
        foreach(['saveTypeComment', 'saveTypeQuestion', 'saveTypeReview', 'saveTypeAnswer'] as $methodName)
        {
            if($methodName !== $methodCalled)
            {
                $this->visitorActionSaver->expects($this->never())->method($methodName);
            }
        }
    }

    private function assertSubscriberDontWork()
    {
        foreach(['saveTypeComment', 'saveTypeQuestion', 'saveTypeReview', 'saveTypeAnswer'] as $methodName)
        {
            $this->visitorActionSaver->expects($this->never())->method($methodName);
        }
    }
}