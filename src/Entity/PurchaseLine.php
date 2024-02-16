<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PurchaseLineRepository;

#[ORM\Entity(repositoryClass: PurchaseLineRepository::class)]
class PurchaseLine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $quantity = null;

    #[ORM\Column(length: 255)]
    private ?string $publicRef = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $privateRef = null;
    
    //pour hydratation dans PurchaseHydrator (afin de pouvoir afficher la photo et le lien vers product_show)
    private ?Packaging $packaging = null;

    #[ORM\Column(length: 255)]
    private ?string $hsCode = null;

    #[ORM\Column(length: 2)]
    private ?string $originCountry = null;

    #[ORM\Column]
    private ?int $totalWeight = null;

    #[ORM\Column]
    private ?int $unitWeight = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $packagingLabel = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $designation = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?CustomPrice $unitPrice = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?CustomPrice $totalPrice = null;

    #[ORM\ManyToOne(inversedBy: 'purchaseLines')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PurchaseVendorGroup $purchaseVendorGroup = null;



    public function getId(): ?int
    {
        return $this->id;
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

    public function getPackaging(): ?Packaging
    {
        return $this->packaging;
    }

    public function setPackaging(Packaging $packaging): self
    {
        $this->packaging = $packaging;

        return $this;
    }

    public function getPublicRef(): ?string
    {
        return $this->publicRef;
    }

    public function setPublicRef(string $publicRef): static
    {
        $this->publicRef = $publicRef;

        return $this;
    }

    public function getPrivateRef(): ?string
    {
        return $this->privateRef;
    }

    public function setPrivateRef(?string $privateRef): static
    {
        $this->privateRef = $privateRef;

        return $this;
    }

    public function getHsCode(): ?string
    {
        return $this->hsCode;
    }

    public function setHsCode(string $hsCode): static
    {
        $this->hsCode = $hsCode;

        return $this;
    }

    public function getOriginCountry(): ?string
    {
        return $this->originCountry;
    }

    public function setOriginCountry(string $originCountry): static
    {
        $this->originCountry = $originCountry;

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

    public function getUnitWeight(): ?int
    {
        return $this->unitWeight;
    }

    public function setUnitWeight(int $unitWeight): static
    {
        $this->unitWeight = $unitWeight;

        return $this;
    }

    public function getPackagingLabel(): ?TranslatableString
    {
        return $this->packagingLabel;
    }

    public function setPackagingLabel(?TranslatableString $packagingLabel): static
    {
        $this->packagingLabel = $packagingLabel;

        return $this;
    }

    public function getDesignation(): ?TranslatableString
    {
        return $this->designation;
    }

    public function setDesignation(TranslatableString $designation): static
    {
        $this->designation = $designation;

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

    public function getTotalPrice(): ?CustomPrice
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(CustomPrice $totalPrice): static
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getPurchaseVendorGroup(): ?PurchaseVendorGroup
    {
        return $this->purchaseVendorGroup;
    }

    public function setPurchaseVendorGroup(?PurchaseVendorGroup $purchaseVendorGroup): static
    {
        $this->purchaseVendorGroup = $purchaseVendorGroup;

        return $this;
    }
}
