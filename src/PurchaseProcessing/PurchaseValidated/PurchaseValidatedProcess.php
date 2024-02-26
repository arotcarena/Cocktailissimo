<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\Email\Admin\AdminNotificationEmail;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Purchase;
use App\FinancialOperations\PaymentVentilator;
use App\Invoice\InvoiceManagement\PurchaseInvoicesHandler;
use App\PurchaseProcessing\PurchaseValidated\Calculator\PurchaseAmountCalculator;
use App\Service\Sendcloud\SendcloudService;
use App\TrafficAnalytics\Counter\ProductSalesCounter;
use DateTimeImmutable;
use Exception;

class PurchaseValidatedProcess extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProductSalesCounter $productSalesCounter,
        private SendcloudService $sendcloudService,
        private PaymentVentilator $paymentVentilator,
        private PurchaseAmountCalculator $purchaseAmountCalculator,
        private PurchaseValidatedNotifier $purchaseValidatedNotifier,
        private PurchaseInvoicesHandler $purchaseInvoicesHandler,
        private AdminNotificationEmail $adminNotificationEmail
    )
    {
        
    }

    public function process(Purchase $purchase): void
    {
        //on marque la commande comme payée
        $purchase->setStatus(SiteConfig::STATUS_PAID)
                ->setPaidAt(new DateTimeImmutable())
                ;
        $this->em->flush();
        
        try
        {
            //envoyer la part de chaque vendeur (en déduisant la commission)
            $this->purchaseAmountCalculator->calculateVendorGroupsAmounts($purchase);

            $this->paymentVentilator->ventilate($purchase);
            //ce qui reste sur le compte cocktailissimo correspond aux commissions TTC, ou aux ventes de produits Cocktailissimo
        
            $this->purchaseInvoicesHandler->createInvoices($purchase);
            
            //envoi des mails de confirmation de commande à customer, vendors, admin (contenant la facture en lien)
            //pour vendor : 2 factures, celle de la vente et celle de la commission
            $this->purchaseValidatedNotifier->notify($purchase);
            
            //on annonce les parcels à sendcloud
            //et on stocke les ids dans purchase.purchaseVendorGroup.shippingInfo.parcelId
            $this->sendcloudService->announceParcels($purchase);

            //on ajoute les sales aux products concernés
            $this->productSalesCounter->countSales($purchase);
        }
        catch(Exception $e)
        {
            $this->adminNotificationEmail->send(
                'Attention ! Une erreur est survenue lors de PurchaseValidatedProcess::process. Il faut identifier à quel moment le processus a stoppé pour savoir ce qu\'on devra terminer manuellement. ---> ' . $e->getMessage()
            );
        }
    }
}

