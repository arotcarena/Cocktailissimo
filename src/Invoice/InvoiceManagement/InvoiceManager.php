<?php
namespace App\Invoice\InvoiceManagement;

use App\Config\SiteConfig;
use App\Email\Admin\AdminNotificationEmail;
use App\Email\Admin\Exceptions\AdminInvoiceGenerationExceptionEmail;
use App\Entity\PurchaseVendorGroup;
use App\File\Pdf\PdfManager;
use App\Invoice\InvoiceTypes;
use Exception;
use Twig\Environment;

class InvoiceManager 
{
    public function __construct(
        private PdfManager $pdfManager,
        private Environment $twig,
        private AdminInvoiceGenerationExceptionEmail $adminInvoiceGenerationExceptionEmail
    )
    {
        
    }

    public function create(string $lang, string $type, PurchaseVendorGroup $purchaseVendorGroup): void
    {
        try
        {
            $html = $this->twig->render('pdf/invoice/' . $type . '.html.twig', [
                'lang' => $lang,
                'purchaseVendorGroup' => $purchaseVendorGroup,
                'vendorIsCocktailissimo' => $purchaseVendorGroup->getVendorDetail()->getIdentificationNumber() === SiteConfig::COCKTAILISSIMO_IDENTIFICATION_NUMBER
            ]);
    
            [$relativeDir, $name] = $this->getFilePathInfos($purchaseVendorGroup, $type, $lang);
    
            $this->pdfManager->createFromHtml($html, $relativeDir, $name);
        }
        catch(Exception $e)
        {
            $this->adminInvoiceGenerationExceptionEmail->send($purchaseVendorGroup, $lang, $type, $e->getMessage());
        }
    }

    public function getPath(PurchaseVendorGroup $purchaseVendorGroup, string $type, string $lang): ?string 
    {
        [$relativeDir, $name] = $this->getFilePathInfos($purchaseVendorGroup, $type, $lang);

        return $this->pdfManager->getPath($relativeDir, $name);
    }

    /**
     * Undocumented function
     *
     * @param PurchaseVendorGroup $purchaseVendorGroup
     * @param string $type
     * @param string $lang
     * @return array [relativeDir, name]
     */
    private function getFilePathInfos(PurchaseVendorGroup $purchaseVendorGroup, string $type, string $lang): array
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

        $relativeDir = $createdAt->format('Y') . DIRECTORY_SEPARATOR . $createdAt->format('m')
                . DIRECTORY_SEPARATOR . $type . DIRECTORY_SEPARATOR . $invoiceNumber;

        $name = 'invoice-' . $invoiceNumber . '_' . $lang;
        
        return [$relativeDir, $name];
    }
}