<?php
namespace App\Invoice\InvoiceManagement;

use App\Config\SiteConfig;
use App\Entity\PurchaseVendorGroup;
use App\Helper\PdfManager;
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
        $this->pdfManager->createFromHtml($html, $type . '-' . $lang . '-' . $number);
    }

    public function getPath(string $lang, string $type, int $number): string 
    {
        return $this->pdfManager->getPath($type . '-' . $lang . '-' . $number);
    }
}