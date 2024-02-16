<?php

namespace App\Entity;

use App\Repository\RelayInfoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RelayInfoRepository::class)]
class RelayInfo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $relayId = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $shopType = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $address = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $latitude = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $longitude = null;

    #[ORM\Column(nullable: true)]
    private ?int $distance = null;

    #[ORM\Column(nullable: true)]
    private ?array $formattedOpeningTimes = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $homepage = null;

    #[ORM\OneToOne(mappedBy: 'relayInfo', cascade: ['persist', 'remove'])]
    private ?ShippingInfo $shippingInfo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRelayId(): ?int
    {
        return $this->relayId;
    }

    public function setRelayId(int $relayId): static
    {
        $this->relayId = $relayId;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getShopType(): ?string
    {
        return $this->shopType;
    }

    public function setShopType(?string $shopType): static
    {
        $this->shopType = $shopType;

        return $this;
    }

    public function getAddress(): ?LightAddress
    {
        return $this->address;
    }

    public function setAddress(LightAddress $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): static
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): static
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getDistance(): ?int
    {
        return $this->distance;
    }

    public function setDistance(?int $distance): static
    {
        $this->distance = $distance;

        return $this;
    }

    public function getFormattedOpeningTimes(): ?array
    {
        return $this->formattedOpeningTimes;
    }

    public function setFormattedOpeningTimes(?array $formattedOpeningTimes): static
    {
        $this->formattedOpeningTimes = $formattedOpeningTimes;

        return $this;
    }

    public function getHomepage(): ?string
    {
        return $this->homepage;
    }

    public function setHomepage(?string $homepage): static
    {
        $this->homepage = $homepage;

        return $this;
    }

    public function getShippingInfo(): ?ShippingInfo
    {
        return $this->shippingInfo;
    }

    public function setShippingInfo(?ShippingInfo $shippingInfo): static
    {
        // unset the owning side of the relation if necessary
        if ($shippingInfo === null && $this->shippingInfo !== null) {
            $this->shippingInfo->setRelayInfo(null);
        }

        // set the owning side of the relation if necessary
        if ($shippingInfo !== null && $shippingInfo->getRelayInfo() !== $this) {
            $shippingInfo->setRelayInfo($this);
        }

        $this->shippingInfo = $shippingInfo;

        return $this;
    }
}
