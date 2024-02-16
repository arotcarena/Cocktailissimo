<?php
namespace App\Email\Security;

use App\Config\SiteConfig;
use App\Email\EmailFactory;
use App\Entity\Review;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ReviewConfirmationEmail extends EmailFactory
{
    public function send(Review $review)
    {
        $link = $this->urlGenerator->generate('review_confirmation', [
            '_locale' => $review->getLang(),
            'token' => $review->getId().'=='.$review->getConfirmationToken()
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $getLang = 'get' . ucfirst($review->getLang());

        $email = (new Email())
            ->from(SiteConfig::EMAIL_NOREPLY)
            ->to($review->getEmail())
            ->subject($this->translator->trans('security.review_confirmation.subject', [], 'emails', $review->getLang()))
            ->text($this->translator->trans('security.review_confirmation.text', [
                '{link}' => $link,
                '{rate}' => $review->getRate(),
                '{product}' => $review->getProduct()->getDesignation()->$getLang()
            ], 'emails', $review->getLang()))
            ->html($this->twig->render('email/security/review_confirmation_email.html.twig', [
                'link' => $link,
                'product' => $review->getProduct()->getDesignation()->$getLang(),
                'rate' => $review->getRate(),
                'title' => $review->getTitle(),
                'comment' => $review->getComment(),
                'fullName' => $review->getFullName(),
                'lang' => $review->getLang() 
            ]));

        $this->sendEmail($email);
    }
}