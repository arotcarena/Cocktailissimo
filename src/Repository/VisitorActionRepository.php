<?php

namespace App\Repository;

use App\Entity\VisitorAction;
use App\Form\Admin\DataModel\TrafficFilter;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<VisitorAction>
 *
 * @method VisitorAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method VisitorAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method VisitorAction[]    findAll()
 * @method VisitorAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisitorActionRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PaginatorInterface $paginator
    )
    {
        parent::__construct($registry, VisitorAction::class);
    }


     /**
     * @param TrafficFilter $trafficFilter
     * @return VisitorAction[]
     */
    public function adminFilterForStats(TrafficFilter $trafficFilter)
    {
        $qb = $this->createQueryBuilder('va')
                    ->join('va.visitor', 'visitor')
                    ;

        $this->applyAdminFilters($qb, $trafficFilter);

        return $qb->getQuery()->getResult();
    }

    public function adminFilter(Request $request, TrafficFilter $trafficFilter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('va')
                    ->join('va.visitor', 'visitor')
                    ->orderBy('va.createdAt', 'DESC')
                    ;

        $this->applyAdminFilters($qb, $trafficFilter);

        return $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $request->query->get('limit', 20)
        );
    }

    private function applyAdminFilters(QueryBuilder $qb, TrafficFilter $trafficFilter): void 
    {
        if($startAt = $trafficFilter->getStartAt())
        {
            $qb->andWhere('va.createdAt > :startAt')
                ->setParameter('startAt', $startAt)
                ;
        }
        if($endAt = $trafficFilter->getEndAt())
        {
            $qb->andWhere('va.createdAt < :endAt')
                ->setParameter('endAt', $endAt)
                ;
        }
        if($origin = $trafficFilter->getOrigin())
        {
            $qb->andWhere('visitor.origin = :origin')
                ->setParameter('origin', $origin)
                ;
        }
        if($role = $trafficFilter->getRole())
        {
            $qb->andWhere('visitor.role = :role')
                ->setParameter('role', $role)
                ;
        }
        if($roles = $trafficFilter->getRoles())
        {
            if(in_array(null, $roles))
            {
                $qb->andWhere('(visitor.role IS NULL OR visitor.role IN(:roles))');
            }
            else
            {
                $qb->andWhere('visitor.role IN(:roles)');
            }
            $qb->setParameter('roles', $roles);
        }
        if($lang = $trafficFilter->getLang())
        {
            $qb->andWhere('visitor.lang = :lang')
                ->setParameter('lang', $lang)
                ;
        }
        if($actionType = $trafficFilter->getActionType())
        {
            $qb->andWhere('va.type = :type')
                ->setParameter('type', $actionType)
                ;
        }
    }

//    /**
//     * @return VisitorAction[] Returns an array of VisitorAction objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('v.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?VisitorAction
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
