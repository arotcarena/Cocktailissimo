<?php
namespace App\Tests\UnitAndIntegration\Service;

use App\Service\ArrayMixer;
use PHPUnit\Framework\TestCase;


/**
 * @group Service
 */
class ArrayMixerTest extends TestCase
{
    private ArrayMixer $arrayMixer;

    public function setUp(): void 
    {
        $this->arrayMixer = new ArrayMixer;
    }

    //DUAL

    public function testDualWithRatioPerfect()
    {
        $result = $this->arrayMixer->dual(
            $this->createArray('a', 7),
            $this->createArray('b', 3),
            2
        );
        $this->assertEquals('a_0', $result[0]);
        $this->assertEquals('a_1', $result[1]);
        $this->assertEquals('b_0', $result[2]);
        $this->assertEquals('a_2', $result[3]);
        $this->assertEquals('a_3', $result[4]);
        $this->assertEquals('b_1', $result[5]);
        $this->assertEquals('a_4', $result[6]);
        $this->assertEquals('a_5', $result[7]);
        $this->assertEquals('b_2', $result[8]);
        $this->assertEquals('a_6', $result[9]);
        $this->isFalse(isset($result[10]));
    }

    public function testDualWithArrayALonger()
    {
        $result = $this->arrayMixer->dual(
            $this->createArray('a', 10),
            $this->createArray('b', 3),
            2
        );
        $this->assertEquals('b_2', $result[8]);
        $this->assertEquals('a_6', $result[9]);
        $this->assertEquals('a_7', $result[10]);
        $this->assertEquals('a_8', $result[11]);
        $this->assertEquals('a_9', $result[12]);
        $this->isFalse(isset($result[13]));
    }

    public function testDualWithArrayBLonger()
    {
        $result = $this->arrayMixer->dual(
            $this->createArray('a', 7),
            $this->createArray('b', 4),
            3
        );
        $this->assertEquals('a_0', $result[0]);
        $this->assertEquals('a_1', $result[1]);
        $this->assertEquals('a_2', $result[2]);
        $this->assertEquals('b_0', $result[3]);
        $this->assertEquals('a_3', $result[4]);
        $this->assertEquals('a_4', $result[5]);
        $this->assertEquals('a_5', $result[6]);
        $this->assertEquals('b_1', $result[7]);
        $this->assertEquals('a_6', $result[8]);
        $this->assertEquals('b_2', $result[9]);
        $this->assertEquals('b_3', $result[10]);
        $this->isFalse(isset($result[11]));
    }

    public function testDualWithRatio1()
    {
        $result = $this->arrayMixer->dual(
            $this->createArray('a', 3),
            $this->createArray('b', 2),
            1
        );
        $this->assertEquals('a_0', $result[0]);
        $this->assertEquals('b_0', $result[1]);
        $this->assertEquals('a_1', $result[2]);
        $this->assertEquals('b_1', $result[3]);
        $this->assertEquals('a_2', $result[4]);
        $this->isFalse(isset($result[5]));
    }


    //  TRIO

    public function testTrio()
    {
        $result = $this->arrayMixer->trio(
            $this->createArray('a', 10),
            1,
            $this->createArray('b', 10),
            1,
            $this->createArray('c', 10),
            2,
            10
        );
        $this->assertEquals([
                'a_0',
                'b_0',
                'a_1',
                'b_1',
                'c_0',
                'a_2',
                'b_2',
                'a_3',
                'b_3',
                'c_1'
            ], 
            $result
        );
    }

    
    //  FIFTY

    public function testFifty()
    {
        $result = $this->arrayMixer->fifty(
            $this->createArray('a', 10),
            $this->createArray('b', 3),
            11
        );
        $this->assertEquals([
                'a_0',
                'b_0',
                'a_1',
                'b_1',
                'a_2',
                'b_2',
                'a_3',
                'a_4',
                'a_5',
                'a_6',
                'a_7'
            ], 
            $result
        );
    }



    private function createArray(string $id, int $count): array 
    {
        $array = [];
        for ($i=0; $i < $count; $i++) { 
            $array[] = $id . '_' . $i;
        }
        return $array;
    }
}