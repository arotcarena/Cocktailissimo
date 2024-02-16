<?php

namespace App\Repository;

use App\Entity\Recipe;
use App\Entity\IngredientQuantity;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\QueryBuilder;

/**
 * @extends ServiceEntityRepository<IngredientQuantity>
 *
 * @method IngredientQuantity|null find($id, $lockMode = null, $lockVersion = null)
 * @method IngredientQuantity|null findOneBy(array $criteria, array $orderBy = null)
 * @method IngredientQuantity[]    findAll()
 * @method IngredientQuantity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IngredientQuantityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IngredientQuantity::class);
    }

    /**
     * @param array $ingredientIds
     * @param integer $limit
     * @return int[] $recipeIds
     */
    public function findRecipeContainingIngredients(array $ingredientIds, int $limit = 20)
    {
        return $this->createQueryBuilder('iq')
                    ->select('r.id as id')
                    ->join('iq.recipe', 'r')
                    ->join('iq.ingredient', 'i')
                    ->where('i.id IN (:ingredientIds)')
                    ->setParameter('ingredientIds', $ingredientIds)
                    ->orderBy('r.createdAt', 'DESC')
                    ->setMaxResults($limit)
                    ->getQuery()
                    ->getResult()
                ;
    }

    /**
     * Undocumented function
     *
     * @param Recipe[] $recipes
     * @return void
     */
    public function hydrateRecipesWithIngredientNames($recipes): void 
    {
        /** @var IngredientQuantity[] */
        $data = $this->createQueryBuilder('iq')
                                ->select('iq as ingredientQuantity', 'i', 'r.id as recipeId', 'iName')
                                ->join('iq.recipe', 'r')
                                ->join('iq.ingredient', 'i')
                                ->join('i.name', 'iName')
                                ->where('iq.recipe IN(:recipes)')
                                ->setParameter('recipes', $recipes)
                                ->getQuery()
                                ->getResult()
                           ;
        /** @var Recipe[] */
        $recipesById = [];
        foreach($recipes as $recipe)
        {
            $recipesById[$recipe->getId()] = $recipe;
        }
        foreach($data as $d)
        {
            $recipesById[$d['recipeId']]->addIngredientName($d['ingredientQuantity']->getIngredient()->getName());
        }
    }

    /**
     * Undocumented function
     *
     * @param array $ids
     * @return IngredientQuantity[]
     */
    public function findByIds(array $ids)
    {
        return $this->createQueryBuilder(('iq'))
                    ->where('iq.id IN (:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
                    ;
    }

//    /**
//     * @return IngredientQuantity[] Returns an array of IngredientQuantity objects
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

//    public function findOneBySomeField($value): ?IngredientQuantity
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
