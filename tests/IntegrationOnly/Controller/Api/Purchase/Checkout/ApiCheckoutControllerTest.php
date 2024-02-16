<?php
namespace App\Tests\IntegrationOnly\Controller\Api\Purchase\Checkout;

use App\Cart\CartService;
use App\Cart\Utils\CartStockUpdater;
use App\Config\SiteConfig;
use App\Controller\Api\Purchase\Checkout\ApiCheckoutController;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Entity\CustomPrice;
use App\Entity\Purchase;
use App\Helper\ObjectHydrator;
use App\Helper\VendorGroupLinesExtractor;
use App\Hydrator\CheckoutVendorGroupsHydrator;
use App\PurchaseProcessing\Checkout\PaymentIntent\CheckoutPiCreator;
use App\PurchaseProcessing\Checkout\PaymentIntent\CheckoutPiResolver;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutCartVerificator;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPaymentAmountVerificator;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPurchaseVerificator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchasePreparator;
use App\Repository\PackagingRepository;
use App\Repository\PurchaseRepository;
use App\Service\Stripe\PaymentIntent\PiSession;
use App\Service\Stripe\StripeService;
use App\Tests\IntegrationOnly\Utils\Factory\CartAndCheckoutCartFactoryTrait;
use App\Tests\Utils\Factory\CheckoutDataFactory;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Doctrine\ORM\EntityManagerInterface;
use Error;
use Exception;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use TypeError;

/**
 * @group Purchase
 */
class ApiCheckoutControllerTest extends KernelTestCase
{
    use FixturesTrait;
    use CartAndCheckoutCartFactoryTrait;

    private CartService|MockObject $cartService;
    private PiSession|MockObject $piSession;
    private StripeService $stripeService;

    private PackagingRepository $packagingRepository;
    private EntityManagerInterface $em;

    private ApiCheckoutController $apiCheckoutController;

    public function setUp(): void
    {
        parent::setUp();

        $container = static::getContainer();

        $this->piSession = $this->createMock(PiSession::class);
        $this->cartService = $this->createMock(CartService::class);

        $this->stripeService = $container->get(StripeService::class);
        $translator = $container->get(TranslatorInterface::class);
        $security = $this->createMock(Security::class);
        $security->expects($this->any())->method('getUser')->willReturn(null);

        $checkoutPiResolver = new CheckoutPiResolver(
            $this->stripeService,
            $this->piSession,
            $container->get(CheckoutPiCreator::class)
        );

        $this->apiCheckoutController = new ApiCheckoutController(
            $container->get(PurchaseRepository::class),
            $this->stripeService,
            $this->cartService,
            $translator,
            $container->get(PurchasePreparator::class),
            new ConstraintViolationsToArrayConvertor,
            new ObjectHydrator,
            new CheckoutCartVerificator,
            new CheckoutPaymentAmountVerificator($translator),
            new CheckoutPurchaseVerificator,
            new CheckoutVendorGroupsHydrator(new VendorGroupLinesExtractor),
            $security,
            $checkoutPiResolver,
            $this->createMock(VisitorActionSaver::class)
        );

        $this->packagingRepository = $container->get(PackagingRepository::class);
        $this->em = $container->get(EntityManagerInterface::class);
    }

    //createPaymentIntent
    public function testCreatePaymentIntentWithWrongTypeAmountThrowError()
    {
        $this->expectException(TypeError::class);
        $response = $this->apiCheckoutController->createPaymentIntent(new Request([], [], [], [], [], [], json_encode([
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Pierre Lapin',
            'amount' => 'wrong_type'
        ])));
    }
    public function testCreatePaymentIntentWithNegativeAmountResponseNotSuccessful()
    {
        $response = $this->apiCheckoutController->createPaymentIntent(new Request([], [], [], [], [], [], json_encode([
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Pierre Lapin',
            'amount' => -1
        ])));
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }
    public function testCreatePaymentIntentWithExistingPaymentIntentReturnExistingPaymentIntentClientSecret()
    {
        $paymentIntent = $this->stripeService->createPaymentIntent(500);
        $existingPiId = $paymentIntent->id;
        $existingClientSecret = $paymentIntent->client_secret;

        $this->piSession->expects($this->once())->method('get')->willReturn($existingPiId);
        
        $response = $this->apiCheckoutController->createPaymentIntent(new Request([], [], [], [], [], [], json_encode([
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Pierre Lapin',
            'amount' => 510
        ])));
        $data = json_decode($response->getContent());

        $this->assertEquals($existingClientSecret, $data->clientSecret);
    }
    public function testCreatePaymentIntentWithNoExistingPaymentIntentReturnClientSecret()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
        
        $response = $this->apiCheckoutController->createPaymentIntent(new Request([], [], [], [], [], [], json_encode([
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Pierre Lapin',
            'amount' => 510
        ])));
        $data = json_decode($response->getContent());

        $this->assertIsString($data->clientSecret);
    }
    public function testCreatePaymentIntentWithNoExistingPaymentIntentCreatePaymentIntentWithCorrectValues()
    {
        $this->piSession->expects($this->once())->method('get')->willReturn(null);
        
        $response = $this->apiCheckoutController->createPaymentIntent(new Request([], [], [], [], [], [], json_encode([
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Pierre Lapin',
            'amount' => 510
        ])));
        $data = json_decode($response->getContent());
        $clientSecret = $data->clientSecret;

        $paymentIntent = $this->stripeService->retrievePaymentIntent($clientSecret);

        $this->assertStringContainsString($paymentIntent->id, $clientSecret);
        $this->assertEquals(510, $paymentIntent->amount);
        $this->assertNotNull($paymentIntent->metadata->purchaseId);
        $this->assertNotNull($paymentIntent->transfer_group);
    }

    //createPurchase
    public function testCreatePurchaseWithCartOverStock()
    {
        $params = $this->getCreatePurchaseParams();

        $this->cartService->expects($this->once())
                            ->method('getFullCart')
                            ->willReturn([$params['cart'], CartStockUpdater::STOCK_UPDATED])
                            ;

        $this->expectException(Error::class); // à cause du $this->addFlash('danger') qui ne fonctionne pas avec un controller créé à la main
        // si on passe sur le addFlash c'est qu'il y a comme attendu une erreur et la fonction renverra une réponse 500

        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseWithCartRemoved()
    {
        $params = $this->getCreatePurchaseParams();

        $this->cartService->expects($this->once())
                            ->method('getFullCart')
                            ->willReturn([$params['cart'], CartStockUpdater::CART_REMOVED])
                            ;

        $this->expectException(Error::class); // à cause du $this->addFlash('danger') qui ne fonctionne pas avec un controller créé à la main
        // si on passe sur le addFlash c'est qu'il y a comme attendu une erreur et la fonction renverra une réponse 500

        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseWithDifferentCartTotalPriceAndCheckoutArticlesPrices()
    {
        $params = $this->getCreatePurchaseParams();
        //on modifie checkoutDataCart.totalPrice
        $params['checkoutData']->articlesPrice = (object)[
            'priceToPay' => 1000,
            'priceHT' => 1000,
            'payType' => CustomPrice::PAY_PRICE_HT
        ];

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $this->expectException(Error::class); // à cause du $this->addFlash('danger') qui ne fonctionne pas avec un controller créé à la main
        // si on passe sur le addFlash c'est qu'il y a comme attendu une erreur et la fonction renverra une réponse 500

        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseWithDifferentPaymentIntentAndCartAmount()
    {
        $params = $this->getCreatePurchaseParams();
        //on modifie le paymentIntent
        $this->stripeService->updatePaymentIntent($params['paymentIntent']->id, 5000); // on simule un paymentIntent qui aurait oublié d'ajouter shippingCost

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $this->expectException(Exception::class);

        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseWithNoPurchaseIdKeyInPaymentIntentMetadata()
    {
        $params = $this->getCreatePurchaseParams();
        $paymentIntent = $params['paymentIntent'];
        //on écrase paymentIntent avec un nouveau paymentIntent auquel on passe les même valeurs sauf metadata (on donne un purchaseId inexistant)
        $params['paymentIntent'] = $this->stripeService->createPaymentIntent(
            $paymentIntent->amount,
            [],
            $paymentIntent->customer,
            $paymentIntent->transfer_group
        );

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $this->expectException(Exception::class);
        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseWithIncorrectPurchaseIdInPaymentIntentMetadata()
    {
        $params = $this->getCreatePurchaseParams();

        $paymentIntent = $params['paymentIntent'];
        //on écrase paymentIntent avec un nouveau paymentIntent auquel on passe les même valeurs sauf metadata (on donne un purchaseId inexistant)
        $params['paymentIntent'] = $this->stripeService->createPaymentIntent(
            $paymentIntent->amount,
            [
                'purchaseId' => 123456789
            ],
            $paymentIntent->customer,
            $paymentIntent->transfer_group
        );

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $response = $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }

    public function testCreatePurchaseWithAlreadyPaidPurchaseIdInPaymentIntentMetadata()
    {
        $params = $this->getCreatePurchaseParams();
        //on marque la purchase comme déjà payée
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class, ['id' => $params['paymentIntent']->metadata->purchaseId]);
        $purchase->setStatus(SiteConfig::STATUS_PAID);
        $this->em->flush();

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $response = $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }

    public function testCreatePurchaseWithInvalidCheckoutDataCivilState()
    {
        $params = $this->getCreatePurchaseParams();
        $params['checkoutData']->civilState->email = 'invalideemail.com';

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $response = $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }

    public function testCreatePurchaseWithInvalidCheckoutDataDeliveryAddress()
    {
        $params = $this->getCreatePurchaseParams();
        $params['checkoutData']->deliveryAddress->postcode = '';

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $response = $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }

    public function testCreatePurchaseWithInvalidCheckoutDataShippingMethod()
    {
        $params = $this->getCreatePurchaseParams();
        $params['checkoutData']->vendorGroups[0]->shippingMethod->id = null;

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $this->expectException(TypeError::class);
        $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
    }

    public function testCreatePurchaseSuccess()
    {
        $params = $this->getCreatePurchaseParams();

        $this->cartService->expects($this->once())->method('getFullCart')->willReturn([$params['cart'], CartStockUpdater::STOCK_SUFFICIENT]);

        $response = $this->apiCheckoutController->createPurchase(new Request([], [], ['_locale' => 'en'], [], [], [], json_encode([
            'piSecret' => $params['paymentIntent']->client_secret,
            'checkoutData' => $params['checkoutData']
        ])));
        $this->assertEquals(Response::HTTP_OK, $response->getStatusCode());
    }


    private function getCreatePurchaseParams(): array
    {
        //on décide que payType = pay_price_ht

        // cart avec 2 vendorGroups et une cartLine dans chaque vendorGroup
        [$cart, $checkoutCartData] = $this->createSimilarCartAndCheckoutCartData();

        //on ajoute les shippingMethods et shippingCost sur cart
        $shippingMethod = (object)[
            'id' => 1,
            'carrier' => 'carrier',
            'name' => 'shippingMethod_name',
            'price' => (object)[
                'payType' => CustomPrice::PAY_PRICE_HT,
                'priceHT' => 500,
                'vatAmount' => null,
                'vatRate' => null,
                'priceTTC' => null,
                'priceToPay' => 500
            ],
            'leadTimeHours' => 48,
            'type' => SiteConfig::SHIPPING_TYPE_HOME,
            'relay' => null
        ];
        $checkoutCartData->vendorGroups[0]->shippingMethod = $shippingMethod;
        $checkoutCartData->vendorGroups[1]->shippingMethod = $shippingMethod;
        $checkoutCartData->shippingCost = (object) [
            'payType' => CustomPrice::PAY_PRICE_HT,
            'priceHT' => 1000,
            'vatAmount' => null,
            'vatRate' => null,
            'priceTTC' => null,
            'priceToPay' => 1000
        ];
        $checkoutCartData->totalPrice = (object)[
            'payType' => $checkoutCartData->articlesPrice->payType,
            'priceHT' => $checkoutCartData->articlesPrice->priceHT + 1000,
            'vatAmount' => $checkoutCartData->articlesPrice->vatAmount + 200,
            'priceTTC' => $checkoutCartData->articlesPrice->priceTTC + 1200,
            'priceToPay' => $checkoutCartData->articlesPrice->payType === CustomPrice::PAY_PRICE_TTC ? $checkoutCartData->articlesPrice->priceTTC + 1200: $checkoutCartData->articlesPrice->priceHT + 1000
        ];

        //checkoutData
        $checkoutData = CheckoutDataFactory::createCheckoutData($checkoutCartData); 

        //paymentIntent
        $purchase = new Purchase;
        $this->em->persist($purchase);
        $this->em->flush();
        $customer = $this->stripeService->createCustomer('FR', 'jean@mail.com', 'Jean Paul');
        $paymentIntent = $this->stripeService->createPaymentIntent($checkoutData->totalPrice->priceToPay, [
            'purchaseId' => $purchase->getId()
        ], $customer->id, $purchase->getRef());


        return [
            'cart' => $cart,
            'checkoutData' => $checkoutData,
            'paymentIntent' => $paymentIntent
        ];
    }
}