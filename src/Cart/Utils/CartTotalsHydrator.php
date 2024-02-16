<?php
namespace App\Cart\Utils;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Price\PriceOperator;
use App\Price\PriceResolver;

class CartTotalsHydrator
{
    public function __construct(
        private PriceResolver $priceResolver,
        private PriceOperator $priceOperator
    )
    {
        
    }

    /**
     * Hydrate les cartLines.totalPrice, cart.totalPrice et cart.count
     *
     * @param Cart $cart
     * @return void
     */
    public function hydrate(Cart $cart)
    {
        $vendorGroups = $cart->getCartVendorGroups();
        $countVendorGroups = $vendorGroups->count();
        $index = 0;
        $cartLines = [];
        foreach($vendorGroups as $vendorGroup)
        {
            $vendorGroup->setIndex($index)
                        ->setPosition(($index + 1) . '/' . $countVendorGroups)
                        ;
            $index++;

            /** @var CartLine[] */
            $cartLines = array_merge(
                $cartLines,
                $vendorGroup->getCartLines()->toArray()
            );
        }
        
        $count = 0;
        $lineTotalPrices = [];
        foreach($cartLines as $cartLine)
        {
            //count
            $quantity = $cartLine->getQuantity();
            $count += $quantity;
            //weight
            $unitWeight = $cartLine->getPackaging()->getWeight();
            $lineWeight = $unitWeight * $cartLine->getQuantity();
            $cartLine->setUnitWeight($unitWeight)
                    ->setTotalWeight($lineWeight)
                    ;
            $cartLine->getCartVendorGroup()->setWeight(
                ($cartLine->getCartVendorGroup()->getWeight() ?: 0) + $lineWeight
            );

            //prices
            $unitPrice = $this->priceResolver->resolve($cartLine->getPackaging());
            $cartLine->setUnitPrice($unitPrice);

            $linePrice = $this->priceOperator->multiply($unitPrice, $quantity);
            $cartLine->setTotalPrice($linePrice);

            $lineTotalPrices[] = $linePrice;
        }
        $totalPrice = $this->priceOperator->add($lineTotalPrices);

        $cart->setTotalPrice($totalPrice)
            ->setCount($count)
            ;

    }

}