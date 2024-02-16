<?php
namespace App\Cart\Storage;

use App\Cart\Utils\CartFactory;
use App\Entity\Cart;
use App\Entity\Packaging;
use App\Entity\User;
use App\Repository\PackagingRepository;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Bundle\SecurityBundle\Security;

class CartStorage
{
    public function __construct(
        private CookieCart $cookieCart,
        private DatabaseCart $databaseCart,
        private PackagingRepository $packagingRepository,
        private CartFactory $cartFactory,
        private Security $security,
        private VisitorActionSaver $visitorActionSaver
    )
    {
        
    }

    public function getCookieCart(): array
    {
        return $this->cookieCart->get();
    }

    public function getDatabaseCart(User $user = null): ?Cart
    {
        return $this->databaseCart->get($user);
    }

    public function empty(User $user = null): void
    {
        $this->cookieCart->set([]);
        $cart = $this->cartFactory->createFullCart([], []);
        $this->databaseCart->persist($cart, $user);

        $this->visitorActionSaver->saveTypeCartChange([]);
    }

    /**
     * @param array $cartArray
     * @param User $user
     * @param Packaging[] $packagingsById
     * @return Cart|null
     */
    public function save($cartArray, $packagingsById = null, $user = null)
    {
        //s'il s'agit de la création d'un panier, on crée une VisitorAction de type cart_create
        if(count($this->cookieCart->get()) === 0)
        {
            $this->visitorActionSaver->saveTypeCartCreate($cartArray);
        }
        else
        {
            //sinon on crée une visitorAction de type cart_change
            $this->visitorActionSaver->saveTypeCartChange($cartArray);
        }

        $this->cookieCart->set($cartArray);

        //on crée un Cart et sauvegarde en database seulement si un User est connecté
        $user = $user ?: $this->security->getUser();
        if($user)
        {
            if(!$packagingsById)
            {
                $packagingsById = $this->packagingRepository->findByIds(array_keys($cartArray));
            }

            $cart = $this->cartFactory->createFullCart($cartArray, $packagingsById);
            $this->databaseCart->persist($cart, $user);

            return $cart;
        }
        return null;
    }

}