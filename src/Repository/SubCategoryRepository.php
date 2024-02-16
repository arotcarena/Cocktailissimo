<?php

namespace App\Repository;

use App\Config\SiteConfig;
use App\Entity\SubCategory;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<SubCategory>
 *
 * @method SubCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method SubCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method SubCategory[]    findAll()
 * @method SubCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SubCategory::class);
    }

    public function save(SubCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SubCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findOneByBothSlugs(string $categorySlug, string $subCategorySlug, string $lang): ?SubCategory
    {
        return $this->createQueryBuilder('sc')
                    ->select('sc', 'c', 'cName', 'cSlug', 'scName', 'scSlug', 'alt', 'smallAlt', 'shortDescription', 'longHtmlDescription')
                    ->join('sc.parentCategory', 'c')
                    ->join('c.slug', 'cSlug')
                    ->join('c.name', 'cName')
                    ->join('sc.slug', 'scSlug')
                    ->join('sc.name', 'scName')
                    ->leftJoin('sc.pictureAlt', 'alt')
                    ->leftJoin('sc.smallPictureAlt', 'smallAlt')
                    ->leftJoin('sc.shortDescription', 'shortDescription')
                    ->leftJoin('sc.longHtmlDescription', 'longHtmlDescription')
                    ->where('cSlug.'.$lang.' = :categorySlug')
                    ->andWhere('scSlug.'.$lang.' = :subCategorySlug')
                    ->setParameter('categorySlug', $categorySlug)
                    ->setParameter('subCategorySlug', $subCategorySlug)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }


    /**
     * @return SubCategory[]
     */
    public function findRecipeSubCategories()
    {
        return $this->createQueryBuilder('sc')
                    ->select('sc', 'c', 'cName', 'cSlug', 'scName', 'scSlug', 'alt', 'smallAlt')
                    ->join('sc.parentCategory', 'c')
                    ->join('c.slug', 'cSlug')
                    ->join('c.name', 'cName')
                    ->join('sc.slug', 'scSlug')
                    ->join('sc.name', 'scName')
                    ->leftJoin('sc.pictureAlt', 'alt')
                    ->leftJoin('sc.smallPictureAlt', 'smallAlt')
                    ->where('cSlug.en = :categorySlug')
                    ->setParameter('categorySlug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                    ->getQuery()
                    ->getResult()
                    ;
    }

//    /**
//     * @return SubCategory[] Returns an array of SubCategory objects
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

//    public function findOneBySomeField($value): ?SubCategory
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
