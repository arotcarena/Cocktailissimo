<?php
namespace App\TrafficAnalytics\VisitorAction;

use App\Entity\Answer;
use App\Entity\Cart;
use App\Entity\Comment;
use App\Entity\Purchase;
use App\Entity\Question;
use App\Entity\Review;
use App\Entity\VisitorAction;
use App\Helper\MainRoleResolver;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use App\TrafficAnalytics\VisitorResolver;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;

class VisitorActionSaver
{
    public function __construct(
        private VisitorResolver $visitorResolver,
        private EntityManagerInterface $em,
        private EntityCountAdder $entityCountAdder,
        private MainRoleResolver $mainRoleResolver
    )
    {
        
    }

    public function saveTypePreRegister()
    {
        $action = (new VisitorAction)->setType(VisitorAction::TYPE_PRE_REGISTER);
        $this->save($action);
    }

    public function saveTypeRegisterConfirm(array $roles)
    {
        $action = (new VisitorAction)
                    ->setType(VisitorAction::TYPE_REGISTER_CONFIRM)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        //on marque le visitor comme registered
        $visitor = $this->visitorResolver->resolve();
        $visitor->addAction($action)
                ->setRole(
                    $this->mainRoleResolver->resolve($roles)
                )
                ;
        $this->em->persist($action);
        $this->em->flush();
    }

    public function saveTypeDeleteAccount()
    {
        $action = (new VisitorAction)
                    ->setType(VisitorAction::TYPE_DELETE_ACCOUNT)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        //on passe visitor.registered à false
        $visitor = $this->visitorResolver->resolve();
        $visitor->addAction($action)
                ->setRole(null)
                ;
        $this->em->persist($action);
        $this->em->flush();
    }

    public function saveTypeGeolocCountryChange(string $newGeolocCountry)
    {
        $action = (new VisitorAction)
                    ->setType(VisitorAction::TYPE_GEOLOC_COUNTRY_CHANGE)
                    ->setDetail(['country' => $newGeolocCountry])
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        //on modifie la geolocCountry du visitor
        $visitor = $this->visitorResolver->resolve();
        $visitor->addAction($action)
                ->setGeolocCountry($newGeolocCountry)
                ;
        $this->em->persist($action);
        $this->em->flush();
    }

    public function saveTypeCartCreate(array $cookieCart)
    {
        $action = (new VisitorAction)
                ->setType(VisitorAction::TYPE_CART_CREATE)
                ->setDetail($cookieCart)
                ;
        $this->save($action);
    }

    public function saveTypeCartChange(array $cookieCart)
    {
        $action = (new VisitorAction)
                ->setType(VisitorAction::TYPE_CART_CHANGE)
                ->setDetail($cookieCart)
                ;
        $this->save($action);
    }

    public function saveTypeCheckoutStart(Cart $cart)
    {
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_CHECKOUT_START)
                        ->setDetail([
                            'count' => $cart->getCount(),
                            'totalPrice' => $cart->getTotalPrice()->getPriceToPay()
                        ])
                        ;
            $this->save($action);
    }

    public function saveTypeCheckoutPreparePayment(?int $amount)
    {
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT)
                        ->setDetail(['amount' => $amount])
                        ;
        $this->save($action);
    }

    public function saveTypeCheckoutPaymentAttempt()
    {
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_CHECKOUT_PAYMENT_ATTEMPT)
                        ;
        $this->save($action);
    }

    public function saveTypePurchasePaid(Purchase $purchase)
    {
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_PURCHASE_PAID)
                        ->setDetail([
                            'count' => $purchase->getCountArticles(),
                            'articlesPrice' => $purchase->getArticlesPrice()->getPriceToPay(),
                            'shippingCost' => $purchase->getShippingCost()->getPriceToPay(),
                            'totalPrice' => $purchase->getTotalPrice()->getPriceToPay()
                        ])
                        ;
        $this->save($action);
    }

    public function saveTypeComment(Comment $comment)
    {
        if($article = $comment->getArticle())
        {
            $detail = ['article' => $article->getId()];
        }
        if($recipe = $comment->getRecipe())
        {
            $detail = ['recipe' => $recipe->getId()];
        }
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_COMMENT)
                        ->setDetail($detail)
                        ;
        $this->save($action);
    }

    public function saveTypeQuestion(Question $question)
    {
        if($product = $question->getProduct())
        {
            $detail = ['product' => $product->getId()];
        }
        if($recipe = $question->getRecipe())
        {
            $detail = ['recipe' => $recipe->getId()];
        }
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_QUESTION)
                        ->setDetail($detail)
                        ;
        $this->save($action);
    }

    public function saveTypeReview(Review $review)
    {
        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_REVIEW)
                        ->setDetail([
                            'product' => $review->getProduct()->getId(),
                            'rate' => $review->getRate()
                        ])
                        ;
        $this->save($action);
    }

    public function saveTypeAnswer(Answer $answer)
    {
        if($answer->getReview())
        {
            //si c'est une réponse à une review, c'est soit un admin soit un vendor
            //on ne sauvegarde pas les actions des admins et des vendors
            return;
        }
        if($question = $answer->getQuestion())
        {
            $detail = ['question' => $question->getId()];
        }
        if($comment = $answer->getComment())
        {
            $detail = ['comment' => $comment->getId()];
        }

        $action = (new VisitorAction)
                        ->setType(VisitorAction::TYPE_ANSWER)
                        ->setDetail($detail)
                        ;
        $this->save($action);
    }

    private function save(VisitorAction $action)
    {
        $action->setCreatedAt(new DateTimeImmutable());
        
        $visitor = $this->visitorResolver->resolve();
        $visitor->addAction($action);
        
        $this->em->persist($action);
        $this->em->flush();
    }
}