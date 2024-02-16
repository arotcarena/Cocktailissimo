<?php

namespace App\Entity;

use App\Repository\VendorDetailRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VendorDetailRepository::class)]
class VendorDetail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $socialName = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $socialAddress = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $vatNumber = null;

    #[ORM\Column(length: 255)]
    private ?string $identificationNumber = null;

    #[ORM\Column(length: 255)]
    private ?string $stripeConnectId = null;

    #[ORM\Column]
    private ?int $sendcloudId = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $senderAddress = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSocialName(): ?string
    {
        return $this->socialName;
    }

    public function setSocialName(string $socialName): static
    {
        $this->socialName = $socialName;

        return $this;
    }

    public function getSocialAddress(): ?LightAddress
    {
        return $this->socialAddress;
    }

    public function setSocialAddress(LightAddress $socialAddress): static
    {
        $this->socialAddress = $socialAddress;

        return $this;
    }

    public function getVatNumber(): ?string
    {
        return $this->vatNumber;
    }

    public function setVatNumber(?string $vatNumber): static
    {
        $this->vatNumber = $vatNumber;

        return $this;
    }

    public function getIdentificationNumber(): ?string
    {
        return $this->identificationNumber;
    }

    public function setIdentificationNumber(string $identificationNumber): static
    {
        $this->identificationNumber = $identificationNumber;

        return $this;
    }

    public function getStripeConnectId(): ?string
    {
        return $this->stripeConnectId;
    }

    public function setStripeConnectId(string $stripeConnectId): static
    {
        $this->stripeConnectId = $stripeConnectId;

        return $this;
    }

    public function getSendcloudId(): ?int
    {
        return $this->sendcloudId;
    }

    public function setSendcloudId(int $sendcloudId): static
    {
        $this->sendcloudId = $sendcloudId;

        return $this;
    }

    public function getSenderAddress(): ?LightAddress
    {
        return $this->senderAddress;
    }

    public function setSenderAddress(LightAddress $senderAddress): static
    {
        $this->senderAddress = $senderAddress;

        return $this;
    }
}
