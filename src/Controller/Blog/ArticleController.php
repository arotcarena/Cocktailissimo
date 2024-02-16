<?php
namespace App\Controller\Blog;

use App\Config\SiteConfig;
use App\Entity\SubCategory;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class ArticleController extends AbstractController 
{

    public function __construct(
        private ArticleRepository $articleRepository,
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository,
    )
    {

    }

    #[Route(
        [
            'en' => '/en/newspaper/{subCategorySlug}/{slug}_{ref}.html',
            'fr' => '/fr/gazette/{subCategorySlug}/{slug}_{ref}.html',
            'es' => '/es/gazeta/{subCategorySlug}/{slug}_{ref}.html',
            'it' => '/it/gazzetta/{subCategorySlug}/{slug}_{ref}.html',
        ], 
        name: 'article_show', 
        requirements: [
            'slug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            'subCategorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+'
        ]
    )]
    public function show(string $slug, string $ref, string $subCategorySlug, Request $request): Response
    {
        /** @var Article */
        $article = $this->articleRepository->findOneHydratedBy(['ref' => $ref]);  // méthode avec hydratation complète
        //on vérifie que le product existe et que les params dans l'url sont bons
        $getLang = 'get' . $request->getLocale();
        if(
            $article === null 
            || 
            $slug !== $article->getSlug()->$getLang()
            ||
            $subCategorySlug !== $article->getSubCategory()->getSlug()->$getLang()
        )
        {
            throw new NotFoundHttpException();
        }
        
        return $this->render('blog/article/show.html.twig', [
            'article' => $article
        ]);
    }


    #[Route(
        [
            'en' => '/en/newspaper.html',
            'fr' => '/fr/gazette.html',
            'es' => '/es/gazeta.html',
            'it' => '/it/gazzetta.html'
        ],
        name: 'article_index', 
    )]
    public function index(): Response
    {
        $articlesCategory = $this->categoryRepository->findOneBySlug(SiteConfig::ARTICLE_SLUG_TRANS['en'], 'en');

        return $this->render('blog/article/index.html.twig', [
            'articlesCategory' => $articlesCategory
        ]);
    }

    #[Route(
        [
            'en' => '/en/newspaper/{subCategorySlug}.html',
            'fr' => '/fr/gazette/{subCategorySlug}.html',
            'es' => '/es/gazeta/{subCategorySlug}.html',
            'it' => '/it/gazzetta/{subCategorySlug}.html',
        ], 
        name: 'article_subCategoryShow', 
        requirements: [
            'subCategorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+'
        ]
    )]
    public function subCategoryShow(string $subCategorySlug, Request $request): Response
    {
        /** @var SubCategory */
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::ARTICLE_SLUG_TRANS[$request->getLocale()], $subCategorySlug, $request->getLocale());
        if($subCategory === null)
        {
            throw new NotFoundHttpException();
        }
        
        return $this->render('blog/article/subCategoryShow.html.twig', [
            'subCategory' => $subCategory
        ]);
    }
}