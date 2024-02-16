<?php
namespace App\Controller\Api\Blog;

use App\Convertor\RecipeSubCategoryToArrayConvertor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\SubCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiRecipeSubCategoriesController extends AbstractController 
{
    public function __construct(
        private SubCategoryRepository $subCategoryRepository,
        private RecipeSubCategoryToArrayConvertor $recipeSubCategoryConvertor
    )
    {

    }

    #[Route('/{_locale}/api/recipe/getSubCategories', name: 'api_recipe_getSubCategories', methods: ['GET'])]
    public function getSubCategories(Request $request): JsonResponse
    {
        $subCategories = $this->subCategoryRepository->findRecipeSubCategories();

        return $this->json(
            $this->recipeSubCategoryConvertor->convert($subCategories, $request->getLocale())
        );
    }
}