<?php

namespace App\Controller\Security;

use Exception;
use App\Persister\UserPersister;
use App\Form\UserRegistrationType;
use App\Repository\UserRepository;
use App\Security\TokenVerificator;
use App\Repository\PurchaseRepository;
use App\Form\DataModel\UserRegistration;
use Doctrine\ORM\EntityManagerInterface;
use App\Email\Security\ConfirmationEmail;
use App\Entity\User;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class RegistrationController extends AbstractController
{
    public function __construct(
        private UserPersister $userPersister,
        private ConfirmationEmail $confirmationEmail,
        private EntityManagerInterface $em,
        private TokenVerificator $tokenVerificator,
        private UserRepository $userRepository,
        private TokenStorageInterface $tokenStorage,
        private PurchaseRepository $purchaseRepository,
        private TranslatorInterface $translator,
        private VisitorActionSaver $visitorActionSaver
    )
    {

    }


    #[Route(
        [
            'en' => '/en/create-an-account',
            'fr' => '/fr/creer-un-compte',
            'es' => '/es/crear-una-cuenta',
            'it' => '/it/creare-un-account'
        ],
        name: 'security_register', 
    )]
    public function register(Request $request): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('home');
        }
        
        $userRegistration = new UserRegistration;
        $type = $request->request->get('type', 'user'); // pro ou user
        $form = $this->createForm(UserRegistrationType::class, $userRegistration, [
            'type' => $type 
        ]);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $user = $this->userPersister->persist($userRegistration, $type);
            $this->confirmationEmail->send($user, $request->getLocale());
            $this->addFlash('success', $this->translator->trans('success.register', [
                '{email}' => $user->getEmail()
            ]));

            $this->visitorActionSaver->saveTypePreRegister();
            return $this->redirectToRoute('security_login', ['_locale' => $request->getLocale()]);
        }
        if($form->isSubmitted() && !$form->isValid())
        {
            $this->addFlash('danger', $this->translator->trans('error.temporary_failure'));
        }

        return $this->render('security/register.html.twig', [
            'registrationForm' => $form->createView()
        ]);
    }

    #[Route('/{_locale}/security/resend-confirmation-link', name: 'security_askNewEmailConfirmationLink', methods:['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function askNewEmailConfirmationLink(Request $request): Response
    {
        $user = $this->userRepository->find($request->query->get('id'));
        if(!$user)
        {
            throw new Exception('Le lien est invalide');
        }
        $this->confirmationEmail->send($user, $request->getLocale());
        $this->addFlash('success', $this->translator->trans('success.link_sent.re_confirmation', [
            '{email}' => $user->getEmail()
        ]));

        return $this->redirectToRoute('security_login', [
            '_locale' => $request->getLocale()
        ]);
    }

    #[Route('/{_locale}/security/email-confirmation', name: 'security_emailConfirmation', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function emailConfirmation(Request $request): Response
    {
        /** @var User */
        $user = $this->tokenVerificator->resolve($request->query->get('token'), 'confirmationToken', $this->userRepository);
        if($user)
        {
            $user->setConfirmed(true)
                ->setConfirmationToken(null)
                ->setConfirmationTokenExpireAt(null)
                ;
            $this->em->flush();
            $this->addFlash('success', $this->translator->trans('success.email_confirmation'));

            $this->visitorActionSaver->saveTypeRegisterConfirm($user->getRoles());
            return $this->redirectToRoute('security_login', ['_locale' => $request->getLocale()]);
        }
        $this->addFlash('danger', $this->translator->trans('error.invalid_link'));
        return $this->redirectToRoute('home', ['_locale' => $request->getLocale()]);
    }

    #[Route('/{_locale}/security/all-in-one-init', name: 'security_allInOneInit', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function allInOneInit(Request $request): Response
    {
        $user = $this->tokenVerificator->resolve($request->query->get('email_confirmation_token'), 'confirmationToken', $this->userRepository);
        if($user)
        {
            $user->setConfirmed(true)
                ->setConfirmationToken(null)
                ->setConfirmationTokenExpireAt(null)
                ;
            $this->em->flush();
            $this->addFlash('success', $this->translator->trans('success.all_in_one_init'));
            return $this->redirectToRoute('security_resetPassword', [
                '_locale' => $request->getLocale(),
                'token' => $request->query->get('reset_password_token')
            ]);
        }
        $this->addFlash('danger', $this->translator->trans('error.invalidLink'));
        return $this->redirectToRoute('home', ['_locale' => $request->getLocale()]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route(
        [
            'en' => '/en/delete-my-account',
            'fr' => '/fr/supprimer-mon-compte',
            'es' => '/es/borrar-mi-cuenta',
            'it' => '/it/cancella-il-mio-account'
        ],
        name: 'security_accountDelete', 
        methods: ['POST', 'GET']
    )]
    public function accountDelete(Request $request): Response
    {
        if($this->isGranted('ROLE_VENDOR'))
        {
            $this->addFlash('info', $this->translator->trans('warning.delete_vendor_account'));
            return $this->redirectToRoute('account_index', ['_locale' => $request->getLocale()]);
        }
        if($request->getMethod() === 'POST')
        {
            $token = $request->request->get('token');
            if (!$this->isCsrfTokenValid('delete-user', $token)) 
            {
                throw new Exception($this->translator->trans('error.temporary_failure'));
            }
            /** @var User */
            $user = $this->getUser();
            //logout
            $this->tokenStorage->setToken(null);
            //pour que le front supprime la clef light_user dans sessionStorage
            $this->addFlash('auth_event', 'logout');
            //suppression du user
            $this->em->remove($user);
            $this->em->flush();
            $this->addFlash('success', $this->translator->trans('success.delete_account'));
            //on supprime le target qui se met du fait qu'on est déconnecté et que ce controller est sous auth
            $request->getSession()->remove('_security.main.target_path');

            $this->visitorActionSaver->saveTypeDeleteAccount();
            
            return $this->redirectToRoute('home', ['_locale' => $request->getLocale()]);
        }
        return $this->render('security/account_delete.html.twig');
    }
}
