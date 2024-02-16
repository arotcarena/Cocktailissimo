<?php

namespace App\Entity;

use App\Repository\CartLineRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CartLineRepository::class)]
class CartLine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Packaging $packaging = null;

    #[ORM\Column]
    private ?int $quantity = null;
    
    private ?CustomPrice $totalPrice = null;

    private ?CustomPrice $unitPrice = null;

    #[ORM\ManyToOne(inversedBy: 'cartLines')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CartVendorGroup $cartVendorGroup = null;

    
    private ?int $unitWeight = null;
    private ?int $totalWeight = null;
    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPackaging(): ?Packaging
    {
        return $this->packaging;
    }

    public function setPackaging(?Packaging $packaging): self
    {
        $this->packaging = $packaging;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

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

    public function getUnitPrice(): ?CustomPrice
    {
        return $this->unitPrice;
    }

    public function setUnitPrice(CustomPrice $unitPrice): static
    {
        $this->unitPrice = $unitPrice;

        return $this;
    }

    public function getCartVendorGroup(): ?CartVendorGroup
    {
        return $this->cartVendorGroup;
    }

    public function setCartVendorGroup(?CartVendorGroup $cartVendorGroup): static
    {
        $this->cartVendorGroup = $cartVendorGroup;

        return $this;
    }

    public function getUnitWeight(): ?int
    {
        return $this->unitWeight;
    }

    public function setUnitWeight(int $unitWeight): static
    {
        $this->unitWeight = $unitWeight;

        return $this;
    }

    public function getTotalWeight(): ?int
    {
        return $this->totalWeight;
    }

    public function setTotalWeight(int $totalWeight): static
    {
        $this->totalWeight = $totalWeight;

        return $this;
    }
}
