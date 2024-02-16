<?php
namespace App\Email\Vendor\Stripe;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\User;
use Symfony\Component\Mime\Email;

class AccountUpdatedEmail extends EmailFactory
{
    public function send(User $vendor)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY)
                ->to($vendor->getEmail())
                ->subject('Vous devez fournir des informations')
                ->html($this->twig->render('email/vendor/stripe/account_updated.html.twig', [
                    'vendor' => $vendor,
                ]));

        $this->sendEmail($email);
    }
}