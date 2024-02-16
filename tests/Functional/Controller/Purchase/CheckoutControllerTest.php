<?php
namespace App\Tests\Functional\Controller\Purchase;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Repository\PurchaseRepository;
use App\Service\Stripe\StripeService;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Symfony\Component\HttpFoundation\Response;

/**
 * @group Purchase
 */
class CheckoutControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    private StripeService $stripeService;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([PurchaseTestFixtures::class]);

        $this->stripeService = $this->client->getContainer()->get(StripeService::class);
    }

    //index
    public function testIndexNotAccessibleWithEmptyCart()
    {
        $this->client->request('GET', $this->urlGenerator->generate('checkout_index'));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    //paymentSuccess
    public function testPaymentSuccessWithoutPaymentIntentParams()
    {
        $purchase = $this->findEntity(PurchaseRepository::class, ['ref' => 'valid_purchase']);
        $this->client->request('GET', $this->urlGenerator->generate('checkout_paymentSuccess'));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testPaymentSuccessWithIncorrectPaymentIntentParams()
    {
        $purchase = $this->findEntity(PurchaseRepository::class, ['ref' => 'valid_purchase']);
        $this->client->request('GET', $this->urlGenerator->generate('checkout_paymentSuccess'), [
            'payment_intent_client_secret' => 'pi-1234-secret-1234',
        ]);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testPaymentSuccessWithPaymentIntentHavingNoMetadataPurchaseId()
    {
        $paymentIntent = $this->stripeService->createPaymentIntent(500);
        $this->client->request('GET', $this->urlGenerator->generate('checkout_paymentSuccess'), [
            'payment_intent_client_secret' => $paymentIntent->client_secret,
        ]);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testPaymentSuccessWithPaymentIntentHavingInvalidMetadataPurchaseId()
    {
        $paymentIntent = $this->stripeService->createPaymentIntent(500, [
            'purchaseId' => 123456789
        ]);
        $this->client->request('GET', $this->urlGenerator->generate('checkout_paymentSuccess'), [
            'payment_intent_client_secret' => $paymentIntent->client_secret,
        ]);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}