<?php
namespace App\Cart\Utils;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\Packaging;

class CartFactory
{
    /**
     * @param array $cookieCart
     * @param Packaging[] $packagings
     * @return Cart
     */
    public function createLightCart($cookieCart, $packagings): Cart 
    {
        $cart = new Cart;

        //on parcourt packaging car on se fiche de l'ordre des cartLines vu que le lightCart n'affiche que le prix total et le count
        //de même on se fiche des vendorGroups et pas besoin d'ajouter un vendeur car le LightCart ne sert qu'à l'affichage et ne sera pas persisté
        $vendorGroup = new CartVendorGroup;
        $cart->addCartVendorGroup($vendorGroup);

        foreach($packagings as $packaging)
        {
            $quantity = $cookieCart[$packaging->getId()];

            $vendorGroup->addCartLine(
                (new CartLine)
                ->setPackaging($packaging)
                ->setQuantity($quantity)
            );
        }

        return $cart;
    }

    /**
     * @param array $cookieCart
     * @param Packaging[] $packagingsById
     * @return Cart
     */
    public function createFullCart($cookieCart, $packagingsById): Cart
    {
        /** @var CartVendorGroup[] */
        $vendorGroupsByVendorId = [];
        
        //on parcourt cookieCart et non pas les packagings car on veut toujours conserver l'ordre d'ajout des cartLines
        foreach($cookieCart as $packagingId => $quantity)
        {
            //au cas ou un produit en sessionCart a été supprimé par l'admin et updateStock n'a pas été fait
            if(isset($packagingsById[$packagingId]))
            {
                /** @var Packaging */
                $packaging = $packagingsById[$packagingId];

                $cartLine = (new CartLine)
                            ->setPackaging($packaging)
                            ->setQuantity($quantity)
                            ;
                
                $vendor = $packaging->getProduct()->getVendor();
                
                //si on a déjà un vendorGroup correspondant à ce vendor, on ajoute la cartLine à ce vendorGroup
                if(array_key_exists($vendor->getId(), $vendorGroupsByVendorId))
                {
                    $vendorGroupsByVendorId[$vendor->getId()]->addCartLine($cartLine);
                }
                else //sinon on crée un nouveau vendorGroup qu'on ajoute au tableau
                {
                    $vendorGroupsByVendorId[$vendor->getId()] = (new CartVendorGroup)
                                                                ->setVendor($vendor)
                                                                ->addCartLine($cartLine)
                                                                ;
                }
            }
        }

        //on crée un cart avec tous les vendorGroups
        $cart = new Cart;
        foreach($vendorGroupsByVendorId as $vendorGroup)
        {
            $cart->addCartVendorGroup($vendorGroup);
        }

        return $cart;
    }
}