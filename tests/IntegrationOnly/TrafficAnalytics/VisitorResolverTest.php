<?php
namespace App\Tests\IntegrationOnly\TrafficAnalytics;

use App\DataFixtures\Tests\VisitTestFixtures;
use App\Entity\Visitor;
use App\Helper\UniqueStringGenerator;
use App\Repository\VisitorRepository;
use App\Service\GeolocCountry\GeolocCountryStorage;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\Storage\TrafficAnalyticsCookie;
use App\TrafficAnalytics\VisitorResolver;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * @group TrafficAnalytics
 */
class VisitorResolverTest extends KernelTestCase
{
    use FixturesTrait;

    private VisitorResolver $visitorResolver;

    private TrafficAnalyticsCookie|MockObject $taCookie;
    private RequestStack|MockObject $requestStack;
    private UniqueStringGenerator|MockObject $uniqueStringGenerator;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->taCookie = $this->createMock(TrafficAnalyticsCookie::class);
        $this->requestStack = $this->createMock(RequestStack::class);
        $this->requestStack->expects($this->any())->method('getCurrentRequest')->willReturn(
            new Request([], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent'])
        );
        $this->uniqueStringGenerator = $this->createMock(UniqueStringGenerator::class);

        /** @var GeolocCountryStorage|MockObject */
        $geolocCountryStorage = $this->createMock(GeolocCountryStorage::class);
        $geolocCountryStorage->expects($this->any())->method('get')->willReturn('FR');

        $this->visitorResolver = new VisitorResolver(
            static::getContainer()->get(VisitorRepository::class),
            $this->taCookie,
            $this->uniqueStringGenerator,
            static::getContainer()->get(EntityManagerInterface::class),
            $this->requestStack,
            $geolocCountryStorage
        );

        $this->loadFixtures([VisitTestFixtures::class]);
    }

    //getVisitor
    public function testGetVisitorWithTaCookieWillReturnAssociatedVisitorFromDatabase()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_1');

        $visitor = $this->visitorResolver->getVisitor();

        $this->assertEquals('visitor_1', $visitor->getCookieId());
    }
    public function testGetVisitorWithoutTaCookieWillReturnNull()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn(null);

        $this->assertNull($this->visitorResolver->getVisitor());
    }
    public function testGetVisitorWithInvalidTaCookieWillReturnNull()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn('invalid_visitor_cookie_id');

        $this->assertNull($this->visitorResolver->getVisitor());
    }

    //createVisitor
    public function testCreateVisitorReturnVisitor()
    {
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('string');

        $visitor = $this->visitorResolver->createVisitor(new Request([], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent']));

        $this->assertInstanceOf(Visitor::class, $visitor);
    }
    public function testCreateVisitorSetCorrectTACookieAssociatedWithReturnedVisitor()
    {
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('ta_cookie_test');
        
        $visitor = $this->visitorResolver->createVisitor(new Request([], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent']));

        $this->assertEquals('ta_cookie_test', $visitor->getCookieId());
    }
    public function testCreateVisitorSetCorrectOrigin()
    {
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('string');
        $visitor = $this->visitorResolver->createVisitor(new Request(['origin' => 'fb'], [], ['_locale' => 'en'], [], [], ['HTTP_USER_AGENT' => 'user_agent']));

        $this->assertEquals('fb', $visitor->getOrigin());
    }

    //resolve
    public function testResolveWithTACookieWillReturnVisitorAssociatedToTACookieId()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn('visitor_1');

        $visitor = $this->visitorResolver->resolve();

        $this->assertEquals('visitor_1', $visitor->getCookieId());
    }
    public function testResolveWithoutTACookieWillReturnNewVisitor()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn(null);
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('ta_cookie_test_id');

        $visitor = $this->visitorResolver->resolve();

        $this->assertEquals('ta_cookie_test_id', $visitor->getCookieId());
    }
    public function testResolveWithoutTACookieWillSetTACookieAssociatedToNewVisitor()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn(null);
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('ta_cookie_test_id');
        
        $this->taCookie->expects($this->once())->method('set')->with('ta_cookie_test_id');
        $this->visitorResolver->resolve();
    }
    public function testResolveWithoutTACookieWillPersistNewVisitor()
    {
        $this->taCookie->expects($this->any())->method('get')->willReturn(null);
        $this->uniqueStringGenerator->expects($this->once())->method('generate')->willReturn('ta_cookie_test_id');

        $this->visitorResolver->resolve();
        $persistedVisitor = $this->findEntity(VisitorRepository::class, ['cookieId' => 'ta_cookie_test_id']);

        $this->assertNotNull($persistedVisitor);
    }
}