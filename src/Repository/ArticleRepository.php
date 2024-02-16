<?php

namespace App\Repository;

use App\Entity\Article;
use Doctrine\ORM\QueryBuilder;
use App\Form\DataModel\SearchParams;
use Doctrine\Persistence\ManagerRegistry;
use App\Form\Admin\DataModel\ArticleFilter;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @extends ServiceEntityRepository<Article>
 *
 * @method Article|null find($id, $lockMode = null, $lockVersion = null)
 * @method Article|null findOneBy(array $criteria, array $orderBy = null)
 * @method Article[]    findAll()
 * @method Article[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator, private EntityManagerInterface $em)
    {
        parent::__construct($registry, Article::class);
    }

    public function findOneLightBy(array $criteria): ?Article
    {
        $qb = $this->createQueryBuilder('a')
                    ->select('a', 'slug', 'sc', 'scSlug')
                    ->join('a.slug', 'slug')
                    ->join('a.subCategory', 'sc')
                    ->join('sc.slug', 'scSlug')
                ;

        foreach($criteria as $field => $value)
        {
            $qb->andWhere('a.'.$field.' = :'.$field.'_value')
                ->setParameter($field.'_value', $value)
                ;
        }
        return $qb
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function findOneHydratedBy(array $criteria): ?Article
    {
        $qb = $this->createQueryBuilder('a')
                    ->select('a', 'title', 'subtitle', 'htmlContent', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                    ->join('a.title', 'title')
                    ->leftJoin('a.subtitle', 'subtitle')
                    ->leftJoin('a.htmlContent', 'htmlContent')
                    ->join('a.slug', 'slug')
                    ->join('a.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('a.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                ;

        foreach($criteria as $field => $value)
        {
            $qb->andWhere('a.'.$field.' = :'.$field.'_value')
                ->setParameter($field.'_value', $value)
                ;
        }
        return $qb
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /**
     * Undocumented function
     *
     * @param integer $limit
     * @return Article[]
     */
    public function findLastExcludeCurrent(int $id, int $limit = 20)
    {
        return $this->createQueryBuilder('a')
                    ->select('a', 'title', 'subtitle', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                    ->join('a.title', 'title')
                    ->leftJoin('a.subtitle', 'subtitle')
                    ->join('a.slug', 'slug')
                    ->join('a.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('a.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                    ->where('a.id != :id')
                    ->setParameter('id', $id)
                    ->orderBy('a.createdAt', 'DESC')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                ;
    }

    /**
     * @param integer $recipeId
     * @param integer $limit
     * @return Article[]
     */
    public function findRecipeLinkedArticles(int $recipeId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('a');
        return $qb
                ->select('a', 'title', 'subtitle', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                ->join('a.title', 'title')
                ->leftJoin('a.subtitle', 'subtitle')
                ->join('a.slug', 'slug')
                ->join('a.subCategory', 'sc')
                ->join('sc.name', 'scName')
                ->join('sc.slug', 'scSlug')
                ->leftJoin('a.picture', 'pic')
                ->leftJoin('pic.alt', 'alt')
                ->where(
                    $qb->expr()->in(
                        'a.id',
                        $this->em->createQueryBuilder()
                                ->from('App\Entity\Recipe', 'r')
                                ->join('r.linkedArticles', 'a2')
                                ->select('a2.id')
                                ->where('r.id = :recipeId')
                                ->getDQL()
                    )
                )
                ->setParameter('recipeId', $recipeId)
                ->orderBy('a.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult()
            ;
    }

     /**
     * @param integer $productId
     * @param integer $limit
     * @return Article[]
     */
    public function findProductLinkedArticles(int $productId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('a');
        return $qb
                ->select('a', 'title', 'subtitle', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                ->join('a.title', 'title')
                ->leftJoin('a.subtitle', 'subtitle')
                ->join('a.slug', 'slug')
                ->join('a.subCategory', 'sc')
                ->join('sc.name', 'scName')
                ->join('sc.slug', 'scSlug')
                ->leftJoin('a.picture', 'pic')
                ->leftJoin('pic.alt', 'alt')
                ->where(
                    $qb->expr()->in(
                        'a.id',
                        $this->em->createQueryBuilder()
                                ->from('App\Entity\Product', 'p')
                                ->join('p.linkedArticles', 'a2')
                                ->select('a2.id')
                                ->where('p.id = :productId')
                                ->getDQL()
                    )
                )
                ->setParameter('productId', $productId)
                ->orderBy('a.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult()
            ;
    }

    public function findOneBySlug(string $slug, $lang): ?Article
    {
        return $this->createQueryBuilder('a')
                    ->join('a.slug', 'slug')
                    ->where('slug.'.$lang.' = :slug')
                    ->setParameter('slug', $slug)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

      /**
     * @return Article[]
     */
    public function filter(SearchParams $params, string $lang): PaginationInterface
    {
        $qb = $this->createQueryBuilder('a')
                    ->select('a', 'title', 'subtitle', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                    ->join('a.title', 'title')
                    ->leftJoin('a.subtitle', 'subtitle')
                    ->join('a.slug', 'slug')
                    ->join('a.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('a.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                    ;
        
        $this->applyFilters($qb, $params, $lang);

        $this->applySort($qb, $params, $lang);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );

        return $pagination;
    }

    private function applyFilters(QueryBuilder $qb, SearchParams $params, string $lang): void
    {
        if(count($params->getSubCategoryIds()) > 0)
        {
            $qb->andWhere('sc.id IN(:subCategoryIds)')
                ->setParameter('subCategoryIds', $params->getSubCategoryIds())
                ;
        }
        if($params->getQ() !== null && $params->getQ() !== '')
        {
            $qb->andWhere('title.'.$lang.' LIKE :q')
                ->setParameter('q', '%'.$params->getQ().'%')
                ;
        }
    }
    
    private function applySort(QueryBuilder $qb, SearchParams $params, string $lang): void 
    {
        if($params->getSortBy() === 'alphabet_ASC')
        {
            $qb->orderBy('title.'.$lang, 'ASC');
        }
        elseif($params->getSortBy() === 'alphabet_DESC')
        {
            $qb->orderBy('title.'.$lang, 'DESC');
        }
        elseif($params->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('a.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('a.createdAt', 'DESC');
        }
    }

    public function adminFilter(Request $request, ArticleFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('a')
                ->leftJoin('a.subCategory', 'subCategory')
                ->leftJoin('subCategory.name', 'subCategoryName')
                    ;
        $this->applyAdminFilters($qb, $filter);
        $this->applyAdminSort($qb, $filter);

        $query = $qb->getQuery();

        $pagination = $this->paginator->paginate(
            $query,
            $request->query->get('page', 1),
            10
        );

        return $pagination;
    }

    private function applyAdminFilters(QueryBuilder $qb, ArticleFilter $filter): void 
    {
        if($filter->getSubCategory() !== null)
        {
            $qb->andWhere('a.subCategory = :subCategory')
                ->setParameter('subCategory', $filter->getSubCategory())
                ;
        }
        if($filter->getQ() !== null && $filter->getQ() !== '')
        {
            $qb->leftJoin('a.title', 'title')
                ->andWhere(
                    $qb->expr()->orX(
                        'title.fr LIKE :q',
                        'a.ref LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$filter->getQ().'%')
                ;
        }
    }

    private function applyAdminSort(QueryBuilder $qb, ArticleFilter $filter): void 
    {
        if($filter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('a.createdAt', 'ASC');
        }
        elseif($filter->getSortBy() === 'countViews_DESC')
        {
            $qb->orderBy('a.countViews', 'DESC');
        }
        elseif($filter->getSortBy() === 'countViews_ASC')
        {
            $qb->orderBy('a.countViews', 'ASC');
        }
        else
        {
            $qb->orderBy('a.createdAt', 'DESC');
        }
    }



    /**
     *
     * @param string $q
     * @param integer $limit
     * @return Article[]
     */
    public function qSearch(string $q, string $lang, int $limit = 6)
    {
        return $this->createQueryBuilder('a')
                    ->select('a', 'title', 'subtitle', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                    ->join('a.title', 'title')
                    ->leftJoin('a.subtitle', 'subtitle')
                    ->join('a.slug', 'slug')
                    ->join('a.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('a.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                    ->andWhere('title.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                    ;
    }
    public function countQSearch(string $q, string $lang): int 
    {
        return $this->createQueryBuilder('a')
                    ->select('COUNT(a.id) as count')
                    ->join('a.title', 'title')
                    ->andWhere('title.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }

//    /**
//     * @return Article[] Returns an array of Article objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Article
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
