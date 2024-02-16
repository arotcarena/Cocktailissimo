<?php
namespace App\Security;

use App\Config\SiteConfig;
use App\Email\Security\AllInOneInitEmail;
use App\Email\Security\ResetPasswordEmail;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class TokenVerificationDemander
{
    public function __construct(
        private AllInOneInitEmail $allInOneInitEmail,
        private ResetPasswordEmail $resetPasswordEmail,
        private TokenGeneratorInterface $tokenGenerator,
        private EntityManagerInterface $em
    )
    {
        
    }

    /**
     * on envoie un mail au vendeur contenant un lien pour initialiser son compte (validation du mail et redirection vers création du password)
     *
     * @param User $user
     * @param string $lang
     * @return void
     */
    public function demandAllInOneInitVerification(User $user, $lang = 'en')
    {
        $user->setConfirmationToken(
                            $this->tokenGenerator->generateToken()
                        )
                        ->setConfirmationTokenExpireAt(
                            time() + SiteConfig::TOKEN_TIME_VALIDITY
                        )
                        ->setResetPasswordToken(
                            $this->tokenGenerator->generateToken()
                        )
                        ->setResetPasswordTokenExpireAt(
                            time() + SiteConfig::TOKEN_TIME_VALIDITY
                        );
        $this->em->flush();

        $this->allInOneInitEmail->send($user, $lang);
    }

    public function demandResetPasswordVerification(User $user, $lang = 'en')
    {
        $user->setResetPasswordToken(
                $this->tokenGenerator->generateToken()
            )
            ->setResetPasswordTokenExpireAt(
                time() + SiteConfig::TOKEN_TIME_VALIDITY
            );

        $this->em->flush();

        $this->resetPasswordEmail->send($user, $lang);
    }
}