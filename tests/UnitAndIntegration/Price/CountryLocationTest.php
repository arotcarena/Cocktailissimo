<?php
namespace App\Tests\UnitAndIntegration\Price;

use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\User;
use App\Price\CountryLocation;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * @group price
 */
class CountryLocationTest extends TestCase
{
    private Security|MockObject $security;

    private RequestStack|MockObject $requestStack;

    private CountryLocation $countryLocation;


    public function setUp(): void
    {
        $this->security = $this->createMock(Security::class);
        $this->requestStack = $this->createMock(RequestStack::class);
        $this->countryLocation = new CountryLocation($this->requestStack, $this->security);
    }

    public function testWithProUserParam()
    {
        $user = (new User)
                ->setCompany(
                    (new Company)
                    ->setCountry('IT')
                );

        $this->assertEquals('IT', $this->countryLocation->getCountry($user));
    }
    public function testWithConsumerUserParam()
    {
        $user = new User;

        /** @var MockObject|SessionInterface */
        $session = $this->createMock(SessionInterface::class);
        $this->requestStack->expects($this->once())
                            ->method('getSession')
                            ->willReturn($session);

        $session->expects($this->once())
                ->method('get')
                ->with('country')
                ->willReturn('BE')
                ;

        $this->assertEquals('BE', $this->countryLocation->getCountry());
    }
    public function testWithNoUserParamButProUserLogged()
    {
        $user = (new User)
                ->setCompany(
                    (new Company)
                    ->setCountry('ES')
                );

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user)
                        ;

        $this->assertEquals('ES', $this->countryLocation->getCountry());
    }
    public function testWithNoUserParamButConsumerUserLogged()
    {
        $user = new User;

        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn($user)
                        ;
        
        /** @var MockObject|SessionInterface */
        $session = $this->createMock(SessionInterface::class);
        $this->requestStack->expects($this->once())
                            ->method('getSession')
                            ->willReturn($session);

        $session->expects($this->once())
                ->method('get')
                ->with('country')
                ->willReturn('DE')
                ;

        $this->assertEquals('DE', $this->countryLocation->getCountry());
    }
    public function testWithNoUserLoggedButWithCountryValueInSession()
    {
        $this->security->expects($this->once())
                        ->method('getUser')
                        ->willReturn(null)
                        ;
        
        /** @var MockObject|SessionInterface */
        $session = $this->createMock(SessionInterface::class);
        $this->requestStack->expects($this->once())
                            ->method('getSession')
                            ->willReturn($session);

        $session->expects($this->once())
                ->method('get')
                ->with('country')
                ->willReturn('CH')
                ;

        $this->assertEquals('CH', $this->countryLocation->getCountry());
    }

}