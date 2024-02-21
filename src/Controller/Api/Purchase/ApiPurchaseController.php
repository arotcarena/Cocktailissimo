<?php
namespace App\Controller\Api\Purchase;

use App\Convertor\PurchaseToArrayConvertor;
use App\Repository\CartRepository;
use App\Repository\PurchaseRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\Stripe\StripeService;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

#[IsGranted('ROLE_USER')]
class ApiPurchaseController extends AbstractController
{
    public function __construct(
        private CartRepository $cartRepository,
        private PurchaseRepository $purchaseRepository,
        private EntityManagerInterface $em,
        private StripeService $stripeService,
        private PaginatorInterface $paginator,
        private PurchaseToArrayConvertor $purchaseConvertor,
        private TranslatorInterface $translator
    )
    {

    }

    #[Route('/{_locale}/api/purchase/findPaginatedLight', name: 'api_purchase_findPaginatedLight', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function findPaginatedLight(Request $request): JsonResponse
    {
        $perPage = $request->query->get('limit', 5);
        $currentPage = $request->query->get('page', 1);

        /** @var User */
        $user = $this->getUser();

        $pagination = $this->purchaseRepository->findPaginatedByCustomerEmail($user->getEmail(), $currentPage, $perPage);
        
        $maxPage = ceil($pagination->getTotalItemCount() / $perPage);
        return $this->json([
            'purchases' => $this->purchaseConvertor->convert($pagination->getItems(), $request->getLocale()),
            'count' => $pagination->getTotalItemCount(),
            'currentPage' => $currentPage,
            'maxPage' => $maxPage,
            'perPage' => $perPage
        ]);
    }

    #[Route('/{_locale}/api/purchase/{id}/findOneFull', name: 'api_purchase_findOneFull', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function findOneFull(int $id, Request $request): JsonResponse
    {
        $purchase = $this->purchaseRepository->find($id);
        if(!$purchase)
        {
            throw new NotFoundResourceException('Aucune purchase avec l\'id '.$id);
        }
        return $this->json(
            $this->purchaseConvertor->convert($purchase, $request->getLocale(), 'full')
        );
    }
}


