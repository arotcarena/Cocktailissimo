<?php
namespace App\Email\Admin\Business;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use Symfony\Component\Mime\Email;

class ProspectEmailSender extends EmailFactory
{
    public function send(string $email, string $lang = SiteConfig::DEFAULT_LOCALE)
    {
        $email = (new Email())
            ->from(SiteConfig::EMAIL_CONTACT)
            ->to($email)
            ->subject($this->translator->trans('prospect.subject', [], 'emails', $lang))
            ->html($this->twig->render('admin/email/business/prospect/index.html.twig', [
                'lang' => $lang
            ]))
            ;

        $this->sendEmail($email, SiteConfig::EMAIL_CONTACT);
    }
}