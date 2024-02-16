<?php
namespace App\Controller\Search;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



class SearchController extends AbstractController
{
    #[Route(
        [
            'en' => '/en/search',
            'fr' => '/fr/recherche',
            'es' => '/es/buscar',
            'it' => '/it/ricerca'
        ],
        name: 'search_index', 
    )]
    public function index(): Response
    {
        return $this->render('search/index.html.twig');
    }
}