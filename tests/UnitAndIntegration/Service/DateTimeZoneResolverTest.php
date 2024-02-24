<?php
namespace App\Tests\UnitAndIntegration\Service;

use App\Service\DateTimeZone\DateTimeZoneResolver;
use App\Service\GeolocCountry\GeolocCountryStorage;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class DateTimeZoneResolverTest extends TestCase
{
    private GeolocCountryStorage|MockObject $geolocCountryStorage;

    private DateTimeZoneResolver $dateTimeZoneResolver;

    public function setUp(): void
    {
        $this->geolocCountryStorage = $this->createMock(GeolocCountryStorage::class);

        $this->dateTimeZoneResolver = new DateTimeZoneResolver($this->geolocCountryStorage);
    }

    public function testWithFR()
    {
        $this->geolocCountryStorage->expects($this->once())
                                    ->method('get')
                                    ->willReturn('FR');

        $this->assertEquals(
            'Europe/Paris',
            $this->dateTimeZoneResolver->resolve()
        );
    }

    public function testWithIt()
    {
        $this->geolocCountryStorage->expects($this->once())
                                    ->method('get')
                                    ->willReturn('IT');

        $this->assertEquals(
            'Europe/Rome',
            $this->dateTimeZoneResolver->resolve()
        );
    }

    public function testWithNoGeolocCountryInSession()
    {
        $this->geolocCountryStorage->expects($this->once())
                                    ->method('get')
                                    ->willReturn(null);

        $this->assertEquals(
            'Europe/Paris',
            $this->dateTimeZoneResolver->resolve()
        );
    }

    public function testWithChina()
    {
        $this->geolocCountryStorage->expects($this->once())
                                    ->method('get')
                                    ->willReturn('CN');

        $this->assertEquals(
            'Asia/Shanghai',
            $this->dateTimeZoneResolver->resolve()
        );
    }
}