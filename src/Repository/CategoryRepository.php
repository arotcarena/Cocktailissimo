<?php

namespace App\Repository;

use App\Config\SiteConfig;
use App\Entity\Category;
use App\Repository\SubCategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Category>
 *
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
        private SubCategoryRepository $subCategoryRepository    
    )
    {
        parent::__construct($registry, Category::class);
    }

    public function save(Category $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Category $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findOneBySlug(string $slug, string $lang): ?Category
    {
        return $this->createQueryBuilder('c')
                    ->select('c', 'slug', 'name', 'alt', 'shortDescription', 'longHtmlDescription')
                    ->join('c.slug', 'slug')
                    ->join('c.name', 'name')
                    ->leftJoin('c.pictureAlt', 'alt')
                    ->leftJoin('c.shortDescription', 'shortDescription')
                    ->leftJoin('c.longHtmlDescription', 'longHtmlDescription')
                    ->where('slug.'.$lang.' = :slug')
                    ->setParameter('slug', $slug)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

    /**
     * @return Category[]
     */
    public function findProductCategoriesForSitemap()
    {
        return $this->createQueryBuilder('c')
                    ->select('c', 'slug', 'sc', 'scSlug')
                    ->join('c.slug', 'slug')
                    ->leftJoin('c.subCategories', 'sc')
                    ->leftJoin('sc.slug', 'scSlug')
                    ->andWhere('slug.en != :en_recipe_slug')
                    ->andWhere('slug.en != :en_article_slug')
                    ->setParameter('en_recipe_slug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                    ->setParameter('en_article_slug', SiteConfig::ARTICLE_SLUG_TRANS['en'])
                    ->getQuery()
                    ->getResult()
                    ;
    }

    public function findRecipeCategoryForSitemap(): ?Category
    {
        return $this->createQueryBuilder('c')
                    ->select('c', 'slug', 'sc', 'scSlug')
                    ->join('c.slug', 'slug')
                    ->leftJoin('c.subCategories', 'sc')
                    ->leftJoin('sc.slug', 'scSlug')
                    ->where('slug.en = :en_recipe_slug')
                    ->setParameter('en_recipe_slug', SiteConfig::RECIPE_SLUG_TRANS['en'])
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

    public function findArticleCategoryForSitemap(): ?Category
    {
        return $this->createQueryBuilder('c')
                    ->select('c', 'slug', 'sc', 'scSlug')
                    ->join('c.slug', 'slug')
                    ->leftJoin('c.subCategories', 'sc')
                    ->leftJoin('sc.slug', 'scSlug')
                    ->where('slug.en = :en_article_slug')
                    ->setParameter('en_article_slug', SiteConfig::ARTICLE_SLUG_TRANS['en'])
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }


//    /**
//     * @return Category[] Returns an array of Category objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Category
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
