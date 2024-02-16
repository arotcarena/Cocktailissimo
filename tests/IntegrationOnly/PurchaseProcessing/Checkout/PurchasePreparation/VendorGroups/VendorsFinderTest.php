<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups;

use App\DataFixtures\Tests\VendorTestFixtures;
use App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups\VendorsFinder;
use App\Repository\UserRepository;
use App\Tests\Utils\FixturesTrait;
use App\Tests\Utils\PurchaseFixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;


/**
 * @group Purchase
 */
class VendorsFinderTest extends KernelTestCase
{
    use FixturesTrait;
    use PurchaseFixturesTrait;

    private VendorsFinder $vendorsFinder;

    public function setUp(): void
    {
        parent::setUp();

        $this->vendorsFinder = new VendorsFinder(
            static::getContainer()->get(UserRepository::class)
        );

        $this->loadFixtures([VendorTestFixtures::class]);
    }

    public function testFindCorrectVendors()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendorId = $vendor->getId();

        $vendorGroup = (object)[
            'vendor' => (object)[
                'id' => $vendorId,
            ],
            'cartLines' => [],
            'weight' => 100,
            'position' => '1/1',
            'index' => 0
        ];

        $vendors = $this->vendorsFinder->findVendorsOfVendorGroups([$vendorGroup]);

        $this->assertEquals($vendorId, $vendors[0]->getId());
    }
}