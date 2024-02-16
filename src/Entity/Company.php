<?php

namespace App\Entity;

use App\Repository\CompanyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CompanyRepository::class)]
class Company
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'company', cascade: ['persist', 'remove'])]
    private ?User $user = null;

    #[Assert\NotBlank(message: 'assert.notBlank.socialName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $socialName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.identificationNumber')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $identificationNumber = null;

    #[Assert\NotBlank(message: 'assert.notBlank.country')]
    #[ORM\Column(length: 2, nullable: false)]
    private ?string $country = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $vatNumber = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $slug = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?Picture $logo = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $commercialName = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableText $description = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?LightAddress $socialAddress = null;
    
    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?LightAddress $senderAddress = null;

    #[ORM\Column(nullable: true)]
    private ?int $countShopViews = null;


    public function __toString()
    {
        return $this->getUsualName() . ' - ' . $this->user->getEmail();
    }

    public function getUsualName(): ?string
    {
        if($this->commercialName)
        {
            return $this->commercialName;
        }
        return $this->socialName;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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

    public function getIdentificationNumber(): ?string
    {
        return $this->identificationNumber;
    }

    public function setIdentificationNumber(string $identificationNumber): static
    {
        $this->identificationNumber = $identificationNumber;

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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getLogo(): ?Picture
    {
        return $this->logo;
    }

    public function setLogo(?Picture $logo): static
    {
        $this->logo = $logo;

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

    public function getDescription(): ?TranslatableText
    {
        return $this->description;
    }

    public function setDescription(?TranslatableText $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getSocialAddress(): ?LightAddress
    {
        return $this->socialAddress;
    }

    public function setSocialAddress(?LightAddress $socialAddress): static
    {
        $this->socialAddress = $socialAddress;

        return $this;
    }

    public function getSenderAddress(): ?LightAddress
    {
        return $this->senderAddress;
    }

    public function setSenderAddress(?LightAddress $senderAddress): static
    {
        $this->senderAddress = $senderAddress;

        return $this;
    }

    public function getCountShopViews(): ?int
    {
        return $this->countShopViews;
    }

    public function setCountShopViews(?int $countShopViews): static
    {
        $this->countShopViews = $countShopViews;

        return $this;
    }
}
