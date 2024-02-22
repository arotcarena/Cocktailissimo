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
}