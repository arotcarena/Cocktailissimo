<?php
namespace App\Controller\Admin\Shop;

use App\Form\Admin\DataModel\ReviewFilter;
use App\Form\Admin\ReviewFilterType;
use App\Repository\ReviewRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminReviewController extends AbstractController
{
    public function __construct(
        private ReviewRepository $reviewRepository,
    )
    {

    }

    #[Route('/admin/review/index', name: 'admin_review_index')]
    public function index(Request $request): Response
    {
        $reviewFilter = new ReviewFilter;
        $form = $this->createForm(ReviewFilterType::class, $reviewFilter);
        $form->handleRequest($request);

        $pagination = $this->reviewRepository->adminFilter($request, $reviewFilter, 20);

        return $this->render('admin/publication/review/index.html.twig', [
            'reviews_pending_count' => $this->reviewRepository->count(['moderationStatus' => null]),
            'pagination' => $pagination,
            'form' => $form->createView()
        ]);
    }

}