<?php
namespace App\Invoice\InvoiceManagement;

use App\Config\SiteConfig;
use App\Entity\PurchaseVendorGroup;
use App\Helper\PdfManager;
use App\Invoice\InvoiceTypes;
use Exception;
use Twig\Environment;

class InvoiceManager 
{
    public function __construct(
        private PdfManager $pdfManager,
        private Environment $twig
    )
    {
        
    }

    public function create(string $lang, string $type, PurchaseVendorGroup $purchaseVendorGroup, int $number): void
    {
        $html = $this->twig->render('pdf/invoice/' . $type . '.html.twig', [
            'lang' => $lang,
            'purchaseVendorGroup' => $purchaseVendorGroup,
            'vendorIsCocktailissimo' => $purchaseVendorGroup->getVendorDetail()->getIdentificationNumber() === SiteConfig::COCKTAILISSIMO_IDENTIFICATION_NUMBER
        ]);
        $this->pdfManager->createFromHtml($html, $this->getFileRelativePath($purchaseVendorGroup, $type, $lang));
    }

    public function getPath(PurchaseVendorGroup $purchaseVendorGroup, string $type, string $lang): string 
    {
        return $this->pdfManager->getPath($this->getFileRelativePath($purchaseVendorGroup, $type, $lang));
    }

    private function getFileRelativePath(PurchaseVendorGroup $purchaseVendorGroup, string $type, string $lang)
    {
        $purchase = $purchaseVendorGroup->getPurchase();
        $createdAt = $purchase->getCreatedAt();

        switch($type)
        {
            case InvoiceTypes::COMMISSION:
                $invoiceNumber = $purchaseVendorGroup->getCommissionInvoiceNumber();
                break;
            case InvoiceTypes::SALES;
                $invoiceNumber = $purchaseVendorGroup->getSalesInvoiceNumber();
                break;
            default:
                throw new Exception('Incorrect invoice type param');
                break;
        }

        return DIRECTORY_SEPARATOR . $createdAt->format('Y') . DIRECTORY_SEPARATOR . $createdAt->format('m')
                . DIRECTORY_SEPARATOR . $type . DIRECTORY_SEPARATOR . $lang . DIRECTORY_SEPARATOR . $invoiceNumber;
    }
}