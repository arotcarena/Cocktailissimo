<?php
namespace App\Invoice\InvoiceCreation;

use App\Entity\PurchaseVendorGroup;
use App\Helper\PdfManager;
use Twig\Environment;

class InvoiceCreator 
{
    public function __construct(
        private PdfManager $pdfCreator,
        private Environment $twig
    )
    {
        
    }

    public function create(string $lang, string $type, PurchaseVendorGroup $purchaseVendorGroup, int $number): void
    {
        $html = $this->twig->render('pdf/invoice/' . $type . '.html.twig', [
            'lang' => $lang,
            'purchaseVendorGroup' => $purchaseVendorGroup
        ]);
        $this->pdfCreator->createFromHtml($html, $type . '-' . $lang . '-' . $number);
    }
}