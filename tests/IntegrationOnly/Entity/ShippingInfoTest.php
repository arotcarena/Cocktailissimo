<?php
namespace App\Tests\IntegrationOnly\Entity;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\ShippingInfo;
use App\Repository\ShippingInfoRepository;
use App\Tests\Utils\FixturesTrait;
use DateTimeImmutable;
use DateTimeZone;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Entity
 */
class ShippingInfoTest extends KernelTestCase
{
    use FixturesTrait;

    private ShippingInfoRepository $shippingInfoRepository;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->shippingInfoRepository = static::getContainer()->get(ShippingInfoRepository::class);

        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }


    public function testOnStatusSentUpdateSentAtWillBeSet()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class, ['status' => SiteConfig::SHIPPING_STATUS_PENDING]);
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_SENT);
        $this->em->flush();

        $this->assertEquals(
            $shippingInfo->getSentAt()->format('Y:m:d H:i'),
            (new DateTimeImmutable())->format('Y:m:d H:i')
        );
    }

    public function testOnStatusDeliveredUpdateDeliveredAtWillBeSet()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class, ['status' => SiteConfig::SHIPPING_STATUS_PENDING]);
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_DELIVERED);
        $this->em->flush();

        $this->assertEquals(
            $shippingInfo->getDeliveredAt()->format('Y:m:d H:i'),
            (new DateTimeImmutable())->format('Y:m:d H:i')
        );
    }

    public function testOnStatusDeliveredUpdateSentAtWillNotBeSet()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class, ['status' => SiteConfig::SHIPPING_STATUS_PENDING]);
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_DELIVERED);
        $this->em->flush();

        $this->assertNull($shippingInfo->getSentAt());
    }

    public function testOnStatusSentUpdateDeliveredAtWillNotBeSet()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class, ['status' => SiteConfig::SHIPPING_STATUS_PENDING]);
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_SENT);
        $this->em->flush();

        $this->assertNull($shippingInfo->getDeliveredAt());
    }

    public function testDateTimeSetPersist()
    {
        /** @var ShippingInfo */
        $shippingInfo = $this->findEntity(ShippingInfoRepository::class, ['status' => SiteConfig::SHIPPING_STATUS_PENDING]);
        $shippingInfo->setStatus(SiteConfig::SHIPPING_STATUS_SENT);
        $id = $shippingInfo->getId();
        $this->em->flush();

        $updatedShippingInfo = $this->shippingInfoRepository->findOneBy(['id' => $id]);

        $this->assertNotNull($updatedShippingInfo->getSentAt());
        $this->assertEquals(
            $updatedShippingInfo->getSentAt()->format('Y:m:d H:i'),
            (new DateTimeImmutable())->format('Y:m:d H:i')
        );
    }
}