<?php
namespace App\TrafficAnalytics\Visit;

use App\Entity\Visit;
use DateTimeImmutable;
use Symfony\Component\HttpFoundation\Request;

class VisitCreator
{
    public function create(Request $request): Visit
    {
        $visit = new Visit;
        $visit->setRoute($request->attributes->get('_route'))
                ->setUrl($request->getRequestUri())
                ->setCreatedAt(new DateTimeImmutable())
                ;

        return $visit;
    }
}