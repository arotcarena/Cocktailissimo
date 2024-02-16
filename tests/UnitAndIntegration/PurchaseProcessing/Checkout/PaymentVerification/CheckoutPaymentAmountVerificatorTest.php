<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PaymentVerification;

use App\Entity\Cart;
use App\Entity\CustomPrice;
use App\PurchaseProcessing\Checkout\PaymentVerification\CheckoutPaymentAmountVerificator;
use Exception;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @group Purchase
 */
class CheckoutPaymentAmountVerificatorTest extends TestCase
{
    private CheckoutPaymentAmountVerificator $checkoutPaymentAmountVerificator;

    public function setUp(): void
    {
        /** @var TranslatorInterface|MockObject */
        $translator = $this->createMock(TranslatorInterface::class);
        $translator->expects($this->any())
                    ->method('trans')
                    ->willReturn('translated content')
                    ;
        $this->checkoutPaymentAmountVerificator = new CheckoutPaymentAmountVerificator($translator);
    }

    public function testWithNegativeShippingCost()
    {
        $this->expectException(Exception::class);
        $this->checkoutPaymentAmountVerificator->verify(
            5000,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(4450)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            -1
        );
    }
    public function testPaymentOverCartTotalAmount()
    {
        $this->expectException(Exception::class);
        $this->checkoutPaymentAmountVerificator->verify(
            5000,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(4000)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            600
        );
    }
    public function testPaymentUnderCartTotalAmount()
    {
        $this->expectException(Exception::class);
        $this->checkoutPaymentAmountVerificator->verify(
            4000,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(3500)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            600
        );
    }
    public function testWithNullShippingCost()
    {
        $result = $this->checkoutPaymentAmountVerificator->verify(
            4500,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(4500)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            null
        );
        $this->assertTrue($result);

        $this->expectException(Exception::class);
        $result = $this->checkoutPaymentAmountVerificator->verify(
            5000,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(4500)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            null
        );
    }
    public function testVerificationSuccess()
    {
        $result = $this->checkoutPaymentAmountVerificator->verify(
            5000,
            (new Cart)
            ->setTotalPrice(
                (new CustomPrice)
                ->setPriceTTC(4500)
                ->setPayType(CustomPrice::PAY_PRICE_TTC)
            ),
            500
        );
        $this->assertTrue($result);
    }
}