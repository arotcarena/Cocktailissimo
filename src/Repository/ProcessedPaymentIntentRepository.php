<?php

namespace App\Repository;

use App\Entity\ProcessedPaymentIntent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProcessedPaymentIntent>
 *
 * @method ProcessedPaymentIntent|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProcessedPaymentIntent|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProcessedPaymentIntent[]    findAll()
 * @method ProcessedPaymentIntent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProcessedPaymentIntentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProcessedPaymentIntent::class);
    }

//    /**
//     * @return ProcessedPaymentIntent[] Returns an array of ProcessedPaymentIntent objects
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

//    public function findOneBySomeField($value): ?ProcessedPaymentIntent
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
