<?php
namespace App\Controller\Admin\Api;

use App\Price\Vat\VatResolver;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiAdminVatRatesController extends AbstractController
{
    public function __construct(
        private VatResolver $vatResolver
    )
    {
        
    }

    #[Route('/admin/api/vatRates/getFr/{vatLevel}', name: 'admin_api_vatRates_getFr')]
    public function getFr(string $vatLevel): JsonResponse
    {
        $rate = $this->vatResolver->getRate('FR', $vatLevel);

        return $this->json($rate);
    }
}