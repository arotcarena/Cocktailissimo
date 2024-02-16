<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\CustomerDetailRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CustomerDetailRepository::class)]
class CustomerDetail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\Email(message: 'assert.email')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[Assert\Choice(choices: [SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M], message: 'assert.choice')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $civility = null;

    #[Assert\NotBlank(message: 'assert.notBlank.firstName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.lastName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.phone')]
    #[Assert\Length(max: 50, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $company = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(?string $company): static
    {
        $this->company = $company;

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

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

}
