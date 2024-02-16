<?php
namespace App\Email\Admin;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use Symfony\Component\Mime\Email;

class AdminNotificationListEmail extends EmailFactory
{
    /**
     * Undocumented function
     *
     * @param string $message
     * @param string[] $list
     * @return void
     */
    public function send(string $message, array $list): void
    {
        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY_ADMIN)
            ->to(SiteConfig::EMAIL_ADMIN)
            ->subject('Notification importante')
            ->text($message . ' : ' . implode(', ', $list))
            ->html($this->twig->render('admin/email/notification_list.html.twig', [
                'message' => $message,
                'list' => $list
            ]));

        $this->sendEmail($email, SiteConfig::EMAIL_NOREPLY_ADMIN);
    }
}