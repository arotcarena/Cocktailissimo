<?php
namespace App\Email\Security;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\User;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AllInOneInitEmail extends EmailFactory
{
    public function send(User $user, string $lang)
    {
        $link = $this->urlGenerator->generate('security_allInOneInit', [
                    '_locale' => $lang,
                    'email_confirmation_token' => $user->getId().'=='.$user->getConfirmationToken(),
                    'reset_password_token' => $user->getId().'=='.$user->getResetPasswordToken()
                ], UrlGeneratorInterface::ABSOLUTE_URL);

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($user->getEmail())
            ->subject($this->translator->trans('security.all_in_one_init.subject', [], 'emails', $lang))
            ->text($this->translator->trans('security.all_in_one_init.text', [
                '{link}' => $link
            ], 'emails', $lang))
            ->html($this->twig->render('email/security/all_in_one_init_email.html.twig', [
                'link' => $link,
                'firstName' => $user->getFirstName(),
                'lang' => $lang
            ]));

        $this->sendEmail($email);
    }
}