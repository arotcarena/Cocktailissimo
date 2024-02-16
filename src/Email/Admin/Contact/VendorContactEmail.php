<?php
namespace App\Email\Admin\Contact;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\VendorContact;
use Symfony\Component\Mime\Email;

class VendorContactEmail extends EmailFactory
{
    public function send(VendorContact $vendorContact)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY_ADMIN)
                ->to(SiteConfig::EMAIL_CONTACT)
                ->subject('Quelqu\'un souhaite devenir vendeur')
                ->html($this->twig->render('admin/email/contact/vendor_contact.html.twig', [
                    'vendorContact' => $vendorContact,
                ]));

        $this->sendEmail($email, SiteConfig::EMAIL_NOREPLY_ADMIN);
    }
}