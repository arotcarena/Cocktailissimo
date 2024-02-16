<?php
namespace App\Tests\IntegrationOnly\Utils\Factory;

use App\DataFixtures\Tests\CartTestFixtures;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CustomPrice;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Tests\IntegrationOnly\Utils\Convertor\CustomPriceToStdConvertor;
use App\Tests\IntegrationOnly\Utils\Convertor\VendorGroupsToStdConvertor;

trait CartAndCheckoutCartFactoryTrait
{
    /**
     * @return array [Cart $cart, stdClass $checkoutCartData]
     */
    public function createSimilarCartAndCheckoutCartData(): array
    {
        $this->loadFixtures([CartTestFixtures::class]);
        // cart avec 2 vendorGroups et une cartLine dans chaque vendorGroup
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $cart = $user->getCart(); 

        //on hydrate le cart avec les totaux (on utilise d'office prix HT)
        $this->hydrateCartWithTotalsHT($cart);


        $checkoutCartData = (object) [
            'vendorGroups' => (new VendorGroupsToStdConvertor)->convert($cart->getCartVendorGroups()),
            'articlesPrice' => CustomPriceToStdConvertor::convert($cart->getTotalPrice()),
            'shippingCost' => null,
            'totalPrice' => null,
            'countArticles' => 2
        ];

        return [$cart, $checkoutCartData];
    }

    private function hydrateCartWithTotalsHT(Cart $cart)
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

            $cartLines = array_merge(
                $cartLines,
                $vendorGroup->getCartLines()->toArray()
            );
        }
        
        $count = 0;
        $lineTotalPrices = [];
        /** @var CartLine */
        foreach($cartLines as $cartLine)
        {
            //count
            $quantity = $cartLine->getQuantity();
            $count += $quantity;
            //weight
            $unitWeight = $cartLine->getPackaging()->getWeight();
            $lineWeight = $unitWeight * $cartLine->getQuantity();
            $cartLine
                    ->setUnitWeight($unitWeight)
                    ->setTotalWeight($lineWeight);
            $cartLine->getCartVendorGroup()->setWeight(
                ($cartLine->getCartVendorGroup()->getWeight() ?: 0) + $lineWeight
            );

            //price
            $unitPriceHT = $cartLine->getPackaging()->getConsumerPriceHT();
            $cartLine->setUnitPrice(
                (new CustomPrice)
                ->setPriceHT($unitPriceHT)
                ->setPayType(CustomPrice::PAY_PRICE_HT)
            );

            $linePrice = (new CustomPrice)
                        ->setPriceHT($unitPriceHT * $quantity)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ;
                        
            $cartLine->setTotalPrice($linePrice);

            $lineTotalPrices[] = $linePrice;
        }
        $total = 0;
        foreach($lineTotalPrices as $lineTotalPrice)
        {
            $total += $lineTotalPrice->getPriceHT();
        }

        $cart->setTotalPrice(
                (new CustomPrice)
                ->setPriceHT($total)
                ->setPayType(CustomPrice::PAY_PRICE_HT)
            )
            ->setCount($count)
            ;
    }
}