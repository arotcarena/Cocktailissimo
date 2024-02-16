<?php
namespace App\Controller\Admin\Api;

use App\Convertor\Admin\StandardItemConvertor;
use App\Repository\ArticleRepository;
use App\Repository\ProductRepository;
use App\Repository\RecipeRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminStandardItemController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private StandardItemConvertor $standardItemConvertor
    )
    {
        
    }

    #[Route('/admin/api/standardItem/{type}/{id}/show', name: 'admin_api_standardItem_show', methods: ['GET'])]
    public function show(string $type, int $id): JsonResponse
    {
        switch($type)
        {
            case 'product':
                $item = $this->productRepository->find($id);
                break;
            case 'recipe':
                $item = $this->recipeRepository->find($id);
                break;
            case 'article':
                $item = $this->articleRepository->find($id);
                break;
            default:
                throw new Exception('Item type "'.$type.'" doesn\'t exist');
        }

        if(!$item)
        {
            throw new Exception('No item of type '.$type.' with id '.$id);
        }

        $convertType = 'convert' . ucfirst($type);

        return $this->json(
            $this->standardItemConvertor->$convertType($item)
        );
    }
}