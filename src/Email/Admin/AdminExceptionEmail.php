<?php
namespace App\Email\Admin;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use Symfony\Component\Mime\Email;
use Throwable;

class AdminExceptionEmail extends EmailFactory
{
    public function send(Throwable $error)
    {
        //on envoie pas toujours avec le même compte email pour éviter le blocage à cause de la restriction 200 emails/heure
        $i = random_int(1, 4);

        $from = 'exception' . $i . '@' . SiteConfig::SITE_DOMAIN;

        $email = (new Email())
            ->from($from)
            ->to(SiteConfig::EMAIL_ADMIN)
            ->subject('Uncaught Exception')
            ->html($this->twig->render('admin/email/exception.html.twig', [
                'error' => $error
            ]));

        $this->sendEmail($email, $from);
    }
}