<?php
namespace App\Controller\Api\Blog;

use Exception;
use App\Entity\User;
use App\Entity\Comment;
use App\Form\SearchParamsType;
use App\Helper\ObjectHydrator;
use App\Form\DataModel\SearchParams;
use App\Repository\RecipeRepository;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Convertor\CommentToArrayConvertor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Verificator\LimitEmailOnCommentWithSameOwnerVerificator;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiCommentController extends AbstractController
{
    public function __construct(
        private CommentRepository $commentRepository,
        private CommentToArrayConvertor $commentToArrayConvertor,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private ObjectHydrator $objectHydrator,
        private ValidatorInterface $validator,
        private LimitEmailOnCommentWithSameOwnerVerificator $limitEmailOnCommentWithSameOwnerVerificator,
        private EntityManagerInterface $em,
        private ConstraintViolationsToArrayConvertor $constraintViolationsConvertor
    )
    {

    }

    #[Route('/{_locale}/api/comment/show', name: 'api_comment_show', methods: ['GET'])]
    public function show(Request $request): JsonResponse
    {
        $id = $request->query->get('id');

        $comment = $this->commentRepository->findOneHydrated($id);
        if(!$comment)
        {
            throw new Exception('No comment corresponding to given id "'.$id.'"');
        }

        return $this->json(
            $this->commentToArrayConvertor->convert($comment, $this->getUser(), $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/comment/filterByOwner/{owner}/{id}', name: 'api_comment_filterByOwner', methods: ['GET'], requirements: [
        'owner' => 'recipe|article',
        'id' => '\d+',
        '_locale' => '%app.supported_locales%'
    ])]
    public function filterByOwner(string $owner, int $id, Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->commentRepository->filterByOwner($owner, $id, $searchParams);

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->commentToArrayConvertor->convert($pagination->getItems(), $this->getUser(), $request->getLocale()),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/comment/create/{owner}/{id}', name: 'api_comment_create', methods: ['POST'], requirements: [
        'id' => '\d+',
        'owner' => 'recipe|article'
    ])]
    public function create(string $owner, int $id, Request $request): JsonResponse
    {
        $comment = new Comment;

        if($owner === 'recipe')
        {
            $owner = $this->recipeRepository->findOneLightBy(['id' => $id]);
            if(!$owner)
            {
                throw new Exception('No recipe with given id. Cannot create comment.');
            }
            $comment->setRecipe($owner);
        }
        else
        {
            $owner = $this->articleRepository->findOneLightBy(['id' => $id]);
            if(!$owner)
            {
                throw new Exception('No article with given id. Cannot create comment.');
            }
            $comment->setArticle($owner);
        }
        
        /** @var stdClass */
        $data = json_decode($request->getContent());

        /** @var User */
        $user = $this->getUser();
        $comment->setUser($user)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setLang($request->getLocale())
                        ->setFullName($user->getFirstName())
                        ->setEmail($user->getEmail())
                    ;
        $this->objectHydrator->hydrate($comment, (array)$data);

        //on valide le comment
        $constraintViolations = $this->validator->validate($comment);
        if(count($constraintViolations) === 0)
        {
            //si valide on sauvegarde le comment
            $this->em->persist($comment);
            $this->em->flush();
            return $this->json('ok');
        }
        // si invalide on renvoie les erreurs de validation
        return $this->json([
            'errors' => $this->constraintViolationsConvertor->convert($constraintViolations)
        ], 500);
    }

    #[Route('/{_locale}/api/comment/delete/{id}', name: 'api_comment_delete', methods: ['GET'])]
    public function delete(int $id): JsonResponse
    {
        $comment = $this->commentRepository->find($id);
        if(!$comment)
        {
            throw new Exception('No comment with id '.$id);
        }

        if(!$this->isGranted('CAN_DELETE', $comment))
        {
            return $this->json([
                'errors' => 'Unauthorized action'
            ], 500);
        }
        $this->em->remove($comment);
        $this->em->flush();
        return $this->json('ok');
    }
}