<?php
namespace App\Email\Admin\Purchase;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use stdClass;
use Symfony\Component\Mime\Email;

class AdminManualPurchaseEmail extends EmailFactory
{
    public function send(stdClass $checkoutData)
    {
        $email = (new Email())
                ->from(SiteConfig::EMAIL_NOREPLY)
                ->to(SiteConfig::EMAIL_ADMIN)
                ->subject('Demande de commande hors UE à traiter manuellement')
                ->text(json_encode($checkoutData))
                ->html($this->twig->render('admin/email/purchase/manual_purchase.html.twig', [
                    'checkoutData' => $checkoutData,
                ]));

        $this->sendEmail($email);
    }
}