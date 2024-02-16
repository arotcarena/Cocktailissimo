<?php
namespace App\TrafficAnalytics\Visit;

use App\Config\SiteConfig;
use App\TrafficAnalytics\Counter\EntityViewCounter;
use App\TrafficAnalytics\Storage\TrafficAnalyticsSession;
use App\TrafficAnalytics\Visit\VisitCreator;
use App\TrafficAnalytics\VisitorResolver;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;

class VisitSaver
{
    public function __construct(
        private TrafficAnalyticsSession $taSession,
        private EntityManagerInterface $em,
        private VisitCreator $visitCreator,
        private VisitorResolver $visitorResolver,
        private EntityViewCounter $entityViewCounter,
        private Security $security
    )
    {
        
    }

    public function handleRequest(Request $request)
    {
        //si url deja memorisée en session ou si la route ne donne pas lieu à création de Visit : on ne prend pas en charge la request
        if(
            $this->taSession->urlExist($request)
            ||
            !in_array($request->attributes->get('_route'), SiteConfig::TA_TRACKED_ROUTES)
            ||
            $this->security->isGranted('ROLE_ADMIN')
        )
        {
            return;
        }

        //on mémorise l'url dans session
        $this->taSession->memoUrl($request);

        //on crée un objet Visit
        $visit = $this->visitCreator->create($request);
        //on récupére ou crée un visitor
        $visitor = $this->visitorResolver->getVisitor();
        if(!$visitor)
        {
            $visitor = $this->visitorResolver->createVisitor($request);
            $this->em->persist($visitor);
        }
        //on lui ajoute la Visit        
        $visitor->addVisit($visit);
        $this->em->persist($visit);
        
        //on gère tous les countViews
        $this->entityViewCounter->handleRequest($request);
        
        $this->em->flush();
    }
}