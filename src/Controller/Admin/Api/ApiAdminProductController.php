<?php
namespace App\Controller\Admin\Api;

use App\Convertor\Admin\StandardItemConvertor;
use App\Repository\PictureRepository;
use App\Repository\ProductRepository;
use App\Convertor\ProductToArrayConvertor;
use App\Repository\PackagingRepository;
use App\Service\PicturePathResolver;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
class ApiAdminProductController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private ProductToArrayConvertor $productToArrayConvertor,
        private PictureRepository $pictureRepository,
        private PicturePathResolver $picturePathResolver,
        private StandardItemConvertor $standardItemConvertor,
        private PackagingRepository $packagingRepository
    )
    {

    }

    #[Route('/admin/api/product/{id}/suggestedProducts', name: 'admin_api_product_suggestedProducts')]
    public function suggestedProducts(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            return new JsonResponse([
                'errors' => ['Le product avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $suggestedProducts = $product->getSuggestedProducts();
        $this->pictureRepository->hydrateProductsWithFirstPicture($suggestedProducts);
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($suggestedProducts);

        return new JsonResponse(
            $this->standardItemConvertor->convertProducts($suggestedProducts->toArray())
        );
    }

    #[Route('/admin/api/product/{id}/linkedRecipes', name: 'admin_api_product_linkedRecipes')]
    public function linkedRecipes(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            return new JsonResponse([
                'errors' => ['Le product avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedRecipes = $product->getLinkedRecipes();
        return new JsonResponse(
            $this->standardItemConvertor->convertRecipes($linkedRecipes->toArray())
        );
    }

    #[Route('/admin/api/product/{id}/linkedArticles', name: 'admin_api_product_linkedArticles')]
    public function linkedArticles(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            return new JsonResponse([
                'errors' => ['Le product avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedArticles = $product->getLinkedArticles();
        return new JsonResponse(
            $this->standardItemConvertor->convertArticles($linkedArticles->toArray())
        );
    }

    #[Route('/admin/api/product/search', name: 'admin_api_product_search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        if($q === '')
        {
            return new JsonResponse(['items' => [], 'count' => 0]);
        }
        $limit = $request->query->get('limit', 10);
        
        //on utilise adminQSearch plutôt que qSearch pour récupérer aussi les products avec mainStock = 0
        $products = $this->productRepository->adminQSearch($q, 'fr', $limit); 
        $count = $this->productRepository->adminCountQSearch($q, 'fr');

        return new JsonResponse([
            'items' => $this->standardItemConvertor->convertProducts($products),
            'count' => $count
        ]);
    }

}

