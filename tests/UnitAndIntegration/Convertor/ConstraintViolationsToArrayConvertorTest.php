<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Convertor\ConstraintViolationsToArrayConvertor;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationList;

/**
 * @group Convertor
 */
class ConstraintViolationsToArrayConvertorTest extends KernelTestCase
{
    public function test()
    {
        $constraintViolations = new ConstraintViolationList([
            new ConstraintViolation('constraint_1_message', '', [], '', 'property-1', ''),
            new ConstraintViolation('constraint_2_message', '', [], '', 'property-2', ''),
            new ConstraintViolation('constraint_3_message', '', [], '', 'property-3', '')
        ]);

        $constraintViolationsConvertor = new ConstraintViolationsToArrayConvertor;
        $returnArray = $constraintViolationsConvertor->convert($constraintViolations);

        $this->assertEquals([
            'property-1' => 'constraint_1_message',
            'property-2' => 'constraint_2_message',
            'property-3' => 'constraint_3_message',
        ], $returnArray);
    }
}