<?php
namespace App\Controller\Api\Blog;

use App\Convertor\ArticleToArrayConvertor;
use App\Service\ArrayMixer;
use App\Form\SearchParamsType;
use App\Form\DataModel\SearchParams;
use App\Repository\RecipeRepository;
use App\Repository\ProductRepository;
use App\Convertor\RecipeToArrayConvertor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Convertor\ProductToArrayConvertor;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiRecipeController extends AbstractController 
{
    public function __construct(
        private RecipeRepository $recipeRepository,
        private ProductRepository $productRepository,
        private ProductToArrayConvertor $productToArrayConvertor,
        private RecipeToArrayConvertor $recipeToArrayConvertor,
        private ArrayMixer $arrayMixer,
        private ArticleToArrayConvertor $articleToArrayConvertor,
        private ArticleRepository $articleRepository
    )
    {

    }

    #[Route('/{_locale}/api/recipe/getLastsWithProducts', name: 'api_recipe_getLastsWithProducts', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLastsWithProducts(Request $request): Response
    {
        $offset = $request->query->get('offset', 0);
        $limit = $request->query->get('limit', 11);

        //WITHOUT_SHOP // REMETTRE çA
        if($this->isGranted('DEMO_USER'))
        {
            //on met 70% de recettes
            $recipeOffset = (int)round($offset * 70 / 100);
            $recipeLimit = (int)round($limit * 70 / 100);
            //et 30% de produits
            $productOffset = (int)round($offset * 30 / 100);
            $productLimit = (int)round($limit * 30 / 100);

            $recipes = $this->recipeRepository->findLasts($recipeLimit, $recipeOffset);
            $products = $this->productRepository->findLasts($productLimit, $productOffset);

            if(count($recipes) === 0)
            {
                //on arrête de charger des données (pour éviter de n'afficher que des produits)
                return $this->json([]);
            }

            //on convertit en array
            $recipesConverted = $this->recipeToArrayConvertor->convert($recipes, $request->getLocale(), 'long');
            $productsConverted = $this->productToArrayConvertor->convert($products, $request->getLocale(), 'long');

            $recipesAndProducts = $this->arrayMixer->dual($recipesConverted, $productsConverted, 2);
        
            return $this->json($recipesAndProducts);
        }
        else
        {
            //WITHOUT_SHOP // SUPPRIMER çA
            $recipes = $this->recipeRepository->findLasts($limit, $offset);
            return $this->json(
                $this->recipeToArrayConvertor->convert($recipes, $request->getLocale(), 'long')
            );
        }
    }

    #[Route('/{_locale}/api/recipe/index', name: 'api_recipe_index', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function index(Request $request): JsonResponse
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);
        /** @var PaginationInterface */
        $pagination = $this->recipeRepository->filter($searchParams, $request->getLocale());

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->recipeToArrayConvertor->convert($pagination->getItems(), $request->getLocale(), 'index'),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }

    #[Route('/{_locale}/api/recipe/{id}/getLinkedProducts', name: 'api_recipe_getLinkedProducts', methods: ['GET'])]
    public function getLinkedProducts(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $products = $this->productRepository->findRecipeLinkedProducts($id, $limit);

        return $this->json(
            $this->productToArrayConvertor->convert($products, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/recipe/{id}/getLinkedArticles', name: 'api_recipe_getLinkedArticles', methods: ['GET'])]
    public function getLinkedArticles(int $id, Request $request): JsonResponse
    {
        $limit = $request->query->get('limit', 20);
        $articles = $this->articleRepository->findRecipeLinkedArticles($id, $limit);

        return $this->json(
            $this->articleToArrayConvertor->convert($articles, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/recipe/{id}/getSimilarRecipes', name: 'api_recipe_getSimilarRecipes', methods: ['GET'])]
    public function getSimilarRecipes(int $id, Request $request)
    {
        $limit = $request->query->get('limit', 20);
        $similarRecipes = $this->recipeRepository->findSimilarRecipes($id, $limit);

        return $this->json(
            $this->recipeToArrayConvertor->convert($similarRecipes, $request->getLocale())
        );
    }
}