<?php
namespace App\Tests\Functional\Service;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\Repository\PurchaseRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Utils\PurchaseFixturesTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;


/**
 * @group FunctionalService
 */
class StockUpdaterFunctionalTest extends FunctionalTest
{
    use PurchaseFixturesTrait;


    public function setUp(): void
    {
        parent::setUp();

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testVerifyAndUpdateStocksDatabaseQueryCount()
    {
        /** @var Purchase */
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_4_purchaseLines@mail.com');
        
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('tests_stockUpdater_handlePurchase', [
            'purchaseId' => $purchase->getId()
        ]));

        $this->assertTrue(json_decode($this->client->getResponse()->getContent()), 'attention le test n\'est pas probant, car la function n\'a pas retourné un résultat correct');

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(13, $dbCollector->getQueryCount());
    }
}