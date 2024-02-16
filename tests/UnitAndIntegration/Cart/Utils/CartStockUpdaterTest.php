<?php
namespace App\Tests\UnitAndIntegration\Cart\Utils;

use App\Cart\Utils\CartStockUpdater;
use App\Entity\Packaging;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Cart
 */
class CartStockUpdaterTest extends KernelTestCase
{
    public function testStockSufficient()
    {
        $cookieCart = [
            1 => 10,
            2 => 1
        ];

        $packagingsById = [
            1 => (new Packaging)->setStock(15),
            2 => (new Packaging)->setStock(1)
        ];

        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);

        $this->assertEquals(CartStockUpdater::STOCK_SUFFICIENT, $stockStatus);
        $this->assertEquals($cookieCart, $updatedCart);
    }

    public function testStockUpdated()
    {
        $cookieCart = [
            1 => 10,
            2 => 1
        ];

        $packagingsById = [
            1 => (new Packaging)->setStock(9),
            2 => (new Packaging)->setStock(1)
        ];

        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);

        $this->assertEquals(CartStockUpdater::STOCK_UPDATED, $stockStatus);
        $this->assertEquals([
            1 => 9,
            2 => 1
        ], $updatedCart);
    }

    public function testLineWithStock0()
    {
        $cookieCart = [
            1 => 10,
            2 => 1
        ];

        $packagingsById = [
            1 => (new Packaging)->setStock(0),
            2 => (new Packaging)->setStock(1)
        ];

        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);

        $this->assertEquals(CartStockUpdater::STOCK_UPDATED, $stockStatus);
        $this->assertEquals([
            2 => 1
        ], $updatedCart);
    }

    public function testProductRemoved()
    {
        $cookieCart = [
            1 => 10,
            2 => 1
        ];

        $packagingsById = [
            2 => (new Packaging)->setStock(1)
        ];

        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);

        $this->assertEquals(CartStockUpdater::STOCK_UPDATED, $stockStatus);
        $this->assertEquals([
            2 => 1
        ], $updatedCart);
    }

    public function testCartRemoved()
    {
        $cookieCart = [
            1 => 10,
            2 => 1
        ];

        $packagingsById = [
            2 => (new Packaging)->setStock(0)
        ];

        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);

        $this->assertEquals(CartStockUpdater::CART_REMOVED, $stockStatus);
        $this->assertEquals([], $updatedCart);
    }

    public function testWithEmptyCart()
    {
        $cookieCart = [];
        $packagingsById = [];
        [$updatedCart, $stockStatus] = (new CartStockUpdater)->updateStock($cookieCart, $packagingsById);
        $this->assertEquals([], $updatedCart);
        $this->assertEquals(CartStockUpdater::STOCK_SUFFICIENT, $stockStatus);
    }
}