<?php

namespace App\Entity;

use App\Config\VatLevels;
use App\Repository\SupplyRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SupplyRepository::class)]
class Supply
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'supplies')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Supplier $supplier = null;

    #[ORM\Column(length: 255)]
    private ?string $publicRef = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $privateRef = null;

    #[ORM\Column(length: 255)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $packagingLabel = null;

    #[ORM\Column]
    private ?int $priceHT = null;

    #[ORM\Column]
    private ?int $priceTTC = null;

    #[ORM\Column(length: 2)]
    private ?string $originCountry = null;

    #[ORM\Column(length: 255)]
    private ?string $hsCode = null;

    #[ORM\Column(length: 255)]
    private ?string $eanCode = null;

    #[ORM\Column(length: 50, nullable: false, options: ['default' => VatLevels::STANDARD])]
    private string $vatLevel = VatLevels::STANDARD;

    #[ORM\Column(length: 2)]
    private ?string $vatCountry = null;

    #[ORM\Column]
    private ?int $quantity = null;

    #[ORM\Column]
    private ?int $totalPriceHT = null;

    #[ORM\Column]
    private ?int $totalPriceTTC = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $purchasedAt = null;

    #[ORM\Column(nullable: true)]
    private ?int $vatRate = null;

    #[ORM\Column(nullable: true)]
    private ?int $totalVatAmount = null;
    

    public function __construct()
    {
        $this->purchasedAt = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Set all packaging and product infos
     */
    public function setPackaging(Packaging $packaging): static
    {
        $this->publicRef = $packaging->getPublicRef();
        $this->privateRef = $packaging->getPrivateRef();
        $product = $packaging->getProduct();
        $this->designation = $product->getDesignation()->getFr();
        if($packagingLabel = $packaging->getLabel())
        {
            $this->packagingLabel = $packagingLabel->getFr();
        }
        $this->originCountry = $product->getOriginCountry();
        $this->hsCode = $product->getHsCode();
        $this->eanCode = $packaging->getEanCode();
        $this->vatLevel = $product->getVatLevel();

        return $this;
    }

    public function getSupplier(): ?Supplier
    {
        return $this->supplier;
    }

    public function setSupplier(?Supplier $supplier): static
    {
        $this->supplier = $supplier;

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

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): static
    {
        $this->designation = $designation;

        return $this;
    }

    public function getPackagingLabel(): ?string
    {
        return $this->packagingLabel;
    }

    public function setPackagingLabel(?string $packagingLabel): static
    {
        $this->packagingLabel = $packagingLabel;

        return $this;
    }

    public function getPriceHT(): ?int
    {
        return $this->priceHT;
    }

    public function setPriceHT(int $priceHT): static
    {
        $this->priceHT = $priceHT;

        return $this;
    }

    public function getPriceTTC(): ?int
    {
        return $this->priceTTC;
    }

    public function setPriceTTC(int $priceTTC): static
    {
        $this->priceTTC = $priceTTC;

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

    public function getHsCode(): ?string
    {
        return $this->hsCode;
    }

    public function setHsCode(string $hsCode): static
    {
        $this->hsCode = $hsCode;

        return $this;
    }

    public function getEanCode(): ?string
    {
        return $this->eanCode;
    }

    public function setEanCode(string $eanCode): static
    {
        $this->eanCode = $eanCode;

        return $this;
    }

    public function getVatLevel(): string
    {
        return $this->vatLevel;
    }

    public function setVatLevel(string $vatLevel): static
    {
        $this->vatLevel = $vatLevel;

        return $this;
    }

    public function getVatCountry(): ?string
    {
        return $this->vatCountry;
    }

    public function setVatCountry(string $vatCountry): static
    {
        $this->vatCountry = $vatCountry;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getTotalPriceHT(): ?int
    {
        return $this->totalPriceHT;
    }

    public function setTotalPriceHT(int $totalPriceHT): static
    {
        $this->totalPriceHT = $totalPriceHT;

        return $this;
    }

    public function getTotalPriceTTC(): ?int
    {
        return $this->totalPriceTTC;
    }

    public function setTotalPriceTTC(int $totalPriceTTC): static
    {
        $this->totalPriceTTC = $totalPriceTTC;

        return $this;
    }

    public function getPurchasedAt(): ?\DateTimeImmutable
    {
        return $this->purchasedAt;
    }

    public function setPurchasedAt(\DateTimeImmutable $purchasedAt): static
    {
        $this->purchasedAt = $purchasedAt;

        return $this;
    }

    public function getVatRate(): ?int
    {
        return $this->vatRate;
    }

    public function setVatRate(?int $vatRate): static
    {
        $this->vatRate = $vatRate;

        return $this;
    }

    public function getTotalVatAmount(): ?int
    {
        return $this->totalVatAmount;
    }

    public function setTotalVatAmount(?int $totalVatAmount): static
    {
        $this->totalVatAmount = $totalVatAmount;

        return $this;
    }
}
