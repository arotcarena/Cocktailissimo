<?php
namespace App\Controller\Api\Shop;

use App\Config\SiteConfig;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Convertor\ReviewToArrayConvertor;
use App\Email\Security\ReviewConfirmationEmail;
use App\Entity\Review;
use App\Form\DataModel\SearchParams;
use App\Form\SearchParamsType;
use App\Helper\ObjectHydrator;
use App\Repository\ProductRepository;
use App\Repository\ReviewRepository;
use App\Verificator\UserBoughtProductVerificator;
use App\Verificator\UniqueEmailOnReviewAboutSameProductVerificator;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class ApiReviewController extends AbstractController
{
    public function __construct(
        private ReviewRepository $reviewRepository,
        private ReviewToArrayConvertor $reviewToArrayConvertor,
        private ConstraintViolationsToArrayConvertor $constraintViolationsConvertor,
        private ValidatorInterface $validator,
        private ObjectHydrator $objectHydrator,
        private EntityManagerInterface $em,
        private ProductRepository $productRepository,
        private TokenGeneratorInterface $tokenGenerator,
        private ReviewConfirmationEmail $reviewConfirmationEmail,
        private UserBoughtProductVerificator $userBoughtProductVerificator,
        private UniqueEmailOnReviewAboutSameProductVerificator $uniqueEmailOnReviewAboutSameProductVerificator,
        private TranslatorInterface $translator
    )
    {
        
    }

    #[Route('/{_locale}/api/review/show', name: 'api_review_show', methods: ['GET'])]
    public function show(Request $request): JsonResponse
    {
        $id = $request->query->get('id');

        $review = $this->reviewRepository->findOneHydrated($id);
        if(!$review)
        {
            throw new Exception('No Review with id '.$id);
        }

        //can answer
        $canAnswer = false;
        if($this->isGranted('CAN_ANSWER', $review))
        {
            $canAnswer = true;
        }

        return $this->json(
            $this->reviewToArrayConvertor->convert($review, $this->getUser(), $request->getLocale(), $canAnswer, true)
        );
    }

    /**
     * utilisé par vendor_shop
     */
    #[Route('/{_locale}/api/review/filterByVendorId/{vendorId}', name: 'api_review_filterByVendorId', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function filterByVendorId(int $vendorId, Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->reviewRepository->filterByVendorId($vendorId, $searchParams);
        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        //can answer
        //toutes les reviews sont du même vendeur donc il suffit d'en tester une
        $canAnswer = false;
        if(isset($pagination->getItems()[0]) && $this->isGranted('CAN_ANSWER', $pagination->getItems()[0]))
        {
            $canAnswer = true;
        }
        
        $reviewsConverted = $this->reviewToArrayConvertor->convert($pagination->getItems(), $this->getUser(), $request->getLocale(), $canAnswer, true);
        
        return new JsonResponse([
            'items' => $reviewsConverted,
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    /**
     * utilisé par product_show
     */
    #[Route('/{_locale}/api/review/filterByProductId/{productId}', name: 'api_review_filterByProductId', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function filterByProductId(int $productId, Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->reviewRepository->filterByProductId($productId, $searchParams);

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        //can answer
        //toutes les reviews sont du même vendeur donc il suffit d'en tester une
        $canAnswer = false;
        if(isset($pagination->getItems()[0]) && $this->isGranted('CAN_ANSWER', $pagination->getItems()[0]))
        {
            $canAnswer = true;
        }

        return new JsonResponse([
            'items' => $this->reviewToArrayConvertor->convert($pagination->getItems(), $this->getUser(), $request->getLocale(), $canAnswer),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/{_locale}/api/review/create/{productId}', name: 'api_review_create', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function create(int $productId, Request $request): JsonResponse
    {
        //on récupère les données
        $product = $this->productRepository->find($productId);
        if(!$product)
        {
            throw new Exception('No product with id '.$productId);
        }
        /** @var stdClass */
        $data = json_decode($request->getContent());

        //on crée la Review
        $review = new Review;
        $review->setProduct($product)
                ->setUser($this->getUser())
                ->setConfirmed($this->getUser() !== null)
                ->setCreatedAt(new DateTimeImmutable())
                ->setLang($request->getLocale())
                ->setModerationStatus(SiteConfig::MODERATION_STATUS_PENDING)
                ;
        $this->objectHydrator->hydrate($review, (array)$data);
        if($review->getUser() && $this->userBoughtProductVerificator->verify($review->getEmail(), $product))
        {
            $review->setBought(true);
        }

        //on valide la Review
        $constraintViolations = $this->validator->validate($review);
        if(count($constraintViolations) === 0)
        {
            //dernière validation : unique email for same product
            if(!$this->uniqueEmailOnReviewAboutSameProductVerificator->verify($product, $review->getEmail()))
            {
                return $this->json([
                    'errors' => [
                        //dans le cas ou aucun user n'est connecté, il peut s'agir d'une erreur d'entrée du champ mail
                        'email' => $this->translator->trans('error.review.same_email'),
                        //on envoie cette clé pour que le front sache que l'erreur sur l'email est de type uniqueEmail
                        'uniqueEmail' => $this->translator->trans('error.review.unique')
                    ],
                ], 500);
            }

            //si valide on sauvegarde la Review
            // si pas de user il faut prévoir le mail de confirmation
            if(!$review->getUser())
            {
                $review->setConfirmationToken($this->tokenGenerator->generateToken())
                        ->setConfirmationTokenExpireAt(time() + SiteConfig::TOKEN_TIME_VALIDITY)
                        ;
            }
            $this->em->persist($review);
            $this->em->flush();
            if(!$review->getUser())
            {
                $this->reviewConfirmationEmail->send($review);
            }
            return $this->json('ok');
        }
        // si invalide on renvoie les erreurs de validation
        return $this->json([
            'errors' => $this->constraintViolationsConvertor->convert($constraintViolations)
        ], 500);
    }

    #[Route('/{_locale}/api/review/delete/{id}', name: 'api_review_delete', methods: ['GET'])]
    public function delete(int $id): JsonResponse
    {
        $review = $this->reviewRepository->find($id);
        if(!$review)
        {
            throw new Exception('No review with id '.$id);
        }

        if(!$this->isGranted('CAN_DELETE', $review))
        {
            return $this->json([
                'errors' => 'Unauthorized action'
            ], 500);
        }
        $this->em->remove($review);
        $this->em->flush();
        return $this->json('ok');
    }
}