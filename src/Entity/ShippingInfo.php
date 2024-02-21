<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\ShippingInfoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShippingInfoRepository::class)]
class ShippingInfo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(mappedBy: 'shippingInfo', cascade: ['persist', 'remove'])]
    private ?PurchaseVendorGroup $purchaseVendorGroup = null;
    
    #[ORM\Column(nullable: true)]
    private ?int $parcelId = null;

    #[ORM\Column]
    private ?int $shippingMethodId = null;

    #[ORM\Column(length: 255)]
    private ?string $carrier = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(nullable: true)]
    private ?int $leadTimeHours = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\OneToOne(inversedBy: 'shippingInfo', cascade: ['persist', 'remove'])]
    private ?RelayInfo $relayInfo = null;

    #[ORM\Column(length: 255)]
    private string $status = SiteConfig::SHIPPING_STATUS_PENDING;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tracking = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $price = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShippingMethodId(): ?int
    {
        return $this->shippingMethodId;
    }

    public function setShippingMethodId(int $shippingMethodId): static
    {
        $this->shippingMethodId = $shippingMethodId;

        return $this;
    }

    public function getCarrier(): ?string
    {
        return $this->carrier;
    }

    public function setCarrier(string $carrier): static
    {
        $this->carrier = $carrier;

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

    public function getLeadTimeHours(): ?int
    {
        return $this->leadTimeHours;
    }

    public function setLeadTimeHours(?int $leadTimeHours): static
    {
        $this->leadTimeHours = $leadTimeHours;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getRelayInfo(): ?RelayInfo
    {
        return $this->relayInfo;
    }

    public function setRelayInfo(?RelayInfo $relayInfo): static
    {
        $this->relayInfo = $relayInfo;
        $relayInfo->setShippingInfo($this);

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getTracking(): ?string
    {
        return $this->tracking;
    }

    public function setTracking(?string $tracking): static
    {
        $this->tracking = $tracking;

        return $this;
    }

    public function getPrice(): ?CustomPrice
    {
        return $this->price;
    }

    public function setPrice(CustomPrice $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getPurchaseVendorGroup(): ?PurchaseVendorGroup
    {
        return $this->purchaseVendorGroup;
    }

    public function setPurchaseVendorGroup(PurchaseVendorGroup $purchaseVendorGroup): static
    {
        // set the owning side of the relation if necessary
        if ($purchaseVendorGroup->getShippingInfo() !== $this) {
            $purchaseVendorGroup->setShippingInfo($this);
        }

        $this->purchaseVendorGroup = $purchaseVendorGroup;

        return $this;
    }

    public function getParcelId(): ?int
    {
        return $this->parcelId;
    }

    public function setParcelId(?int $parcelId): static
    {
        $this->parcelId = $parcelId;

        return $this;
    }

}
