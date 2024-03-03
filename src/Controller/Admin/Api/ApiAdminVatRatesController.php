<?php
namespace App\Controller\Admin\Api;

use App\Config\VatLevels;
use App\Price\Vat\VatRatesStorage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminVatRatesController extends AbstractController
{
    public function __construct(
        private VatRatesStorage $vatRatesStorage
    )
    {
        
    }

    #[Route('/admin/api/vatRates/getFr/{vatLevel}', name: 'admin_api_vatRates_getFr')]
    public function getFr(string $vatLevel): JsonResponse
    {
        $vatRates = $this->vatRatesStorage->get();
        $frRates = $vatRates['FR'];

        $rate = $frRates[$vatLevel] ?? $frRates[VatLevels::STANDARD];

        return $this->json($rate);
    }
}