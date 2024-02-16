<?php
namespace App\Cart;

use App\Cart\Storage\CartStorage;
use App\Cart\Utils\CartFactory;
use App\Cart\Utils\CartMerger;
use App\Cart\Utils\CartStockUpdater;
use App\Cart\Utils\CartTotalsHydrator;
use App\Entity\Cart;
use App\Entity\User;
use App\Exception\NotEnoughStockException;
use App\Repository\PackagingRepository;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use Exception;
use Symfony\Contracts\Translation\TranslatorInterface;

class CartService
{
    public function __construct(
        private PackagingRepository $packagingRepository,
        private EntityCountAdder $entityCountAdder,
        private TranslatorInterface $translator,
        private CartStorage $cartStorage,
        private CartFactory $cartFactory,
        private CartMerger $cartMerger,
        private CartStockUpdater $cartStockUpdater,
        private CartTotalsHydrator $cartTotalsHydrator
    )
    {

    }

    public function setQuantity(int $packagingId, int $quantity)
    {
        if($quantity < 1)
        {
            return;
        }

        $packaging = $this->packagingRepository->find($packagingId);
        //on vérifie que le packaging existe
        if(!$packaging)
        {
            throw new Exception(
                $this->translator->trans('error.temporary_failure')
            );
        }

        $cookieCart = $this->cartStorage->getCookieCart();

        $cookieCart[$packagingId] = $quantity;

        //on vérifie le stock
        if($cookieCart[$packagingId] > $packaging->getStock())
        {
            $cookieCart[$packagingId] = $packaging->getStock();
            //si le stock est 0, on supprime carrément la ligne
            if($packaging->getStock() === 0)
            {
                unset($cookieCart[$packagingId]);
            }
            $this->cartStorage->save($cookieCart);
            throw new NotEnoughStockException(
                $this->translator->trans('insufficient_stock')
            );
        }

        $this->cartStorage->save($cookieCart);
    }


    public function add(int $packagingId, int $quantity = 1)
    {
        if($quantity < 1)
        {
            return;
        }
        $newPackagingAddedToCart = null;

        $packaging = $this->packagingRepository->find($packagingId);
        //on vérifie que le packaging existe
        if(!$packaging)
        {
            throw new Exception(
                $this->translator->trans('error.temporary_failure')
            );
        }

        $cookieCart = $this->cartStorage->getCookieCart();
        //si packaging déjà dans panier, on ajoute la quantity
        if(array_key_exists($packagingId, $cookieCart))
        {
            $cookieCart[$packagingId] += $quantity;
        }
        //sinon on ajoute le product avec sa quantity
        else
        {
            $cookieCart[$packagingId] = $quantity;
            $newPackagingAddedToCart = $packaging;
        }

        //on vérifie le stock
        if($cookieCart[$packagingId] > $packaging->getStock())
        {
            $quantityNotAdded = $cookieCart[$packagingId] - $packaging->getStock();
            $cookieCart[$packagingId] = $packaging->getStock();
            //si le stock est 0, on supprime carrément la ligne
            if($packaging->getStock() === 0)
            {
                unset($cookieCart[$packagingId]);
            }
            $this->cartStorage->save($cookieCart);
            throw (new NotEnoughStockException(
                    $this->translator->trans('insufficient_stock')
                ))
                ->setQuantityNotAdded($quantityNotAdded)
                ;
        }

        //si on vient d'ajouter un nouveau packaging et qu'il n'y a pas eu d'erreur de stock, on ajoute un countCart au product
        if($newPackagingAddedToCart)
        {
            $this->entityCountAdder->addCount($newPackagingAddedToCart->getProduct(), 'countCarts', 1, true);
        }

        $this->cartStorage->save($cookieCart);
    }

    public function remove(int $packagingId)
    {
        $cookieCart = $this->cartStorage->getCookieCart();
        if(!array_key_exists($packagingId, $cookieCart))
        {
            throw new Exception(
                $this->translator->trans('error.temporary_failure')
            );
        }
        unset($cookieCart[$packagingId]);

        $this->cartStorage->save($cookieCart);
    }

    /**
     * Update le stock au passage
     *
     * @return array [Cart, stockStatus] Cart hydraté avec les totaux
     */
    public function getFullCart(): array
    {
        $cookieCart = $this->cartStorage->getCookieCart();
        
        $packagingsById = $this->packagingRepository->findByIds(array_keys($cookieCart), true);

        //update le stock
        [$updatedCookieCart, $stockStatus] = $this->cartStockUpdater->updateStock($cookieCart, $packagingsById);

        //si le stock est ok, alors pas besoin de save
        if($stockStatus === CartStockUpdater::STOCK_SUFFICIENT)
        {
            $cart = $this->cartFactory->createFullCart($cookieCart, $packagingsById);
        }
        else // si le stock n'est pas ok, on sauvegarde les modifications dans le cookie et la database
        {
            $cart = $this->cartStorage->save($updatedCookieCart, $packagingsById);
        }

        //hydrate le cart avec les totaux
        $this->cartTotalsHydrator->hydrate($cart);
        
        return [$cart, $stockStatus];
    }

    /**
     * N'update pas le stock
     *
     * @return Cart hydraté avec les totaux
     */
    public function getLightCart(): Cart
    {
        $cookieCart = $this->cartStorage->getCookieCart();

        $packagings = $this->packagingRepository->findByIds(array_keys($cookieCart), true);

        $cart = $this->cartFactory->createLightCart($cookieCart, $packagings);
        $this->cartTotalsHydrator->hydrate($cart);

        return $cart;
    }

    public function count(): int 
    {
        $cookieCart = $this->cartStorage->getCookieCart();
        $count = 0;
        foreach($cookieCart as $packagingId => $quantity)
        {
            $count += $quantity;
        }
        return $count;
    }

    public function empty()
    {
        $this->cartStorage->empty();
    }

    public function onLoginUpdate(User $user)
    {
        $dbCart = $this->cartStorage->getDatabaseCart($user);
        $cookieCart = $this->cartStorage->getCookieCart();

        $mergedCart = $this->cartMerger->merge($dbCart, $cookieCart);

        $packagingsById = $this->packagingRepository->findByIds(array_keys($mergedCart), true);
        //update le stock
        [$updatedCookieCart, $stockStatus] = $this->cartStockUpdater->updateStock($mergedCart, $packagingsById);
        //save dans cookie et database
        $this->cartStorage->save($updatedCookieCart, $packagingsById, $user);
    }

}