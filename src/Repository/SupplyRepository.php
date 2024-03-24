<?php

namespace App\Repository;

use App\Entity\Supply;
use App\Form\Admin\DataModel\SupplyFilter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<Supply>
 *
 * @method Supply|null find($id, $lockMode = null, $lockVersion = null)
 * @method Supply|null findOneBy(array $criteria, array $orderBy = null)
 * @method Supply[]    findAll()
 * @method Supply[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SupplyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Supply::class);
    }

    public function adminFilter(Request $request, SupplyFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('s')
                    ->orderBy('s.purchasedAt', 'DESC')
                    ;

        $this->applyFilters($qb, $filter);

        return $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $filter->getLimit() ?: 20
        );
    }

    private function applyFilters(QueryBuilder $qb, SupplyFilter $filter): void 
    {
        if($supplier = $filter->getSupplier())
        {
            $qb->andWhere('s.supplier = :supplier')
            ->setParameter('supplier', $supplier)
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
//     * @return Supply[] Returns an array of Supply objects
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

//    public function findOneBySomeField($value): ?Supply
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
