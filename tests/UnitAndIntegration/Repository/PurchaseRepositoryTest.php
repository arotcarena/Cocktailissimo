<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\Tests\Utils\FixturesTrait;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\UserPurchaseTestFixtures;
use App\Repository\UserRepository;
use App\Tests\Utils\PurchaseFixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Repository
 */
class PurchaseRepositoryTest extends KernelTestCase
{
    use FixturesTrait;
    use PurchaseFixturesTrait;

    private PurchaseRepository $purchaseRepository;

    public function setUp(): void
    {
        $this->purchaseRepository = static::getContainer()->get(PurchaseRepository::class);
        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    //findMoreExpansiveProductId
    public function testFindMoreExpansiveProductId()
    {
        $purchase = $this->getPurchaseByCustomerEmail('purchase_with_more_expansive_product_one_million@mail.com');

        $productId = $this->purchaseRepository->findMoreExpansiveProductId($purchase->getId());

        $product = $this->findEntity(ProductRepository::class, ['id' => $productId]);
        
        $this->assertTrue($product->getBaseConsumerPriceHT() >= 9900000);
        $this->assertEquals('packaging_with_price_one_million', $product->getBasePublicRef());
    }

    //countPurchasesInProgress
    public function testCountPurchasesInProgress()
    {
        $this->assertEquals(
            4, 
            $this->purchaseRepository->count([]),
            'le test est faussé : on ne trouve pas le bon nombre de fixtures au total'
        );
        $this->assertEquals(
            1,
            $this->purchaseRepository->countPurchasesInProgress()
        );
    }

    //hasPurchasesInProgress
    public function testhasPurchasesInProgressWithUserHavingOnlyCompletedPurchases()
    {
        $this->loadFixtures([UserPurchaseTestFixtures::class]);
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->assertFalse(
            $this->purchaseRepository->hasPurchasesInProgress($user)
        );
    }
    public function testhasPurchasesInProgressWithUserHavingOnePurchaseInProgress()
    {
        $this->loadFixtures([UserPurchaseTestFixtures::class]);
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_one_purchase_paid@gmail.com']);
        $this->assertTrue(
            $this->purchaseRepository->hasPurchasesInProgress($user)
        );
    }
    public function testhasPurchasesInProgressWithUserHavingOnePurchasePending()
    {
        $this->loadFixtures([UserPurchaseTestFixtures::class]);
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_one_purchase_pending@gmail.com']);
        $this->assertFalse(
            $this->purchaseRepository->hasPurchasesInProgress($user)
        );
    }

    //findByCustomerEmail
    public function testFindByCustomerEmail()
    {
        $purchases = $this->purchaseRepository->findByCustomerEmail('purchase_with_2_purchaseLines@mail.com');

        $this->assertCount(1, $purchases);
        $this->assertEquals('purchase_with_2_purchaseLines@mail.com', $purchases[0]->getCustomerDetail()->getEmail());
    }

    //findPaginatedByCustomerEmail
    public function testFindPaginatedByCustomerEmail()
    {
        $pagination = $this->purchaseRepository->findPaginatedByCustomerEmail('purchase_with_2_purchaseLines@mail.com');

        $this->assertCount(1, $pagination->getItems());
        $this->assertEquals('purchase_with_2_purchaseLines@mail.com', $pagination->getItems()[0]->getCustomerDetail()->getEmail());
    }
}