<?php
namespace App\Controller\Api\Blog;

use App\Convertor\ProductToArrayConvertor;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiPostController extends AbstractController
{
    public function __construct(
        private ProductToArrayConvertor $productConvertor,
        private ProductRepository $productRepository
    )
    {

    }

    #[Route('/{_locale}/api/post/{id}/linkedProducts', name: 'api_post_linkedProducts', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function linkedProducts(int $id, Request $request): JsonResponse
    {
        $products = $this->productRepository->findPostLinkedProducts($id, 20);
       
        return $this->json(
            $this->productConvertor->convert($products, $request->getLocale(), 'index')
        ); 
    }  
}