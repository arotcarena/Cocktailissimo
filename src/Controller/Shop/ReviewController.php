<?php
namespace App\Controller\Shop;

use App\Entity\Review;
use App\Helper\DateTimeGenerator;
use App\Repository\ProductRepository;
use App\Repository\ReviewRepository;
use App\Security\TokenVerificator;
use App\Verificator\UserBoughtProductVerificator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;


class ReviewController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private DateTimeGenerator $dateTimeGenerator,
        private EntityManagerInterface $em,
        private UserBoughtProductVerificator $userBoughtProductVerificator,
        private TranslatorInterface $translator,
        private TokenVerificator $tokenVerificator,
        private ReviewRepository $reviewRepository
    )
    {

    }

    #[Route('/{_locale}/review/confirmation', name: 'review_confirmation', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function confirmation(Request $request): Response
    {
        /** vérification du token */
        /** @var Review */
        $review = $this->tokenVerificator->resolve($request->query->get('token'), 'confirmationToken', $this->reviewRepository);
        if($review === null)
        {
            $this->addFlash('danger', $this->translator->trans('error.invalidLink'));
            return $this->redirectToRoute('home', [
                '_locale' => $request->getLocale()
            ]);
        }

        //update de la review confirmation = true
        $review->setConfirmed(true);
        $this->em->flush();

        $this->addFlash('success', $this->translator->trans('success.review_confirmation'));
        return $this->redirectToRoute('home', [
            '_locale' => $request->getLocale()
        ]);
    }


    // #[Route(
    //     [
    //         'en' => '/en/leave-a-review/{productSlug}_{publicRef}.html',
    //         'fr' => '/fr/laisser-un-avis/{productSlug}_{publicRef}.html',
    //         'es' => '/es/dejar-una-reseña/{productSlug}_{publicRef}.html',
    //         'it' => '/it/lasciare-una-recensione/{productSlug}_{publicRef}.html'
    //     ],
    //     name: 'review_create', 
    //     requirements: [
    //         'productSlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+'
    //     ],
    //     methods: ['GET', 'POST'],
    //     priority: 1
    // )]
    // public function create(Request $request, string $publicRef): Response
    // {
    //     $product = $this->productRepository->findOneByPublicRef($publicRef);
    //     if(!$product)
    //     {
    //         throw new NotFoundResourceException($this->translator->trans('error.pageNotFound', [], 'alerts'));
    //     }
    //     if(!$this->userBoughtProductVerificator->verify($this->getUser(), $product))
    //     {
    //         throw new UnauthorizedHttpException($this->translator->trans('error.cannotReviewProductNotBought', [], 'alerts'));
    //     }

    //     $review = new Review;
    //     $form = $this->createForm(ReviewType::class, $review);
    //     $form->handleRequest($request);

    //     if($form->isSubmitted() && $form->isValid())
    //     {
    //         $review->setProduct($product)
    //                 ->setUser($this->getUser())
    //                 ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
    //                 ;
    //         $this->em->persist($review);
    //         $this->em->flush();
    //         $this->addFlash('success', $this->translator->trans('success.reviewCreate', [], 'alerts'));
    //         return $this->redirectToRoute('home', ['_locale' => $request->getLocale()]);
    //     }

    //     return $this->render('shop/review/create.html.twig', [
    //         'product' => $product,
    //         'form' => $form->createView()
    //     ]);
    // }
}