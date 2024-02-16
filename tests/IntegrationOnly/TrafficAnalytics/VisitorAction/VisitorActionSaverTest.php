<?php
namespace App\Tests\IntegrationOnly\TrafficAnalytics\VisitorAction;

use App\Config\SiteConfig;
use App\Convertor\Admin\AnonymousPurchaseToArrayConvertor;
use App\Convertor\CartToArrayConvertor;
use App\DataFixtures\Tests\AnswerTestFixtures;
use App\DataFixtures\Tests\CartTestFixtures;
use App\DataFixtures\Tests\CommentTestFixtures;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\QuestionTestFixtures;
use App\DataFixtures\Tests\ReviewTestFixtures;
use App\DataFixtures\Tests\VisitTestFixtures;
use App\Entity\Visitor;
use App\Entity\VisitorAction;
use App\Helper\DateTimeGenerator;
use App\Helper\MainRoleResolver;
use App\Helper\UniqueStringGenerator;
use App\Repository\AnswerRepository;
use App\Repository\CartRepository;
use App\Repository\CommentRepository;
use App\Repository\PurchaseRepository;
use App\Repository\QuestionRepository;
use App\Repository\ReviewRepository;
use App\Repository\VisitorActionRepository;
use App\Repository\VisitorRepository;
use App\Tests\Utils\Factory\CartTotalsHydratorFactoryTrait;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use App\TrafficAnalytics\Storage\TrafficAnalyticsCookie;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use App\TrafficAnalytics\VisitorResolver;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @group TrafficAnalytics
 */
class VisitorActionSaverTest extends KernelTestCase
{
    use FixturesTrait;

    use CartTotalsHydratorFactoryTrait;

    private VisitorActionSaver $visitorActionSaver;
    
    private TrafficAnalyticsCookie|MockObject $taCookie;

    
    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $container = static::getContainer();

        $requestStack = $this->createMock(RequestStack::class);
        $request = new Request([], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $requestStack->expects($this->any())->method('getCurrentRequest')->willReturn($request);
        
        $this->taCookie = $this->createMock(TrafficAnalyticsCookie::class);

        /** @var EntityManagerInterface */
        $em = $container->get(EntityManagerInterface::class);

        $visitorResolver = new VisitorResolver(
            $container->get(VisitorRepository::class),
            $this->taCookie,
            new UniqueStringGenerator,
            new DateTimeGenerator,
            $em,
            $requestStack
        );

        $this->visitorActionSaver = new VisitorActionSaver(
            $visitorResolver,
            $em,
            new EntityCountAdder($em),
            new DateTimeGenerator,
            new MainRoleResolver
        );

        $this->loadFixtures([
            VisitTestFixtures::class, 
            CartTestFixtures::class, 
            PurchaseTestFixtures::class, 
            CommentTestFixtures::class, 
            QuestionTestFixtures::class,
            ReviewTestFixtures::class,
            AnswerTestFixtures::class
        ]);
    }

    //main tests
    public function testSaveWithTACookieWillAttachVisitorActionToCorrectVisitor()
    {
        $this->taCookie->expects($this->once())->method('get')->willReturn('visitor_2'); //Visitor without visitorAction

        $this->visitorActionSaver->saveTypePreRegister();

        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        
        $this->assertEquals(1, $visitor->getActions()->count());
        /** @var VisitorAction */
        $visitorAction = $visitor->getActions()->get(0);
        $this->assertEquals(VisitorAction::TYPE_PRE_REGISTER, $visitorAction->getType());
    }
    public function testSaveWithoutTACookieWillAttachVisitorActionToNewVisitor()
    {
        $this->taCookie->expects($this->once())->method('get')->willReturn(null);

        $this->visitorActionSaver->saveTypeDeleteAccount();

        /** @var VisitorAction */
        $visitorAction = $this->findEntity(VisitorActionRepository::class, ['type' => VisitorAction::TYPE_DELETE_ACCOUNT]);

        $visitor = $visitorAction->getVisitor();

        $this->assertStringNotContainsString('visitor_', $visitor->getCookieId()); // tous les visitors des fixtures ont cookieId du type "visitor_..."
    }
    public function testBothSaveTypeRegisterConfirmAndSaveTypeDeleteAccountSetCorrectRoleToVisitor()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2'); //Visitor without visitorAction

        //ROLE_ADMIN
        $this->visitorActionSaver->saveTypeRegisterConfirm(['ROLE_USER', 'ROLE_ADMIN']);
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertEquals('ROLE_ADMIN', $visitor->getRole());

        $this->visitorActionSaver->saveTypeDeleteAccount();
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertNull($visitor->getRole());

        //ROLE_VENDOR
        $this->visitorActionSaver->saveTypeRegisterConfirm(['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR']);
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertEquals('ROLE_VENDOR', $visitor->getRole());

        $this->visitorActionSaver->saveTypeDeleteAccount();
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertNull($visitor->getRole());

        //ROLE_USER
        $this->visitorActionSaver->saveTypeRegisterConfirm(['ROLE_USER']);
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertEquals('ROLE_USER', $visitor->getRole());

        $this->visitorActionSaver->saveTypeDeleteAccount();
        /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        $this->assertNull($visitor->getRole());
    }

    //test de chaque type
    public function testSaveTypePreRegister()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_PRE_REGISTER, 'saveTypePreRegister');
    }
    public function testSaveTypeRegisterConfirm()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_REGISTER_CONFIRM, 'saveTypeRegisterConfirm', ['ROLE_USER']);
    }
    public function testSaveTypeDeleteAccount()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_DELETE_ACCOUNT, 'saveTypeDeleteAccount');
    }
    public function testSaveTypeCartCreate()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_CART_CREATE, 'saveTypeCartCreate', [121 => 1]);
    }
    public function testSaveTypeCartChange()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_CART_CHANGE, 'saveTypeCartChange', [121 => 1]);
    }
    public function testSaveTypeCheckoutStart()
    {
        $cart = $this->findEntity(CartRepository::class);
        $cartTotalsHydrator = $this->createCartTotalsHydrator(200, SiteConfig::DEFAULT_GEOLOCATION_COUNTRY);
        $cartTotalsHydrator->hydrate($cart);
        $this->assertSaveCorrectType(VisitorAction::TYPE_CHECKOUT_START, 'saveTypeCheckoutStart', $cart);
    }
    public function testSaveTypeCheckoutPreparePayment()
    {
        $this->assertSaveCorrectType(VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT, 'saveTypeCheckoutPreparePayment', 10000);
    }
    public function testSaveTypePurchasePaid()
    {
        $purchase = $this->findEntity(PurchaseRepository::class);
        $this->assertSaveCorrectType(VisitorAction::TYPE_PURCHASE_PAID, 'saveTypePurchasePaid', $purchase);
    }
    public function testSaveTypeComment()
    {
        $comment = $this->findEntity(CommentRepository::class);
        $this->assertSaveCorrectType(VisitorAction::TYPE_COMMENT, 'saveTypeComment', $comment);
    }
    public function testSaveTypeQuestion()
    {
        $question = $this->findEntity(QuestionRepository::class);
        $this->assertSaveCorrectType(VisitorAction::TYPE_QUESTION, 'saveTypeQuestion', $question);
    }
    public function testSaveTypeReview()
    {
        $review = $this->findEntity(ReviewRepository::class);
        $this->assertSaveCorrectType(VisitorAction::TYPE_REVIEW, 'saveTypeReview', $review);
    }
    public function testSaveTypeAnswer()
    {
        $answer = $this->findEntity(AnswerRepository::class);
        $this->assertSaveCorrectType(VisitorAction::TYPE_ANSWER, 'saveTypeAnswer', $answer);
    }

    private function assertSaveCorrectType(string $expectedType, string $methodName, mixed $param = null)
    {
        $this->taCookie->expects($this->once())->method('get')->willReturn('visitor_2'); //Visitor without visitorAction

        if($param)
        {
            $this->visitorActionSaver->$methodName($param);
        }
        else
        {
            $this->visitorActionSaver->$methodName();
        }

         /** @var Visitor */
        $visitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'visitor_2']);
        
        $this->assertEquals(1, $visitor->getActions()->count(), 'Aucune visitorAction n\'a été sauvegardée');
        /** @var VisitorAction */
        $visitorAction = $visitor->getActions()->get(0);

        $this->assertEquals($expectedType, $visitorAction->getType());
    }
}