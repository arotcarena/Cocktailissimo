<?php

namespace App\EventSubscriber;

use App\Service\GeolocCountry\GeolocCountryService;
use App\TrafficAnalytics\Visit\VisitSaver;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class RequestSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private GeolocCountryService $geolocCountryService,
        private VisitSaver $visitSaver
    )
    {
        
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        $this->geolocCountryService->handleRequest($request);

        $this->visitSaver->handleRequest($request);
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}
