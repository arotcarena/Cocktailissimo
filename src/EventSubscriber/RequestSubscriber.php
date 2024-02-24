<?php

namespace App\EventSubscriber;

use App\Email\Admin\AdminNotificationEmail;
use App\Service\GeolocCountry\GeolocCountryService;
use App\TrafficAnalytics\Visit\VisitSaver;
use Exception;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class RequestSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private GeolocCountryService $geolocCountryService,
        private VisitSaver $visitSaver,
        private AdminNotificationEmail $adminNotificationEmail
    )
    {
        
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        try
        {
            $this->geolocCountryService->handleRequest($request);
            $this->visitSaver->handleRequest($request);
        }
        catch(Exception $e)
        {
            $this->adminNotificationEmail->send('Erreur dans gelocCountryService ou visitSaver (dans RequestSubscriber). Message : ' . $e->getMessage() . ', Stack trace : ' . $e->getTraceAsString());
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}
