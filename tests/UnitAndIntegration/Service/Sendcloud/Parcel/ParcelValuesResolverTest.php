<?php
namespace App\Service\Sendcloud\Parcel;

use PHPUnit\Framework\TestCase;


/**
 * @group Purchase
 */
class ParcelValuesResolverTest extends TestCase
{

    public function testResolveHouseNumber()
    {
        $parcelValuesResolver = new ParcelValuesResolver;

        $this->assertEquals(
            '22', 
            $parcelValuesResolver->resolveHouseNumber('22 route du travail')
        );
        $this->assertEquals(
            '22bis', 
            $parcelValuesResolver->resolveHouseNumber('22bis route du travail')
        );
        $this->assertEquals(
            '22', 
            $parcelValuesResolver->resolveHouseNumber('22 bis route du travail')
        );
        $this->assertEquals(
            null, 
            $parcelValuesResolver->resolveHouseNumber('Route du travail')
        );
    }
}