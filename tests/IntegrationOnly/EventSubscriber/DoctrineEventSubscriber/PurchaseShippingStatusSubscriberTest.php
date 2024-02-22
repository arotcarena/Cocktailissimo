<?php
namespace App\Tests\IntegrationOnly\EventSubscriber\DoctrineEventSubscriber;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\Entity\ShippingInfo;
use App\Repository\PurchaseRepository;
use App\Repository\ShippingInfoRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


class PurchaseShippingStatusSubscriberTest extends KernelTestCase
{
    use FixturesTrait;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testOnShippingInfoUpdateWithStatusDeliveredPurchaseStatusWillBeUpdatedToTerminated()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class);
        $purchase = $shippingInfo->getPurchaseVendorGroup()->getPurchase();
        $this->assertNotEquals(SiteConfig::STATUS_TERMINATED, $purchase->getStatus(), 'le test est faussé. La purchase a déjà le statut STATUS_TERMINATED avant le test');
        $purchaseId = $purchase->getId();
        
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_DELIVERED);
        $this->em->flush();

        /** @var Purchase */
        $updatedPurchase = $this->findEntity(PurchaseRepository::class, ['id' => $purchaseId]);
        $this->assertEquals(SiteConfig::STATUS_TERMINATED, $updatedPurchase->getStatus());
    }
}