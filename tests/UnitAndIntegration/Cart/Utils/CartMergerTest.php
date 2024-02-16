<?php
namespace App\Tests\UnitAndIntegration\Cart\Utils;

use App\Cart\Utils\CartMerger;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\Packaging;
use App\Entity\VendorGroup;
use App\Repository\PackagingRepository;
use App\Tests\Utils\FixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Cart
 */
class CartMergerTest extends KernelTestCase
{
    use FixturesTrait;

    private Packaging $packaging1;
    private Packaging $packaging2;
    private Packaging $packaging3;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([ProductTestFixtures::class]);

        /** @var Packaging[] */
        $packagings = static::getContainer()->get(PackagingRepository::class)->findAll();

        $this->packaging1 = $packagings[0];
        $this->packaging2 = $packagings[1];
        $this->packaging3 = $packagings[2];
    }

    public function testMergeWithOneAdditionalLineInCookieCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 2,
            $this->packaging2->getId() => 1
        ];

        $dbCart = (new Cart)
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                            ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging2)
                            ->setQuantity(1)
                        )
                    );
                    

        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);

        $this->assertEquals($cookieCart, $mergedCart);
    }

    public function testMergeWithOneAdditionalLineInDatabaseCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 2,
        ];

        $dbCart = (new Cart)
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                            ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging1)
                            ->setQuantity(2)
                        )
                    )
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                        ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging2)
                            ->setQuantity(1)
                        )
                    );

        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);

        $this->assertEquals([
            $this->packaging1->getId() => 2,
            $this->packaging2->getId() => 1
        ], $mergedCart);
    }

    public function testMergeWithOneLineWithMoreQuantityInDatabaseCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 2,
        ];

        $dbCart = (new Cart)
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                        ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging1)
                            ->setQuantity(10)
                        )
                    );

        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);

        $this->assertEquals(2, $mergedCart[$this->packaging1->getId()]);
    }

    public function testMergeWithOneLineWithMoreQuantityInCookieCart()
    {
        $cookieCart = [
            $this->packaging1->getId() => 10,
        ];

        $dbCart = (new Cart)
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                        ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging1)
                            ->setQuantity(1)
                        )
                    )
                    ;

        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);

        $this->assertEquals(10, $mergedCart[$this->packaging1->getId()]);
    }

    public function testMergeWithNoDatabaseCart()
    {
        $cookieCart = [
            111 => 1
        ];
        $mergedCart = (new CartMerger)->merge(null, $cookieCart);
        $this->assertEquals($cookieCart, $mergedCart);
    }

    public function testMergeWithEmptyDatabaseCart()
    {
        $cookieCart = [
            111 => 1
        ];
        $dbCart = new Cart;
        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);
        $this->assertEquals($cookieCart, $mergedCart);
    }

    public function testMergeWithEmptyCookieCart()
    {
        $cookieCart = [];
        $dbCart = (new Cart)
                    ->addCartVendorGroup(
                        (new CartVendorGroup)
                        ->addCartLine(
                            (new CartLine)
                            ->setPackaging($this->packaging1)
                            ->setQuantity(1)
                        )
                    );
        $mergedCart = (new CartMerger)->merge($dbCart, $cookieCart);
        $this->assertEquals([
            $this->packaging1->getId() => 1
        ], $mergedCart);
    }
}