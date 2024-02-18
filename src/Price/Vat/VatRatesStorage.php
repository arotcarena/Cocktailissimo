<?php
namespace App\Price\Vat;

use App\Config\SiteConfig;
use Symfony\Component\HttpKernel\KernelInterface;

class VatRatesStorage
{
    public function __construct(
        private KernelInterface $kernel
    )
    {
        
    }

    public function get(): array
    {
        return json_decode(
            file_get_contents($this->getFilePath()),
            true
        );
    }

    private function getFilePath(): string 
    {
        return $this->kernel->getProjectDir()
                . DIRECTORY_SEPARATOR . SiteConfig::PUBLIC_DIR
                . DIRECTORY_SEPARATOR . 'config'
                . DIRECTORY_SEPARATOR . 'vat_rates.json'
                ;
    }
}