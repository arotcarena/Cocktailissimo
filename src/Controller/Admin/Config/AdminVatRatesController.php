<?php
namespace App\Controller\Admin\Config;

use App\Config\Countries;
use App\Config\SiteConfig;
use App\Config\VatLevels;
use App\Form\Admin\VatRatesType;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminVatRatesController extends AbstractController
{
    public function __construct(
        private KernelInterface $kernel
    )
    {
        
    }

    #[Route('/admin/configs/vatRates/index', name: 'admin_vatRates_index')]
    public function index(): Response
    {
        return $this->render('admin/configs/vatRates/index.html.twig', [
            'vatRates' => $this->readVatRates()
        ]);
    }

    #[Route('/admin/configs/vatRates/update', name: 'admin_vatRates_update')]
    public function update(Request $request): Response
    {
        $vatRates = $this->readVatRates();
        $vatRatesModel = $this->flatVatRates($vatRates);

        $form = $this->createForm(VatRatesType::class, $vatRatesModel);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $vatRates = $this->unflatVatRates($form);
            $this->writeVatRates($vatRates);
            $this->addFlash('success', 'Les taux de TVA ont bien été modifiés !');
            return $this->redirectToRoute('admin_vatRates_index');
        }

        return $this->render('admin/configs/vatRates/update.html.twig', [
            'form' => $form->createView(),
            'countries' => Countries::WITH_VAT_RATES
        ]);
    }

    private function readVatRates(): array
    {
        return json_decode(
            file_get_contents($this->getStoragePath()), 
            true
        );
    }

    private function writeVatRates(array $array): void
    {
        file_put_contents(
            $this->getStoragePath(), json_encode($array, JSON_PRETTY_PRINT)
        );
    }

    private function getStoragePath()
    {
        return $this->kernel->getProjectDir()
             . DIRECTORY_SEPARATOR . SiteConfig::PUBLIC_DIR
              . DIRECTORY_SEPARATOR . 'config'
               . DIRECTORY_SEPARATOR . 'vat_rates.json';
    }

    private function flatVatRates(array $vatRates): array
    {
        $vatRatesModel = [];
        foreach($vatRates as $country => $rates)
        {
            foreach(VatLevels::CHOICES as $vatLevel)
            {
                $vatRatesModel[$country . ':' . $vatLevel] = $rates[$vatLevel] ?? null;
            }
        }

        return $vatRatesModel;
    }

    private function unflatVatRates(FormInterface $form): array
    {
        $vatRates = [];
        foreach(Countries::WITH_VAT_RATES as $country)
        {
            foreach(VatLevels::CHOICES as $vatLevel)
            {
                $vatRates[$country][$vatLevel] = $form->get($country . ':' . $vatLevel)->getData();
            }
        }
        return $vatRates;
    }
}