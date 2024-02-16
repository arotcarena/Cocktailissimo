<?php
namespace App\Controller\Api\Shop;

use App\Convertor\ArticleToArrayConvertor;
use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\Form\SearchParamsType;
use App\Repository\ArticleRepository;
use App\Repository\PictureRepository;
use App\Repository\RecipeRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiProductController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private ProductToArrayConvertor $productToArrayConvertor,
        private PictureRepository $pictureRepository,
        private RecipeToArrayConvertor $recipeToArrayConvertor,
        private RecipeRepository $recipeRepository,
        private ArticleToArrayConvertor $articleToArrayConvertor,
        private ArticleRepository $articleRepository
    )
    {

    }

    
    #[Route('/{_locale}/api/product/index', name: 'api_product_index', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function index(Request $request): JsonResponse 
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);
        
        /** @var PaginationInterface */
        $pagination = $this->productRepository->filter($searchParams, $request->getLocale());
        
        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->productToArrayConvertor->convert($pagination->getItems(), $request->getLocale(), 'index'),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/{_locale}/api/product/{id}/getSuggestedProducts', name: 'api_product_getSuggestedProducts', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getSuggestedProducts(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $suggestedProducts = $this->productRepository->findSuggestedProducts($id, $limit);
        return new JsonResponse(
            $this->productToArrayConvertor->convert($suggestedProducts, $request->getLocale(), 'index')
        );
    }

    #[Route('/{_locale}/api/product/{id}/getLinkedRecipes', name: 'api_product_getLinkedRecipes', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedRecipes(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $linkedRecipes = $this->recipeRepository->findProductLinkedRecipes($id, $limit);
        return new JsonResponse(
            $this->recipeToArrayConvertor->convert($linkedRecipes, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/product/{id}/getLinkedArticles', name: 'api_product_getLinkedArticles', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedArticles(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $linkedArticles = $this->articleRepository->findProductLinkedArticles($id, $limit);
        return new JsonResponse(
            $this->articleToArrayConvertor->convert($linkedArticles, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/product/findByIds', name: 'api_product_findByIds', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function findByIds(Request $request): JsonResponse
    {
        $ids = json_decode($request->getContent());
        if(!is_array($ids) || count($ids) === 0)
        {
            return new JsonResponse([
                'errors' => ['No ids provided']
            ], 500);
        }
        $products = $this->productRepository->findByIdGroup($ids);
        return new JsonResponse(
            $this->productToArrayConvertor->convert($products, $request->getLocale())
        );
    }

}