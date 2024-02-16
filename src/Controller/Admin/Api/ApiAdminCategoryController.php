<?php
namespace App\Controller\Admin\Api;

use App\Entity\SubCategory;
use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[IsGranted('ROLE_ADMIN')]
class ApiAdminCategoryController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository
    )
    {

    }

    #[Route('/admin/api/category/{id}/subCategory_ids', name: 'admin_api_category_findSubCategoryIdsByCategoryId')]
    public function findSubCategoryIdsByCategoryId(int $id): JsonResponse
    {
        $category = $this->categoryRepository->find($id);
        if(!$category) 
        {
            return new JsonResponse([
                'errors' => ['La catégorie avec l\'id "'.$id.'" n\'existe pas !']
            ], 500);
        }
        $ids = [];
        /** @var SubCategory $subCategory */
        foreach($category->getSubCategories() as $subCategory)
        {
            $ids[] = $subCategory->getId();
        }
        return new JsonResponse($ids);
    }

}