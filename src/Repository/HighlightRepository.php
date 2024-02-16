<?php

namespace App\Repository;

use App\Entity\Highlight;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Highlight>
 *
 * @method Highlight|null find($id, $lockMode = null, $lockVersion = null)
 * @method Highlight|null findOneBy(array $criteria, array $orderBy = null)
 * @method Highlight[]    findAll()
 * @method Highlight[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HighlightRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Highlight::class);
    }


    /**
     * //WITHOUT_SHOP
     * IL FAUDRA AJOUTER L HYDRATATION complète DU PRODUIT 
     */
    public function findOneByNameFullHydrated(string $name)
    {
        return $this->createQueryBuilder('h')
                    ->select('h', 'r', 'rPic', 'rPicAlt', 'rTitle', 'rSlug', 'iq', 'iqQuantity', 'i', 'iName', 'a', 'aPic', 'aPicAlt', 'aTitle', 'aSubtitle', 'aHtmlContent', 'aSlug', 'hrTitle', 'hrDescription')
                    ->leftJoin('h.recipe', 'r')
                    ->leftJoin('r.picture', 'rPic')
                    ->leftJoin('rPic.alt', 'rPicAlt')
                    ->leftJoin('r.title', 'rTitle')
                    ->leftJoin('r.slug', 'rSlug')
                    ->leftJoin('r.ingredientsQuantities', 'iq')
                    ->leftJoin('iq.quantity', 'iqQuantity')
                    ->leftJoin('iq.ingredient', 'i')
                    ->leftJoin('i.name', 'iName')
                    ->leftJoin('h.article', 'a')
                    ->leftJoin('a.picture', 'aPic')
                    ->leftJoin('aPic.alt', 'aPicAlt')
                    ->leftJoin('a.title', 'aTitle')
                    ->leftJoin('a.subtitle', 'aSubtitle')
                    ->leftJoin('a.htmlContent', 'aHtmlContent')
                    ->leftJoin('a.slug', 'aSlug')
                    ->leftJoin('h.recipeTitle', 'hrTitle')
                    ->leftJoin('h.recipeDescription', 'hrDescription')
                    ->where('h.name = :name')
                    ->setParameter('name', $name)
                    ->getQuery()
                    ->getOneOrNullResult()
                    ;
    }

//    /**
//     * @return Highlight[] Returns an array of Highlight objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('h.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Highlight
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
