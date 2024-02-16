<?php
namespace App\Tests\UnitAndIntegration\Price;

use App\Entity\Packaging;
use App\Price\BusinessOrConsumerPriceResolver;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\SecurityBundle\Security;

/**
 * @group price
 */
class BusinessOrConsumerPriceResolverTest extends TestCase
{
    private MockObject|Security $security;

    private BusinessOrConsumerPriceResolver $businessOrConsumerPriceResolver;

    public function setUp(): void
    {
        $this->security = $this->createMock(Security::class);
        $this->businessOrConsumerPriceResolver = new BusinessOrConsumerPriceResolver($this->security);
    }

    public function testResolveWithProUser()
    {
        $this->security->expects($this->once())
                        ->method('isGranted')
                        ->with('ROLE_PRO')
                        ->willReturn(true);

        $this->assertEquals(
            100,
            $this->businessOrConsumerPriceResolver->resolve($this->createPackaging())
        );
    }

    public function testResolveWithConsumerUser()
    {
        $this->security->expects($this->once())
                        ->method('isGranted')
                        ->with('ROLE_PRO')
                        ->willReturn(false);

        $this->assertEquals(
            200,
            $this->businessOrConsumerPriceResolver->resolve($this->createPackaging())
        );
    }


    private function createPackaging(): Packaging
    {
        return (new Packaging)
                ->setConsumerPriceHT(200)
                ->setBusinessPriceHT(100)
                ;
    }
}