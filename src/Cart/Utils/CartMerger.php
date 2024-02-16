<?php
namespace App\Cart\Utils;

use App\Entity\Cart;

class CartMerger
{
    /**
     * Récupère le cart en database, et fait un merge avec le cart du cookie
     * Si un produit est en database et pas dans le cookie, on l'ajoute
     * Si il y a une différence de quantité, on laisse la quantité du cookie
     *
     * @param null|Cart $dbCart
     * @param array $cookieCart
     * @return array $cookieCart
     */
    public function merge(?Cart $dbCart, array $cookieCart): array
    {
        if(!$dbCart)
        {
            return $cookieCart;
        }

        foreach($dbCart->getCartVendorGroups() as $vendorGroup)
        {
            foreach($vendorGroup->getCartLines() as $cartLine)
            {
                $packaging = $cartLine->getPackaging();
                //si ce packaging n'est pas déjà dans cookieCart on ajoute la ligne
                if(!array_key_exists($packaging->getId(), $cookieCart))
                {
                    $cookieCart[$packaging->getId()] = $cartLine->getQuantity();
                }
            }
        }
        
        return $cookieCart;
    }
}