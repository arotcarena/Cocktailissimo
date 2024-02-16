<?php
namespace App\Tests\Functional\Controller\Api\Purchase\Checkout;

use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Service\Stripe\StripeService;


/**
 * @group Purchase
 */
class ApiCheckoutControllerTest extends FunctionalTest
{
    private StripeService $stripeService;

    public function setUp(): void
    {
        parent::setUp();

        $this->loadFixtures([ProductTestFixtures::class]);

        $this->stripeService = $this->client->getContainer()->get(StripeService::class);
    }

    //createPaymentIntent
    public function testCreatePaymentIntentWithoutAmountParam()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPaymentIntent', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'email' => 'jean@mail.com',
            'country' => 'FR',
            'fullName' => 'Jean Claude'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testCreatePaymentIntentWithWrongAmountParamType()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPaymentIntent', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'email' => 'jean@mail.com',
            'country' => 'FR',
            'fullName' => 'Jean Claude',
            'amount' => 'bonjour'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testCreatePaymentIntentWithNegativeAmountParamType()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPaymentIntent', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'email' => 'jean@mail.com',
            'country' => 'FR',
            'fullName' => 'Jean Claude',
            'amount' => -1
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    //on ne peut pas aller plus loin à cause de la session

    //createPurchase
    public function testCreatePurchaseWithNoPaymentIntentParam()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPurchase', [
            '_locale' => 'en'
        ]), [], [], [], json_encode(['checkouData' => ['data' => 'data']]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testCreatePurchaseWithNoCheckoutDataParam()
    {
        $pi = $this->stripeService->createPaymentIntent(100);
        $piSecret = $pi->client_secret;
        $this->assertNotNull($piSecret);
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPurchase', [
            '_locale' => 'en'
        ]), [], [], [], json_encode(['piSecret' => $piSecret]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testCreatePurchaseVerifyPIAmountCorrespondToCartTotalPricePlusShippingCost()
    {
        //le panier est vide donc ça doit provoquer une erreur
        $pi = $this->stripeService->createPaymentIntent(100);
        $piSecret = $pi->client_secret;
        $this->assertNotNull($piSecret);
        $this->client->request('POST', $this->urlGenerator->generate('api_checkout_createPurchase', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'piSecret' => $piSecret,
            'checkoutData' => [
                'deliveryMethod' => [
                    'price' => 550
                ]
            ]
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    //on ne peut pas aller plus loin sans réussir à remplir le panier

}