<?php
namespace App\Tests\UnitAndIntegration\Controller\Api\Purchase\Checkout;

use App\Cart\CartService;
use App\Controller\Api\Purchase\Checkout\ApiCheckoutController;
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
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Stripe\PaymentIntent;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use TypeError;

/**
 * @group Purchase
 */
class ApiCheckoutControllerTest extends TestCase
{
    private PurchaseRepository|MockObject $purchaseRepository;
    private StripeService|MockObject $stripeService;
    private CartService|MockObject $cartService;
    private PurchasePreparator|MockObject $purchasePreparator;
    private CheckoutCartVerificator|MockObject $checkoutCartVerificator;
    private CheckoutPaymentAmountVerificator|MockObject $checkoutPaymentAmountVerificator;
    private CheckoutPurchaseVerificator|MockObject $checkoutPurchaseVerificator;
    private CheckoutVendorGroupsHydrator|MockObject $checkoutVendorGroupsHydrator;
    private CheckoutPiResolver|MockObject $checkoutPiResolver;
    private VisitorActionSaver|MockObject $visitorActionSaver;

    private ApiCheckoutController $apiCheckoutController;

    public function setUp(): void
    {
        $this->purchaseRepository = $this->createMock(PurchaseRepository::class);
        $this->stripeService = $this->createMock(StripeService::class);
        $this->cartService = $this->createMock(CartService::class);
        $this->checkoutCartVerificator = $this->createMock(CheckoutCartVerificator::class);
        $this->checkoutPaymentAmountVerificator = $this->createMock(CheckoutPaymentAmountVerificator::class);
        $this->purchasePreparator = $this->createMock(PurchasePreparator::class);
        $this->checkoutPurchaseVerificator = $this->createMock(CheckoutPurchaseVerificator::class);
        $this->checkoutVendorGroupsHydrator = $this->createMock(CheckoutVendorGroupsHydrator::class);
        $this->checkoutPiResolver = $this->createMock(CheckoutPiResolver::class);
        $this->visitorActionSaver = $this->createMock(VisitorActionSaver::class);
        $translator = $this->createMock(TranslatorInterface::class);
        $translator->expects($this->any())->method('trans')->willReturn('translated content');

        $security = $this->createMock(Security::class);
        $security->expects($this->any())->method('getUser')->willReturn(null);

        $this->apiCheckoutController = new ApiCheckoutController(
            $this->purchaseRepository,
            $this->stripeService,
            $this->cartService,
            $translator,
            $this->purchasePreparator,
            new ConstraintViolationsToArrayConvertor,
            new ObjectHydrator,
            $this->checkoutCartVerificator,
            $this->checkoutPaymentAmountVerificator,
            $this->checkoutPurchaseVerificator,
            $this->checkoutVendorGroupsHydrator,
            $security,
            $this->checkoutPiResolver,
            $this->visitorActionSaver
        );
    }

    //createPaymentIntent
    public function testCreatePaymentIntentWithWrongTypeAmountResponseNotSuccessful()
    {
        $params = $this->getCreatePaymentIntentParams();
        $params['amount'] = 'wrong_type';

        $request = new Request([], [], [], [], [], [], json_encode($params));

        $this->expectException(TypeError::class);
        $this->apiCheckoutController->createPaymentIntent($request);
    }
    public function testCreatePaymentIntentWithNullAmountResponseNotSuccessful()
    {
        $params = $this->getCreatePaymentIntentParams();
        $params['amount'] = null;

        $request = new Request([], [], [], [], [], [], json_encode($params));

        $response = $this->apiCheckoutController->createPaymentIntent($request);
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode());
    }
    public function testCreatePaymentIntentWithAmountNegativeOrZeroResponseNotSuccessful()
    {
        $params = $this->getCreatePaymentIntentParams();
        
        $params['amount'] = -1;
        $request = new Request([], [], [], [], [], [], json_encode($params));
        $response = $this->apiCheckoutController->createPaymentIntent($request);
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode(), 'amount negative');

        $params['amount'] = 0;
        $request = new Request([], [], [], [], [], [], json_encode($params));
        $response = $this->apiCheckoutController->createPaymentIntent($request);
        $this->assertEquals(Response::HTTP_INTERNAL_SERVER_ERROR, $response->getStatusCode(), 'amount zero');
    }
    public function testCreatePaymentIntentSuccess()
    {
        $this->checkoutPiResolver->expects($this->any())->method('resolve')->willReturn(new PaymentIntent('pi_id'));

        $params = $this->getCreatePaymentIntentParams();

        $request = new Request([], [], [], [], [], [], json_encode($params));

        $response = $this->apiCheckoutController->createPaymentIntent($request);
        $this->assertEquals(Response::HTTP_OK, $response->getStatusCode());
    }
    public function testCreatePaymentIntentVisitorActionIsSaved()
    {
        $this->checkoutPiResolver->expects($this->any())->method('resolve')->willReturn(new PaymentIntent('pi_id'));

        $params = $this->getCreatePaymentIntentParams();

        $request = new Request([], [], [], [], [], [], json_encode($params));

        $this->visitorActionSaver->expects($this->once())->method('saveTypeCheckoutPreparePayment');

        $this->apiCheckoutController->createPaymentIntent($request);
    }
    public function testCreatePaymentIntentVisitorActionIsSavedWithRightAmount()
    {
        $this->checkoutPiResolver->expects($this->any())->method('resolve')->willReturn(new PaymentIntent('pi_id'));

        $params = $this->getCreatePaymentIntentParams();

        $request = new Request([], [], [], [], [], [], json_encode($params));

        $this->visitorActionSaver->expects($this->once())->method('saveTypeCheckoutPreparePayment')->with(5550);

        $this->apiCheckoutController->createPaymentIntent($request);
    }

    private function getCreatePaymentIntentParams(): array
    {
        return [
            'country' => 'FR',
            'email' => 'email@mail.com',
            'fullName' => 'Jean Patrick',
            'amount' => 5550
        ];
    }
}