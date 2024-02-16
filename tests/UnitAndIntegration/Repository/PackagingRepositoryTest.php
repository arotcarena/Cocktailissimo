<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\DataFixtures\Shop\ProductFixtures;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Tests\Utils\FixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class PackagingRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private ProductRepository $productRepository;

    private PackagingRepository $packagingRepository;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([ProductFixtures::class]);

        $this->productRepository = static::getContainer()->get(ProductRepository::class);

        $this->packagingRepository = static::getContainer()->get(PackagingRepository::class);
    }


    public function testHydrateProductsWithBasePackaging()
    {
        $products = $this->productRepository->findBy([], null, 5);
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);

        foreach($products as $product)
        {
            $this->assertNotNull($product->getBasePackaging());
            $this->assertLessThanOrEqual(
                $product->getBasePackaging()->getConsumerPriceHT(),
                $product->getPackagingChoices()->get(0)->getConsumerPriceHT()
            );
        }
    }
} 