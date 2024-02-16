<?php

namespace App\Controller\Security;

use App\Config\SecurityConfig;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Contracts\Translation\TranslatorInterface;

class LoginController extends AbstractController
{
    public function __construct(
        private TranslatorInterface $translator
    )
    {

    }

    #[Route([
        'en' => '/en/login',
        'fr' => '/fr/connexion',
        'es' => '/es/iniciar-sesión',
        'it' => '/it/login'
    ], name: 'security_login')]
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('home', [
                '_locale' => $request->getLocale()
            ]);
        }
        $errorMessage = null;
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        if($error)
        {
            $errorMessage = $error->getCode() === SecurityConfig::ERROR_CODE_CUSTOM_AUTH_FAILURE ? $error->getMessage(): $this->translator->trans('error.invalid_credentials');
            $this->addFlash('danger', $errorMessage);
        }

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername]);
    }

    #[Route('/{_locale}/logout', name: 'security_logout', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function logout(): void
    {

    }
}
