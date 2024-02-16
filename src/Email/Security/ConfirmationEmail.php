<?php
namespace App\Email\Security;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\User;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ConfirmationEmail extends EmailFactory
{
    public function send(User $user, string $lang)
    {
        $link = $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => $lang,
            'token' => $user->getId().'=='.$user->getConfirmationToken()
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($user->getEmail())
            ->subject($this->translator->trans('security.confirmation_email.subject', [], 'emails', $lang))
            ->text($this->translator->trans('security.confirmation_email.text', [
                '{link}' => $link
            ], 'emails', $lang))
            ->html($this->twig->render('email/security/confirmation_email.html.twig', [
                'link' => $link,
                'lang' => $lang,
                'firstName' => $user->getFirstName()
            ]));

        $this->sendEmail($email);
    }
}