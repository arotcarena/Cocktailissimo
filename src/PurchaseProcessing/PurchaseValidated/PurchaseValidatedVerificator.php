<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\Email\Admin\AdminNotificationEmail;
use App\Entity\ProcessedPaymentIntent;
use App\Entity\Purchase;
use App\Repository\ProcessedPaymentIntentRepository;
use App\Repository\PurchaseRepository;
use App\Service\StockUpdater;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\PaymentIntent;

class PurchaseValidatedVerificator
{
    public function __construct(
        private PurchaseRepository $purchaseRepository,
        private AdminNotificationEmail $adminNotificationEmail,
        private StockUpdater $stockUpdater,
        private EntityManagerInterface $em,
        private StripeService $stripeService,
        private ProcessedPaymentIntentRepository $processedPaymentIntentRepository
    )
    {
        
    }

    public function verify(PaymentIntent $paymentIntent): ?Purchase
    {
        //pour éviter de traiter 2 fois le même paymentSuccess
        if($this->processedPaymentIntentRepository->findOneBy(['stringId' => $paymentIntent->id]))
        {
            return null;
        }
        $processedPaymentIntent = (new ProcessedPaymentIntent)->setStringId($paymentIntent->id);
        $this->em->persist($processedPaymentIntent);
        $this->em->flush();

        //on récupère la purchase
        $purchase = $this->purchaseRepository->find($paymentIntent->metadata->purchaseId);
        if(!$purchase)
        {
            //si on a pas de purchase associée au paiement, il faut rembourser le paiement et avertir le client
            $refund = $this->stripeService->refundsPaymentIntent($paymentIntent->id);
            $refundMessage = $refund ? 'Le paiement a été remboursé (refund id: '.$refund->id.').': 'Suite à une erreur, aucun remboursement effectué.';
            $this->adminNotificationEmail->send(
                'Un paiement a été reçu sans commande associée. '.$refundMessage.' paymentIntent : "'.$paymentIntent->id.'". Origine de ce message : App\Controller\Webhook\Stripe\PaymentSuccessWebhook.php'
            );
            return null;
        }

        //Si la commande est déjà payée
        if($purchase->getStatus() !== SiteConfig::STATUS_PENDING)
        {
            $refund = $this->stripeService->refundsPaymentIntent($paymentIntent->id);
            $refundMessage = $refund ? 'Le paiement a été remboursé (refund id: '.$refund->id.').': 'Suite à une erreur, aucun remboursement effectué.';
            $this->adminNotificationEmail->send(
                'La commande semble avoir été payée deux fois. '.$refundMessage.' paymentIntent : "'.$paymentIntent->id.'", réf. commande : "'.$purchase->getRef().'", email client : '. $purchase->getCustomerDetail()->getEmail() .', nom client : '. $purchase->getCustomerDetail()->getFirstName() . ' ' . $purchase->getCustomerDetail()->getLastName().', Origine de ce message : App\Controller\Webhook\Stripe\PaymentSuccessWebhook.php'
            );
            return null;
        }

        //on vérifie que le montant payé est bien le prix total de la purchase
        if($paymentIntent->amount_received !== $purchase->getTotalPrice()->getPriceToPay())
        {
            $this->adminNotificationEmail->send(
                'Un problème a eu lieu sur une commande. Le montant réglé est différent du montant total de la commande. PaymentIntent : "'.$paymentIntent->id.'", montant payé : '.$paymentIntent->amount_received.', Réf. commande : "'.$purchase->getRef().'", montant commande : '.$purchase->getTotalPrice()->getPriceToPay().', email client : '.$purchase->getCustomerDetail()->getEmail()
            );
            return null;
        }

        //vérifie les stocks
        //si tout est bon update les stocks du shop, sinon retourne false
        if(!$this->stockUpdater->handlePurchase($purchase))
        {
            $this->adminNotificationEmail->send(
                'Un problème a eu lieu sur une commande. Le client a payé une commande mais les stocks sont insuffisants ou les prix ont changé. Réf. commande : "'.$purchase->getRef().'", email client : '.$purchase->getCustomerDetail()->getEmail()
            );
            return null;
        }

        return $purchase;
    }
}