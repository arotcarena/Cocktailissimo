<?php
namespace App\Controller\Shop\Category;

use App\Repository\SubCategoryRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Contracts\Translation\TranslatorInterface;


class SubCategoryController extends AbstractController
{
    public function __construct(
        private SubCategoryRepository $subCategoryRepository,
        private TranslatorInterface $translator
    )
    {

    }

    #[Route(
        '/{_locale}/{categorySlug}/{subCategorySlug}.html', 
        name: 'subCategory_show', 
        requirements: [
            'categorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+', 
            'subCategorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            '_locale' => '%app.supported_locales%'
        ]
    )]
    public function index(string $categorySlug, string $subCategorySlug, Request $request): Response
    {
        //WITHOUT_SHOP // a suppr
        if(!$this->isGranted('DEMO_USER'))
        {
            return $this->redirectToRoute('recipe_index', ['_locale' => $request->getLocale()]);
        }
        ///////////////////////////////////

        $subCategory = $this->subCategoryRepository->findOneByBothSlugs($categorySlug, $subCategorySlug, $request->getLocale());
        if($subCategory === null)
        {
            throw new NotFoundHttpException();
        }

        return $this->render('shop/category/subCategory/show.html.twig', [
            'subCategory' => $subCategory,
            'category' => $subCategory->getParentCategory()
        ]);
    }
}