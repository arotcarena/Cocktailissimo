<?php

namespace App\Entity;

use App\Repository\SupplierRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SupplierRepository::class)]
class Supplier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $socialName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $commercialName = null;

    #[ORM\Column(length: 255)]
    private ?string $identificationNumber = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $socialAddress = null;

    #[ORM\Column(length: 2)]
    private ?string $country = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $vatNumber = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'supplier', targetEntity: Supply::class)]
    private Collection $supplies;

    public function __construct()
    {
        $this->supplies = new ArrayCollection();
        $this->createdAt = new DateTimeImmutable();
        $this->socialAddress = new LightAddress;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __toString(): string
    {
        return '#' . $this->id . ' - ' . $this->socialName . ($this->commercialName ? (' / ' . $this->commercialName): '');    
    }

    //pour remplir socialAddress
    public function getAddressLineOne(): ?string 
    {
        return $this->socialAddress->getLineOne();
    }
    public function setAddressLineOne(string $lineOne): static
    {
        $this->socialAddress->setLineOne($lineOne);

        return $this;
    }
    public function getAddressLineTwo(): ?string 
    {
        return $this->socialAddress->getLineTwo();
    }
    public function setAddressLineTwo(?string $lineOne): static
    {
        $this->socialAddress->setLineTwo($lineOne);
        
        return $this;
    }
    public function getAddressPostcode(): ?string 
    {
        return $this->socialAddress->getPostcode();
    }
    public function setAddressPostcode(string $postcode): static
    {
        $this->socialAddress->setPostcode($postcode);
        
        return $this;
    }
    public function getAddressCity(): ?string 
    {
        return $this->socialAddress->getCity();
    }
    public function setAddressCity(string $city): static
    {
        $this->socialAddress->setCity($city);
        
        return $this;
    }
    public function getAddressCountry(): ?string 
    {
        return $this->socialAddress->getCountry();
    }
    public function setAddressCountry(string $country): static
    {
        $this->socialAddress->setCountry($country);
        
        return $this;
    }
    public function getAddressState(): ?string 
    {
        return $this->socialAddress->getState();
    }
    public function setAddressState(?string $state): static
    {
        $this->socialAddress->setState($state);
        
        return $this;
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

    public function getCommercialName(): ?string
    {
        return $this->commercialName;
    }

    public function setCommercialName(?string $commercialName): static
    {
        $this->commercialName = $commercialName;

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

    public function getSocialAddress(): ?LightAddress
    {
        return $this->socialAddress;
    }

    public function setSocialAddress(LightAddress $socialAddress): static
    {
        $this->socialAddress = $socialAddress;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): static
    {
        $this->country = $country;

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, Supply>
     */
    public function getSupplies(): Collection
    {
        return $this->supplies;
    }

    public function addSupply(Supply $supply): static
    {
        if (!$this->supplies->contains($supply)) {
            $this->supplies->add($supply);
            $supply->setSupplier($this);
        }

        return $this;
    }

    public function removeSupply(Supply $supply): static
    {
        if ($this->supplies->removeElement($supply)) {
            // set the owning side to null (unless already changed)
            if ($supply->getSupplier() === $this) {
                $supply->setSupplier(null);
            }
        }

        return $this;
    }
}
