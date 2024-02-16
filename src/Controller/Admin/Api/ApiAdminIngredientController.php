<?php
namespace App\Controller\Admin\Api;

use App\Convertor\IngredientToArrayConvertor;
use App\Repository\IngredientRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[IsGranted('ROLE_ADMIN')]
class ApiAdminIngredientController extends AbstractController
{
    public function __construct(
        private IngredientRepository $ingredientRepository,
        private IngredientToArrayConvertor $ingredientConvertor
    )
    {
        
    }

    #[Route('/admin/api/ingredient/qSearch', name: 'admin_api_ingredient_qSearch')]
    public function qSearch(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        
        $ingredients = $this->ingredientRepository->adminQSearch($q);

        return $this->json(
            $this->ingredientConvertor->convert($ingredients, 'fr')
        );
    }
}