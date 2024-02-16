<?php
namespace App\Controller\Api\Purchase\Checkout;

use App\Convertor\ArticleToArrayConvertor;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\Repository\ArticleRepository;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Repository\RecipeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiCheckoutSuccessController extends AbstractController
{
    public function __construct(
        private PurchaseRepository $purchaseRepository,
        private ProductRepository $productRepository,
        private ProductToArrayConvertor $productToArrayConvertor,
        private RecipeRepository $recipeRepository,
        private RecipeToArrayConvertor $recipeToArrayConvertor,
        private ArticleRepository $articleRepository,
        private ArticleToArrayConvertor $articleToArrayConvertor
    )
    {
        
    }
    
    #[Route('/{_locale}/api/checkoutSuccess/{id}/getSuggestedProducts', name: 'api_checkoutSuccess_getSuggestedProducts', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getSuggestedProducts(int $id, Request $request): JsonResponse
    {
        $productId = $this->purchaseRepository->findMoreExpansiveProductId($id);
        $limit = $request->query->get('limit', 20);

        $suggestedProducts = $this->productRepository->findSuggestedProducts($productId, $limit);

        return new JsonResponse(
            $this->productToArrayConvertor->convert($suggestedProducts, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/checkoutSuccess/{id}/getLinkedRecipes', name: 'api_checkoutSuccess_getLinkedRecipes', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedRecipes(int $id, Request $request): JsonResponse
    {
        $productId = $this->purchaseRepository->findMoreExpansiveProductId($id);
        $limit = $request->query->get('limit', 20);

        $linkedRecipes = $this->recipeRepository->findProductLinkedRecipes($productId, $limit);

        return new JsonResponse(
            $this->recipeToArrayConvertor->convert($linkedRecipes, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/checkoutSuccess/{id}/getLinkedArticles', name: 'api_checkoutSuccess_getLinkedArticles', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedArticles(int $id, Request $request): JsonResponse
    {
        $productId = $this->purchaseRepository->findMoreExpansiveProductId($id);
        $limit = $request->query->get('limit', 20);

        $linkedArticles = $this->articleRepository->findProductLinkedArticles($productId, $limit);

        return new JsonResponse(
            $this->articleToArrayConvertor->convert($linkedArticles, $request->getLocale())
        );
    }
}