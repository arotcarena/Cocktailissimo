<?php

namespace App\Repository;

use App\Entity\Recipe;
use App\Entity\Product;
use App\Entity\Question;
use Doctrine\ORM\QueryBuilder;
use App\Form\DataModel\SearchParams;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use App\Form\Admin\DataModel\QuestionOrCommentFilter;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Question>
 *
 * @method Question|null find($id, $lockMode = null, $lockVersion = null)
 * @method Question|null findOneBy(array $criteria, array $orderBy = null)
 * @method Question[]    findAll()
 * @method Question[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry, 
        private PaginatorInterface $paginator, 
        private AnswerRepository $answerRepository,
        private PictureRepository $pictureRepository,
        private PackagingRepository $packagingRepository
    )
    {
        parent::__construct($registry, Question::class);
    }


    /**
     * @param Product|Recipe $owner
     * @param string $email
     * @return integer
     */
    public function countByOwnerAndEmail($owner, string $email): int
    {
        $qb = $this->createQueryBuilder('q')
                    ->select('COUNT(q.id) as count')
                    ->andWhere('q.email = :email')
                    ->setParameter('email', $email)
                    ;
        if($owner instanceof Recipe)
        {
            $qb->andWhere('q.recipe = :owner');
        }
        else
        {
            $qb->andWhere('q.product = :owner');
        }
            
        return $qb
                ->setParameter('owner', $owner)
                ->getQuery()
                ->getResult()[0]['count']
                ;
    }

    public function findOneHydrated(int $id): ?Question
    {
        /** @var Question|null */
        $question = $this->createQueryBuilder('q')
                                ->select('q', 'answers', 'r', 'rPic', 'rPicAlt', 'p', 'pDesignation', 'pSlug', 'c', 'cSlug', 'sc', 'scSlug')
                                ->leftJoin('q.answers', 'answers')
                                ->leftJoin('q.product', 'p')
                                ->leftJoin('q.recipe', 'r')
                                ->leftJoin('r.picture', 'rPic')
                                ->leftJoin('rPic.alt', 'rPicAlt')
                                ->leftJoin('p.designation', 'pDesignation')
                                ->leftJoin('p.slug', 'pSlug')
                                ->leftJoin('p.category', 'c')
                                ->leftJoin('c.slug', 'cSlug')
                                ->leftJoin('p.subCategory', 'sc')
                                ->leftJoin('sc.slug', 'scSlug')
                                ->where('q.id = :id')
                                ->setParameter('id', $id)
                                ->orderBy('answers.createdAt', 'DESC')
                                ->getQuery()
                                ->getOneOrNullResult()
                                ;
        if(!$question)
        {
            return null;
        }

        //on ajoute en priorité les vendor et admin answers
        foreach($question->getAnswers() as $answer)
        {
            switch($answer->getType())
            {
                case 'vendor':
                    $question->addFirstAnswer($answer);
                    break;
                case 'admin':
                    $question->addFirstAnswer($answer);
                    break;
                default:
                    break;
            }
        }
        
        //puis les customer answers
        $firstCustomerIsAdded = false;
        foreach($question->getAnswers() as $answer)
        {
            if($answer->getType() === 'customer')
            {
                if(!$firstCustomerIsAdded)
                {
                    $question->addFirstAnswer($answer);
                    $firstCustomerIsAdded = true;
                }
                else
                {
                    $question->addRestAnswer($answer);
                }
            }
        }
        $question->setCountAnswers($question->getAnswers()->count());

        $product = $question->getProduct();
        if($product)
        {
            $this->pictureRepository->hydrateProductsWithFirstPicture([$product]);
            $this->packagingRepository->hydrateProductsWithBasePackaging([$product]);
        }

        return $question;
    }

    public function hydrateWithCountAnswers(array $questionsById)
    {
        $data = $this->createQueryBuilder('q')
                ->select('q.id as id, COUNT(answers.id) as count_answers')
                ->leftJoin('q.answers', 'answers')
                ->groupBy('q')
                ->where('q IN (:qu)')
                ->setParameter('qu', $questionsById)
                ->getQuery()
                ->getResult()
                ;

        foreach($data as $d)
        {
            $questionsById[$d['id']]->setCountAnswers($d['count_answers']);
        }
    }

 
    public function filterByVendor(int $vendorId, SearchParams $params): PaginationInterface
    {
        $qb = $this->createQueryBuilder('q')
                    ->select('q', 'product', 'pDesignation', 'pSlug', 'c', 'cName', 'cSlug', 'sc', 'scName', 'scSlug')
                    ->join('q.product', 'product')
                    ->join('product.designation', 'pDesignation')
                    ->join('product.slug', 'pSlug')
                    ->join('product.category', 'c')
                    ->join('c.name', 'cName')
                    ->join('c.slug', 'cSlug')
                    ->join('product.subCategory', 'sc')
                    ->join('sc.name', 'scName')
                    ->join('sc.slug', 'scSlug')
                    ->where('product.vendor = :vendor')
                    ->setParameter('vendor', $vendorId)
                    ->orderBy('q.createdAt', 'DESC')
                    ;

        $this->applyFilters($qb, $params);

        $this->applyVendorSort($qb, $params);
        
        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit() ?: 20
        );

        /** @var Question[] */
        $questionsById = [];
        $products = [];
        /** @var Question $question */
        foreach($pagination->getItems() as $question)
        {
            $questionsById[$question->getId()] = $question;
            $products[] = $question->getProduct();
        }
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        $this->hydrateWithCountAnswers($questionsById);
        $this->answerRepository->hydrateQuestionsWithFirstAnswers($questionsById);

        return $pagination;
    }

    /**
     * @param string $ownerClass (product | recipe)
     * @param int $id
     * @return PaginationInterface
     */
    public function filterByOwner(string $ownerClass, int $id, SearchParams $params): PaginationInterface
    {
        $qb = $this->createQueryBuilder('q')
                    ->select('q')
                    ->orderBy('q.createdAt', 'DESC')
                    ;
        if($ownerClass === 'recipe')
        {
            $qb
                ->join('q.recipe', 'recipe')
                ->andWhere('recipe.id = :id');
        }
        else
        {
            $qb
                ->join('q.product', 'product')
                ->andWhere('product.id = :id');
        }
        $qb->setParameter('id', $id);


        $this->applyFilters($qb, $params);
        
        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $params->getPage() ?: 1,
            $params->getLimit() ?: 20
        );

        /** @var Question[] */
        $questionsById = [];
        /** @var Question $question */
        foreach($pagination->getItems() as $question)
        {
            $questionsById[$question->getId()] = $question;
        }
        $this->hydrateWithCountAnswers($questionsById);
        $this->answerRepository->hydrateQuestionsWithFirstAnswers($questionsById);

        return $pagination;
    }

    private function applyFilters(QueryBuilder $qb, SearchParams $params): void 
    {
        if($params->getQ() !== null && $params->getQ() !== '')
        {
            $qb->andWhere('q.title LIKE :q')
                ->setParameter('q', '%'.$params->getQ().'%')
                ;
        }
        if($params->getLang() !== null)
        {
            $qb->andWhere('q.lang = :lang')
                ->setParameter('lang', $params->getLang())
                ;
        }
        if($params->getWithoutAnswer() === true)
        {
            $qb->leftJoin('q.answers', 'a')
                ->andWhere('a IS NULL')
                ;
        }
    }

    private function applyVendorSort(QueryBuilder $qb, SearchParams $params): void 
    {
        if($params->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('q.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('q.createdAt', 'DESC');
        }
    }



    /**
     * @param QuestionAnswer[] $questionAnswers
     * @return void
     */
    private function hydrateWithAdminAnswered($questions): void 
    {
        // ADMIN
        $data = $this->createQueryBuilder('q')
                        ->select('q.id as q_id')
                        ->join('q.answers', 'a')
                        ->andWhere('q IN (:questions)')
                        ->setParameter('questions', $questions)
                        ->andWhere('a.type = :admin')
                        ->setParameter('admin', 'admin')
                        ->getQuery()
                        ->getResult()
                        ;
        
        /** @var QuestionAnswer[] */
        $questionsById = array_reduce($questions, function ($acc, $question) {
            $acc[$question->getId()] = $question;
            return $acc;
        }, []);

        foreach($data as $d)
        {
            $questionsById[$d['q_id']]->setAdminAnswered(true);
        }

    }


    public function adminFilter(Request $request, QuestionOrCommentFilter $filter): PaginationInterface
    {
        $qb = $this->createQueryBuilder('q');

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
            $qb->leftJoin('q.answers', 'a')
                ->andWhere('a IS NULL')
                ;
        }
        if($filter->getWithoutAdminAnswer() || $filter->getWithoutVendorAnswer())
        {
            $qb->andWhere(
                    $qb->expr()->notIn(
                        'q.id',
                        $this->createQueryBuilder('q2')
                            ->select('q2.id')
                            ->join('q2.answers', 'a')
                            ->where('a.type = :type')
                            ->getDQL()
                    )
                );
            $filter->getWithoutAdminAnswer() ? $qb->setParameter('type', 'admin'): $qb->setParameter('type', 'vendor');
        }
        if($filter->isAboutProduct())
        {
            $qb->andWhere('q.product IS NOT NULL')
                ;
        }
        if($filter->isAboutRecipe())
        {
            $qb->andWhere('q.recipe IS NOT NULL');
        }
        if($filter->getQ())
        {
            $qb->andWhere(
                    $qb->expr()->orX(
                        'q.title LIKE :q',
                        'q.question LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$filter->getQ().'%')
            ;
        }
    }

    private function applyAdminSort(QueryBuilder $qb, QuestionOrCommentFilter $filter)
    {
        if($filter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('q.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('q.createdAt', 'DESC');
        }
    }


    public function countQuestionsWithoutAdminAnswer(): int 
    {
        $qb = $this->createQueryBuilder('q');
        return $qb->select('COUNT(q.id) as count')
            ->where(
                $qb->expr()->notIn(
                    'q.id',
                    $this->createQueryBuilder('q2')
                            ->select('q2.id')
                            ->join('q2.answers', 'a')
                            ->where('a.type = :admin')
                            ->getDQL()
                )
            )
            ->setParameter('admin', 'admin')
            ->getQuery()
            ->getOneOrNullResult()['count'];
    }


//    /**
//     * @return QuestionAnswer[] Returns an array of QuestionAnswer objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('q.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?QuestionAnswer
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
