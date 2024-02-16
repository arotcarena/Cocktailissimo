<?php
namespace App\Controller\Api\Search;

use App\Convertor\ArticleToArrayConvertor;
use App\Repository\ProductRepository;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\RecipeToArrayConvertor;
use App\Repository\ArticleRepository;
use App\Repository\RecipeRepository;
use App\Service\ArrayMixer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiSearchController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository,
        private ProductToArrayConvertor $productToArrayConvertor,
        private RecipeToArrayConvertor $recipeToArrayConvertor,
        private ArticleRepository $articleRepository,
        private ArticleToArrayConvertor $articleToArrayConvertor,
        private ArrayMixer $arrayMixer
    )
    {

    }

    #[Route('/{_locale}/api/search', name: 'api_search', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function search(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        if($q === '')
        {
            return new JsonResponse(['items' => [], 'count' => 0]);
        }

        $limit = $request->query->get('limit', 10);
        
        $recipes = $this->recipeRepository->qSearch($q, $request->getLocale(), $limit);
        $countRecipes = $this->recipeRepository->countQSearch($q, $request->getLocale());
        $recipesConverted = $this->recipeToArrayConvertor->convert($recipes, $request->getLocale(), 'small_index');
        
        //WITHOUT_SHOP
        if($this->isGranted('DEMO_USER'))
        {
            //remettre ça
            $products = $this->productRepository->qSearch($q, $request->getLocale(), $limit);
            $countProducts = $this->productRepository->countQSearch($q, $request->getLocale());
            $productsConverted = $this->productToArrayConvertor->convert($products, $request->getLocale(), 'small_index');
            
            $count = $countProducts + $countRecipes;
            $items = $this->arrayMixer->fifty($productsConverted, $recipesConverted, $limit);
        }
        else
        {
            //supprimer ça
            $articles = $this->articleRepository->qSearch($q, $request->getLocale(), $limit);
            $countArticles = $this->articleRepository->countQSearch($q, $request->getLocale());
            $articlesConverted = $this->articleToArrayConvertor->convert($articles, $request->getLocale(), 'small_index');
            $count = $countArticles + $countRecipes;
            $items = $this->arrayMixer->fifty($articlesConverted, $recipesConverted, $limit);
        }

        return new JsonResponse([
            'items' => $items,
            'count' => $count
        ]);
    }
}