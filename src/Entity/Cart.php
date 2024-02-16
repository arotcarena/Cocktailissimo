<?php

namespace App\Entity;

use App\Repository\CartRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CartRepository::class)]
class Cart
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    public ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'cart')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    private ?CustomPrice $totalPrice = null;

    private ?int $count = null;

    #[ORM\OneToMany(mappedBy: 'cart', targetEntity: CartVendorGroup::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $cartVendorGroups;


    public function __construct()
    {
        $this->cartVendorGroups = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTotalPrice(): ?CustomPrice
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(CustomPrice $totalPrice): static
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): static
    {
        $this->count = $count;

        return $this;
    }

    /**
     * @return Collection<int, CartVendorGroup>
     */
    public function getCartVendorGroups(): Collection
    {
        return $this->cartVendorGroups;
    }

    public function addCartVendorGroup(CartVendorGroup $cartVendorGroup): static
    {
        if (!$this->cartVendorGroups->contains($cartVendorGroup)) {
            $this->cartVendorGroups->add($cartVendorGroup);
            $cartVendorGroup->setCart($this);
        }

        return $this;
    }

    public function removeCartVendorGroup(CartVendorGroup $cartVendorGroup): static
    {
        if ($this->cartVendorGroups->removeElement($cartVendorGroup)) {
            // set the owning side to null (unless already changed)
            if ($cartVendorGroup->getCart() === $this) {
                $cartVendorGroup->setCart(null);
            }
        }

        return $this;
    }

}
