<?php
namespace App\Email\Security;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use Symfony\Component\Mime\Email;

class EmailChangeEmail extends EmailFactory
{
    public function send(string $email, string $code, string $lang = SiteConfig::DEFAULT_LOCALE)
    {
        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($email)
            ->subject($this->translator->trans('security.change_email.subject', [], 'emails', $lang))
            ->text($this->translator->trans('security.change_email.text', [
                '{code}' => $code
            ], 'emails', $lang))
            ->html($this->twig->render('email/security/email_change_email.html.twig', [
                'code' => $code,
                'lang' => $lang
            ]));
        $this->sendEmail($email);
    }
}