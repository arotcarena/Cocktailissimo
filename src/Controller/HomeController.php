<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\HighlightRepository;
use App\Repository\PostRepository;
use App\Repository\ProductRepository;
use App\Service\HeroBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private HeroBuilder $heroBuilder,
        private ProductRepository $productRepository,
        private PostRepository $postRepository,
        private HighlightRepository $highlightRepository
    )
    {
        
    }
    
    #[Route('/')]
    public function index(Request $request): Response 
    {
        $browserLang = substr($request->headers->get('accept-language'), 0, 2);
        if(!in_array($browserLang, ['en', 'fr', 'es', 'it']))
        {
            //langue par défaut
            $browserLang = 'en';
        }
        return $this->redirectToRoute('home', array_merge(
            ['_locale' => $browserLang],
            $request->query->all()
        ));
    }

    #[Route('/{_locale}', name: 'home', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function indexLang(Request $request): Response
    {
        $heroData = $this->heroBuilder->getData($request->getLocale());

        $posts = $this->postRepository->findForHomepage($request->getLocale());

        $homepageHighlight = $this->highlightRepository->findOneByNameFullHydrated('homepage');

        return $this->render('home/index.html.twig', [
            'heroData' => $heroData,
            'posts' => $posts,
            'highlight' => $homepageHighlight
        ]);
    }
}