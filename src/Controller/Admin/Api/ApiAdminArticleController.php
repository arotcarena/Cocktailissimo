<?php
namespace App\Controller\Admin\Api;

use App\Convertor\Admin\StandardItemConvertor;
use App\Repository\ArticleRepository;
use App\Repository\PackagingRepository;
use App\Repository\PictureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



#[IsGranted('ROLE_ADMIN')]
class ApiAdminArticleController extends AbstractController
{
    public function __construct(
        private ArticleRepository $articleRepository,
        private StandardItemConvertor $standardItemConvertor,
        private PictureRepository $pictureRepository,
        private PackagingRepository $packagingRepository
    )
    {

    }

    #[Route('/admin/api/article/search', name: 'admin_api_article_search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $q = $request->query->get('q');
        if($q === '')
        {
            return new JsonResponse(['items' => [], 'count' => 0]);
        }
        $limit = $request->query->get('limit', 10);
        $articles = $this->articleRepository->qSearch($q, 'fr', $limit);

        $count = $this->articleRepository->countQSearch($q, 'fr');

        return new JsonResponse([
            'items' => $this->standardItemConvertor->convertArticles($articles),
            'count' => $count
        ]);
    }

    
    #[Route('/admin/api/article/{id}/linkedProducts', name: 'admin_api_article_linkedProducts')]
    public function linkedProducts(int $id): JsonResponse
    {
        $article = $this->articleRepository->find($id);
        if(!$article)
        {
            return new JsonResponse([
                'errors' => ['L\'article avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedProducts = $article->getLinkedProducts();
        $this->pictureRepository->hydrateProductsWithFirstPicture($linkedProducts);
        $this->packagingRepository->adminHydrateProductsWithBasePackaging($linkedProducts);

        return new JsonResponse(
            $this->standardItemConvertor->convertProducts($linkedProducts->toArray())
        );
    }

    #[Route('/admin/api/article/{id}/linkedRecipes', name: 'admin_api_article_linkedRecipes')]
    public function linkedRecipes(int $id): JsonResponse
    {
        $article = $this->articleRepository->find($id);
        if(!$article)
        {
            return new JsonResponse([
                'errors' => ['L\'article avec l\'id '.$id.'n\'existe pas']
            ], 500);
        }
        $linkedRecipes = $article->getLinkedRecipes();
        return new JsonResponse(
            $this->standardItemConvertor->convertRecipes($linkedRecipes->toArray())
        );
    }
    
}

