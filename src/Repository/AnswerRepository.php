<?php

namespace App\Repository;

use App\Entity\Answer;
use App\Entity\Comment;
use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Answer>
 *
 * @method Answer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Answer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Answer[]    findAll()
 * @method Answer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Answer::class);
    }

       
    public function countByQuestionAndEmail(Question $question, string $email): int
    {
        return $this->createQueryBuilder('a')
                    ->select('COUNT(a.id) as count')
                    ->andWhere('a.question = :question')
                    ->setParameter('question', $question)
                    ->andWhere('a.email = :email')
                    ->setParameter('email', $email)
                    ->getQuery()
                    ->getResult()[0]['count']
                    ;
    }

    public function countByCommentAndEmail(Comment $comment, string $email): int
    {
        return $this->createQueryBuilder('a')
                    ->select('COUNT(a.id) as count')
                    ->andWhere('a.comment = :comment')
                    ->setParameter('comment', $comment)
                    ->andWhere('a.email = :email')
                    ->setParameter('email', $email)
                    ->getQuery()
                    ->getResult()[0]['count']
                    ;
    }

     /**
     * Pour l'instant hydrate avec seulement le premier child
     *
     * @param array $commentsById
     * @return void
     */
    public function hydrateCommentsWithFirstAnswers(array $commentsById)
    {
        $qb = $this->createQueryBuilder('a');
        $data = $qb->select('a as answer', 'c.id as comment_id')
                    ->join('a.comment', 'c')
                    ->where(
                        $qb->expr()->in(
                            'a.id',
                            $this->createQueryBuilder('a2')
                                ->select('MAX(a2.id)')
                                ->where('a2.comment IN (:comments)')
                                ->groupBy('a2.comment')
                                ->getDQL()
                        )
                    )
                    ->setParameter('comments', $commentsById)
                    ->getQuery()
                    ->getResult()
                ;

        foreach($data as $d)
        {
            /** @var Comment */
            $comment = $commentsById[$d['comment_id']];
            $comment->addFirstAnswer($d['answer']);
        }
    }

    /**
     * Undocumented function
     *
     * @param Question[] $questionsById
     * @return void
     */
    public function hydrateQuestionsWithFirstAnswers($questionsById): void 
    {
        $qb = $this->createQueryBuilder('a');
        $data = $qb
                    ->select('a as answer', 'qu.id as qu_id')
                    ->join('a.question', 'qu')
                    ->orWhere(
                        $qb->expr()->in(
                            'a.id',
                            $this->createQueryBuilder('a2')
                                    ->select('a2.id')
                                    ->andWhere('a2.question IN (:questions)')
                                    ->andWhere(
                                        $qb->expr()->orX(
                                            'a2.type = :admin',
                                            'a2.type = :vendor'
                                        )
                                    )
                                    ->getDQL()
                        )
                    )
                    ->orWhere(
                        $qb->expr()->in(
                            'a.id',
                            $this->createQueryBuilder('a3')
                                    ->select('MAX(a3.id)')
                                    ->groupBy('a3.question')
                                    ->andWhere('a3.question IN (:questions)')
                                    ->andWhere('a3.type = :customer')
                                    ->getDQL()
                        )
                    )
                    ->setParameter('questions', $questionsById)
                    ->setParameter('admin', 'admin')
                    ->setParameter('vendor', 'vendor')
                    ->setParameter('customer', 'customer')
                    ->orderBy('a.createdAt', 'DESC')
                    ->getQuery()
                    ->getResult()
                ;

        foreach($data as $d)
        {
            $question = $questionsById[$d['qu_id']];
            $question->addFirstAnswer($d['answer']);
        }

    }


//    /**
//     * @return Answer[] Returns an array of Answer objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Answer
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
