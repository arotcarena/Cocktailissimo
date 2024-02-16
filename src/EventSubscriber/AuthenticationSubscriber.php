<?php
namespace App\EventSubscriber;

use App\Config\SecurityConfig;
use App\Entity\User;
use App\Config\SiteConfig;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\Exception\AuthenticationException;




class AuthenticationSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private TranslatorInterface $translator,
        private UrlGeneratorInterface $urlGenerator,
        private RequestStack $requestStack
    )
    {

    }

    public function onAuthentication(AuthenticationSuccessEvent $event): void
    {
        /** @var User */
        $user = $event->getAuthenticationToken()->getUser();
        if(!$user->isConfirmed())
        {
            $askNewLinkPath = $this->urlGenerator->generate('security_askNewEmailConfirmationLink', [
                '_locale' => $this->requestStack->getCurrentRequest()->getLocale()
            ]).'?id='.$user->getId();

            $message = $this->translator->trans('error.email_not_confirmed', [
                '{ask_new_link_path}' => $askNewLinkPath,
                '{email}' => $user->getEmail()
            ]);

            throw new AuthenticationException(
                $message,
                SecurityConfig::ERROR_CODE_CUSTOM_AUTH_FAILURE
            );
        }
        if(in_array(SiteConfig::ROLE_USER_RESTRICTED, $user->getRoles()))
        {
            throw new AuthenticationException(
                $this->translator->trans('error.restricted_user'), 
                SecurityConfig::ERROR_CODE_CUSTOM_AUTH_FAILURE
            );
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AuthenticationSuccessEvent::class => 'onAuthentication',
        ];
    }
}
