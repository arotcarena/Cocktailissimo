<?php
namespace App\Controller\Account\Download;

use App\Config\SiteConfig;
use App\Helper\PdfManager;
use App\Invoice\InvoiceManagement\InvoiceManager;
use App\Invoice\InvoiceTypes;
use App\Repository\PurchaseVendorGroupRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class InvoiceDownloadController extends AbstractController
{
    public function __construct(
        private InvoiceManager $invoiceManager,
        private PurchaseVendorGroupRepository $purchaseVendorGroupRepository
    )
    {
        
    }

    #[Route('/invoice/download', name: 'download_invoice_index', methods: ['POST'])]
    public function salesInvoice(Request $request): Response
    {
        //on récupère le purchaseVendorGroup dont on veut télécharger la facture
        $id = $request->request->get('purchaseVendorGroupId');

        $purchaseVendorGroup = $this->purchaseVendorGroupRepository->find($id);
        if(!$purchaseVendorGroup) 
        {
            throw new NotFoundHttpException('No purchaseVendorGroup with id ' + $id);
        }

        $type = $request->request->get('type');
        $lang = $type === InvoiceTypes::COMMISSION ? SiteConfig::ADMIN_LANG: $purchaseVendorGroup->getPurchase()->getLang();

        $file = $this->invoiceManager->getPath($purchaseVendorGroup, $type, $lang);

        return new BinaryFileResponse($file, 200, [
            'Content-Type' => 'application/pdf'
        ], true, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }
}