<?php
namespace App\Email;

use App\Config\SecurityConfig;
use App\Config\SiteConfig;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

abstract class EmailFactory
{
    private Mailer $mailer;

    public function __construct(
        protected Environment $twig, 
        protected UrlGeneratorInterface $urlGenerator,
        protected TranslatorInterface $translator
    )
    {

    }

    public function sendEmail(Email $email, string $senderEmail = SiteConfig::EMAIL_NOREPLY)
    {
        //WITHOUT_SHOP // à suppr quand il n'y aura plus d'utilisateurs démo
        if(in_array($email->getTo()[0]->getAddress(), ['consumer@email.com', 'pro@email.com', 'vendor@email.com']))
        {
            return;
        }

        $this->configureMailer($senderEmail);

        $this->mailer->send($email);
    }

    private function configureMailer(string $senderEmail): void
    {
        //DELETE FOR PROD // a suppr pour Prod
        $transport = Transport::fromDsn(SiteConfig::SMTP_TEST);
        // DECOMMENTER CETTE LIGNE POUR PROD
        // $transport = Transport::fromDsn('smtp://'.$senderEmail.':'.SecurityConfig::EMAIL_PASSWORD.'@'.SecurityConfig::EMAIL_SERVER);
        $this->mailer = new Mailer($transport);
    }
}