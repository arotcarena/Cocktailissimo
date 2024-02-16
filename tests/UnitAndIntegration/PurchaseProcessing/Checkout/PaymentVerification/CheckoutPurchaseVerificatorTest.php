<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PaymentVerification;

use App\Config\SiteConfig;
use App\Entity\Purchase;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPurchaseVerificator;
use PHPUnit\Framework\TestCase;

/**
 * @group Purchase
 */
class CheckoutPurchaseVerificatorTest extends TestCase
{
    private CheckoutPurchaseVerificator $checkoutPurchaseVerificator;

    public function setUp(): void
    {
        $this->checkoutPurchaseVerificator = new CheckoutPurchaseVerificator;
    }

    public function testVerifyWithNullParam()
    {
        $errorMessage = $this->checkoutPurchaseVerificator->verify(null);
        $this->assertNotNull($errorMessage);
    }
    public function testVerifyWithPurchasePaid()
    {
        $purchase = (new Purchase)->setStatus(SiteConfig::STATUS_PAID);

        $errorMessage = $this->checkoutPurchaseVerificator->verify($purchase);
        $this->assertNotNull($errorMessage);
    }
    public function testVerifyWithPurchasePendingSuccess()
    {
        $purchase = (new Purchase)->setStatus(SiteConfig::STATUS_PENDING);

        $errorMessage = $this->checkoutPurchaseVerificator->verify($purchase);
        $this->assertNull($errorMessage);
    }
}