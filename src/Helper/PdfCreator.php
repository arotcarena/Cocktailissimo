<?php
namespace App\Helper;

use Dompdf\Dompdf;
use Symfony\Component\HttpKernel\KernelInterface;

class PdfCreator
{
    public function __construct(
        private KernelInterface $kernel
    )
    {
        
    }

    /**
     * Undocumented function
     *
     * @param string $html
     * @param string $name (ex: invoice_1)
     * @param string $paperSize
     * @param string $orientation (portrait | landscape)
     * @return string $pdfFile (ex: projectDir/pdf/invoices/invoice_1.pdf)
     */
    public function createFromHtml(string $html, string $name, string $paperSize = 'A4', $orientation = 'portrait'): string
    {
        // instantiate and use the dompdf class
        $dompdf = new Dompdf();
        $dompdf->loadHtml($html);
        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper($paperSize, $orientation);
        // Render the HTML as PDF
        $dompdf->render();
        // get pdf string
        $pdfContent = $dompdf->output();

        $randomString = substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbn0123456789', 3)), 0, 10);
        $filename = $this->getPdfDirectory() . DIRECTORY_SEPARATOR . $name . '-' . $randomString . '.pdf';

        file_put_contents($filename, $pdfContent);

        return $filename;
    }

    private function getPdfDirectory(): string
    {
        return $this->kernel->getProjectDir() . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'pdf';
    }
}