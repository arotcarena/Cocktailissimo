<?php

namespace App\EventSubscriber;

use App\Email\Admin\AdminExceptionEmail;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private AdminExceptionEmail $adminExceptionEmail
    )
    {
        
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        $error = $event->getThrowable();
        if(!str_contains($error->getMessage(), 'o route found for'))
        {
            //DELETE_FOR_PROD // à décommenter pour prod 
            $this->adminExceptionEmail->send($error);
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException',
        ];
    }
}
