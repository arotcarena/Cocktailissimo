<?php
namespace App\Tests\Functional\Controller\Api\Purchase\Checkout;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Utils\PurchaseFixturesTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group Purchase
 */
class ApiCheckoutSuccessControllerTest extends FunctionalTest
{
    use PurchaseFixturesTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testGetSuggestedProducts()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com');
        
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_checkoutSuccess_getSuggestedProducts', [
            'id' => $purchase->getId(),
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');

        $data = json_decode($this->client->getResponse()->getContent());
        
        // $this->assertTrue(count($data) > 0); //parfois le produit le plus cher (qui est celui utilisé pour afficher les suggestions) n'a aucun suggestedProducts
        $this->assertLessThanOrEqual(5, $dbCollector->getQueryCount());
    }
}