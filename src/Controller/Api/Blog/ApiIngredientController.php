<?php
namespace App\Controller\Api\Blog;

use App\Convertor\IngredientToArrayConvertor;
use App\Repository\IngredientRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiIngredientController extends AbstractController
{
    public function __construct(
        private IngredientRepository $ingredientRepository,
        private IngredientToArrayConvertor $ingredientConvertor
    )
    {

    }

    #[Route('/{_locale}/api/ingredient/qSearch', name: 'api_ingredient_qSearch', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function qSearch(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        if($q === '')
        {
            return new JsonResponse(['items' => [], 'count' => 0]);
        }
        $limit = $request->query->get('limit', 5);

        $ingredients = $this->ingredientRepository->qSearch($q, $request->getLocale(), $limit);

        $ingredientsConverted = $this->ingredientConvertor->convert($ingredients, $request->getLocale(), 'small_index');

        return new JsonResponse($ingredientsConverted);
    }
}