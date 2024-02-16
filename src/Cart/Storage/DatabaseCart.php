<?php
namespace App\Cart\Storage;

use App\Entity\Cart;
use App\Entity\User;
use App\Repository\CartRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class DatabaseCart
{
    public function __construct(
        private Security $security,
        private CartRepository $cartRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    public function get(User $user = null): ?Cart
    {
        $user = $this->resolveUser($user);
        if(!$user)
        {
            return null;
        }
        return $this->cartRepository->findOneByUserHydratedWithPackagings($user);
    }

    public function persist(Cart $cart, User $user = null): void
    {
        $user = $this->resolveUser($user);
        if(!$user)
        {
            return;
        }
        $dbCart = $this->cartRepository->findOneByUserHydratedWithPackagings($user);
        if($dbCart)
        {
            foreach($dbCart->getCartVendorGroups() as $vendorGroup)
            {
                $dbCart->removeCartVendorGroup($vendorGroup);
                $this->em->remove($vendorGroup); // au cas ou
            }
            foreach($cart->getCartVendorGroups() as $vendorGroup)
            {
                $dbCart->addCartVendorGroup($vendorGroup);
            }
        }
        else
        {
            $cart->setUser($user);
            $this->em->persist($cart);
        }
        $this->em->flush();
    }

    private function resolveUser(User $user = null): ?User
    {
        return $user ?: $this->security->getUser();
    }

  
}