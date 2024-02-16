<?php
namespace App\Controller\Tests;

use App\Repository\PurchaseRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ErrorController extends AbstractController
{
    #[Route('/error', name: 'error')]
    public function show($exception, $logger): JsonResponse
    {
        return $this->json($exception->getMessage());
    }
}