<?php

namespace App\Repository;

use App\Entity\Review;
use App\Config\SiteConfig;
use App\Entity\Product;
use Doctrine\ORM\QueryBuilder;
use App\Form\DataModel\SearchParams;
use Doctrine\Persistence\ManagerRegistry;
use App\Form\Admin\DataModel\ReviewFilter;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Review>
 *
 * @method Review|null find($id, $lockMode = null, $lockVersion = null)
 * @method Review|null findOneBy(array $criteria, array $orderBy = null)
 * @method Review[]    findAll()
 * @method Review[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReviewRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PaginatorInterface $paginator,
        private PictureRepository $pictureRepository,
        private PackagingRepository $packagingRepository
    )
    {
        parent::__construct($registry, Review::class);
    }



    public function findOneByProductAndEmailExceptedRefusedStatus(Product $product, string $email): ?Review
    {
        return $this->createQueryBuilder('r')
                    ->andWhere('r.product = :product')
                    ->setParameter('product', $product)
                    ->andWhere('r.email = :email')
                    ->setParameter('email', $email)
                    ->andWhere('r.moderationStatus != :refusedStatus')
                    ->setParameter('refusedStatus', SiteConfig::MODERATION_STATUS_REFUSED)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

    public function save(Review $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Review $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findOneHydrated(int $id): ?Review
    {
        /** @var Review|null */
        $review = $this->createQueryBuilder('r')
                                ->select('r', 'a', 'product', 'pDesignation', 'c', 'sc', 'pSlug', 'cName', 'cSlug', 'scName', 'scSlug')
                                ->leftJoin('r.answers', 'a')
                                ->join('r.product', 'product')
                                ->join('product.designation', 'pDesignation')
                                ->join('product.slug', 'pSlug')
                                ->join('product.category', 'c')
                                ->join('c.name', 'cName')
                                ->join('c.slug', 'cSlug')
                                ->join('product.subCategory', 'sc')
                                ->join('sc.name', 'scName')
                                ->join('sc.slug', 'scSlug')
                                ->where('r.id = :id')
                                ->setParameter('id', $id)
                                ->orderBy('a.createdAt', 'DESC')
                                ->getQuery()
                                ->getOneOrNullResult()
                                ;
        if(!$review) 
        {
            return null;
        }
        $product = $review->getProduct();
        $this->pictureRepository->hydrateProductsWithFirstPicture([$product]);
        $this->packagingRepository->hydrateProductsWithBasePackaging([$product]);

        return $review;
    }

    /**
     * @return Review[]
     */
    public function filterByVendorId(int $vendorId, SearchParams $params): PaginationInterface
    {
        $qb = $this->createQueryBuilder('r')
                    ->select('r', 'a', 'product', 'pDesignation', 'c', 'sc', 'pSlug', 'cName', 'cSlug', 'scName', 'scSlug')
                    ->leftJoin('r.answers', 'a')
                    ->join('r.product', 'product')
                    ->join('product.designation', 'pDesignation')
                    ->join('product.slug', 'pSlug')
                    ->join('product.category', 'c')
                    ->join('c.name', 'cName')
                    ->join('c.slug', 'cSlug')
                    ->join('product.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->andWhere('product.vendor = :vendor')
                    ->setParameter('vendor', $vendorId)
                    ->andWhere('r.confirmed = 1')
                    ->andWhere('r.moderationStatus = :moderation_status_accepted')
                    ->setParameter('moderation_status_accepted', SiteConfig::MODERATION_STATUS_ACCEPTED)
                    ;

        $this->applyFilter($qb, $params);
        
        $this->applySort($qb, $params);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );

            //hydratation des products.firstPicture : nécessaire pour productArrayConvertor
            $products = [];
            /** @var Review $review */
            foreach($pagination->getItems() as $review)
            {
                $products[] = $review->getProduct();
            }
            $this->pictureRepository->hydrateProductsWithFirstPicture($products);
            $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        return $pagination;
    }

    /**
     * @return Review[]
     */
    public function filterByProductId(int $productId, SearchParams $params): PaginationInterface
    {
        $qb = $this->createQueryBuilder('r')
                    ->select('r', 'a')
                    ->join('r.product', 'product')
                    ->leftJoin('r.answers', 'a')
                    ->andWhere('product.id = :productId')
                    ->setParameter('productId', $productId)
                    ->andWhere('r.confirmed = 1')
                    ->andWhere('r.moderationStatus = :moderation_status_accepted')
                    ->setParameter('moderation_status_accepted', SiteConfig::MODERATION_STATUS_ACCEPTED)
                    ;

        $this->applyFilter($qb, $params);
        
        $this->applySort($qb, $params);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );

        return $pagination;
    }

    private function applyFilter(QueryBuilder $qb, SearchParams $params): void 
    {
        if($params->getLang())
        {
            $qb->andWhere('r.lang = :lang')
                ->setParameter('lang', $params->getLang())
                ;
        }
    }

    private function applySort(QueryBuilder $qb, SearchParams $params): void 
    {
        if($params->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('r.createdAt', 'ASC');
        }
        elseif($params->getSortBy() === 'createdAt_DESC')
        {
            $qb->orderBy('r.createdAt', 'DESC');
        }
        elseif($params->getSortBy() === 'rate_ASC')
        {
            $qb->orderBy('r.rate', 'ASC');
        }
        //par défaut on affiche les meilleure notes en premier
        else
        {
            $qb->orderBy('r.rate', 'DESC');
        }
    }

    public function adminFilterByProductId(int $productId, Request $request, ReviewFilter $reviewFilter, int $limit = 20): PaginationInterface 
    {
        return $this->adminFilter($request, $reviewFilter, $limit, $productId);
    }

    public function adminFilter(Request $request, ReviewFilter $reviewFilter, int $limit = 20, int $productId = null): PaginationInterface
    {
        $qb = $this->createQueryBuilder('r')
                    ->andWhere('r.confirmed = 1')
                    ->orderBy('r.createdAt', 'DESC')
                    ;

        $this->applyAdminFilters($reviewFilter, $qb, $productId);

        $this->applyAdminSort($reviewFilter, $qb);

        $query = $qb->getQuery();


        $pagination = $this->paginator->paginate(
            $query,
            $request->query->get('page', 1),
            $limit
        );
        return $pagination;
    }

    private function applyAdminFilters(ReviewFilter $reviewFilter, QueryBuilder $qb, ?int $productId): void
    {
        if($productId)
        {
            $qb
                ->join('r.product', 'product')
                ->andWhere('product.id = :productId')
                ->setParameter('productId', $productId)
                ;
        }
        if($reviewFilter->getRate())
        {
            $qb->andWhere('r.rate = :rate')
                ->setParameter('rate', $reviewFilter->getRate());
        }
        if($reviewFilter->getModerationStatus())
        {
            if($reviewFilter->getModerationStatus() === SiteConfig::MODERATION_STATUS_PENDING) // on fait ça parceque review.moderationStatus prend la valeur null pour pending
            {
                $qb->andWhere('r.moderationStatus IS NULL')
                    ;
            }
            else
            {
                $qb->andWhere('r.moderationStatus = :moderationStatus')
                    ->setParameter('moderationStatus', $reviewFilter->getModerationStatus())
                    ;
            }
            
        }
    }

    private function applyAdminSort(ReviewFilter $reviewFilter, QueryBuilder $qb): void
    {
        if($reviewFilter->getSortBy())
        {
            switch($reviewFilter->getSortBy())
            {
                case 'rate_ASC':
                    $qb->orderBy('r.rate', 'ASC');
                break;
                case 'rate_DESC':
                    $qb->orderBy('r.rate', 'DESC');
                break;
                case 'createdAt_ASC':
                    $qb->orderBy('r.createdAt', 'ASC');
                break;
                default:
                    $qb->orderBy('r.createdAt', 'DESC');  // déjà par défaut
            }
        }
    }

//    /**
//     * @return Review[] Returns an array of Review objects
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

//    public function findOneBySomeField($value): ?Review
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
