<?php
namespace App\Controller\Static;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class StaticController extends AbstractController
{
    #[Route(
        [
            'en' => '/en/who-are-we',
            'fr' => '/fr/qui-sommes-nous',
            'es' => '/es/quien-somos',
            'it' => '/it/chi-siamo-noi'
        ],
        name: 'static_aPropos', 
    )]
    public function aPropos()
    {
        return $this->render('static/a_propos.html.twig');
    }

    #[Route(
        [
            'en' => '/en/legal-notice',
            'fr' => '/fr/mentions-legales',
            'es' => '/es/aviso-legal',
            'it' => '/it/avviso-legale'
        ],
        name: 'static_legal', 
    )]
    public function legal()
    {
        return $this->render('static/legal.html.twig');
    }

    #[Route(
        [
            'en' => '/en/terms-of-sales',
            'fr' => '/fr/conditions-generales-de-vente',
            'es' => '/es/condiciones-generales-de-venta',
            'it' => '/it/condizioni-di-vendita'
        ],
        name: 'static_cgv', 
    )]
    public function cgv()
    {
        return $this->render('static/cgv.html.twig');
    }

    #[Route(
        [
            'en' => '/en/terms-of-service',
            'fr' => '/fr/conditions-generales-d-utilisation',
            'es' => '/es/condiciones-generales-de-uso',
            'it' => '/it/condizioni-di-utilizzo'
        ],
        name: 'static_cgu', 
    )]
    public function cgu()
    {
        return $this->render('static/cgu.html.twig');
    }
}