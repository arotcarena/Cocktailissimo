<?php
namespace App\TrafficAnalytics\Counter;

use Doctrine\ORM\EntityManagerInterface;
use Exception;

class EntityCountAdder
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {
        
    }

    public function addCount(Object $subject, string $propertyName, $quantityToAdd = 1, $doFlush = false)
    {
        $getter = 'get' . ucfirst($propertyName);
        $setter = 'set' . ucfirst($propertyName);

        if(!method_exists($subject, $getter) || !method_exists($subject, $setter))
        {
            return;
        }

        if($subject->$getter() === null)
        {
            $subject->$setter($quantityToAdd);
        }
        else
        {
            $subject->$setter($subject->$getter() + $quantityToAdd);
        }

        if($doFlush)
        {
            $this->em->flush();
        }
    }
}