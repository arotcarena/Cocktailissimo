<?php
namespace App\TrafficAnalytics\Admin\Robots\DownCounter;

use Doctrine\ORM\EntityManagerInterface;


class EntityCountRemover
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {
        
    }

    public function removeCount(Object $subject, string $propertyName, $quantityToRemove = 1, $doFlush = false)
    {
        $getter = 'get' . ucfirst($propertyName);
        $setter = 'set' . ucfirst($propertyName);

        if(!method_exists($subject, $getter) || !method_exists($subject, $setter) || $subject->$getter() === null)
        {
            return;
        }

        $newQuantity = $subject->$getter() - $quantityToRemove;

        if($newQuantity <= 0)
        {
            $subject->$setter(null);
        }
        else
        {
            $subject->$setter($newQuantity);
        }

        if($doFlush)
        {
            $this->em->flush();
        }
    }
}