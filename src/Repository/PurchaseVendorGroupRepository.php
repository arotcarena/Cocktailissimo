<?php

namespace App\Repository;

use App\Entity\PurchaseVendorGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PurchaseVendorGroup>
 *
 * @method PurchaseVendorGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method PurchaseVendorGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method PurchaseVendorGroup[]    findAll()
 * @method PurchaseVendorGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PurchaseVendorGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PurchaseVendorGroup::class);
    }

    public function findLast(): ?PurchaseVendorGroup
    {
        $purchaseVendorGroups = $this->createQueryBuilder('pvg')
                                    ->join('pvg.purchase', 'p')
                                    ->orderBy('p.createdAt', 'DESC')
                                    ->setMaxResults(1)
                                    ->getQuery()
                                    ->getResult()
                                    ;

        if(count($purchaseVendorGroups) === 0)
        {
            return null;
        }
        return $purchaseVendorGroups[0];
    }

//    /**
//     * @return PurchaseVendorGroup[] Returns an array of PurchaseVendorGroup objects
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

//    public function findOneBySomeField($value): ?PurchaseVendorGroup
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
