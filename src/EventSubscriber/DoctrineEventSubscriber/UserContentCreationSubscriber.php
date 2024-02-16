<?php
namespace App\EventSubscriber\DoctrineEventSubscriber;

use App\Entity\Answer;
use App\Entity\Comment;
use App\Entity\Question;
use App\Entity\Review;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Doctrine\ORM\Events;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PostPersistEventArgs;
use Symfony\Component\HttpFoundation\RequestStack;

class UserContentCreationSubscriber implements EventSubscriber
{
    public function __construct(
        private VisitorActionSaver $visitorActionSaver,
        private RequestStack $requestStack
    )
    {

    }


    public function getSubscribedEvents()
    {
        return [
            Events::postPersist
        ];
    }

    public function postPersist(PostPersistEventArgs $args): void
    {
        if(!$this->requestStack->getCurrentRequest())
        {
            //pour éviter de faire le traitement pendant les fixtures des tests
            return;
        }

        $entity = $args->getObject();
        
        if($entity instanceof Comment) 
        {
            $this->visitorActionSaver->saveTypeComment($entity);
        }
        elseif($entity instanceof Question)
        {
            $this->visitorActionSaver->saveTypeQuestion($entity);
        }
        elseif($entity instanceof Review)
        {
            $this->visitorActionSaver->saveTypeReview($entity);
        }
        elseif($entity instanceof Answer)
        {
            $this->visitorActionSaver->saveTypeAnswer($entity);
        }
    }
}

