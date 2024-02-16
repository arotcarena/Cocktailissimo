<?php
namespace App\Email\Admin;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Question;
use App\UrlResolver\QuestionShowUrlResolver;
use Symfony\Component\Mime\Email;

class AdminQuestionNotificationEmail extends EmailFactory
{
    public function send(Question $question)
    {
        $urlResolver = new QuestionShowUrlResolver($this->urlGenerator);
        $link = SiteConfig::SITE_URL . $urlResolver->resolve($question, 'fr');

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY_ADMIN)
            ->to(SiteConfig::EMAIL_ADMIN)
            ->subject('Notification : question posée')
            ->text('Une question vient d\'être posée. Pour la voir et y répondre, suivez ce lien : '.$link)
            ->html(
                '<div><p>Une Question vient d\'être posée. Pour la voir et y répondre, cliquez sur le lien suivant :</p><p><a href="'.$link.'">'.$link.'</a></p></div>'
            )
            ;

        $this->sendEmail($email, SiteConfig::EMAIL_NOREPLY_ADMIN);
    }
}