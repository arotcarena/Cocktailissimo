<?php
namespace App\Tests\UnitAndIntegration\Hydrator;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\Hydrator\PurchaseHydrator;
use App\Repository\PurchaseRepository;
use App\Tests\Utils\FixturesTrait;
use Exception;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Purchase
 */
class PurchaseHydratorTest extends KernelTestCase
{
    use FixturesTrait;

    private PurchaseHydrator $purchaseHydrator;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([PurchaseTestFixtures::class]);

        $this->purchaseHydrator = static::getContainer()->get(PurchaseHydrator::class);
    }

    public function testPurchaseIsCorrectlyHydrated()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);

        $this->assertNull($purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getPackaging());

        $this->purchaseHydrator->hydratePurchaseWithPackagings($purchase);

        $purchaseLine = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0);
        $this->assertNotNull($purchaseLine->getPackaging());
        $this->assertEquals($purchaseLine->getPublicRef(), $purchaseLine->getPackaging()->getPublicRef());
    }
}