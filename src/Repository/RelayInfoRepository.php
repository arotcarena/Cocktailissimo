<?php

namespace App\Repository;

use App\Entity\RelayInfo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RelayInfo>
 *
 * @method RelayInfo|null find($id, $lockMode = null, $lockVersion = null)
 * @method RelayInfo|null findOneBy(array $criteria, array $orderBy = null)
 * @method RelayInfo[]    findAll()
 * @method RelayInfo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RelayInfoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RelayInfo::class);
    }

//    /**
//     * @return RelayInfo[] Returns an array of RelayInfo objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RelayInfo
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
