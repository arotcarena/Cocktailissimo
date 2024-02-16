<?php
namespace App\Controller\Api\Account\Vendor;

use App\Convertor\VendorProductToArrayConvertor;
use App\Entity\User;
use App\Form\DataModel\SearchParams;
use App\Form\SearchParamsType;
use App\Helper\CompanySlugCreator;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

#[IsGranted('ROLE_VENDOR')]
class ApiVendorDashboardController extends AbstractController
{
    public function __construct(
        private CompanySlugCreator $companySlugCreator,
        private EntityManagerInterface $em,
        private ProductRepository $productRepository,
        private ValidatorInterface $validator,
        private VendorProductToArrayConvertor $vendorProductToArrayConvertor,
        private PackagingRepository $packagingRepository,
        private TranslatorInterface $translator
    )
    {

    }

    #[Route('/{_locale}/api/vendorDashboard/regenerateCompanySlug', name: 'api_vendorDashboard_regenerateCompanySlug', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function regenerateCompanySlug(): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();

        $this->companySlugCreator->create($user->getCompany());

        $this->em->flush();

        return $this->json($user->getCompany()->getSlug());
    }

    #[Route('/{_locale}/api/vendorDashboard/isRegenerationAvailable', name: 'api_vendorDashboard_isRegenerationAvailable', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function regenerationIsAvailable(): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();

        if($this->companySlugCreator->isSynchronized($user->getCompany()))
        {
            return $this->json(false);
        }
        return $this->json(true);
    }

    #[Route('/{_locale}/api/vendorDashboard/updateStock/{packagingId}/{stock}', name: 'api_vendorDashboard_updateStock', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function updateStock(int $packagingId, int $stock): JsonResponse
    {
        $packaging = $this->packagingRepository->find($packagingId);

        if(!$packaging)
        {
            throw new Exception('No packaging with id '.$packagingId);
        }
        if(!$this->isGranted('CAN_EDIT_STOCK', $packaging))
        {
            throw new Exception('Unauthorized action');
        }

        $packaging->setStock($stock);

        $errors = $this->validator->validate($packaging);

        if(count($errors) > 0)
        {
            return $this->json([
                'errors' => $this->translator->trans('error.invalid_input'),
            ], 500);
        }

        $this->em->flush();
        return $this->json([
            'stock' => $packaging->getStock(),
            'mainStock' => $packaging->getProduct()->getMainStock()
        ]);
    }

    #[Route('/{_locale}/api/vendorDashboard/product/index', name: 'api_vendorDashboard_product_index', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function productIndex(Request $request): JsonResponse 
    {
        $searchParams = new SearchParams;
        $form = $this->createForm(SearchParamsType::class, $searchParams);
        $form->handleRequest($request);

        /** @var PaginationInterface */
        $pagination = $this->productRepository->vendorFilter($this->getUser(), $searchParams, $request->getLocale());

        $count = $pagination->getTotalItemCount();
        $perPage = $searchParams->getLimit();
        $maxPage = ceil($count / $perPage);
        $currentPage = $searchParams->getPage();

        return new JsonResponse([
            'items' => $this->vendorProductToArrayConvertor->convert($pagination->getItems(), $request->getLocale(), 'index'),
            'count' => $count,
            'maxPage' => $maxPage,
            'perPage' => $perPage,
            'currentPage' => $currentPage
        ]);
    }
}