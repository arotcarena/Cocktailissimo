<?php
namespace App\Controller\Admin\Api;

use App\Convertor\Admin\StandardItemConvertor;
use App\Repository\PackagingRepository;
use App\Repository\PictureRepository;
use App\Repository\PostRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
class ApiAdminPostController extends AbstractController
{
    public function __construct(
        private StandardItemConvertor $standardItemConvertor,
        private PostRepository $postRepository,
        private PackagingRepository $packagingRepository,
        private PictureRepository $pictureRepository
    )
    {

    }

    #[Route('/admin/api/post/{id}/linkedProducts', name: 'admin_api_post_linkedProducts')]
    public function linkedProducts(int $id): JsonResponse
    {
        $post = $this->postRepository->find($id);
        if(!$post)
        {
            throw new Exception('Aucun Post avec l\'id '.$id);
        }

        $linkedProducts = $post->getLinkedProducts();
        $this->pictureRepository->hydrateProductsWithFirstPicture($linkedProducts);
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($linkedProducts); //la différence de "admin" c'est qu'il ne cherche pas à récupérer un packaging avec stock > 0
       
        return $this->json(
            $this->standardItemConvertor->convertProducts($linkedProducts->toArray())
        ); 
    }  
}