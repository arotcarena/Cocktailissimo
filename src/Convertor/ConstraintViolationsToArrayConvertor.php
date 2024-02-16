<?php
namespace App\Convertor;

use Symfony\Component\Validator\ConstraintViolationList;

class ConstraintViolationsToArrayConvertor
{
    /**
     * @param ConstraintViolationList|ConstraintViolationList[] $constraintViolations
     * @return array
     */
    public function convert($constraintViolations): array 
    {
        if($constraintViolations instanceof ConstraintViolationList)
        {
            $errors = [];
            /** @var ConstraintViolation $violation */
            foreach($constraintViolations as $violation)
            {
                $errors[$violation->getPropertyPath()] = $violation->getMessage(); 
            }
            return $errors;
        }
        return $this->convertAll($constraintViolations);
    }

    /**
     * @param ConstraintViolationList[] $cvlArray
     */
    private function convertAll($cvlArray): array 
    {
        $errors = [];
        /** @var ConstraintViolationList $constraintViolations */
        foreach($cvlArray as $constraintViolations)
        {
            foreach($constraintViolations as $violation)
            {
                $errors[$violation->getPropertyPath()] = $violation->getMessage(); 
            }
        }
        return $errors;
    }
}