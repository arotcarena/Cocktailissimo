<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\VendorContactRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: VendorContactRepository::class)]
class VendorContact
{
    public const STATUS_PENDING = 'vendor_contact_status_pending';
    public const STATUS_ACCEPTED = 'vendor_contact_status_accepted';
    public const STATUS_REFUSED = 'vendor_contact_status_refused';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotNull(message: 'assert.notNull.civility')]
    #[Assert\Choice([SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F], message: 'assert.choice')]
    #[ORM\Column(length: 255)]
    private ?string $civility = null;

    #[Assert\NotBlank(message: 'assert.notBlank.firstName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.lastName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.companyName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $companyName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.identificationNumber')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $identificationNumber = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $vatNumber = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $website = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $facebook = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $instagram = null;

    #[Assert\NotBlank(message: 'assert.notBlank.whyBecomeVendor')]
    #[Assert\Length(max: 2000, maxMessage: 'assert.maxLength')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $whyBecomeVendor = null;

    #[Assert\NotNull(message: 'assert.notNull.category')]
    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $category = null;

    #[Assert\NotNull(message: 'assert.notNull.subCategory')]
    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?SubCategory $subCategory = null;

    #[ORM\Column(length: 2)]
    private ?string $lang = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\Email(message: 'assert.email')]
    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column]
    private ?bool $answered = false;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $socialAddress = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?LightAddress $senderAddress = null;

    #[ORM\Column(length: 255)]
    private ?string $status = self::STATUS_PENDING;


    public function getStatusLabel()
    {
        switch($this->status)
        {
            case self::STATUS_ACCEPTED:
                return 'Accepté';
            case self::STATUS_REFUSED:
                return 'Refusé';
            default:
                return 'En attente';
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCivility(): ?string
    {
        return $this->civility;
    }

    public function setCivility(string $civility): static
    {
        $this->civility = $civility;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getCompanyName(): ?string
    {
        return $this->companyName;
    }

    public function setCompanyName(string $companyName): static
    {
        $this->companyName = $companyName;

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

    public function getVatNumber(): ?string
    {
        return $this->vatNumber;
    }

    public function setVatNumber(?string $vatNumber): static
    {
        $this->vatNumber = $vatNumber;

        return $this;
    }


    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): static
    {
        $this->website = $website;

        return $this;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }

    public function setFacebook(?string $facebook): static
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getInstagram(): ?string
    {
        return $this->instagram;
    }

    public function setInstagram(?string $instagram): static
    {
        $this->instagram = $instagram;

        return $this;
    }

    public function getWhyBecomeVendor(): ?string
    {
        return $this->whyBecomeVendor;
    }

    public function setWhyBecomeVendor(string $whyBecomeVendor): static
    {
        $this->whyBecomeVendor = $whyBecomeVendor;

        return $this;
    }

    public function getSubCategory(): ?SubCategory
    {
        return $this->subCategory;
    }

    public function setSubCategory(?SubCategory $subCategory): static
    {
        $this->subCategory = $subCategory;

        return $this;
    }

    public function getLang(): ?string
    {
        return $this->lang;
    }

    public function setLang(string $lang): static
    {
        $this->lang = $lang;

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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
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

    public function isAnswered(): ?bool
    {
        return $this->answered;
    }

    public function setAnswered(bool $answered): static
    {
        $this->answered = $answered;

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

    public function getSenderAddress(): ?LightAddress
    {
        return $this->senderAddress;
    }

    public function setSenderAddress(LightAddress $senderAddress): static
    {
        $this->senderAddress = $senderAddress;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

}
