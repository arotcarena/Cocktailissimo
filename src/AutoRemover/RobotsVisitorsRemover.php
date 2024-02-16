<?php
namespace App\AutoRemover;

use App\Email\Admin\AdminNotificationEmail;
use App\Entity\Visitor;
use App\Repository\VisitorRepository;
use App\TrafficAnalytics\Admin\Robots\RobotsViewsRemover;
use Doctrine\ORM\EntityManagerInterface;

class RobotsVisitorsRemover
{
    public const ROBOTS_LIST = [
        'Unknown robot',
        'Googlebot',
        'Voila',
        'Yahoo Slurp',
        'MSNBot',
        'Alexa (IA Archiver)',
        'Ask',
        'MSNBot-media',
        'The web archive (IA Archiver)',
        'Netcraft'
    ];

    public int $count = 0;
    public string $message = 'Aucun visiteur robot supprimé.';
    public array $recapLines = [];
    

    public function __construct(
        private VisitorRepository $visitorRepository,
        private RobotsViewsRemover $robotsViewsRemover,
        private AdminNotificationEmail $adminNotificationEmail,
        private EntityManagerInterface $em
    )
    {
        
    }

    /**
     * @param array|null $robots (liste de morceaux de user-agent appartenant à des robots)
     * @return string $message
     */
    public function process(array $robots = null): void
    {
        $robotsList = $robots ? array_merge(self::ROBOTS_LIST, $robots): self::ROBOTS_LIST;

        $visitorsToDelete = [];
        foreach($robotsList as $robot)
        {
            /** @var Visitor[] */
            $visitors = $this->visitorRepository->createQueryBuilder('vtor')
                                            ->where('vtor.userAgent LIKE :robot')
                                            ->setParameter('robot', '%'.$robot.'%')
                                            ->getQuery()
                                            ->getResult()
                                            ;
            $visitorsToDelete = array_merge($visitorsToDelete, $visitors);
        }

        $this->count = count($visitorsToDelete);

        if($this->count > 1000) // AUGMENTEZ CETTE LIMITE SI NECESSAIRE
        {
            $this->message = 'Attention ! RobotsVisitorsRemover.php identifie ' .$this->count . 
            ' visiteurs comme correspondant aux User-Agents entrés. ' .
            'Vérifiez la véracité, si c\'est correct augmentez la limite sur RobotsVisitorsRemover.php line 44 (1000 actuellement)';
            return;
        }
        elseif($this->count > 0)
        {
            //soustrait les countViews aux entités vues par les visiteurs robots
            $this->robotsViewsRemover->handleRobotsRemove($visitorsToDelete);

            /** @var Visitor $visitor */
            foreach($visitorsToDelete as $visitor)
            {
                $this->recapLines[] = '#' . $visitor->getId() . ' - ' . $visitor->getUserAgent() . ' - ' . $visitor->getCreatedAt()->format('d/m/Y H:i:s');
                $this->em->remove($visitor);
            }
            $this->em->flush();
            $this->message = $this->count . ' visiteurs robots supprimés';
        }
    }
}