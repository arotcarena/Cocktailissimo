<?php
namespace App\PurchaseProcessing\Checkout\PaymentVerification;

use App\Cart\Utils\CartStockUpdater;
use App\Entity\Cart;
use stdClass;

class CheckoutCartVerificator
{
    /**
     * Undocumented function
     *
     * @param Cart $cart
     * @param string $stockStatus
     * @param stdClass $checkoutCart
     * @param integer $paymentIntentAmount
     * @return array|null $errors [message => ..., target => ...]
     */
    public function verify(Cart $cart, string $stockStatus, int $checkoutArticlesPrice): ?array
    {
        //VERIFICATIONS
        // on vérifie le stock 
        if($stockStatus !== CartStockUpdater::STOCK_SUFFICIENT)
        {
            if($stockStatus === CartStockUpdater::CART_REMOVED)
            {
                return [
                    'target' => 'home',
                    'message' => 'error.purchase_payment.noStock'
                ];
            }
            else
            {
                return [
                    'target' => 'purchase_create',
                    'message' => 'error.purchase_payment.updated_purchase'
                ];
            }
        }
        //on vérifie que checkoutData.cart a le même total que le cart qu'on a récupéré depuis le cookie
        // si c'est différent (suite à un changement de prix d'un produit) on en peut pas accepter la commande
        if($checkoutArticlesPrice !== $cart->getTotalPrice()->getPriceToPay())
        {
            return [
                'target' => 'purchase_create',
                'message' => 'error.purchase_payment.updated_purchase'
            ];
        }
        return null;
    }
}