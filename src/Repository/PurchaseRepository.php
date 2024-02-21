<?php

namespace App\Repository;

use App\Entity\Cart;
use App\Entity\User;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Config\SiteConfig;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use App\Form\Admin\DataModel\PurchaseFilter;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Purchase>
 *
 * @method Purchase|null find($id, $lockMode = null, $lockVersion = null)
 * @method Purchase|null findOneBy(array $criteria, array $orderBy = null)
 * @method Purchase[]    findAll()
 * @method Purchase[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PurchaseRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PaginatorInterface $paginator,
        private ProductRepository $productRepository
    )
    {
        parent::__construct($registry, Purchase::class);
    }

    public function save(Purchase $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Purchase $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @param string $email
     * @return Purchase[]
     */
    public function findByCustomerEmail(string $email)
    {
        return $this->createQueryBuilder('pur')
                    ->select('pur', 'vg', 'pl')
                    ->leftJoin('pur.purchaseVendorGroups', 'vg')
                    ->leftJoin('vg.purchaseLines', 'pl')
                    ->join('pur.customerDetail', 'cd')
                    ->where('cd.email = :email')
                    ->setParameter('email', $email)
                    ->getQuery()
                    ->getResult()
                    ;
    }

    /**
     * @param string $email
     * @param int $currentPage
     * @param int $perPage
     * @return PaginationInterface
     */
    public function findPaginatedByCustomerEmail($email, $currentPage = 1, $perPage = 5)
    {
        $query = $this->createQueryBuilder('pur')
                            ->select('pur', 'vg', 'pl')
                            ->join('pur.customerDetail', 'cd')
                            ->leftJoin('pur.purchaseVendorGroups', 'vg')
                            ->leftJoin('vg.purchaseLines', 'pl')
                            ->andWhere('cd.email = :email')
                            ->setParameter('email', $email)
                            ->andWhere('pur.status != :status')
                            ->setParameter('status', SiteConfig::STATUS_PENDING)
                            ->orderBy('pur.createdAt', 'DESC')
                            ->getQuery()
                            ;

        /** @var PaginationInterface */
        $pagination = $this->paginator->paginate(
            $query,
            $currentPage,
            $perPage
        );

        return $pagination;
    }

   
    public function findMoreExpansiveProductId(int $id): int
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $data = $qb
                    ->from('App\Entity\Product', 'p')
                    ->select('p.id as productId', 'p.baseConsumerPriceHT as price')
                    ->join('p.packagingChoices', 'pack')
                    ->where(
                        $qb->expr()->in(
                            'pack.publicRef',
                            $this->createQueryBuilder('pur')
                                    ->join('pur.purchaseVendorGroups', 'vg')
                                    ->join('vg.purchaseLines', 'pl')
                                    ->select('pl.publicRef')
                                    ->where('pur.id = :purchaseId')
                                    ->getDQL()
                        )
                    )
                    ->setParameter('purchaseId', $id)
                    ->getQuery()
                    ->getResult();

        $productId = null;
        $moreExpansivePrice = 0;
        foreach($data as $d)
        {
            if($d['price'] > $moreExpansivePrice)
            {
                $moreExpansivePrice = $d['price'];
                $productId = $d['productId'];
            }
        }
        return $productId;
    }

    public function hasPurchasesInProgress(User $user): bool 
    {
        $qb = $this->createQueryBuilder('p');

        $count = $qb
                ->select('COUNT(p.id) as count')
                ->andWhere('p.user = :user')
                ->setParameter('user', $user)
                ->andWhere('p.status = :status_paid')
                ->setParameter('status_paid', SiteConfig::STATUS_PAID)
                ->getQuery()
                ->getOneOrNullResult()['count']
                ;
        return $count > 0;
    }

    public function countPurchasesInProgress(): int
    {
        return $this->createQueryBuilder('p')
                    ->select('COUNT(p.id) as count')
                    ->where('p.status = :status_paid')
                    ->setParameter('status_paid', SiteConfig::STATUS_PAID)
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }

    public function adminFilter(Request $request, PurchaseFilter $purchaseFilter, int $limit = 20): PaginationInterface
    {
        $qb = $this->createQueryBuilder('p')
                        ->select('p', 'u')
                        ->leftJoin('p.user', 'u')
                        ->orderBy('p.createdAt', 'DESC') // par défaut : ceci peut être modifié dans applyAdminFilters si purchaseFilter.sortBy === 'createdAt_ASC'
                        ;
        
        $this->applyAdminFilters($qb, $purchaseFilter);

        $this->applyAdminSort($qb, $purchaseFilter);

        $query = $qb->getQuery();

        $pagination = $this->paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            $limit /*limit per page*/
        );

        return $pagination;
    }

    private function applyAdminFilters(QueryBuilder $qb, PurchaseFilter $purchaseFilter): void 
    {
        if($purchaseFilter->getStatus() && $purchaseFilter->getStatus() !== '')
        {
            $qb->where('p.status = :status')
                ->setParameter('status', $purchaseFilter->getStatus())
                ;
        }
    }
    private function applyAdminSort(QueryBuilder $qb, PurchaseFilter $purchaseFilter): void 
    {
        if($purchaseFilter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('p.createdAt', 'ASC');
        }
        //sinon on laisse le orderBy par défaut (createdAt_DESC)
    }


//    /**
//     * @return Purchase[] Returns an array of Purchase objects
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

//    public function findOneBySomeField($value): ?Purchase
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
