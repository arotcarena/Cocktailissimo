<?php
namespace App\Controller\Tests;

use App\Hydrator\PurchaseHydrator;
use App\Repository\PurchaseRepository;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class CheckoutTestController extends AbstractController
{
    #[Route('/{_locale}/tests/payment-success', name: 'tests_paymentSuccess')]
    public function paymentSuccess(PurchaseRepository $purchaseRepository, PurchaseHydrator $purchaseHydrator, TranslatorInterface $translator, PriceFormaterExtensionRuntime $priceFormater)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        $purchaseHydrator->hydratePurchaseWithPackagings($purchase);

        $this->addFlash('success', $translator->trans('success.payment', [
            'amount' => $priceFormater->format($purchase->getTotalPrice()->getPriceToPay())
        ], 'alerts'));

        return $this->render('purchase/checkout/payment_success/index.html.twig', [
            'purchase' => $purchase
        ]);
    }
}