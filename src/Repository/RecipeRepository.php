<?php

namespace App\Repository;

use App\Entity\Recipe;
use Doctrine\ORM\QueryBuilder;
use App\Form\DataModel\SearchParams;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Form\Admin\DataModel\RecipeFilter;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Recipe>
 *
 * @method Recipe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Recipe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Recipe[]    findAll()
 * @method Recipe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecipeRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PaginatorInterface $paginator, 
        private IngredientQuantityRepository $ingredientQuantityRepository,
        private IngredientRepository $ingredientRepository,
        private EntityManagerInterface $em,
    )
    {
        parent::__construct($registry, Recipe::class);
    }

    public function findOneLightBy(array $criteria): ?Recipe
    {
        $qb = $this->createQueryBuilder('r')
                    ->select('r', 'slug')
                    ->join('r.slug', 'slug')
                ;
        foreach($criteria as $field => $value)
        {
            $qb->andWhere('r.'.$field.' = :'.$field.'_value')
                ->setParameter($field.'_value', $value)
                ;
        }
        return $qb
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    public function findOneHydratedBy(array $criteria): ?Recipe
    {
        $qb = $this->createQueryBuilder('r')
                    ->select('r', 'iq', 'i', 'iName', 'quantity', 'title', 'slug', 'scSlug', 'scName', 'picture', 'pictureAlt', 'sc')
                    ->leftJoin('r.ingredientsQuantities', 'iq')
                    ->leftJoin('iq.ingredient', 'i')
                    ->leftJoin('i.name', 'iName')
                    ->leftJoin('iq.quantity', 'quantity')
                    ->join('r.slug', 'slug')
                    ->join('r.title', 'title')
                    ->leftJoin('r.picture', 'picture')
                    ->leftJoin('picture.alt', 'pictureAlt')
                    ->join('r.subCategories', 'sc')
                    ->join('sc.slug', 'scSlug')
                    ->join('sc.name', 'scName')
                ;
        foreach($criteria as $field => $value)
        {
            $qb->andWhere('r.'.$field.' = :'.$field.'_value')
                ->setParameter($field.'_value', $value)
                ;
        }
        return $qb
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /**
     * @param integer $id
     * @param integer $limit
     * @return Recipe[]
     */
    public function findSimilarRecipes(int $id, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('r');
        $emQb = $this->em->createQueryBuilder();

        $recipes = $qb
            ->select('r', 'title', 'slug', 'sc', 'scSlug', 'scName', 'picture', 'pictureAlt')
            ->join('r.slug', 'slug')
            ->join('r.title', 'title')
            ->leftJoin('r.picture', 'picture')
            ->leftJoin('picture.alt', 'pictureAlt')
            ->join('r.subCategories', 'sc')
            ->join('sc.slug', 'scSlug')
            ->join('sc.name', 'scName')
            ->andWhere('r.id != :id')
            ->andWhere(
                $qb->expr()->in(
                    'r.id',
                    $emQb
                        ->from('App\Entity\IngredientQuantity', 'iq')
                        ->select('r2.id')
                        ->join('iq.recipe', 'r2')
                        ->join('iq.ingredient', 'i')
                        ->where(
                            $emQb->expr()->in(
                                'i.id',
                                $this->createQueryBuilder('r3')
                                        ->select('i2.id')
                                        ->join('r3.ingredientsQuantities', 'iq2')
                                        ->join('iq2.ingredient', 'i2')
                                        ->where('r3.id = :id')
                                        ->getDQL()
                            )
                        )
                        ->getDQL()
                )
            )
            ->setParameter('id', $id)
            ->orderBy('r.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
        
        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($recipes);

        return $recipes;
    }

      /**
     * Undocumented function
     *
     * @param integer $productId
     * @return Recipe[]
     */
    public function findProductLinkedRecipes(int $productId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('r');
        /** @var Product */
        $recipes = $qb
                ->select('r', 'title', 'slug', 'scSlug', 'scName', 'picture', 'pictureAlt', 'sc')
                ->join('r.slug', 'slug')
                ->join('r.title', 'title')
                ->leftJoin('r.picture', 'picture')
                ->leftJoin('picture.alt', 'pictureAlt')
                ->join('r.subCategories', 'sc')
                ->join('sc.slug', 'scSlug')
                ->join('sc.name', 'scName')
                ->where(
                    $qb->expr()->in(
                        'r.id',
                        $this->em->createQueryBuilder()
                            ->from('App\Entity\Product', 'p')
                            ->select('r2.id')
                            ->join('p.linkedRecipes', 'r2')
                            ->where('p.id = :productId')
                            ->getDQL()
                    )
                )
                ->setParameter('productId', $productId)
                ->orderBy('r.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult()
            ;
        
        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($recipes);

        return $recipes;
    }

       /**
     * Undocumented function
     *
     * @param integer $articleId
     * @return Recipe[]
     */
    public function findArticleLinkedRecipes(int $articleId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('r');
        /** @var Product */
        $recipes = $qb
                ->select('r', 'title', 'htmlContent', 'slug', 'scSlug', 'scName', 'picture', 'pictureAlt', 'sc')
                ->join('r.slug', 'slug')
                ->join('r.title', 'title')
                ->leftJoin('r.htmlContent', 'htmlContent')
                ->leftJoin('r.picture', 'picture')
                ->leftJoin('picture.alt', 'pictureAlt')
                ->join('r.subCategories', 'sc')
                ->join('sc.slug', 'scSlug')
                ->join('sc.name', 'scName')
                ->where(
                    $qb->expr()->in(
                        'r.id',
                        $this->em->createQueryBuilder()
                            ->from('App\Entity\Article', 'a')
                            ->select('r2.id')
                            ->join('a.linkedRecipes', 'r2')
                            ->where('a.id = :articleId')
                            ->getDQL()
                    )
                )
                ->setParameter('articleId', $articleId)
                ->orderBy('r.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult()
            ;
        
        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($recipes);

        return $recipes;
    }

    /**
     *
     * @param string $q
     * @param integer $limit
     * @return Recipe[]
     */
    public function qSearch(string $q, string $lang, int $limit = 6)
    {
        $qb = $this->createQueryBuilder('r');
        /** @var Recipe[] */
        $recipes = $qb
                    ->select('r', 'iq', 'i', 'iName', 'title', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug')
                    ->join('r.ingredientsQuantities', 'iq')
                    ->join('iq.ingredient', 'i')
                    ->join('i.name', 'iName')
                    ->join('r.title', 'title')
                    ->join('r.slug', 'slug')
                    ->join('r.subCategories', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('r.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                    ->andWhere(
                        $qb->expr()->orX(
                            'title.'.$lang.' LIKE :q',
                            'iName.'.$lang.' LIKE :q'
                        )
                    )
                    ->setParameter('q', '%'.$q.'%')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                    ;
        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($recipes);
        
        return $recipes;
    }
    public function countQSearch(string $q, string $lang): int 
    {
        return $this->createQueryBuilder('r')
                    ->select('COUNT(r.id) as count')
                    ->join('r.title', 'title')
                    ->andWhere('title.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }
    

    public function findLasts(int $limit, int $offset)
    {
        $recipes = $this->createQueryBuilder('r')
                        ->select('r', 'title', 'slug', 'picture', 'pictureAlt')
                        ->join('r.slug', 'slug')
                        ->join('r.title', 'title')
                        ->leftJoin('r.picture', 'picture')
                        ->leftJoin('picture.alt', 'pictureAlt')
                        ->orderBy('r.createdAt', 'DESC')
                        ->setMaxResults($limit)
                        ->setFirstResult($offset)
                        ->getQuery()
                        ->getResult()
                        ;
        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($recipes);
        
        return $recipes;
    }

    public function findOneBySlug(string $slug, $lang): ?Recipe
    {
        return $this->createQueryBuilder('r')
                    ->join('r.slug', 'slug')
                    ->where('slug.'.$lang.' = :slug')
                    ->setParameter('slug', $slug)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

      /**
     * @return Recipe[]
     */
    public function filter(SearchParams $params, string $lang): PaginationInterface
    {
        $qb = $this->createQueryBuilder('r')
                    ->select('r', 'title', 'pic', 'alt', 'sc', 'scName', 'slug', 'scSlug', 'iqs', 'i', 'iName')
                    ->join('r.title', 'title')
                    ->join('r.slug', 'slug')
                    ->join('r.subCategories', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->leftJoin('r.picture', 'pic')
                    ->leftJoin('pic.alt', 'alt')
                    ->join('r.ingredientsQuantities', 'iqs')
                    ->join('iqs.ingredient', 'i')
                    ->join('i.name', 'iName')
                    ;
        
        $this->applyFilters($qb, $params, $lang);

        $this->applySort($qb, $params, $lang);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );

        $this->ingredientQuantityRepository->hydrateRecipesWithIngredientNames($pagination->getItems());

        return $pagination;
    }

    private function applyFilters(QueryBuilder $qb, SearchParams $params, string $lang): void
    {
        if(count($params->getIngredientIds()) > 0)
        {
            $qb->andWhere('i.id IN(:ids)')
                ->setParameter('ids', $params->getIngredientIds())
                ;
        }
        if(count($params->getSubCategoryIds()) > 0)
        {
            $qb->andWhere('sc.id IN(:subCategoryIds)')
                ->setParameter('subCategoryIds', $params->getSubCategoryIds())
                ;
        }
        if($params->getQ() !== null && $params->getQ() !== '')
        {
            $qb->andWhere(
                    $qb->expr()->orX(
                        'title.'.$lang.' LIKE :q',
                        'iName.'.$lang.' LIKE :q'
                    )
                )
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
            $qb->orderBy('r.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('r.createdAt', 'DESC');
        }
    }

    public function adminFilter(Request $request, RecipeFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('r')
                ->leftJoin('r.ingredientsQuantities', 'ingredientQuantity')
                ->leftJoin('ingredientQuantity.ingredient', 'ingredient')
                ->leftJoin('ingredient.name', 'ingredientName')
                ->leftJoin('r.subCategories', 'sc')
                ->leftJoin('sc.name', 'scName')
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

    private function applyAdminFilters(QueryBuilder $qb, RecipeFilter $filter): void 
    {
        if($filter->getSubCategory() !== null)
        {
            $qb->andWhere('sc.id = :subCategoryId')
                ->setParameter('subCategoryId', $filter->getSubCategory()->getId())
                ;
        }
        if($filter->getIngredient() !== null)
        {
            $qb->andWhere('ingredient = :ingredient')
                ->setParameter('ingredient', $filter->getIngredient())
                ;
        }
        if($filter->getQ() !== null && $filter->getQ() !== '')
        {
            $qb->leftJoin('r.title', 'title')
                ->andWhere(
                    $qb->expr()->orX(
                        'title.fr LIKE :q',
                        'ingredientName.fr LIKE :q',
                        'r.ref LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$filter->getQ().'%')
                ;
        }
    }

    private function applyAdminSort(QueryBuilder $qb, RecipeFilter $filter): void 
    {
        if($filter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('r.createdAt', 'ASC');
        }
        elseif($filter->getSortBy() === 'countViews_DESC')
        {
            $qb->orderBy('r.countViews', 'DESC');
        }
        elseif($filter->getSortBy() === 'countViews_ASC')
        {
            $qb->orderBy('r.countViews', 'ASC');
        }
        else
        {
            $qb->orderBy('r.createdAt', 'DESC');
        }
    }

//    /**
//     * @return Recipe[] Returns an array of Recipe objects
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

//    public function findOneBySomeField($value): ?Recipe
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
