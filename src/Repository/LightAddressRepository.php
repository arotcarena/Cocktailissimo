<?php

namespace App\Repository;

use App\Entity\LightAddress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SenderAddress>
 *
 * @method SenderAddress|null find($id, $lockMode = null, $lockVersion = null)
 * @method SenderAddress|null findOneBy(array $criteria, array $orderBy = null)
 * @method SenderAddress[]    findAll()
 * @method SenderAddress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LightAddressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LightAddress::class);
    }

//    /**
//     * @return SenderAddress[] Returns an array of SenderAddress objects
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

//    public function findOneBySomeField($value): ?SenderAddress
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
