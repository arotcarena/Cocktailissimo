<?php
namespace App\Controller\Api\Blog;

use App\Convertor\ArticleToArrayConvertor;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\Form\SearchParamsType;
use App\Form\DataModel\SearchParams;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ArticleRepository;
use App\Repository\ProductRepository;
use App\Repository\RecipeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiArticleController extends AbstractController 
{
    public function __construct(
        private ArticleRepository $articleRepository,
        private ArticleToArrayConvertor $articleConvertor,
        private ProductRepository $productRepository,
        private ProductToArrayConvertor $productConvertor,
        private RecipeRepository $recipeRepository,
        private RecipeToArrayConvertor $recipeToArrayConvertor
    )
    {

    }

    #[Route('/{_locale}/api/article/index', name: 'api_article_index', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function index(Request $request): JsonResponse 
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);
        /** @var PaginationInterface */
        $pagination = $this->articleRepository->filter($searchParams, $request->getLocale());

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->articleConvertor->convert($pagination->getItems(), $request->getLocale(), 'index'),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/{_locale}/api/article/{id}/getLinkedProducts', name: 'api_article_getLinkedProducts', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedProducts(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $products = $this->productRepository->findArticleLinkedProducts($id, $limit);

        return $this->json(
            $this->productConvertor->convert($products, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/article/{id}/getLinkedRecipes', name: 'api_article_getLinkedRecipes', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLinkedRecipes(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $linkedRecipes = $this->recipeRepository->findArticleLinkedRecipes($id, $limit);
        return new JsonResponse(
            $this->recipeToArrayConvertor->convert($linkedRecipes, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/article/{id}/getLastArticles', name: 'api_article_getLastArticles', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLastArticles(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $lastArticles = $this->articleRepository->findLastExcludeCurrent($id, $limit);
        return new JsonResponse(
            $this->articleConvertor->convert($lastArticles, $request->getLocale())
        );
    }
}