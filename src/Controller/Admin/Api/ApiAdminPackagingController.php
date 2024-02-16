<?php
namespace App\Controller\Admin\Api;

use App\Entity\Packaging;
use App\Repository\PackagingRepository;
use Exception;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class ApiAdminPackagingController extends AbstractController
{
    public function __construct(
        private PackagingRepository $packagingRepository
    )
    {
        
    }

    /**
     * On vérifie que la publicRef ne soit pas déjà existante sur le packaging d'un autre produit 
     * (sur le même produit ça ne pose pas de problème car tous les anciens packagingChoices sont supprimés avant chaque update)
     */
    #[Route('/admin/api/packaging/validation/uniquePublicRef/{productId}/{publicRef}', name: 'admin_api_packaging_validation_uniquePublicRef')]
    public function validateUniquePublicRef(string $publicRef, int $productId): JsonResponse 
    {
        $qb = $this->packagingRepository->createQueryBuilder('pack')
                                        ->andWhere('pack.publicRef = :publicRef')
                                        ->setParameter('publicRef', $publicRef)
                                        ;
                                                        
        if($productId !== 0)
        {
            $qb
                ->andWhere('pack.product != :productId')
                ->setParameter('productId', $productId)
            ;
        }
        /** @var Packaging|null */
        $existingPackaging = $qb
                                ->getQuery()
                                ->getOneOrNullResult()
                                ;

        if($existingPackaging)
        {
            throw new Exception('La réf. publique "' . $publicRef . '" est déjà utilisée');
        }
        return $this->json('ok');
    }
}