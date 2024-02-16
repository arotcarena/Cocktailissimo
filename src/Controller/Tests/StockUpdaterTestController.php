<?php
namespace App\Controller\Tests;

use App\Repository\PurchaseRepository;
use App\Service\StockUpdater;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class StockUpdaterTestController extends AbstractController
{

    public function __construct(
        private StockUpdater $stockUpdater,
        private PurchaseRepository $purchaseRepository
    )
    {

    }

    /**
     * sers à StockServiceFunctionalTest pour tester nb de query db
     */
    #[Route('/tests/stockUpdater/handlePurchase/{purchaseId}', name: 'tests_stockUpdater_handlePurchase')]
    public function handlePurchase(int $purchaseId): JsonResponse
    {
        $purchase = $this->purchaseRepository->find($purchaseId);
        $result = $this->stockUpdater->handlePurchase($purchase);
        return $this->json($result);
    }
}