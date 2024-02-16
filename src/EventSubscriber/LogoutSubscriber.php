<?php

namespace App\EventSubscriber;

use App\Config\TextConfig;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Http\Event\LogoutEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class LogoutSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private RequestStack $requestStack,
        private TranslatorInterface $translator
    )
    {

    }

    public function onLogout($event): void
    {
        /** @var FlashBag */
        $flashBag = $this->requestStack->getSession()->getBag('flashes');
        $flashBag->add(
            'success', 
            $this->translator->trans('success.logout')
        );
        //on avertit le front d'un auth event (pour gérer les suppressions dans session storage)
        $flashBag->add('auth_event', 'logout');
    }

    public static function getSubscribedEvents(): array
    {
        return [
            LogoutEvent::class => 'onLogout',
        ];
    }
}
