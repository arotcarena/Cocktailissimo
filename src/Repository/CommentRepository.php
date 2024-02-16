<?php

namespace App\Repository;

use App\Entity\Recipe;
use App\Entity\Article;
use App\Entity\Comment;
use Doctrine\ORM\QueryBuilder;
use App\Form\DataModel\SearchParams;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use App\Form\Admin\DataModel\QuestionOrCommentFilter;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Comment>
 *
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator, private AnswerRepository $answerRepository)
    {
        parent::__construct($registry, Comment::class);
    }

    /**
     * @param Article|Recipe $owner
     * @param string $email
     * @return integer
     */
    public function countByOwnerAndEmail($owner, string $email): int
    {
        $qb = $this->createQueryBuilder('c')
                    ->select('COUNT(c.id) as count')
                    ->andWhere('c.email = :email')
                    ->setParameter('email', $email)
                    ;
        if($owner instanceof Recipe)
        {
            $qb->andWhere('c.recipe = :owner');
        }
        else
        {
            $qb->andWhere('c.article = :owner');
        }
            
        return $qb
                ->setParameter('owner', $owner)
                ->getQuery()
                ->getResult()[0]['count']
                ;
    }

    public function findOneHydrated(int $id): ?Comment
    {
        /** @var Comment|null */
        $comment = $this->createQueryBuilder('c')
                                ->select('c', 'a')
                                ->leftJoin('c.answers', 'a')
                                ->where('c.id = :id')
                                ->setParameter('id', $id)
                                ->orderBy('a.createdAt', 'DESC')
                                ->getQuery()
                                ->getOneOrNullResult()
                                ;
        if(!$comment)
        {
            return null;
        }

        $firstIsAdded = false;
        foreach($comment->getAnswers() as $answer)
        {
            if(!$firstIsAdded)
            {
                $comment->addFirstAnswer($answer);
                $firstIsAdded = true;
            }
            else
            {
                $comment->addRestAnswer($answer);
            }
        }
        
        $comment->setCountAnswers($comment->getAnswers()->count());

        return $comment;
    }

    
    public function hydrateWithCountAnswers(array $commentsById)
    {
        $data = $this->createQueryBuilder('c')
                ->select('c.id as id, COUNT(a.id) as count_answers')
                ->leftJoin('c.answers', 'a')
                ->groupBy('c')
                ->where('c IN (:c)')
                ->setParameter('c', $commentsById)
                ->getQuery()
                ->getResult()
                ;

        foreach($data as $d)
        {
            $commentsById[$d['id']]->setCountAnswers($d['count_answers']);
        }
    }

    
    /**
     * @param string $ownerClass (article | recipe)
     * @param int $id
     * @return PaginationInterface
     */
    public function filterByOwner(string $ownerClass, int $id, SearchParams $params): PaginationInterface
    {
        $qb = $this->createQueryBuilder('c')
                    ->select('c')
                    ->orderBy('c.createdAt', 'DESC')
                    ;
        if($ownerClass === 'article')
        {
            $qb
                ->join('c.article', 'article')
                ->andWhere('article.id = :id');
        }
        else
        {
            $qb
                ->join('c.recipe', 'recipe')
                ->andWhere('recipe.id = :id');
        }
        $qb->setParameter('id', $id);


        $this->applyFilters($qb, $params);
        
        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit() ?: 20
        );

        /** @var Comment[] */
        $commentsById = [];
        /** @var Comment $comment */
        foreach($pagination->getItems() as $comment)
        {
            $commentsById[$comment->getId()] = $comment;
        }

        $this->hydrateWithCountAnswers($commentsById);
        $this->answerRepository->hydrateCommentsWithFirstAnswers($commentsById);

        return $pagination;
    }

    private function applyFilters(QueryBuilder $qb, SearchParams $params): void 
    {
        if($params->getLang() !== null)
        {
            $qb->andWhere('c.lang = :lang')
                ->setParameter('lang', $params->getLang())
                ;
        }
    }





       /**
     * @param Comment[] $comments
     * @return void
     */
    private function hydrateWithAdminAnswered($comments): void 
    {
        // ADMIN
        $data = $this->createQueryBuilder('c')
                        ->select('c.id as c_id')
                        ->join('c.answers', 'a')
                        ->andWhere('c IN (:comments)')
                        ->setParameter('comments', $comments)
                        ->andWhere('a.type = :admin')
                        ->setParameter('admin', 'admin')
                        ->getQuery()
                        ->getResult()
                        ;
        
        /** @var Comment[] */
        $commentsById = array_reduce($comments, function ($acc, $comment) {
            $acc[$comment->getId()] = $comment;
            return $acc;
        }, []);

        foreach($data as $d)
        {
            $commentsById[$d['c_id']]->setAdminAnswered(true);
        }

    }


    public function adminFilter(Request $request, QuestionOrCommentFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('c');

        $this->applyAdminFilters($qb, $filter);

        $this->applyAdminSort($qb, $filter);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            20
        );

        $this->hydrateWithAdminAnswered($pagination->getItems());

        return $pagination;
    }


    private function applyAdminFilters(QueryBuilder $qb, QuestionOrCommentFilter $filter)
    {
        if($filter->getWithoutAnswer())
        {
            $qb->leftJoin('c.answers', 'a')
                ->andWhere('a IS NULL')
                ;
        }
        if($filter->getWithoutAdminAnswer() || $filter->getWithoutVendorAnswer())
        {
            $qb->andWhere(
                    $qb->expr()->notIn(
                        'c.id',
                        $this->createQueryBuilder('c2')
                            ->select('c2.id')
                            ->join('c2.answers', 'a')
                            ->where('a.type = :type')
                            ->getDQL()
                    )
                );
            $filter->getWithoutAdminAnswer() ? $qb->setParameter('type', 'admin'): $qb->setParameter('type', 'vendor');
        }
        if($filter->isAboutRecipe())
        {
            $qb->andWhere('c.recipe IS NOT NULL')
                ;
        }
        if($filter->isAboutArticle())
        {
            $qb->andWhere('c.article IS NOT NULL');
        }
        if($filter->getQ())
        {
            $qb->andWhere('c.content LIKE :q')
                ->setParameter('q', '%'.$filter->getQ().'%')
            ;
        }
    }

    private function applyAdminSort(QueryBuilder $qb, QuestionOrCommentFilter $filter)
    {
        if($filter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('c.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('c.createdAt', 'DESC');
        }
    }

//    /**
//     * @return Comment[] Returns an array of Comment objects
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

//    public function findOneBySomeField($value): ?Comment
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
