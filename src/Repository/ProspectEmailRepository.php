<?php

namespace App\Repository;

use App\Entity\ProspectEmail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<ProspectEmail>
 *
 * @method ProspectEmail|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProspectEmail|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProspectEmail[]    findAll()
 * @method ProspectEmail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProspectEmailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, ProspectEmail::class);
    }


    public function adminFilter(Request $request): PaginationInterface
    {
        $qb = $this->createQueryBuilder('pe');

        $this->applyFilter($qb, $request);

        $this->applySort($qb, $request);

        return $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $request->query->get('limit', 20)
        );
    }

    public function applyFilter(QueryBuilder $qb, Request $request): void 
    {
        $q = $request->query->get('q');
        if($q !== null || $q !== '')
        {
            $qb->where('pe.email LIKE :q')
                ->setParameter('q', '%'.$q.'%')
                ;
        }
    }

    public function applySort(QueryBuilder $qb, Request $request): void 
    {
        if($request->query->get('sortBy') === 'sentAt_ASC')
        {
            $qb->orderBy('pe.sentAt', 'ASC');
        }
        else
        {
            $qb->orderBy('pe.sentAt', 'DESC');
        }
    }

//    /**
//     * @return ProspectEmail[] Returns an array of ProspectEmail objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ProspectEmail
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
