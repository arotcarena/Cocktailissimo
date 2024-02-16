<?php

namespace App\Entity;

use App\Repository\PackagingRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[UniqueEntity('publicRef')]
#[ORM\Entity(repositoryClass: PackagingRepository::class)]
class Packaging
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'packagingChoices')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    #[Assert\NotNull(message: 'La réf. publique est obligatoire')]
    #[Assert\Length(max: 200, maxMessage: '200 caractères maximum')]
    #[ORM\Column(length: 255, unique: true)]
    private ?string $publicRef = null;

    #[Assert\Length(max: 200, maxMessage: '200 caractères maximum')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $privateRef = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?TranslatableString $label = null;

    #[Assert\NotNull(message: 'Le prix est obligatoire')]
    #[Assert\Positive(message: 'Le prix doit être supérieur à 0')]
    #[ORM\Column]
    private ?int $consumerPriceHT = null;

    #[Assert\NotNull(message: 'Le prix est obligatoire')]
    #[Assert\Positive(message: 'Le prix doit être supérieur à 0')]
    #[ORM\Column]
    private ?int $businessPriceHT = null;

    #[Assert\NotNull(message: 'Le stock est obligatoire')]
    #[Assert\PositiveOrZero(message: 'Le stock doit être supérieur ou égal à 0')]
    #[ORM\Column]
    private ?int $stock = null;

    #[Assert\NotNull(message: 'Le poids est obligatoire')]
    #[Assert\Positive(message: 'Le poids doit être supérieur à 0')]
    #[ORM\Column]
    private ?int $weight = null;

    #[Assert\Length(max: 200, maxMessage: '200 caractères maximum')]
    #[Assert\NotBlank(message: 'Le code EAN est obligatoire')]
    #[ORM\Column(length: 255)]
    private ?string $eanCode = null;

    private ?CustomPrice $customPrice = null;

    #[ORM\Column]
    private ?int $listPosition = null;

    #[ORM\Column(nullable: true)]
    private ?int $exciseTax = null;

    #[ORM\Column(nullable: true)]
    private ?int $frSocialTax = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

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

    public function getLabel(): ?TranslatableString
    {
        return $this->label;
    }

    public function setLabel(TranslatableString $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getConsumerPriceHT(): ?int
    {
        return $this->consumerPriceHT;
    }

    public function setConsumerPriceHT(int $consumerPriceHT): static
    {
        $this->consumerPriceHT = $consumerPriceHT;

        return $this;
    }

    public function getBusinessPriceHT(): ?int
    {
        return $this->businessPriceHT;
    }

    public function setBusinessPriceHT(int $businessPriceHT): static
    {
        $this->businessPriceHT = $businessPriceHT;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

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

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): static
    {
        $this->weight = $weight;

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

    public function getCustomPrice(): ?CustomPrice
    {
        return $this->customPrice;
    }

    public function setCustomPrice(CustomPrice $customPrice): static
    {
        $this->customPrice = $customPrice;

        return $this;
    }

    public function getListPosition(): ?int
    {
        return $this->listPosition;
    }

    public function setListPosition(int $listPosition): static
    {
        $this->listPosition = $listPosition;

        return $this;
    }

    public function getExciseTax(): ?int
    {
        return $this->exciseTax;
    }

    public function setExciseTax(?int $exciseTax): static
    {
        $this->exciseTax = $exciseTax;

        return $this;
    }

    public function getFrSocialTax(): ?int
    {
        return $this->frSocialTax;
    }

    public function setFrSocialTax(?int $frSocialTax): static
    {
        $this->frSocialTax = $frSocialTax;

        return $this;
    }
}
