<?php
namespace App\Controller\Purchase;

use App\Cart\CartService;
use Exception;
use App\Repository\PurchaseRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use App\Hydrator\PurchaseHydrator;
use App\Service\Stripe\StripeService;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;



class CheckoutController extends AbstractController
{

    public function __construct(
        private CartService $cartService,
        private PurchaseRepository $purchaseRepository,
        private PriceFormaterExtensionRuntime $priceFormater,
        private TranslatorInterface $translator,
        private StripeService $stripeService,
        private PurchaseHydrator $purchaseHydrator,
        private VisitorActionSaver $visitorActionSaver,
    )
    {

    }

    #[Route([
        'en' => '/en/checkout',
        'fr' => '/fr/passer-commande',
        'es' => '/es/hacer-un-pedido',
        'it' => '/it/ordinare'
    ], name: 'checkout_index')]
    public function index(): Response
    {
        $this->translator->trans('status_delivered', [], 'configs');
        $cart = $this->cartService->getLightCart();
        if($cart->getCount() === 0)
        {
            throw new Exception($this->translator->trans('error.empty_cart'));
        }
        $this->visitorActionSaver->saveTypeCheckoutStart($cart);
        return $this->render('purchase/checkout/index.html.twig');
    }

    #[Route('/{_locale}/checkout/logout', name: 'checkout_logout')]
    public function checkoutLogout(Request $request, Security $security)
    {   
        $security->logout(false);
        return $this->redirectToRoute('checkout_index', [
            '_locale' => $request->getLocale()
        ]);
    }

    #[Route('/{_locale}/checkout/login', name: 'checkout_login')]
    public function checkoutLogin(Request $request)
    {   
        $request->getSession()->set('_security.main.target_path', $this->generateUrl('checkout_index', [
            '_locale' => $request->getLocale()
        ]));
        return $this->redirectToRoute('security_login', [
            '_locale' => $request->getLocale()
        ]);
    }

    #[Route('/{_locale}/checkout/register', name: 'checkout_register')]
    public function checkoutRegister(Request $request)
    {   
        $request->getSession()->set('_security.main.target_path', $this->generateUrl('checkout_index', [
            '_locale' => $request->getLocale()
        ]));
        return $this->redirectToRoute('security_register', [
            '_locale' => $request->getLocale()
        ]);
    }

    #[Route([
        'en' => '/en/order-successfull',
        'fr' => '/fr/commande-validee',
        'es' => '/es/pedido-confirmado',
        'it' => '/it/ordine-convalidato'
    ], name: 'checkout_paymentSuccess')]
    public function paymentSuccess(Request $request): Response
    {
        $paymentIntentClientSecret = $request->get('payment_intent_client_secret');
        if(!$paymentIntentClientSecret)
        {
            throw new Exception($this->translator->trans('error.show_payment_success'));
        }

        //on récupére le paymentIntent à partir des infos dans l'url
        $paymentIntent = $this->stripeService->retrievePaymentIntent($paymentIntentClientSecret);

        //on récupère la purchase
        $purchase = $this->purchaseRepository->find($paymentIntent->metadata->purchaseId);
        if(!$purchase)
        {
            throw new Exception($this->translator->trans('error.show_payment_success'));
        }

        
        //si la page a été actualisée on ne fait pas ça
        if($this->cartService->count() > 0)
        {
            //on enregistre l'action commande payée
            $this->visitorActionSaver->saveTypePurchasePaid($purchase);
            //on vide le panier
            $this->cartService->empty();

            $this->addFlash('success', $this->translator->trans('success.payment', [
                '{amount}' => $this->priceFormater->format($paymentIntent->amount_received)
            ]));
        }

        $this->purchaseHydrator->hydratePurchaseWithPackagings($purchase); // on hydrate la purchase avec les packagings (pour afficher picture, target, etc...)

        return $this->render('purchase/checkout/payment_success/index.html.twig', [
            'purchase' => $purchase
        ]);
    }

}