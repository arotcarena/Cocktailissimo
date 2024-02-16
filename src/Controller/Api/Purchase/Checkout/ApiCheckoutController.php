<?php
namespace App\Controller\Api\Purchase\Checkout;

use App\Cart\CartService;
use App\Entity\Cart;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Helper\ObjectHydrator;
use App\Hydrator\CheckoutVendorGroupsHydrator;
use App\PurchaseProcessing\Checkout\PaymentIntent\CheckoutPiResolver;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutCartVerificator;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPaymentAmountVerificator;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPurchaseVerificator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchasePreparator;
use App\Repository\PurchaseRepository;
use App\Service\Stripe\StripeService;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;

class ApiCheckoutController extends AbstractController
{
    public function __construct(
        private PurchaseRepository $purchaseRepository,
        private StripeService $stripeService,
        private CartService $cartService,
        private TranslatorInterface $translator,
        private PurchasePreparator $purchasePreparator,
        private ConstraintViolationsToArrayConvertor $constraintViolationsToArrayConvertor,
        private ObjectHydrator $objectHydrator,
        private CheckoutCartVerificator $checkoutCartVerificator,
        private CheckoutPaymentAmountVerificator $checkoutPaymentAmountVerificator,
        private CheckoutPurchaseVerificator $checkoutPurchaseVerificator,
        private CheckoutVendorGroupsHydrator $checkoutVendorGroupsHydrator,
        private Security $security,
        private CheckoutPiResolver $checkoutPiResolver,
        private VisitorActionSaver $visitorActionSaver
    )
    {
        
    }

    #[Route('/{_locale}/api/checkout/createPaymentIntent', name: 'api_checkout_createPaymentIntent', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function createPaymentIntent(Request $request): JsonResponse 
    {
        //on récupère les params
        $data = json_decode($request->getContent());
        $amount = $data->amount;
        $country = $data->country;
        $email = $data->email;
        $fullName = $data->fullName;
        
        $this->visitorActionSaver->saveTypeCheckoutPreparePayment($amount);

        if(!$amount || $amount <= 0)
        {
            return new JsonResponse([
                'errors' => [$this->translator->trans('error.temporary_failure')]
            ], 500);
        }
        
        $paymentIntent = $this->checkoutPiResolver->resolve($amount, $country, $email, $fullName);

        //on renvoie le client_secret
        return new JsonResponse([
            'clientSecret' => $paymentIntent->client_secret,
        ]);
    }

    #[Route('/{_locale}/api/checkout/createPurchase', name: 'api_checkout_createPurchase', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function createPurchase(Request $request): JsonResponse 
    {
        //on enregistre l'action tentative de paiement
        $this->visitorActionSaver->saveTypeCheckoutPaymentAttempt();

        //on extrait les données reçues
        $data = json_decode($request->getContent());
        $clientSecret = $data->piSecret;
        $checkoutData = $data->checkoutData;
        
        //on récupère le cart depuis le cookie, en updatant le stock et en l'hydratant avec les totaux
        /** @var Cart $cart */
        [$cart, $stockStatus] = $this->cartService->getFullCart();

        
        //vérification du cart (vérification des stocks et prix, et comparaison cart.totalPrice avec checkout.articlesPrice)
        $error = $this->checkoutCartVerificator->verify($cart, $stockStatus, $checkoutData->articlesPrice->priceToPay);
        if($error)
        {
            //si il y a un pb de stock ou changement d'un des prix
            $this->addFlash('danger', $this->translator->trans($error['message']));
            return new JsonResponse([
                'errors' => [
                    'target' => $this->generateUrl($error['target'], ['_locale' => $request->getLocale()])
                ]
            ], 500);
        }
        
        //vérification montant à payer : 
        // en cas de modification frauduleuse du checkoutData : 
        // on compare paymentIntent->amount avec (prix total du vrai Cart + shippingCost de checkoutData)
        // et on vérifie aussi que shippingCost n'est pas négatif
        $paymentIntent = $this->stripeService->retrievePaymentIntent($clientSecret);
        $this->checkoutPaymentAmountVerificator->verify($paymentIntent->amount, $cart, $checkoutData->shippingCost->priceToPay);

        //on récupère la purchase depuis paymentIntent
        $purchaseId = $paymentIntent->metadata->purchaseId;
        $purchase = $this->purchaseRepository->find($purchaseId);
        $errorMessage = $this->checkoutPurchaseVerificator->verify($purchase);
        if($errorMessage)
        {
            return new JsonResponse([
                'errors' => [
                    'main' => $this->translator->trans($errorMessage)
                ]
            ], 500);
        }
        
        //CREATION DE LA PURCHASE
        //on hydrate checkoutData.vendorGroups avec certaines valeurs nécessaires pour la création de la purchase
        $this->checkoutVendorGroupsHydrator->hydrate($checkoutData->vendorGroups, $cart);
        //on hydrate la purchase avec checkoutData et on la valide
        $violations = $this->purchasePreparator->prepare($purchase, $checkoutData, $request->getLocale(), $this->security->getUser());
        if($violations)
        {
            return new JsonResponse([
                'errors' => $this->constraintViolationsToArrayConvertor->convert($violations)
            ], 500);
        }

        return new JsonResponse('ok');
    }
}