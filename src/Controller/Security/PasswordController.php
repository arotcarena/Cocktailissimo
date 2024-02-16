<?php
namespace App\Controller\Security;

use Exception;
use App\Entity\User;
use App\Form\NewPasswordType;
use App\Form\ChangePasswordType;
use App\Repository\UserRepository;
use App\Security\TokenVerificator;
use App\Form\DataModel\NewPassword;
use Symfony\Component\Form\FormError;
use Doctrine\ORM\EntityManagerInterface;
use App\Security\TokenVerificationDemander;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class PasswordController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private UserPasswordHasherInterface $hasher,
        private EntityManagerInterface $em,
        private TokenVerificator $tokenVerificator,
        private TranslatorInterface $translator,
        private TokenVerificationDemander $tokenVerificationDemander
    )
    {

    }

    #[Route(
        [
            'en' => '/en/forgotten-password',
            'fr' => '/fr/mot-de-passe-oublié',
            'es' => '/es/contraseña-olvidada',
            'it' => '/it/dimenticato-password'
        ], 
        name: 'security_askResetPassword', 
        methods: ['POST', 'GET']
    )]
    public function askResetPassword(Request $request)
    {
        $error = null;
        if($request->getMethod() === 'POST')
        {
            try
            {
                $email = $request->request->get('email');
                /** @var User */
                $user = $this->userRepository->findOneByEmail($email);
                if($user)
                {
                    $this->tokenVerificationDemander->demandResetPasswordVerification($user, $request->getLocale());
                    $this->addFlash('success', $this->translator->trans('success.link_sent.reset_password'));
                    return $this->redirectToRoute('security_login', ['_locale' => $request->getLocale()]);
                }
                $error = $email === '' ? $this->translator->trans('assert.notBlank.email', [], 'validators'): $this->translator->trans('error.unknown_email');
            }
            catch(Exception $e)
            {
                $error = $this->translator->trans('assert.notBlank.email', [], 'validators');
            }
        }
        return $this->render('security/ask_reset_password.html.twig', [
            'error' => $error
        ]);
    }

    #[Route(
        [
            'en' => '/en/reset-my-password',
            'fr' => '/fr/réinitialiser-mon-mot-de-passe',
            'es' => '/es/recuperar-contraseña',
            'it' => '/it/recupera-password'
        ],
        name: 'security_resetPassword', 
    )]
    public function resetPassword(Request $request): Response
    {
        /** vérification du token */
        if($request->getMethod() === 'GET')
        {
            $user = $this->tokenVerificator->resolve($request->query->get('token'), 'resetPasswordToken', $this->userRepository);
            if($user === null)
            {
                $this->addFlash('danger', $this->translator->trans('error.invalid_link'));
                return $this->redirectToRoute('home', [
                    '_locale' => $request->getLocale()
                ]);
            }
        }
        
        /** soumission du nouveau mot de passe */
        $newPassword = new NewPassword;
        $form = $this->createForm(NewPasswordType::class, $newPassword);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $user = $this->tokenVerificator->resolve($request->request->get('token'), 'resetPasswordToken', $this->userRepository);
            $user
                ->setPassword(
                    $this->hasher->hashPassword($user, $newPassword->getPassword())
                )
                ->setResetPasswordToken(null)
                ->setResetPasswordTokenExpireAt(null)
                ;
            $this->em->flush();
            $this->addFlash('success', $this->translator->trans('success.reset_password'));
            return $this->redirectToRoute('security_login', ['_locale' => $request->getLocale()]);
        }
        return $this->render('security/reset_password.html.twig', [
            'form' => $form->createView(),
            'reset_token' => $request->get('token')
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route(
        [
            'en' => '/en/change-my-password',
            'fr' => '/fr/changer-de-mot-de-passe',
            'es' => '/es/cambiar-contraseña',
            'it' => '/it/cambiare-la-password'
        ],
        name: 'security_changePassword', 
    )]
    public function changePassword(Request $request): Response 
    {
        $newPassword = new NewPassword;
        $form = $this->createForm(ChangePasswordType::class, $newPassword);
        $form->handleRequest($request);

        if($form->isSubmitted())
        {
            /** @var User */
            $user = $this->getUser();
            $oldPassword = $form->get('oldPassword')->getData();
            if($oldPassword === null)
            {
                $form->get('oldPassword')->addError(new FormError($this->translator->trans('assert.notBlank.oldPassword', [], 'validators')));
            }
            elseif(!$this->hasher->isPasswordValid($user, $oldPassword))
            {
                $form->get('oldPassword')->addError(new FormError($this->translator->trans('error.invalid_password')));
            }

            if($form->isValid())
            {
                $user->setPassword(
                    $this->hasher->hashPassword($user, $newPassword->getPassword())
                );
                $this->em->flush();
                $this->addFlash('success', $this->translator->trans('success.resetPassword'));
                return $this->redirectToRoute('home', ['_locale' => $request->getLocale()]);
            }
        }

        return $this->render('security/change_password.html.twig', [
            'form' => $form->createView()
        ]);
    }
}