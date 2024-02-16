<?php
namespace App\TrafficAnalytics\Visit;

use App\Entity\Visit;
use App\Helper\DateTimeGenerator;
use Symfony\Component\HttpFoundation\Request;

class VisitCreator
{
    public function __construct(
        private DateTimeGenerator $dateTimeGenerator,
    )
    {
        
    }

    public function create(Request $request): Visit
    {
        $visit = new Visit;
        $visit->setRoute($request->attributes->get('_route'))
                ->setUrl($request->getRequestUri())
                ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
                ;

        return $visit;
    }
}