<?php

namespace App\Repository;

use App\Entity\Supplier;
use App\Form\Admin\DataModel\SupplierFilter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<Supplier>
 *
 * @method Supplier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Supplier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Supplier[]    findAll()
 * @method Supplier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SupplierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Supplier::class);
    }

    public function adminFilter(Request $request, SupplierFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('s')
                    ->orderBy('s.createdAt', 'DESC')
                    ;

        $this->applyFilters($qb, $filter);

        return $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $filter->getLimit() ?: 20
        );
    }

    private function applyFilters(QueryBuilder $qb, SupplierFilter $filter): void 
    {
        if($q = $filter->getQ())
        {
            $qb->andWhere(
                $qb->expr()->orX(
                    's.socialName LIKE :q',
                    's.commercialName LIKE :q',
                    's.identificationNumber LIKE :q',
                    's.country LIKE :q',
                    's.vatNumber LIKE :q'
                )
            )
            ->setParameter('q', '%'.$q.'%')
            ;
        }
        if($sortBy = $filter->getSortBy())
        {
            if($sortBy === 'createdAt_ASC')
            {
                $qb->orderBy('s.createdAt', 'ASC');
            }
        }
    }

//    /**
//     * @return Supplier[] Returns an array of Supplier objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Supplier
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
