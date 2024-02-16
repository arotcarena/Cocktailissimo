<?php
namespace App\Controller\Error;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class UnvalidLinkController extends AbstractController
{
    #[Route(
        [
            'en' => '/en/invalid-link',
            'fr' => '/fr/lien-invalide',
            'es' => '/es/enlace-no-valido',
            'it' => '/it/link-non-valido'
        ],
        name: 'error_unvalidLink'
    )]
    public function index()
    {
        throw new NotFoundHttpException();
    }
}