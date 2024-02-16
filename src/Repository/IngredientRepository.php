<?php

namespace App\Repository;

use App\Entity\Ingredient;
use App\Form\Admin\DataModel\IngredientFilter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @extends ServiceEntityRepository<Ingredient>
 *
 * @method Ingredient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ingredient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ingredient[]    findAll()
 * @method Ingredient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IngredientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Ingredient::class);
    }

     /**
     *
     * @param string $q
     * @param integer $limit
     * @return Ingredient[]
     */
    public function qSearch(string $q, string $lang, int $limit = 6)
    {
        /** @var Ingredient[] */
        return $this->createQueryBuilder('i')
                    ->select('i', 'name', 'picture', 'alt')
                    ->join('i.name', 'name')
                    ->leftJoin('i.picture', 'picture')
                    ->leftJoin('picture.alt', 'alt')
                    ->where('name.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                    ;
    }
    public function countQSearch(string $q, string $lang): int 
    {
        return $this->createQueryBuilder('i')
                    ->select('COUNT(i.id) as count')
                    ->join('i.name', 'name')
                    ->where('name.'.$lang.' LIKE :q')
                    ->setParameter('q', '%'.$q.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count']
                    ;
    }

    public function adminFilter(Request $request, IngredientFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('i')
                    ->join('i.name', 'name')
                    ->orderBy('name.fr', 'ASC')
                    ;
        if($filter->getQ() && $filter->getQ() !== '')
        {
            $qb->where('name.fr LIKE :q')
                ->setParameter('q', '%'.$filter->getQ().'%')
                ;
        }

        $query = $qb->getQuery();

        $pagination = $this->paginator->paginate(
            $query,
            $request->query->get('page', 1),
            20
        );

        return $pagination;
    }

    /**
     * Undocumented function
     *
     * @param string|null $q
     * @return Ingredient[]
     */
    public function adminQSearch(?string $q)
    {
        $qb = $this->createQueryBuilder('i')
                    ->join('i.name', 'iName')
                    ->setMaxResults(7)
                    ;
        if($q && $q !== '')
        {
            $qb->where('iName.fr LIKE :q')
                ->setParameter('q', '%'.$q.'%')
                ;
        }
        return $qb->getQuery()->getResult();
    }

//    /**
//     * @return Ingredient[] Returns an array of Ingredient objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Ingredient
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
