<?php
namespace App\Helper;

use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Component\HttpKernel\KernelInterface;

class PdfManager
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
        $options = new Options();
        $options->set('isPhpEnabled', true);
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper($paperSize, $orientation);
        // Render the HTML as PDF
        $dompdf->render();
        // get pdf string
        $pdfContent = $dompdf->output();

        $filename = $this->getPdfDirectory() . DIRECTORY_SEPARATOR . $name . '.pdf';

        file_put_contents($filename, $pdfContent);

        return $filename;
    }

    public function getPath(string $name)
    {
        return $this->getPdfDirectory() . DIRECTORY_SEPARATOR . $name . '.pdf';
    }

    private function getPdfDirectory(): string
    {
        return $this->kernel->getProjectDir() . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'pdf';
    }
}