<?php

namespace App\Repository;

use App\Entity\CustomPrice;
use App\Entity\User;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Price\PriceResolver;
use Doctrine\ORM\QueryBuilder;
use App\Price\Vat\VatCalculator;
use App\Form\DataModel\SearchParams;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Form\Admin\DataModel\ProductFilter;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Product>
 *
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private PictureRepository $pictureRepository,
        private PackagingRepository $packagingRepository,
        private SubCategoryRepository $subCategoryRepository,
        private PaginatorInterface $paginator,
        private IngredientQuantityRepository $ingredientQuantityRepository,
        private EntityManagerInterface $em,
        private Security $security,
        private VatCalculator $vatCalculator,
        private PriceResolver $priceResolver
    )
    {
        parent::__construct($registry, Product::class);
    }

    public function save(Product $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Product $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    /**
     * @return Product[]
     */
    public function findAllForSitemap()
    {
        $products = $this->createQueryBuilder('p')
                        ->select('p', 'slug', 'c', 'cSlug', 'sc', 'scSlug')
                        ->join('p.slug', 'slug')
                        ->join('p.category', 'c')
                        ->join('c.slug', 'cSlug')
                        ->join('p.subCategory', 'sc')
                        ->join('sc.slug', 'scSlug')
                        ->join('p.vendor', 'v')
                        ->andWhere('p.mainStock > 0')
                        ->andWhere('v.stripeConfirmed = 1')
                        ->getQuery()
                        ->getResult()
                        ;
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);

        return $products;
    }

    /**
     * @param Purchase $purchase
     * @return Product[]
     */
    public function findProductsByPurchase($purchase)
    {
        $qb = $this->createQueryBuilder('p');
        return $qb->select('p')
                    ->where(
                        $qb->expr()->in(
                            'p.id',
                            $this->getEntityManager()
                                ->createQueryBuilder()
                                ->select('p2.id')
                                ->from('App\Entity\Packaging', 'pack')
                                ->join('pack.product', 'p2')
                                ->where(
                                    $qb->expr()->in(
                                        'pack.publicRef',
                                        $this->getEntityManager()
                                            ->createQueryBuilder()
                                            ->select('pl.publicRef')
                                            ->from('App\Entity\Purchase', 'pur')
                                            ->join('pur.purchaseLines', 'pl')
                                            ->where('pur = :purchase')
                                            ->getDQL()
                                    )
                                )
                                ->getDQL()
                        )
                    )
                    ->setParameter('purchase', $purchase)
                    ->getQuery()
                    ->getResult()
                    ;
    }


    /**
     * @param integer $recipeId
     * @param integer $limit
     * @return Product[]
     */
    public function findRecipeLinkedProducts(int $recipeId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('p');
        $products = $qb 
                        ->select('p', 'designation', 'slug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')

                        ->join('p.slug', 'slug')
                        ->join('p.designation', 'designation')

                        ->join('p.category', 'c')
                        ->join('c.name', 'cName')
                        ->join('c.slug', 'cSlug')

                        ->join('p.subCategory', 'sc')
                        ->join('sc.slug', 'scSlug')
                        ->join('sc.name', 'scName')
                        ->join('p.vendor', 'v')
                        ->andWhere('v.stripeConfirmed = 1')
                        ->andWhere('p.baseStock > 0')
                        ->andWhere(
                            $qb->expr()->in(
                                'p.id',
                                $this->em->createQueryBuilder()
                                    ->from('App\Entity\Recipe', 'r')
                                    ->join('r.linkedProducts', 'p2')
                                    ->select('p2.id')
                                    ->where('r.id = :recipeId')
                                    ->getDQL()
                            )
                        )
                        ->setParameter('recipeId', $recipeId)
                        ->orderBy('p.createdAt', 'DESC')
                        ->setMaxResults($limit)
                        ->getQuery()
                        ->getResult()
                    ;
        
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        return $products;
    }

    /**
     * @param integer $articleId
     * @param integer $limit
     * @return Product[]
     */
    public function findArticleLinkedProducts(int $articleId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('p');
        $products = $qb 
                        ->select('p', 'designation', 'slug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')

                        ->join('p.slug', 'slug')
                        ->join('p.designation', 'designation')

                        ->join('p.category', 'c')
                        ->join('c.name', 'cName')
                        ->join('c.slug', 'cSlug')

                        ->join('p.subCategory', 'sc')
                        ->join('sc.slug', 'scSlug')
                        ->join('sc.name', 'scName')
                        ->join('p.vendor', 'v')
                        ->andWhere('v.stripeConfirmed = 1')
                        ->andWhere('p.baseStock > 0')
                        ->andWhere(
                            $qb->expr()->in(
                                'p.id',
                                $this->em->createQueryBuilder()
                                    ->from('App\Entity\Article', 'a')
                                    ->join('a.linkedProducts', 'p2')
                                    ->select('p2.id')
                                    ->where('a.id = :articleId')
                                    ->getDQL()
                            )
                        )
                        ->setParameter('articleId', $articleId)
                        ->orderBy('p.createdAt', 'DESC')
                        ->setMaxResults($limit)
                        ->getQuery()
                        ->getResult()
                    ;
        
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        return $products;
    }

    /**
     * Undocumented function
     *
     * @param integer $id
     * @return Product[]
     */
    public function findSuggestedProducts(int $id, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('p');
        /** @var Product[] */
        $suggestedProducts = $qb
                        ->select('p', 'designation', 'slug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')

                        ->join('p.slug', 'slug')
                        ->join('p.designation', 'designation')

                        ->join('p.category', 'c')
                        ->join('c.name', 'cName')
                        ->join('c.slug', 'cSlug')

                        ->join('p.subCategory', 'sc')
                        ->join('sc.slug', 'scSlug')
                        ->join('sc.name', 'scName')

                        ->andWhere(
                            $qb->expr()->in(
                                'p.id',
                                $this->createQueryBuilder('p2')
                                    ->select('sp.id')
                                    ->join('p2.suggestedProducts', 'sp')
                                    ->join('sp.vendor', 'spVendor')
                                    ->andWhere('p2.id = :id')
                                    ->andWhere('sp.baseStock > 0')
                                    ->andWhere('spVendor.stripeConfirmed = 1')
                                    ->getDQL()
                            )
                        )
                        ->setParameter('id', $id)
                        ->orderBy('p.createdAt', 'DESC')
                        ->setMaxResults($limit)
                        ->getQuery()
                        ->getResult()
                        ;
        
        $this->pictureRepository->hydrateProductsWithFirstPicture($suggestedProducts);
        $this->packagingRepository->hydrateProductsWithBasePackaging($suggestedProducts);

        return $suggestedProducts;
    }

    /**
     * @param integer $postId
     * @param integer $limit
     * @return Product[]
     */
    public function findPostLinkedProducts(int $postId, int $limit = 20)
    {
        $qb = $this->createQueryBuilder('p');
        $products = $qb
                        ->select('p', 'designation', 'slug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')

                        ->join('p.slug', 'slug')
                        ->join('p.designation', 'designation')

                        ->join('p.category', 'c')
                        ->join('c.name', 'cName')
                        ->join('c.slug', 'cSlug')

                        ->join('p.subCategory', 'sc')
                        ->join('sc.slug', 'scSlug')
                        ->join('sc.name', 'scName')

                        ->join('p.vendor', 'v')
                        ->andWhere('v.stripeConfirmed = 1')
                        ->andWhere('p.baseStock > 0')

                        ->andWhere(
                            $qb->expr()->in(
                                'p.id',
                                $this->em->createQueryBuilder()
                                        ->select('p2.id')
                                        ->from('App\Entity\Post', 'post')
                                        ->join('post.linkedProducts', 'p2')
                                        ->where('post.id = :postId')
                                        ->getDQL()
                            )
                        )
                        ->setParameter('postId', $postId)
                        ->orderBy('p.createdAt', 'DESC')
                        ->setMaxResults($limit)
                        ->getQuery()
                        ->getResult()
                        ;

        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        return $products;
    }

  

    public function findLasts(int $limit, int $offset)
    {
        $products = $this->createQueryBuilder('p')
                            ->select('p', 'designation', 'slug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')

                            ->join('p.slug', 'slug')
                            ->join('p.designation', 'designation')

                            ->join('p.category', 'c')
                            ->join('c.name', 'cName')
                            ->join('c.slug', 'cSlug')

                            ->join('p.subCategory', 'sc')
                            ->join('sc.slug', 'scSlug')
                            ->join('sc.name', 'scName')
                            
                            ->join('p.vendor', 'v')
                            ->andWhere('v.stripeConfirmed = 1')
                            ->andWhere('p.baseStock > 0')

                            ->orderBy('p.createdAt', 'DESC')
                            ->setMaxResults($limit)
                            ->setFirstResult($offset)
                            ->getQuery()
                            ->getResult()
                        ;
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        
        return $products;
    }

    public function findOneLightBy(array $criteria): Product
    {
        $qb = $this->createQueryBuilder('p')
                    ->select('p', 'c', 'cSlug', 'sc', 'scSlug', 'slug')
                    ->join('p.category', 'c')
                    ->join('c.slug', 'cSlug')
                    ->join('p.subCategory', 'sc')
                    ->join('sc.slug', 'scSlug')
                    ->join('p.slug', 'slug')
                    ;

        foreach($criteria as $field => $value)
        {
        $qb->andWhere('p.'.$field.' = :'.$field.'_value')
            ->setParameter($field.'_value', $value)
            ;
        }

        return $qb
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

    public function findOneHydratedBy(array $criteria): Product
    {
        $qb = $this->createQueryBuilder('p')
                    ->select('p', 'pack', 'packLabel', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug', 'pic', 'picAlt', 'slug', 'designation', 'metaDescription', 'shortDescription', 'longHtmlDescription')
                    ->join('p.packagingChoices', 'pack')
                    ->join('pack.label', 'packLabel')
                    ->join('p.category', 'c')
                    ->join('c.name', 'cName')
                    ->join('c.slug', 'cSlug')
                    ->join('p.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->join('p.slug', 'slug')
                    ->join('p.designation', 'designation')
                    ->leftJoin('p.metaDescription', 'metaDescription')
                    ->leftJoin('p.shortDescription', 'shortDescription')
                    ->leftJoin('p.longHtmlDescription', 'longHtmlDescription')
                    ->leftJoin('p.pictures', 'pic')
                    ->leftJoin('pic.alt', 'picAlt')
                    ;

        foreach($criteria as $field => $value)
        {
            $qb->andWhere('p.'.$field.' = :'.$field.'_value')
                ->setParameter($field.'_value', $value)
                ;
        }

        return $qb
                ->getQuery()
                ->getOneOrNullResult()
                ;

    }

    public function findOneBySlug(string $slug, $lang): ?Product
    {
        return $this->createQueryBuilder('p')
                    ->join('p.slug', 'slug')
                    ->where('slug.'.$lang.' = :slug')
                    ->setParameter('slug', $slug)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

    public function findOneByDesignation(string $designation, $lang): ?Product
    {
        return $this->createQueryBuilder('p')
                    ->join('p.designation', 'designation')
                    ->where('designation.'.$lang.' = :designation')
                    ->setParameter('designation', $designation)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }


    public function filter(SearchParams $params, string $lang): PaginationInterface
    {
        $qb = $this->createQueryBuilder('p')
                    ->select('p', 'designation', 'slug', 'c', 'sc', 'cName', 'scName', 'cSlug', 'scSlug')
                    ->join('p.designation', 'designation')
                    ->join('p.slug', 'slug')
                    ->join('p.category', 'c')
                    ->join('p.subCategory', 'sc')
                    ->join('c.name', 'cName')
                    ->join('sc.name', 'scName')
                    ->join('c.slug', 'cSlug')
                    ->join('sc.slug', 'scSlug')
                    
                    ->join('p.vendor', 'v')
                    ->andWhere('v.stripeConfirmed = 1')
                    ->andWhere('p.baseStock > 0')
                    ;
        
        $this->applyFilters($qb, $params, $lang);

        $this->applySort($qb, $params, $lang);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );
        
        $this->pictureRepository->hydrateProductsWithFirstPicture($pagination->getItems());
        $this->packagingRepository->hydrateProductsWithBasePackaging($pagination->getItems());

        return $pagination;
    }

    /**
     *
     * @param string $q
     * @param integer $limit
     * @return Product[]
     */
    public function qSearch(string $q, string $lang, int $limit = 6)
    {
        /** @var Product[] */
        $products = $this->createQueryBuilder('p')
                    ->select('p', 'designation', 'c', 'sc', 'cName', 'scName', 'slug', 'cSlug', 'scSlug')
                    ->join('p.category', 'c')
                    ->join('p.subCategory', 'sc')
                    ->join('p.designation', 'designation')
                    ->join('p.slug', 'slug')
                    ->join('c.name', 'cName')
                    ->join('sc.name', 'scName')
                    ->join('c.slug', 'cSlug')
                    ->join('sc.slug', 'scSlug')

                    ->join('p.vendor', 'v')
                    ->andWhere('v.stripeConfirmed = 1')
                    ->andWhere('p.baseStock > 0')

                    ->andWhere('designation.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                    ;

        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        return $products;
    }
    public function countQSearch(string $q, string $lang): int 
    {
        return $this->createQueryBuilder('p')
                    ->select('COUNT(p.id) as count')
                    ->leftJoin('p.designation', 'designation')

                    ->join('p.vendor', 'v')
                    ->andWhere('v.stripeConfirmed = 1')
                    ->andWhere('p.baseStock > 0')

                    ->andWhere('designation.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }
    



    /**
     *  utilisé par le cartService pour récupérer tous les produits présents dans le panier ou par stockService (donc pas besoin de where stock > 0)
     * @param int[] $ids
     * 
     * @return Product[] Products indexés par Id
     */
    public function findByIdGroup(array $ids)
    {
        $products = $this->createQueryBuilder('p')
                    ->select('p', 'slug', 'c', 'cSlug', 'sc', 'scSlug')
                    ->join('p.slug', 'slug')
                    ->join('p.category', 'c')
                    ->join('c.slug', 'cSlug')
                    ->join('p.subCategory', 'sc')
                    ->join('sc.slug', 'scSlug')
                    ->where('p.id IN(:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
                    ;
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        //on indexe les products par id
        $productsById = [];
        foreach($products as $product)
        {
            $productsById[$product->getId()] = $product;
        }
        return $productsById;
    }

    /**
     * @param string[] $publicRefs
     * 
     * @return Product[]
     */
    public function findByPublicRefGroup(array $publicRefs)
    {
        $products = $this->createQueryBuilder('p')
                    ->select('p', 'slug', 'c', 'cSlug', 'sc', 'scSlug')
                    ->join('p.slug', 'slug')
                    ->join('p.category', 'c')
                    ->join('c.slug', 'cSlug')
                    ->join('p.subCategory', 'sc')
                    ->join('sc.slug', 'scSlug')
                    ->where('p.publicRef IN(:publicRefs)')
                    ->setParameter('publicRefs', $publicRefs)
                    ->getQuery()
                    ->getResult()
                    ;
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        
        return $products;
    }

    private function applyFilters(QueryBuilder $qb, SearchParams $params, string $lang): void
    {
        if($params->getVendorId())
        {
            $qb->andWhere('p.vendor = :vendor')
                ->setParameter('vendor', $params->getVendorId())
                ;
        }

        if(count($params->getCategoryIds()) > 0)
        {
            $qb->andWhere('c.id IN(:categoryIds)')
                ->setParameter('categoryIds', $params->getCategoryIds())
                ;
        }
        if(count($params->getSubCategoryIds()) > 0)
        {
            $qb->andWhere('sc.id IN(:subCategoryIds)')
                ->setParameter('subCategoryIds', $params->getSubCategoryIds())
                ;
        }


        //on filtre par consumerPrice par défaut, et par businessPrice si le User a le ROLE_PRO
        //on utilise le prix HT pour les filtres 
        if($params->getMaxPrice() !== null || $params->getMinPrice() !== null)
        {
            $pricePropertyName = $this->security->isGranted('ROLE_PRO') ? 'baseBusinessPriceHT': 'baseConsumerPriceHT';
            $needToConvertHT = $this->priceResolver->getPayType() === CustomPrice::PAY_PRICE_TTC;

            if($params->getMaxPrice() !== null)
            {
                $maxPrice = $needToConvertHT ? $this->vatCalculator->calcPriceHT($params->getMaxPrice()): $params->getMaxPrice();
                $qb->andWhere('p.'.$pricePropertyName.' <= :maxPrice')
                ->setParameter('maxPrice', $maxPrice)
                ;
            }
            if($params->getMinPrice() !== null)
            {
                $minPrice = $needToConvertHT ? $this->vatCalculator->calcPriceHT($params->getMinPrice()): $params->getMinPrice();
                $qb->andWhere('p.'.$pricePropertyName.' >= :minPrice')
                    ->setParameter('minPrice', $minPrice)
                    ;
            }
        }

        
        if($params->getMaxStock() !== null)
        {
            $qb->andWhere('p.mainStock <= :maxStock')
                ->setParameter('maxStock', $params->getMaxStock())
                ;
        }
        if($params->getMinStock() !== null)
        {
            $qb->andWhere('p.mainStock >= :minStock')
                ->setParameter('minStock', $params->getMinStock())
                ;
        }
        if($params->getQ() !== null && $params->getQ() !== '')
        {
            $qb
                // ->andWhere('LEVENSHTEIN_RATIO(designation.'.$lang.', :q) > 20')
                // ->setParameter('q', $params->getQ())
                ->andWhere('designation.'.$lang.' LIKE :q')
                ->setParameter('q', '%'.$params->getQ().'%')
                ;
        }
    }

    private function applySort(QueryBuilder $qb, SearchParams $params, string $lang): void 
    {
        if($params->getSortBy() === 'alphabet_ASC')
        {
            $qb->orderBy('designation.'.$lang, 'ASC');
        }
        elseif($params->getSortBy() === 'alphabet_DESC')
        {
            $qb->orderBy('designation.'.$lang, 'DESC');
        }

        //si le User a le ROLE_PRO on trie par baseBusinessPriceHT, sinon par baseConsumerPriceHT
        elseif($params->getSortBy() === 'price_ASC' || $params->getSortBy() === 'price_DESC')
        {
            $pricePropertyName = $this->security->isGranted('ROLE_PRO') ? 'baseBusinessPriceHT': 'baseConsumerPriceHT';

            if($params->getSortBy() === 'price_ASC')
            {
                $qb->orderBy('p.'.$pricePropertyName, 'ASC');
            }
            else
            {
                $qb->orderBy('p.'.$pricePropertyName, 'DESC');
            }
        }
        
        elseif($params->getSortBy() === 'note_DESC')
        {
            $qb->orderBy('p.reviewNote', 'DESC');
        }
        elseif($params->getSortBy() === 'stock_ASC')
        {
            $qb->orderBy('p.mainStock', 'ASC');
        }
        elseif($params->getSortBy() === 'stock_DESC')
        {
            $qb->orderBy('p.mainStock', 'DESC');
        }

        // //si aucun filtre sortBy
        // //si q est présent on filtre par pertinence
        // elseif($params->getQ() !== null && $params->getQ() !== '')
        // {
        //     $qb->orderBy('LEVENSHTEIN_RATIO(designation.'.$lang.', :q)', 'DESC');
        // }
        
        //sinon par date
        else
        {
            $qb->orderBy('p.createdAt', 'DESC');
        }
    }



    //VENDOR
    /**
     */
    public function vendorFilter(User $vendor, SearchParams $params, string $lang): PaginationInterface
    {
        $qb = $this->createQueryBuilder('p')
                    ->select('p', 'packs', 'packsLabel', 'pics', 'designation', 'slug', 'c', 'sc', 'cName', 'scName', 'cSlug', 'scSlug')
                    ->leftJoin('p.packagingChoices', 'packs')
                    ->join('packs.label', 'packsLabel')
                    ->leftJoin('p.pictures', 'pics')
                    ->join('p.designation', 'designation')
                    ->join('p.slug', 'slug')
                    ->join('p.category', 'c')
                    ->join('p.subCategory', 'sc')
                    ->join('c.name', 'cName')
                    ->join('sc.name', 'scName')
                    ->join('c.slug', 'cSlug')
                    ->join('sc.slug', 'scSlug')
                    ->andWhere('p.vendor = :vendor')
                    ->setParameter('vendor', $vendor);
                    ;
        
        $this->applyVendorFilters($qb, $params, $lang);

        $this->applySort($qb, $params, $lang);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit()
        );

        return $pagination;
    }

    private function applyVendorFilters(QueryBuilder $qb, SearchParams $params, string $lang): void
    {
        if(count($params->getCategoryIds()) > 0)
        {
            $qb->andWhere('c.id IN(:categoryIds)')
                ->setParameter('categoryIds', $params->getCategoryIds())
                ;
        }
        if(count($params->getSubCategoryIds()) > 0)
        {
            $qb->andWhere('sc.id IN(:subCategoryIds)')
                ->setParameter('subCategoryIds', $params->getSubCategoryIds())
                ;
        }


        if($params->getMaxPrice() !== null)
        {
            $qb->andWhere('packs.consumerPriceHT <= :maxPrice')
                ->setParameter('maxPrice', $params->getMaxPrice())
                ;
        }
        if($params->getMinPrice() !== null)
        {
            $qb->andWhere('packs.consumerPriceHT >= :minPrice')
                ->setParameter('minPrice', $params->getMinPrice())
                ;
        }

        
        if($params->getMaxStock() !== null)
        {
            $qb->andWhere('p.mainStock <= :maxStock')
                ->setParameter('maxStock', $params->getMaxStock())
                ;
        }
        if($params->getMinStock() !== null)
        {
            $qb->andWhere('p.mainStock >= :minStock')
                ->setParameter('minStock', $params->getMinStock())
                ;
        }
        if($params->getQ() !== null && $params->getQ() !== '')
        {
            $qb
                ->andWhere(
                    $qb->expr()->orX(
                        'designation.'.$lang.' LIKE :q',
                        'packs.publicRef LIKE :q',
                        'packs.privateRef LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$params->getQ().'%')
                ;
        }
    }


    //ADMIN

    /**
     *
     * @param string $q
     * @param integer $limit
     * @return Product[]
     */
    public function adminQSearch(string $q, string $lang, int $limit = 6)
    {
        /** @var Product[] */
        $products = $this->createQueryBuilder('p')
                    ->select('p', 'designation', 'c', 'sc', 'cName', 'scName', 'slug', 'cSlug', 'scSlug')
                    ->join('p.category', 'c')
                    ->join('p.subCategory', 'sc')
                    ->join('p.designation', 'designation')
                    ->join('p.slug', 'slug')
                    ->join('c.name', 'cName')
                    ->join('sc.name', 'scName')
                    ->join('c.slug', 'cSlug')
                    ->join('sc.slug', 'scSlug')
                    ->andWhere('designation.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                    ;

        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($products);

        return $products;
    }
    public function adminCountQSearch(string $q, string $lang): int 
    {
        return $this->createQueryBuilder('p')
                    ->select('COUNT(p.id) as count')
                    ->leftJoin('p.designation', 'designation')
                    ->andWhere('designation.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }
    

    public function adminFilter(Request $request, ProductFilter $productFilter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('p')
                    ->select('p', 'c', 'sc')
                    ->leftJoin('p.category', 'c')
                    ->leftJoin('p.subCategory', 'sc')
                    ;

        $this->applyAdminFilters($qb, $productFilter);

        $this->applyAdminSort($qb, $productFilter);

        /** @var PaginationInterface */
        $pagination = $this->paginator->paginate(
            $qb->getQuery(), /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            20 /*limit per page*/
        );

        $this->pictureRepository->hydrateProductsWithFirstPicture($pagination->getItems());
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($pagination->getItems(), true);
        
        return $pagination;
    }

    private function applyAdminFilters(QueryBuilder $qb, ProductFilter $productFilter)
    {
        if($productFilter->getVendor())
        {
            $qb->andWhere('p.vendor = :vendor')
                ->setParameter('vendor', $productFilter->getVendor())
                ;
        }
        if($productFilter->getCategory())
        {
            $qb->andWhere('p.category = :category')
                ->setParameter('category', $productFilter->getCategory())
                ;
        }
        if($productFilter->getSubCategory())
        {
            $qb->andWhere('p.subCategory = :subCategory')
                ->setParameter('subCategory', $productFilter->getSubCategory())
                ;
        }
        if($productFilter->getMaxPrice() !== null)
        {
            $qb->andWhere('p.baseConsumerPriceHT <= :maxPrice')
                ->setParameter('maxPrice', $productFilter->getMaxPrice())
                ;
        }
        if($productFilter->getMinPrice() !== null)
        {
            $qb->andWhere('p.baseConsumerPriceHT >= :minPrice')
                ->setParameter('minPrice', $productFilter->getMinPrice())
                ;
        }
        if($productFilter->getMaxStock() !== null)
        {
            $qb->andWhere('p.mainStock <= :maxStock')
                ->setParameter('maxStock', $productFilter->getMaxStock())
                ;
        }
        if($productFilter->getMinStock() !== null)
        {
            $qb->andWhere('p.mainStock >= :minStock')
                ->setParameter('minStock', $productFilter->getMinStock())
                ;
        }
        if($productFilter->getQ() !== null && $productFilter->getQ() !== '')
        {
            $qb->leftJoin('p.designation', 'designation')
                ->andWhere(
                    $qb->expr()->orX(
                        'designation.fr LIKE :q',
                        'p.basePublicRef LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$productFilter->getQ().'%')
                ;
        }
    }

    private function applyAdminSort(QueryBuilder $qb, ProductFilter $productFilter): void 
    {
        if($productFilter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('p.createdAt', 'ASC');
        }
        elseif($productFilter->getSortBy() === 'price_ASC')
        {
            $qb->orderBy('p.baseConsumerPriceHT', 'ASC');
        }
        elseif($productFilter->getSortBy() === 'price_DESC')
        {
            $qb->orderBy('p.baseConsumerPriceHT', 'DESC');
        }
        elseif($productFilter->getSortBy() === 'note_DESC')
        {
            $qb->orderBy('p.reviewNote', 'DESC');
        }
        elseif($productFilter->getSortBy() === 'note_ASC')
        {
            $qb->orderBy('p.reviewNote', 'ASC');
        }
        elseif($productFilter->getSortBy() === 'countViews_DESC')
        {
            $qb->orderBy('p.countViews', 'DESC');
        }
        elseif($productFilter->getSortBy() === 'countViews_ASC')
        {
            $qb->orderBy('p.countViews', 'ASC');
        }
        elseif($productFilter->getSortBy() === 'countCarts_DESC')
        {
            $qb->orderBy('p.countCarts', 'DESC');
        }
        elseif($productFilter->getSortBy() === 'countCarts_ASC')
        {
            $qb->orderBy('p.countCarts', 'ASC');
        }
        elseif($productFilter->getSortBy() === 'countSales_DESC')
        {
            $qb->orderBy('p.countSales', 'DESC');
        }
        elseif($productFilter->getSortBy() === 'countSales_ASC')
        {
            $qb->orderBy('p.countSales', 'ASC');
        }
        else
        {
            $qb->orderBy('p.createdAt', 'DESC');
        }
    }

//    /**
//     * @return Product[] Returns an array of Product objects
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

//    public function findOneBySomeField($value): ?Product
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
