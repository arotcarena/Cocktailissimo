<?php

namespace App\EventSubscriber;

use App\Cart\CartService;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBag;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class LoginSuccessSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private RequestStack $requestStack,
        private CartService $cartService,
        private TranslatorInterface $translator,
        private Security $security 
    )
    {

    }

    public function onLoginSuccess(LoginSuccessEvent $event): void
    {
        /** @var FlashBag */
        $flashBag = $this->requestStack->getSession()->getBag('flashes');

        if($this->security->isGranted('IS_AUTHENTICATED_FULLY')) // s'il s'agit d'une reconnexion auto grâce au cookie remember me, on affiche pas l'alert success
        {
            $flashBag->add(
                'success', 
                $this->translator->trans('success.login')    
            );
        }
        //on avertit le front d'un auth event (pour gérer les suppressions dans session storage)
        $flashBag->add('auth_event', 'login');

        $this->cartService->onLoginUpdate($event->getUser());
    }

    public static function getSubscribedEvents(): array
    {
        return [
            LoginSuccessEvent::class => 'onLoginSuccess',
        ];
    }
}
