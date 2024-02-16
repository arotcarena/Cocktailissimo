<?php

namespace App\Entity;

use App\Repository\CustomPriceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CustomPriceRepository::class)]
class CustomPrice
{
    public const PAY_PRICE_TTC = 'pay_price_ttc';
    public const PAY_PRICE_HT = 'pay_price_ht';

    public const SHOW_PRICE_HT = 'show_price_ht';
    public const SHOW_PRICE_TTC = 'show_price_ttc';
    public const SHOW_PRICES_HT_TTC = 'show_prices_ht_ttc';


    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $priceHT = null;

    #[ORM\Column(nullable: true)]
    private ?int $priceTTC = null;

    /** 
     * en %mille
     */
    #[ORM\Column(nullable: true)]
    private ?int $vatRate = null;

    #[ORM\Column(nullable: true)]
    private ?int $vatAmount = null;

    #[ORM\Column(length: 255)]
    private ?string $payType = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $showType = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPriceToPay(): ?int
    {
        return $this->payType === self::PAY_PRICE_TTC ? $this->priceTTC: $this->priceHT;
    }

    public function getPriceHT(): ?int
    {
        return $this->priceHT;
    }

    public function setPriceHT(?int $priceHT): static
    {
        if(!$priceHT)
        {
            $this->priceHT = 0;
        }
        else
        {
            $this->priceHT = $priceHT;
        }

        return $this;
    }

    public function getPriceTTC(): ?int
    {
        return $this->priceTTC;
    }

    public function setPriceTTC(?int $priceTTC): static
    {
        $this->priceTTC = $priceTTC;

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

    public function getVatAmount(): ?int
    {
        return $this->vatAmount;
    }

    public function setVatAmount(?int $vatAmount): static
    {
        $this->vatAmount = $vatAmount;

        return $this;
    }

    public function getPayType(): ?string
    {
        return $this->payType;
    }

    public function setPayType(string $payType): static
    {
        $this->payType = $payType;

        return $this;
    }

    public function getShowType(): ?string
    {
        return $this->showType;
    }

    public function setShowType(?string $showType): static
    {
        $this->showType = $showType;

        return $this;
    }
}
