<?php

namespace App\Repository;

use App\Config\SiteConfig;
use App\Entity\Visitor;
use App\Form\Admin\DataModel\TrafficFilter;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<Visitor>
 *
 * @method Visitor|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visitor|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visitor[]    findAll()
 * @method Visitor[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisitorRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PaginatorInterface $paginator
    )
    {
        parent::__construct($registry, Visitor::class);
    }

    
    /**
     * @param TrafficFilter $trafficFilter
     * @return Visitor[]
     */
    public function adminFilterForStats(TrafficFilter $trafficFilter)
    {
        $qb = $this->createQueryBuilder('vtor')
                    ->join('vtor.visits', 'v') // on peut faire join car un visitor sans visite n'existe pas
                    ;

        $this->applyAdminFilters($qb, $trafficFilter);

        return $qb->getQuery()->getResult();
    }

    public function adminFilter(Request $request, TrafficFilter $trafficFilter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('vtor')
                    ->orderBy('vtor.createdAt', 'DESC')
                    ->join('vtor.visits', 'v') // on peut faire join car un visitor sans visite n'existe pas
                    ;

        $this->applyAdminFilters($qb, $trafficFilter);

        return $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $request->query->get('limit', 20)
        );
    }

    private function applyAdminFilters(QueryBuilder $qb, TrafficFilter $trafficFilter): void 
    {
        if($startAt = $trafficFilter->getStartAt())
        {
            $qb->andWhere('v.createdAt > :startAt')
                ->setParameter('startAt', $startAt)
                ;
        }
        if($endAt = $trafficFilter->getEndAt())
        {
            $qb->andWhere('v.createdAt < :endAt')
                ->setParameter('endAt', $endAt)
                ;
        }
        if($recipe = $trafficFilter->getRecipe())
        {
            $qb->andWhere("v.route = 'recipe_show'")
                ->andWhere('v.url LIKE :ref')
                ->setParameter('ref', '%'.$recipe->getRef().'%')
                ;
        }
        if($article = $trafficFilter->getArticle())
        {
            $qb->andWhere("v.route = 'article_show'")
                ->andWhere('v.url LIKE :ref')
                ->setParameter('ref', '%'.$article->getRef().'%')
                ;
        }
        if($product = $trafficFilter->getProduct())
        {
            $qb->andWhere("v.route = 'product_show'")
                ->andWhere('v.url LIKE :publicRef')
                ->setParameter('publicRef', '%'.$product->getBasePublicRef().'%')
                ;
        }
        if($vendor = $trafficFilter->getVendor())
        {
            $qb->andWhere("v.route = 'vendorShop'")
                ->andWhere('v.url LIKE :companySlug')
                ->setParameter('companySlug', '%'.$vendor->getCompany()->getSlug().'%')
                ;
        }
        if($category = $trafficFilter->getCategory())
        {
            if($category->getSlug()->getEn() === SiteConfig::RECIPE_SLUG_TRANS['en'])
            {
                $qb->andWhere("v.route = 'recipe_index'");
            }
            elseif($category->getSlug()->getEn() === SiteConfig::ARTICLE_SLUG_TRANS['en'])
            {
                $qb->andWhere("v.route = 'article_index'");
            }
            else
            {

                $qb->andWhere("v.route = 'category_show'")
                    ->andWhere(
                        $qb->expr()->orX(
                            'v.url LIKE :enCategorySlug',
                            'v.url LIKE :frCategorySlug',
                            'v.url LIKE :esCategorySlug',
                            'v.url LIKE :itCategorySlug'
                        )
                    )
                    ->setParameter('enCategorySlug', '%'.$category->getSlug()->getEn().'%')
                    ->setParameter('frCategorySlug', '%'.$category->getSlug()->getfr().'%')
                    ->setParameter('esCategorySlug', '%'.$category->getSlug()->getEs().'%')
                    ->setParameter('itCategorySlug', '%'.$category->getSlug()->getIt().'%')
                    ;
            }
        }
        if($productSubCategory = $trafficFilter->getProductSubCategory())
        {
            $qb->andWhere("v.route = 'subCategory_show'")
                    ->andWhere(
                        $qb->expr()->orX(
                            'v.url LIKE :enSubCategorySlug',
                            'v.url LIKE :frSubCategorySlug',
                            'v.url LIKE :esSubCategorySlug',
                            'v.url LIKE :itSubCategorySlug'
                        )
                    )
                    ->setParameter('enSubCategorySlug', '%'.$productSubCategory->getSlug()->getEn().'%')
                    ->setParameter('frSubCategorySlug', '%'.$productSubCategory->getSlug()->getFr().'%')
                    ->setParameter('esSubCategorySlug', '%'.$productSubCategory->getSlug()->getEs().'%')
                    ->setParameter('itSubCategorySlug', '%'.$productSubCategory->getSlug()->getIt().'%')
                    ;
        }
        if($recipeSubCategory = $trafficFilter->getRecipeSubCategory())
        {
            $qb->andWhere("v.route = 'recipe_subCategoryShow'")
                    ->andWhere(
                        $qb->expr()->orX(
                            'v.url LIKE :enSubCategorySlug',
                            'v.url LIKE :frSubCategorySlug',
                            'v.url LIKE :esSubCategorySlug',
                            'v.url LIKE :itSubCategorySlug'
                        )
                    )
                    ->setParameter('enSubCategorySlug', '%'.$recipeSubCategory->getSlug()->getEn().'%')
                    ->setParameter('frSubCategorySlug', '%'.$recipeSubCategory->getSlug()->getFr().'%')
                    ->setParameter('esSubCategorySlug', '%'.$recipeSubCategory->getSlug()->getEs().'%')
                    ->setParameter('itSubCategorySlug', '%'.$recipeSubCategory->getSlug()->getIt().'%')
                    ;
        }
        if($articleSubCategory = $trafficFilter->getArticleSubCategory())
        {
            $qb->andWhere("v.route = 'article_subCategoryShow'")
                    ->andWhere(
                        $qb->expr()->orX(
                            'v.url LIKE :enSubCategorySlug',
                            'v.url LIKE :frSubCategorySlug',
                            'v.url LIKE :esSubCategorySlug',
                            'v.url LIKE :itSubCategorySlug'
                        )
                    )
                    ->setParameter('enSubCategorySlug', '%'.$articleSubCategory->getSlug()->getEn().'%')
                    ->setParameter('frSubCategorySlug', '%'.$articleSubCategory->getSlug()->getFr().'%')
                    ->setParameter('esSubCategorySlug', '%'.$articleSubCategory->getSlug()->getEs().'%')
                    ->setParameter('itSubCategorySlug', '%'.$articleSubCategory->getSlug()->getIt().'%')
                    ;
        }
        if($origin = $trafficFilter->getOrigin())
        {
            $qb->andWhere('vtor.origin = :origin')
                ->setParameter('origin', $origin)
                ;
        }
        if($role = $trafficFilter->getRole())
        {
            $qb->andWhere('vtor.role = :role')
                ->setParameter('role', $role)
                ;
        }
        if($roles = $trafficFilter->getRoles())
        {
            if(in_array(null, $roles))
            {
                $qb->andWhere('(vtor.role IS NULL OR vtor.role IN(:roles))');
            }
            else
            {
                $qb->andWhere('vtor.role IN(:roles)');
            }
            $qb->setParameter('roles', $roles);
        }
        if($lang = $trafficFilter->getLang())
        {
            $qb->andWhere('vtor.lang = :lang')
                ->setParameter('lang', $lang)
                ;
        }
    }

//    /**
//     * @return Visitor[] Returns an array of Visitor objects
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

//    public function findOneBySomeField($value): ?Visitor
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
