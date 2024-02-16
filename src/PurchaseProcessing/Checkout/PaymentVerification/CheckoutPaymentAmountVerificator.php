<?php
namespace App\PurchaseProcessing\Checkout\PaymentVerification;

use App\Entity\Cart;
use Exception;
use Symfony\Contracts\Translation\TranslatorInterface;

class CheckoutPaymentAmountVerificator
{
    public function __construct(
        private TranslatorInterface $translator
    )
    {
        
    }

    public function verify(int $paymentIntentAmount, Cart $cart, ?int $shippingCost): bool
    {
        if(!$shippingCost)
        {
            $shippingCost = 0;
        }
        if($paymentIntentAmount !== ($cart->getTotalPrice()->getPriceToPay() + $shippingCost) || $shippingCost < 0)
        {
            throw new Exception($this->translator->trans('error.temporary_failure'));
        }
        return true;
    }
}