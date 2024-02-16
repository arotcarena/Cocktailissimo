<?php

namespace App\Security;

use App\Config\SecurityConfig;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Http\Util\TargetPathTrait;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\RememberMeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\SecurityRequestAttributes;
use Symfony\Contracts\Translation\TranslatorInterface;

class AppAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'security_login';


    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private PasswordFailureManager $passwordFailureManager,
        private UserRepository $userRepository,
        private TranslatorInterface $translator
    )
    {

    }

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');

        $request->getSession()->set(Security::LAST_USERNAME, $email);

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($request->request->get('password', '')),
            [
                new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')), new RememberMeBadge('remember_me', $request->request->get('_remember_me')),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        /** @var User */
        if($user = $token->getUser())
        {
            $this->passwordFailureManager->resetCountPasswordFailures($user);
        }

        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        return new RedirectResponse($this->urlGenerator->generate('home', ['_locale' => $request->getLocale()]));
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): Response
    {
        $email = $request->getSession()->get(Security::LAST_USERNAME);
        if($user = $this->userRepository->findOneBy(['email' => $email]))
        {
            $this->passwordFailureManager->handlePasswordFailure($user);

            //si le user est restricted on écrase l'exception classique pour que le message restricted_user s'affiche
            if(in_array('ROLE_USER_RESTRICTED', $user->getRoles()))
            {
                $exception = new AuthenticationException(
                    $this->translator->trans('error.restricted_user'), 
                    SecurityConfig::ERROR_CODE_CUSTOM_AUTH_FAILURE
                ); 
            }
        }
        $request->getSession()->set(SecurityRequestAttributes::AUTHENTICATION_ERROR, $exception);
        return new RedirectResponse($this->urlGenerator->generate('security_login', ['_locale' => $request->getLocale()]));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE, ['_locale' => $request->getLocale()]);
    }


    //pour résoudre l'erreur au login  "attempted to call an undefined method "requestUri" on AppAuthenticator"
    public function requestUri() {
        //
    }
}
