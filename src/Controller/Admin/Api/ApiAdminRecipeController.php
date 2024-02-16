<?php
namespace App\Controller\Admin\Api;

use App\Convertor\Admin\StandardItemConvertor;
use App\Entity\Recipe;
use App\Repository\PackagingRepository;
use App\Repository\PictureRepository;
use App\Repository\RecipeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



#[IsGranted('ROLE_ADMIN')]
class ApiAdminRecipeController extends AbstractController
{
    public function __construct(
        private RecipeRepository $recipeRepository,
        private StandardItemConvertor $standardItemConvertor,
        private PackagingRepository $packagingRepository,
        private PictureRepository $pictureRepository
    )
    {

    }

    #[Route('/admin/api/recipe/search', name: 'admin_api_recipe_search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        if($q === '')
        {
            return new JsonResponse(['items' => [], 'count' => 0]);
        }
        $limit = $request->query->get('limit', 10);
        $recipes = $this->recipeRepository->qSearch($q, 'fr', $limit);

        $count = $this->recipeRepository->countQSearch($q, 'fr');

        return new JsonResponse([
            'items' => $this->standardItemConvertor->convertRecipes($recipes),
            'count' => $count
        ]);
    }

    #[Route('/admin/api/recipe/{id}/linkedProducts', name: 'admin_api_recipe_linkedProducts')]
    public function linkedProducts(int $id): JsonResponse
    {
        $recipe = $this->recipeRepository->find($id);
        if(!$recipe)
        {
            return new JsonResponse([
                'errors' => ['La recipe avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedProducts = $recipe->getLinkedProducts();
        $this->pictureRepository->hydrateProductsWithFirstPicture($linkedProducts);
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($linkedProducts);
        
        return new JsonResponse(
            $this->standardItemConvertor->convertProducts($linkedProducts->toArray())
        );
    }

    #[Route('/admin/api/recipe/{id}/linkedArticles', name: 'admin_api_recipe_linkedArticles')]
    public function linkedArticles(int $id): JsonResponse
    {
        $recipe = $this->recipeRepository->find($id);
        if(!$recipe)
        {
            return new JsonResponse([
                'errors' => ['La recipe avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedArticles = $recipe->getLinkedArticles();
        return new JsonResponse(
            $this->standardItemConvertor->convertArticles($linkedArticles->toArray())
        );
    }
}

