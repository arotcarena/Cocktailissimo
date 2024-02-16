<?php
namespace App\Tests\IntegrationOnly\TrafficAnalytics\Visit;

use App\DataFixtures\Tests\VisitTestFixtures;
use App\Helper\DateTimeGenerator;
use App\Helper\UniqueStringGenerator;
use App\Helper\UrlRefExtractor;
use App\Repository\ArticleRepository;
use App\Repository\CompanyRepository;
use App\Repository\PackagingRepository;
use App\Repository\RecipeRepository;
use App\Repository\VisitorRepository;
use App\Repository\VisitRepository;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use App\TrafficAnalytics\Counter\EntityViewCounter;
use App\TrafficAnalytics\Storage\TrafficAnalyticsCookie;
use App\TrafficAnalytics\Storage\TrafficAnalyticsSession;
use App\TrafficAnalytics\Visit\VisitCreator;
use App\TrafficAnalytics\Visit\VisitSaver;
use App\TrafficAnalytics\VisitorResolver;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @group TrafficAnalytics
 */
class VisitSaverTest extends KernelTestCase
{
    use FixturesTrait;

    private VisitSaver $visitSaver;

    private TrafficAnalyticsCookie|MockObject $taCookie;
    private TrafficAnalyticsSession|MockObject $taSession;
    private Security|MockObject $security;

    private VisitRepository $visitRepository;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $container = static::getContainer();

        $this->visitRepository = $container->get(VisitRepository::class);

        $requestStack = $this->createMock(RequestStack::class);
        $request = new Request([], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $requestStack->expects($this->any())->method('getCurrentRequest')->willReturn($request);
        
        $this->taCookie = $this->createMock(TrafficAnalyticsCookie::class);
        $this->taSession = $this->createMock(TrafficAnalyticsSession::class);
        $this->security = $this->createMock(Security::class);

        $em = $container->get(EntityManagerInterface::class);

        $this->visitSaver = new VisitSaver(
            $this->taSession,
            $em,
            new VisitCreator(new DateTimeGenerator),
            new VisitorResolver(
                $container->get(VisitorRepository::class),
                $this->taCookie,
                new UniqueStringGenerator,
                new DateTimeGenerator,
                $em,
                $requestStack
            ),
            new EntityViewCounter(
                $container->get(PackagingRepository::class),
                $container->get(RecipeRepository::class),
                $container->get(ArticleRepository::class),
                $container->get(CompanyRepository::class),
                new UrlRefExtractor,
                new EntityCountAdder($em)
            ),
            $this->security
        );

        $this->loadFixtures([VisitTestFixtures::class]);
    }

    public function testWithUrlAlreadyMemorisedInSessionNoVisitIsCreated()
    {
        $countVisits = $this->visitRepository->count([]);

        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'api_address_index'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(true);

        $this->visitSaver->handleRequest(
            new Request([], [], ['_route' => 'api_address_index'], [], [], ['HTTP_USER_AGENT' => 'user_agent'])
        );
        
        $updatedCountVisits = $this->visitRepository->count([]);
        $this->assertEquals($countVisits, $updatedCountVisits);
    }
    public function testWithRequestedRouteNotInTrackedRoutesNoVisitIsCreated()
    {
        $countVisits = $this->visitRepository->count([]);

        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'api_address_index'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $updatedCountVisits = $this->visitRepository->count([]);
        $this->assertEquals($countVisits, $updatedCountVisits);
    }
    public function tetsWithAdminAuthenticatedNoVisitIsCreated()
    {
        $this->security->expects($this->once())->method('isGranted')->with('ROLE_ADMIN')->willReturn(true);
        $countVisits = $this->visitRepository->count([]);

        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'product_show'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $updatedCountVisits = $this->visitRepository->count([]);
        $this->assertEquals($countVisits + 1, $updatedCountVisits);
    }
    public function testVisitIsCreated()
    {
        $countVisits = $this->visitRepository->count([]);

        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'product_show'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $updatedCountVisits = $this->visitRepository->count([]);
        $this->assertEquals($countVisits + 1, $updatedCountVisits);
    }

    public function testWithTACookieVisitWillContainsCookieAssociatedVisitor()
    {
        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'recipe_subCategoryShow'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $visit = $this->visitRepository->findOneBy(['route' => 'recipe_subCategoryShow']);
        $this->assertEquals('visitor_2', $visit->getVisitor()->getCookieId());
    }

    public function testWithoutTACookieVisitWillContainsNewVisitor()
    {
        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn(null);

        $request = new Request([], [], ['_route' => 'recipe_subCategoryShow'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $visit = $this->visitRepository->findOneBy(['route' => 'recipe_subCategoryShow']);
        $this->assertStringNotContainsString(
            'visitor_', $visit->getVisitor()->getCookieId()
        );
    }

    public function testVisitCreatedContainsCorrectRoute()
    {
        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'article_subCategoryShow'], [], [], ['HTTP_USER_AGENT' => 'user_agent']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $visit = $this->visitRepository->findOneBy(['route' => 'article_subCategoryShow']);
        $this->assertEquals('article_subCategoryShow', $visit->getRoute());
    }

    public function testVisitCreatedContainsCorrectUrl()
    {
        //on part du principe qu'un cookie TA est présent qui contient l'id du visitor_2 (qui n'a ni visite ni visitorAction)
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_2');

        $request = new Request([], [], ['_route' => 'article_subCategoryShow'], [], [], ['HTTP_USER_AGENT' => 'user_agent', 'REQUEST_URI' => '/test-url']);
        $this->taSession->expects($this->any())->method('urlExist')->with($request)->willReturn(false);

        $this->visitSaver->handleRequest($request);

        $visit = $this->visitRepository->findOneBy(['route' => 'article_subCategoryShow']);
        $this->assertEquals('/test-url', $visit->getUrl());
    }
}