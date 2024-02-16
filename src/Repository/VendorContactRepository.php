<?php

namespace App\Repository;

use App\Entity\VendorContact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<VendorContact>
 *
 * @method VendorContact|null find($id, $lockMode = null, $lockVersion = null)
 * @method VendorContact|null findOneBy(array $criteria, array $orderBy = null)
 * @method VendorContact[]    findAll()
 * @method VendorContact[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VendorContactRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VendorContact::class);
    }


//    /**
//     * @return VendorContact[] Returns an array of VendorContact objects
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

//    public function findOneBySomeField($value): ?VendorContact
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
