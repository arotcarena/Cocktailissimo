<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Purchase;
use App\FinancialOperations\PaymentVentilator;
use App\Helper\DateTimeGenerator;
use App\PurchaseProcessing\PurchaseValidated\Calculator\PurchaseAmountCalculator;
use App\Service\Sendcloud\SendcloudService;
use App\TrafficAnalytics\Counter\ProductSalesCounter;

class PurchaseValidatedProcess extends AbstractController
{
    public function __construct(
        private DateTimeGenerator $dateTimeGenerator,
        private EntityManagerInterface $em,
        private ProductSalesCounter $productSalesCounter,
        private SendcloudService $sendcloudService,
        private PaymentVentilator $paymentVentilator,
        private PurchaseAmountCalculator $purchaseAmountCalculator,
        private PurchaseValidatedNotifier $purchaseValidatedNotifier
    )
    {
        
    }

    public function process(Purchase $purchase): void
    {
        //on marque la commande comme payée
        $purchase->setStatus(SiteConfig::STATUS_PAID)
                ->setPaidAt($this->dateTimeGenerator->generateImmutable())
                ;
        $this->em->flush();

        //envoyer la part de chaque vendeur (en déduisant la commission)
        $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);
        $this->paymentVentilator->ventilate($purchase);
        //ce qui reste sur le compte cocktailissimo correspond aux commissions TTC
        
        // $this->purchaseInvoicesCreator->create($purchase); <<<-----------  A FAIRE : CREATION FACTURE
        
        //envoi des mails de confirmation de commande à customer, vendors, admin (contenant la facture en lien)
        //pour vendor : 2 factures, celle de la vente et celle de la commission
        $this->purchaseValidatedNotifier->notify($purchase);
        
        //on annonce les parcels à sendcloud
        $parcels = $this->sendcloudService->announceParcels($purchase);

        //on ajoute les sales aux products concernés
        $this->productSalesCounter->countSales($purchase);
    }
}

