<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Helper\PackagingListPositionHydrator;
use PHPUnit\Framework\TestCase;

class PackagingListPositionHydratorTest extends TestCase
{
    public function testHydrateSetListPosition1ToBasePackaging()
    {
        $packagingChoicesData = [
            (object)[
                'id' => 1,
                'base' => false
            ],
            (object)[
                'id' => 2,
                'base' => true
            ],
            (object)[
                'id' => 3,
                'base' => false
            ]
        ];

        (new PackagingListPositionHydrator)->hydrate($packagingChoicesData);

        foreach($packagingChoicesData as $pc)
        {
            if($pc->id === 2)
            {
                $this->assertEquals(1, $pc->listPosition);
            }
            else
            {
                $this->assertTrue($pc->listPosition === 2 || $pc->listPosition === 3);
            }
        }
    }

}