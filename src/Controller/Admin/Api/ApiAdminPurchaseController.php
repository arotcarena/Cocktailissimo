<?php
namespace App\Controller\Admin\Api;

use App\Config\SiteConfig;
use App\Repository\ShippingInfoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminPurchaseController extends AbstractController
{
    public function __construct(
        private ShippingInfoRepository $shippingInfoRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/admin/api/purchase/updateShippingStatus/{shippingInfoId}', name: 'admin_api_purchase_updateShippingStatus', methods: ['POST'])]
    public function updateShippingStatus(int $shippingInfoId, Request $request): JsonResponse
    {
        $shippingInfo = $this->shippingInfoRepository->find($shippingInfoId);
        if(!$shippingInfo)
        {
            throw new NotFoundHttpException('No ShippingInfo with id '.$shippingInfoId);
        }

        $newStatus = json_decode($request->getContent());

        if(!in_array($newStatus, [
            SiteConfig::SHIPPING_STATUS_PENDING,
            SiteConfig::SHIPPING_STATUS_SENT, 
            SiteConfig::SHIPPING_STATUS_DELIVERED,
            SiteConfig::SHIPPING_STATUS_CANCELED,
            SiteConfig::SHIPPING_STATUS_RETURN_SENT,
            SiteConfig::SHIPPING_STATUS_RETURN_DELIVERED,
        ]))
        {
            throw new Exception('Status submitted is not in shipping statuses list');
        }

        $shippingInfo->setStatus($newStatus);
        $this->em->flush();

        return $this->json($newStatus);
    }
}