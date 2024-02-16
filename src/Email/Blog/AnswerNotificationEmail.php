<?php
namespace App\Email\Blog;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Question;
use App\UrlResolver\QuestionShowUrlResolver;
use Symfony\Component\Mime\Email;

class AnswerNotificationEmail extends EmailFactory
{
    /**
     * @param Question $question
     * @return void
     */
    public function send($question)
    {
        $urlResolver = new QuestionShowUrlResolver($this->urlGenerator);
        $link = SiteConfig::SITE_URL . $urlResolver->resolve($question) . '#qu-show-'.$question->getId();

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($question->getEmail())
            ->subject($this->translator->trans('answer_notification.subject', [], 'emails', $question->getLang()))
            ->text($this->translator->trans('answer_notification.text', ['{link}' => $link], 'emails', $question->getLang()))
            ->html($this->twig->render('email/blog/answer_notification.html.twig', [
                'link' => $link,
                'lang' => $question->getLang(),
                'fullName' => $question->getFullName()
            ]));

        $this->sendEmail($email);
    }
}