<?php
namespace App\Controller\Shop;

use App\Convertor\PackagingToArrayConvertor;
use App\Price\PriceResolver;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Contracts\Translation\TranslatorInterface;


class ProductController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private PackagingRepository $packagingRepository,
        private TranslatorInterface $translator,
        private PriceResolver $priceResolver,
        private PackagingToArrayConvertor $packagingToArrayConvertor
    )
    {

    }


    #[Route(
        '/{_locale}/{categorySlug}/{subCategorySlug}/{slug}_{publicRef}.html', 
        name: 'product_show', 
        requirements: [
            'slug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            'subCategorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            'categorySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
            '_locale' => '%app.supported_locales%'
        ]
    )]
    public function show(string $slug, string $publicRef, string $categorySlug, string $subCategorySlug, Request $request): Response
    {
        //WITHOUT_SHOP // a suppr
        if(!$this->isGranted('DEMO_USER'))
        {
            return $this->redirectToRoute('recipe_index', ['_locale' => $request->getLocale()]);
        }
        ///////////////////////////////////

        $packaging = $this->packagingRepository->findOneBy(['publicRef' => $publicRef]);
        if(!$packaging)
        {
            throw new NotFoundHttpException();
        }
        $product = $packaging->getProduct();
        //on vérifie que les params dans l'url sont bons
        $getLang = 'get' . $request->getLocale();
        if(
            $slug !== $product->getSlug()->$getLang()
            ||
            $categorySlug !== $product->getCategory()->getSlug()->$getLang()
            ||
            $subCategorySlug !== $product->getSubCategory()->getSlug()->$getLang()
        )
        {
            throw new NotFoundHttpException();
        }

        return $this->render('shop/product/show.html.twig', [
            'product' => $product,
            //pour gestion en react de la partie packagingChoice, stock, quantity et price
            'packagingChoices' => $this->packagingToArrayConvertor->convert(
                $this->packagingRepository->findBy(['product' => $product], ['listPosition' => 'ASC']), 
                $request->getLocale(),
                $slug,
                $categorySlug,
                $subCategorySlug
            ),
            'currentPackaging' => $this->packagingToArrayConvertor->convert(
                $packaging,
                $request->getLocale(),
                $slug,
                $categorySlug,
                $subCategorySlug
            )
        ]);
    }
    
}