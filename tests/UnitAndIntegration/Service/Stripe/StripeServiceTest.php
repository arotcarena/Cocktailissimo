<?php
namespace App\Tests\UnitAndIntegration\Service;

use App\Service\Stripe\StripeService;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


/**
 * @group Stripe
 */
class StripeServiceTest extends KernelTestCase
{
    private StripeService $stripeService;

    public function setUp(): void
    {
        parent::setUp();
        $this->stripeService = static::getContainer()->get(StripeService::class);
    }

    public function testCreatePaymentIntentWithTransferGroup()
    {
        $pi = $this->stripeService->createPaymentIntent(100, [], null, 'COC-1234');
        $this->assertEquals('COC-1234', $pi->transfer_group);
    }

    public function testCreatePaymentIntentWithMetadata()
    {
        $pi = $this->stripeService->createPaymentIntent(100, [
            'purchaseId' => 11
        ]);
        $this->assertEquals(11, $pi->metadata->purchaseId);
    }

    public function testCreatePaymentIntentAmount()
    {
        $pi = $this->stripeService->createPaymentIntent(100);
        $this->assertEquals(100, $pi->amount);
    }

    public function testCreatePaymentIntentClientSecret()
    {
        $pi = $this->stripeService->createPaymentIntent(100);
        $this->assertNotNull($pi->client_secret);
    }

    public function testRetrievePaymentIntent()
    {
        $pi = $this->stripeService->createPaymentIntent(100, [
            'purchaseId' => 11
        ], null, 'COC-1234');

        $piSecret = $pi->client_secret;

        $pi = $this->stripeService->retrievePaymentIntent($piSecret);
        $this->assertEquals(100, $pi->amount);
        $this->assertEquals(11, $pi->metadata->purchaseId);
        $this->assertEquals('COC-1234', $pi->transfer_group);
    }

    public function testUpdatePaymentIntent()
    {   
        $pi = $this->stripeService->createPaymentIntent(
            1500,
            [
                'purchaseId' => 12
            ],
            null,
            'COC-123456'
        );
        $id = $pi->id;

        $this->assertEquals(1500, $pi->amount);

        $pi = $this->stripeService->updatePaymentIntent($id, 500);
        //on vérifie qu'il s'agit bien du même paymentIntent
        $this->assertEquals($id, $pi->id);
        //on vérifie que le montant a bien changé
        $this->assertEquals(500, $pi->amount);
        //on vérifie que les métadonnées n'ont pas changé
        $this->assertEquals(12, $pi->metadata->purchaseId);
    }

}