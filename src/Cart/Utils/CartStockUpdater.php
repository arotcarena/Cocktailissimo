<?php
namespace App\Cart\Utils;

use App\Entity\Packaging;

class CartStockUpdater
{
    public const STOCK_UPDATED = 'stock_updated';
    public const CART_REMOVED = 'cart_removed';
    public const STOCK_SUFFICIENT = 'stock_sufficient';
    
    /**
     * @param array $cookieCart
     * @param Packaging[] $packagingsById
     * @return array [$cookieCart, $stockStatus]
     */
    public function updateStock($cookieCart, $packagingsById) 
    {
        $stockStatus = self::STOCK_SUFFICIENT;

        //si le cart est vide pas besoin de faire de vérification
        if(count($cookieCart) === 0)
        {
            return [$cookieCart, $stockStatus];
        }

        foreach($cookieCart as $packagingId => $quantity)
        {
            $packaging = $packagingsById[$packagingId] ?? null;
            // si le product a été supprimé ou si le stock est à zéro, on supprime la ligne
            if(!$packaging || $packaging->getStock() === 0)
            {
                $stockStatus = self::STOCK_UPDATED;
                unset($cookieCart[$packagingId]);
            }
            elseif($quantity > $packaging->getStock())
            {
                $stockStatus = self::STOCK_UPDATED;
                $cookieCart[$packagingId] = $packaging->getStock();
            }
        }
        //si le cart se retrouve vidé complétement
        if(count($cookieCart) === 0)
        {
            $stockStatus = self::CART_REMOVED;
        }

        return [$cookieCart, $stockStatus];
    }
}