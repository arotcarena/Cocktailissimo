<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\AddressRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotNull(message: 'assert.logged')]
    #[ORM\ManyToOne(inversedBy: 'addresses')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[Assert\Choice(choices: [SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M], message: 'assert.choice')]
    #[ORM\Column(length: 255)]
    private ?string $civility = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.firstName')]
    #[ORM\Column(length: 255)]
    private ?string $firstName = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.lastName')]
    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.streetAddress')]
    #[ORM\Column(length: 255)]
    private ?string $lineOne = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lineTwo = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.city')]
    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.postcode')]
    #[ORM\Column(length: 255)]
    private ?string $postcode = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Assert\NotNull(message: 'assert.notBlank.country')]
    #[ORM\Column(length: 2, nullable: false)]
    private ?string $country = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $state = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCivility(): ?string
    {
        return $this->civility;
    }

    public function setCivility(string $civility): self
    {
        $this->civility = $civility;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getLineOne(): ?string
    {
        return $this->lineOne;
    }

    public function setLineOne(string $lineOne): self
    {
        $this->lineOne = $lineOne;

        return $this;
    }

    public function getLineTwo(): ?string
    {
        return $this->lineTwo;
    }

    public function setLineTwo(?string $lineTwo): self
    {
        $this->lineTwo = $lineTwo;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    public function setPostcode(string $postcode): self
    {
        $this->postcode = $postcode;

        return $this;
    }


    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(?string $state): static
    {
        $this->state = $state;

        return $this;
    }
   
}
