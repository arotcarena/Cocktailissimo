<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PaymentVerification;

use App\Cart\Utils\CartStockUpdater;
use App\Entity\Cart;
use App\Entity\CustomPrice;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutCartVerificator;
use PHPUnit\Framework\TestCase;

/**
 * @group Purchase
 */
class CheckoutCartVerificatorTest extends TestCase
{
    private CheckoutCartVerificator $checkoutCartVerificator;

    public function setUp(): void
    {
        $this->checkoutCartVerificator = new CheckoutCartVerificator;
    }

    public function testVerifyWithStatusStockUpdated()
    {
        $errors = $this->checkoutCartVerificator->verify(
            (new Cart),
            CartStockUpdater::STOCK_UPDATED,
            50000
        );
        $this->assertNotNull($errors);
    }

    public function testVerifyWithStatusCartRemoved()
    {
        $errors = $this->checkoutCartVerificator->verify(
            (new Cart),
            CartStockUpdater::CART_REMOVED,
            50000
        );
        $this->assertNotNull($errors);
    }

    public function testVerifyWithDifferentCartAndCheckoutCartTotalPrices()
    {
        $errors = $this->checkoutCartVerificator->verify(
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setPriceTTC(500)
            ),
            CartStockUpdater::STOCK_SUFFICIENT,
            450
        );

        $this->assertNotNull($errors);
    }

    public function testVerifySuccess()
    {
        $errors = $this->checkoutCartVerificator->verify(
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                ->setPriceTTC(500)
            ),
            CartStockUpdater::STOCK_SUFFICIENT,
            500
        );

        $this->assertNull($errors);
    }
}