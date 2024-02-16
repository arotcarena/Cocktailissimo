<?php

namespace App\Repository;

use App\Entity\CartVendorGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CartVendorGroup>
 *
 * @method CartVendorGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method CartVendorGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method CartVendorGroup[]    findAll()
 * @method CartVendorGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CartVendorGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CartVendorGroup::class);
    }

//    /**
//     * @return CartVendorGroup[] Returns an array of CartVendorGroup objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CartVendorGroup
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
