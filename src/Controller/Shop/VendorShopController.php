<?php
namespace App\Controller\Shop;

use App\Entity\Company;
use App\Repository\CompanyRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class VendorShopController extends AbstractController
{
    public function __construct(
        private CompanyRepository $companyRepository,
    )
    {

    }

    #[Route('/{_locale}/shop/{companySlug}', name: 'vendorShop', requirements: [
        'companySlug' => '[a-z0-9-àáéèâôûêìíîïäöóòëüçñ]+',
        '_locale' => '%app.supported_locales%'
    ])]
    public function index(string $companySlug, Request $request): Response
    {
        //WITHOUT_SHOP // a suppr
        if(!$this->isGranted('DEMO_USER'))
        {
            return $this->redirectToRoute('recipe_index', ['_locale' => $request->getLocale()]);
        }
        ///////////////////////////////////

        /** @var Company */
        $company = $this->companyRepository->findOneBySlug($companySlug);
        if(!$company)
        {
            throw new NotFoundHttpException();
        }

        $vendor = $company->getUser();
        // si le vendeur a perdu le rôle VENDOR 
        // ou si sa vérification stripe n'est pas à jour 
        // ou s'il n'a pas de sendcloudId
        if(!in_array('ROLE_VENDOR', $vendor->getRoles()) || !$vendor->isStripeConfirmed() || !$vendor->getSendcloudId())
        {
            throw new NotFoundHttpException();
        }

        $products = $vendor->getProducts();

        return $this->render('shop/vendor/vendor_shop.html.twig', [
            'vendor' => $vendor,
            'products' => $products,
        ]);
    }
}