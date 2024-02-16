<?php
namespace App\Controller\Blog;

use App\Entity\Recipe;
use App\Config\SiteConfig;
use App\Entity\SubCategory;
use App\Repository\RecipeRepository;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class RecipeController extends AbstractController 
{
    public function __construct(
        private RecipeRepository $recipeRepository,
        private SubCategoryRepository $subCategoryRepository,
        private CategoryRepository $categoryRepository
    )
    {

    }

    #[Route(
        [
            'en' => '/en/recipes/{slug}_{ref}.html',
            'fr' => '/fr/recettes/{slug}_{ref}.html',
            'es' => '/es/recetas/{slug}_{ref}.html',
            'it' => '/it/ricette/{slug}_{ref}.html',
        ], 
        name: 'recipe_show', 
        requirements: [
            'slug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+'
        ]
    )]
    public function show(string $slug, string $ref, Request $request): Response
    {
        /** @var Recipe */
        $recipe = $this->recipeRepository->findOneHydratedBy(['ref' => $ref]);  // méthode avec hydratation complète
        //on vérifie que le product existe et que les params dans l'url sont bons
        $getLang = 'get' . $request->getLocale();
        if(
            $recipe === null 
            || 
            $slug !== $recipe->getSlug()->$getLang()
        )
        {
            throw new NotFoundHttpException();
        }
        
        return $this->render('blog/recipe/show.html.twig', [
            'recipe' => $recipe
        ]);
    }


    #[Route(
        [
            'en' => '/en/recipes.html',
            'fr' => '/fr/recettes.html',
            'es' => '/es/recetas.html',
            'it' => '/it/ricette.html'
        ],
        name: 'recipe_index', 
    )]
    public function index(): Response
    {
        $recipesCategory = $this->categoryRepository->findOneBySlug(SiteConfig::RECIPE_SLUG_TRANS['en'], 'en');

        return $this->render('blog/recipe/index.html.twig', [
            'recipesCategory' => $recipesCategory
        ]);
    }

    #[Route(
        [
            'en' => '/en/recipes/{subCategorySlug}.html',
            'fr' => '/fr/recettes/{subCategorySlug}.html',
            'es' => '/es/recetas/{subCategorySlug}.html',
            'it' => '/it/ricette/{subCategorySlug}.html',
        ], 
        name: 'recipe_subCategoryShow', 
        requirements: [
            'subCategorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+'
        ]
    )]
    public function subCategoryShow(string $subCategorySlug, Request $request): Response
    {
        /** @var SubCategory */
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::RECIPE_SLUG_TRANS[$request->getLocale()], $subCategorySlug, $request->getLocale());
        if($subCategory === null)
        {
            throw new NotFoundHttpException();
        }
        
        return $this->render('blog/recipe/subCategoryShow.html.twig', [
            'subCategory' => $subCategory
        ]);
    }
}