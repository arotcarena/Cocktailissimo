<?php
namespace App\Email\Admin\Contact;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Contact;
use Symfony\Component\Mime\Email;

class BasicContactEmail extends EmailFactory
{
    public function send(Contact $contact)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY_ADMIN)
                ->to(SiteConfig::EMAIL_CONTACT)
                ->subject('Vous avez un message')
                ->html($this->twig->render('admin/email/contact/basic_contact.html.twig', [
                    'contact' => $contact,
                ]));

        $this->sendEmail($email, SiteConfig::EMAIL_NOREPLY_ADMIN);
    }
}