<?php
namespace App\Controller\Account\Invoice;

use App\Config\SiteConfig;
use App\Invoice\InvoiceManagement\InvoiceManager;
use App\Invoice\InvoiceTypes;
use App\Repository\PurchaseVendorGroupRepository;
use Exception;
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
            throw new NotFoundHttpException('No purchaseVendorGroup with id ' . $id);
        }

        $type = $request->request->get('type');
        $lang = $type === InvoiceTypes::COMMISSION ? SiteConfig::ADMIN_LANG: $purchaseVendorGroup->getPurchase()->getLang();

        $voterAttribute = $type === InvoiceTypes::COMMISSION ? 'CAN_DOWNLOAD_COMMISSION_INVOICE': 'CAN_DOWNLOAD_SALES_INVOICE';
        if(!$this->isGranted($voterAttribute, $purchaseVendorGroup))
        {
            throw new Exception('Forbidden access');
        }

        $file = $this->invoiceManager->getPath($purchaseVendorGroup, $type, $lang);

        if(!$file)
        {
            throw new NotFoundHttpException('No corresponding invoice were found');
        }

        return new BinaryFileResponse($file, 200, [
            'Content-Type' => 'application/pdf'
        ], true, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }
}