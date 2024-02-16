<?php
namespace App\AutoRemover;

use App\Repository\VisitorRepository;
use DateInterval;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class OldVisitorsRemover
{
    public int $count = 0;
    public string $message = 'Aucun visiteur supprimé';
    public array $recapLines = [];

    public function __construct(
        private EntityManagerInterface $em,
        private VisitorRepository $visitorRepository,
    )
    {

    }

    public function process(): void
    {
        $createdAtLimit = (new DateTime())->sub(new DateInterval('P13M')); // on supprime tous les visiteurs agés de plus de 13 mois
        $visitorsToDelete = $this->visitorRepository->createQueryBuilder('vtor')
                                                    ->where('vtor.createdAt < :createdAtLimit')
                                                    ->setParameter('createdAtLimit', $createdAtLimit)
                                                    ->getQuery()
                                                    ->getResult()
                                                    ;
        $this->count = count($visitorsToDelete);
        if($this->count > 1000) // AUGMENTEZ CETTE LIMITE SI NECESSAIRE
        {
            $this->message = 'Attention ! AdminAutoRemover.php identifie plus '.$this->count.' visiteurs comme ayant dépassé 13 mois.'
            .' Vérifiez la véracité, si c\'est correct augmentez la limite sur OldVisitorsRemover.php line 35 (1000 actuellement)';
        }
        elseif($this->count > 0)
        {
            foreach($visitorsToDelete as $visitor)
            {
                $this->recapLines[] = $visitor->getCreatedAt()->format('d/m/Y H:i:s');
                $this->em->remove($visitor);
            }
            $this->em->flush();
            $this->message = $this->count . ' visiteurs datant de plus de 13 mois ont été supprimés.';
        }
    }
}