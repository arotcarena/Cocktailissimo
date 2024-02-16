<?php

namespace App\Repository;

use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Helper\ObjectArrayByIdIndexor;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Packaging>
 *
 * @method Packaging|null find($id, $lockMode = null, $lockVersion = null)
 * @method Packaging|null findOneBy(array $criteria, array $orderBy = null)
 * @method Packaging[]    findAll()
 * @method Packaging[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PackagingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private ObjectArrayByIdIndexor $objectArrayByIdIndexor, private PictureRepository $pictureRepository)
    {
        parent::__construct($registry, Packaging::class);
    }


    public function findOneByPublicRefHydratedWithProduct(string $publicRef): ?Packaging
    {
        return $this->createQueryBuilder('pack')
                    ->select('pack', 'p')
                    ->join('pack.product', 'p')
                    ->where('pack.publicRef = :publicRef')
                    ->setParameter('publicRef', $publicRef)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }


    /**
     * @param Purchase $purchase
     * @return Packaging[]
     */
    public function findPackagingsByPurchase($purchase)
    {
        $qb = $this->createQueryBuilder('pack');
        return $qb->select('pack')
            ->where(
                $qb->expr()->in(
                    'pack.publicRef',
                    $this->getEntityManager()
                        ->createQueryBuilder()
                        ->select('pl.publicRef')
                        ->from('App\Entity\Purchase', 'p')
                        ->join('p.purchaseVendorGroups', 'vg')
                        ->join('vg.purchaseLines', 'pl')
                        ->where('p = :purchase')
                        ->getDQL()
                )
            )
            ->setParameter('purchase', $purchase)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * Undocumented function
     *
     * @param int[] $ids
     * @return Packaging[] $packagingsById
     */
    public function findByIds($ids, bool $fullHydratation = false)
    {
        $qb = $this->createQueryBuilder('pack');

        if($fullHydratation)
        {
            $qb
                ->select('pack', 'label', 'p', 'vendor', 'vendorCompany', 'pDesignation', 'pSlug', 'c', 'cSlug', 'sc', 'scSlug')
                ->leftJoin('pack.label', 'label')
                ->join('pack.product', 'p')
                ->join('p.vendor', 'vendor')
                ->join('vendor.company', 'vendorCompany')
                ->join('p.designation', 'pDesignation')
                ->join('p.slug', 'pSlug')
                ->join('p.category', 'c')
                ->join('c.slug', 'cSlug')
                ->join('p.subCategory', 'sc')
                ->join('sc.slug', 'scSlug')
                ;
        }

        $packagings = $qb
                    ->where('pack.id IN(:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
                    ;

        $products = [];
        foreach($packagings as $packaging)
        {
            $products[] = $packaging->getProduct();
        }
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);

        return $this->objectArrayByIdIndexor->index($packagings);
    }

    /**
     * Undocumented function
     *
     * @param Product[] $products
     * @return void
     */
    public function hydrateProductsWithBasePackaging($products): void
    {
        $qb = $this->createQueryBuilder('pack');
        $packagings = $qb
                    ->select('pack', 'label', 'product')
                    ->join('pack.product', 'product')
                    ->leftJoin('pack.label', 'label')
                    ->where(
                        $qb->expr()->in(
                            'pack.id',
                            $this->createQueryBuilder('pack2')
                                    ->select('pack2.id')
                                    ->groupBy('pack2.product')
                                    ->andWhere('pack2.product IN (:products)')
                                    // ->andWhere('pack2.stock > 0')
                                    ->andWhere('pack2.listPosition = 1')
                                    ->getDQL()
                        )
                    )
                    ->setParameter('products', $products)
                    ->getQuery()
                    ->getResult()
                    ;

        /** @var Product[] */
        $productsById = $this->objectArrayByIdIndexor->index($products);

        foreach($packagings as $packaging)
        {
            $productsById[$packaging->getProduct()->getId()]->setBasePackaging($packaging);
        }
    }

    /**
     * équivaut à "hydrateProductsWithBasePackaging" sauf qu'on ne cherche pas à hydrater avec un packaging qui a stock > 0
     * Et cela car dans l'admin on récupère même les products avec mainStock = 0, donc avec tous les packaging qui ont stock = 0
     *
     * @param Product[] $products
     * @return void
     */
    public function adminHydrateProductsWithBasePackaging($products): void
    {
        $qb = $this->createQueryBuilder('pack');
        $packagings = $qb
                    ->select('pack', 'label', 'product')
                    ->join('pack.product', 'product')
                    ->leftJoin('pack.label', 'label')
                    ->where(
                        $qb->expr()->in(
                            'pack.id',
                            $this->createQueryBuilder('pack2')
                                    ->select('pack2.id')
                                    ->groupBy('pack2.product')
                                    ->andWhere('pack2.product IN (:products)')
                                    ->andWhere('pack2.listPosition = 1')
                                    ->getDQL()
                        )
                    )
                    ->setParameter('products', $products)
                    ->getQuery()
                    ->getResult()
                    ;
        
        /** @var Product[] */
        $productsById = $this->objectArrayByIdIndexor->index($products);

        foreach($packagings as $packaging)
        {
            $productsById[$packaging->getProduct()->getId()]->setBasePackaging($packaging);
        }
    }

//    /**
//     * @return Packaging[] Returns an array of Packaging objects
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

//    public function findOneBySomeField($value): ?Packaging
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
