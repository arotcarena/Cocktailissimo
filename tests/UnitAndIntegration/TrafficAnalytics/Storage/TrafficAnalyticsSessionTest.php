<?php
namespace App\Tests\UnitAndIntegration\TrafficAnalytics\Storage;

use App\TrafficAnalytics\Storage\TrafficAnalyticsSession;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * @group TrafficAnalytics
 */
class TrafficAnalyticsSessionTest extends TestCase
{
    private Request|MockObject $request;
    private Session|MockObject $session;

    private TrafficAnalyticsSession $trafficAnalyticsSession;

    public function setUp(): void
    {
        $this->request = $this->createMock(Request::class);
        $this->session = $this->createMock(Session::class);

        $this->request->expects($this->any())->method('getSession')->willReturn($this->session);

        $this->trafficAnalyticsSession = new TrafficAnalyticsSession;
    }

    public function testMemoUrlWithEmptyCurrentMemoArrayWillAddUrl()
    {
        $this->session->expects($this->any())->method('get')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS)->willReturn([]);
        $this->request->expects($this->any())->method('getUri')->willReturn('/test-url');

        $this->session->expects($this->once())->method('set')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS, ['/test-url']);
        $this->trafficAnalyticsSession->memoUrl($this->request);
    }
    public function testMemoUrlWithNotEmptyCurrentMemoArrayWillAddUrl()
    {
        $this->session->expects($this->any())->method('get')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS)->willReturn(['/url-one', 'url-two']);
        $this->request->expects($this->any())->method('getUri')->willReturn('/test-url');

        $this->session->expects($this->once())->method('set')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS, ['/url-one', 'url-two', '/test-url']);
        $this->trafficAnalyticsSession->memoUrl($this->request);
    }

    public function testUrlExistWithExistantUrl()
    {
        $this->session->expects($this->any())->method('get')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS)->willReturn(['/url-one', 'url-two']);
        $this->request->expects($this->any())->method('getUri')->willReturn('/url-one');

        $this->assertTrue($this->trafficAnalyticsSession->urlExist($this->request));
    }
    public function testUrlExistWithNotExistantUrl()
    {
        $this->session->expects($this->any())->method('get')->with(TrafficAnalyticsSession::TA_SESS_MEMO_URLS)->willReturn(['/url-one', 'url-two']);
        $this->request->expects($this->any())->method('getUri')->willReturn('/other-url');

        $this->assertFalse($this->trafficAnalyticsSession->urlExist($this->request));
    }


}