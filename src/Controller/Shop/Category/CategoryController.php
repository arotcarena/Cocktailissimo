<?php
namespace App\Controller\Shop\Category;

use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Contracts\Translation\TranslatorInterface;


class CategoryController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private TranslatorInterface $translator
    )
    {

    }

    #[Route(
        '/{_locale}/{slug}.html',
        name: 'category_show', 
        requirements: [
            'slug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            '_locale' => '%app.supported_locales%'    
        ]
    )]
    public function index(string $slug, Request $request): Response
    {
        //WITHOUT_SHOP // a suppr
        if(!$this->isGranted('DEMO_USER'))
        {
            return $this->redirectToRoute('recipe_index', ['_locale' => $request->getLocale()]);
        }
        ///////////////////////////////////

        $category = $this->categoryRepository->findOneBySlug($slug, $request->getLocale());
        if($category === null)
        {
            throw new NotFoundHttpException();
        }

        return $this->render('shop/category/show.html.twig', [
            'category' => $category
        ]);
    }
}