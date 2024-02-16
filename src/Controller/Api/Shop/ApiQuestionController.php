<?php
namespace App\Controller\Api\Shop;

use stdClass;
use Exception;
use App\Entity\User;
use App\Form\SearchParamsType;
use App\Helper\ObjectHydrator;
use App\Helper\DateTimeGenerator;
use App\Form\DataModel\SearchParams;
use App\Repository\AnswerRepository;
use App\Repository\RecipeRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Verificator\UserBoughtProductVerificator;
use Symfony\Component\HttpFoundation\Request;
use App\Email\Security\ReviewConfirmationEmail;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Email\Admin\AdminQuestionNotificationEmail;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Convertor\QuestionToArrayConvertor;
use App\Entity\Question;
use App\Repository\QuestionRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Verificator\LimitEmailOnQuestionWithSameOwnerVerificator;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class ApiQuestionController extends AbstractController
{
    public function __construct(
        private QuestionRepository $questionRepository,
        private QuestionToArrayConvertor $questionConvertor,
        private ConstraintViolationsToArrayConvertor $constraintViolationsConvertor,
        private ValidatorInterface $validator,
        private ObjectHydrator $objectHydrator,
        private EntityManagerInterface $em,
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository,
        private DateTimeGenerator $dateTimeGenerator,
        private TokenGeneratorInterface $tokenGenerator,
        private ReviewConfirmationEmail $reviewConfirmationEmail,
        private UserBoughtProductVerificator $userBoughtProductVerificator,
        private AnswerRepository $answerRepository,
        private LimitEmailOnQuestionWithSameOwnerVerificator $limitEmailOnQuestionWithSameOwnerVerificator,
        private AdminQuestionNotificationEmail $adminQuestionNotificationEmail
    )
    {
        
    }

    #[Route('/{_locale}/api/question/show', name: 'api_question_show', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function show(Request $request): JsonResponse
    {
        $id = $request->query->get('id');

        $question = $this->questionRepository->findOneHydrated($id);
        if(!$question)
        {
            throw new Exception('No Question with id '.$id);
        }
        return $this->json(
            $this->questionConvertor->convert($question, $this->getUser(), $request->getLocale(), true)
        );
    }

    #[Route('/{_locale}/api/question/filterByVendor/{vendorId}', name: 'api_question_filterByVendor', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function filterByVendor(int $vendorId, Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->questionRepository->filterByVendor($vendorId, $searchParams);

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->questionConvertor->convert($pagination->getItems(), $this->getUser(), $request->getLocale(), true),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/{_locale}/api/question/filterByOwner/{owner}/{id}', name: 'api_question_filterByOwner', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%',
        'owner' => 'product|recipe'
    ])]
    public function filterByOwner(string $owner, int $id, Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->questionRepository->filterByOwner($owner, $id, $searchParams);

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->questionConvertor->convert($pagination->getItems(), $this->getUser(), $request->getLocale()),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/question/create/{owner}/{id}', name: 'api_question_create', methods: ['POST'], requirements: [
        'id' => '\d+',
        'owner' => 'recipe|product'
    ])]
    public function create(string $owner, int $id, Request $request): JsonResponse
    {
        $question = new Question;

        if($owner === 'recipe')
        {
            $owner = $this->recipeRepository->findOneLightBy(['id' => $id]); //méthode avec hydratation juste suffisante pour générer l'url show
            if(!$owner)
            {
                throw new Exception('no recipe with id '.$id);
            }
            $question->setRecipe($owner);
        }
        else
        {
            $owner = $this->productRepository->findOneLightBy(['id' => $id]); //méthode avec hydratation juste suffisante pour générer l'url show
            if(!$owner)
            {
                throw new Exception('no product with id '.$id);
            }
            $question->setProduct($owner);
        }
        
        /** @var stdClass */
        $data = json_decode($request->getContent());

        //on crée la question
        /** @var User */
        $user = $this->getUser();
        $question->setUser($user)
                        ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
                        ->setLang($request->getLocale())
                        ->setFullName($user->getFirstName())
                        ->setEmail($user->getEmail())
                    ;
        $this->objectHydrator->hydrate($question, (array)$data);

        //on valide la question
        $constraintViolations = $this->validator->validate($question);
        if(count($constraintViolations) === 0)
        {
            //si valide on sauvegarde la question
            $this->em->persist($question);
            $this->em->flush();
            //et on envoie un mail à l'admin
            $this->adminQuestionNotificationEmail->send($question);
            return $this->json('ok');
        }
        // si invalide on renvoie les erreurs de validation
        return $this->json([
            'errors' => $this->constraintViolationsConvertor->convert($constraintViolations)
        ], 500);
    }

    #[Route('/{_locale}/api/question/delete/{id}', name: 'api_question_delete', methods: ['GET'])]
    public function delete(int $id): JsonResponse
    {
        $question = $this->questionRepository->find($id);
        if(!$question)
        {
            throw new Exception('No question with id '.$id);
        }

        if(!$this->isGranted('CAN_DELETE', $question))
        {
            return $this->json([
                'errors' => 'Unauthorized action'
            ], 500);
        }
        $this->em->remove($question);
        $this->em->flush();
        return $this->json('ok');
    }
}