<?php
namespace App\TrafficAnalytics\Admin\Robots;

use App\Entity\Visit;
use App\Entity\Visitor;
use App\TrafficAnalytics\Admin\Robots\DownCounter\EntityViewRemover;

class RobotsViewsRemover
{
    public function __construct(
        private EntityViewRemover $entityViewRemover
    )
    {
        
    }

    /**
     * @param Visitor[] $visitors (robots)
     */
    public function handleRobotsRemove(array $visitors): void
    {
        /** @var Visit[] */
        $visits = [];
        foreach($visitors as $visitor)
        {
            $visits = array_merge($visits, $visitor->getVisits()->toArray());
        }
        foreach($visits as $visit)
        {
            $this->entityViewRemover->handleVisitRemove($visit);
        }
    }
}