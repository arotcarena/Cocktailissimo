<?php

namespace App\Repository;

use App\Entity\VendorDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<VendorDetail>
 *
 * @method VendorDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method VendorDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method VendorDetail[]    findAll()
 * @method VendorDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VendorDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VendorDetail::class);
    }

//    /**
//     * @return VendorDetail[] Returns an array of VendorDetail objects
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

//    public function findOneBySomeField($value): ?VendorDetail
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
