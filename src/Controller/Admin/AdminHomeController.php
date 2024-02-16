<?php
namespace App\Controller\Admin;

use App\AutoRemover\AdminAutoRemover;
use App\Config\SiteConfig;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\CommentRepository;
use App\Repository\ContactRepository;
use App\Repository\IngredientRepository;
use App\Repository\PostRepository;
use App\Repository\ProductRepository;
use App\Repository\ProspectEmailRepository;
use App\Repository\PurchaseRepository;
use App\Repository\QuestionRepository;
use App\Repository\RecipeRepository;
use App\Repository\ReviewRepository;
use App\Repository\SubCategoryRepository;
use App\Repository\UserRepository;
use App\Repository\VendorContactRepository;
use App\Repository\VisitorActionRepository;
use App\Repository\VisitorRepository;
use App\Repository\VisitRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

#[IsGranted('ROLE_ADMIN')]
class AdminHomeController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository,
        private PurchaseRepository $purchaseRepository,
        private ReviewRepository $reviewRepository,
        private UserRepository $userRepository,
        private RecipeRepository $recipeRepository,
        private IngredientRepository $ingredientRepository,
        private ArticleRepository $articleRepository,
        private PostRepository $postRepository,
        private QuestionRepository $questionRepository,
        private CommentRepository $commentRepository,
        private ProspectEmailRepository $prospectEmailRepository,
        private ContactRepository $contactRepository,
        private VendorContactRepository $vendorContactRepository,
        private VisitRepository $visitRepository,
        private VisitorRepository $visitorRepository,
        private VisitorActionRepository $visitorActionRepository,
    )
    {

    }

    #[Route('/admin', name: 'admin_home')]
    public function index(Request $request): Response
    {
        $productCount = $this->productRepository->count([]);
        $noStockCount = $this->productRepository->count(['mainStock' => 0]);
        $categoryCount = $this->categoryRepository->count([]);
        $subCategoryCount = $this->subCategoryRepository->count([]);
        $recipeCount = $this->recipeRepository->count([]);
        $articleCount = $this->articleRepository->count([]);
        $ingredientCount = $this->ingredientRepository->count([]);
        $count_reviewsPending = $this->reviewRepository->count(['moderationStatus' => SiteConfig::MODERATION_STATUS_PENDING]);
        $userCount = $this->userRepository->count([]);
        $vendorCount = $this->userRepository->countVendors();
        $postCount = $this->postRepository->count([]);
        $questionsWaitingAdminAnswer = $this->questionRepository->countQuestionsWithoutAdminAnswer();
        $questionCount = $this->questionRepository->count([]);
        $commentCount = $this->commentRepository->count([]);
        $prospectEmailsCount = $this->prospectEmailRepository->count([]);
        $contactCount = $this->contactRepository->count([]);
        $vendorContactCount = $this->vendorContactRepository->count([]);
        $countVisits = $this->visitRepository->count([]);
        $countAcceptedReviews = $this->reviewRepository->count(['moderationStatus' => SiteConfig::MODERATION_STATUS_ACCEPTED]);

        $vendorsWithoutSendcloudIdCount = $this->userRepository->countVendorsWithoutSendcloudId();

        return $this->render('admin/home/index.html.twig', [
            'product_count' => $productCount,
            'noStock_count' => $noStockCount,
            'category_count' => $categoryCount,
            'subCategory_count' => $subCategoryCount,
            'recipe_count' => $recipeCount,
            'ingredient_count' => $ingredientCount,
            'reviews_pending_count' => $count_reviewsPending,
            'user_count' => $userCount,
            'vendor_count' => $vendorCount,
            'article_count' => $articleCount,
            'post_count' => $postCount,
            'questions_waiting_admin_answer' => $questionsWaitingAdminAnswer,
            'question_count' => $questionCount,
            'comment_count' => $commentCount,
            'prospect_emails_count' => $prospectEmailsCount,
            'contact_count' => $contactCount,
            'vendorContact_count' => $vendorContactCount,
            'vendorsWithoutSendcloudId_count' => $vendorsWithoutSendcloudIdCount,
            'count_visits' => $countVisits,
            'count_acceptedReviews' => $countAcceptedReviews
        ]);
    }
}