<?php

namespace App\Entity;

use App\Repository\TranslatableTextRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: TranslatableTextRepository::class)]
class TranslatableText
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $en = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $fr = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $es = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $it = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEn(): ?string
    {
        return $this->en;
    }

    public function setEn(?string $en): self
    {
        $this->en = $en;

        return $this;
    }

    public function getFr(): ?string
    {
        return $this->fr;
    }

    public function setFr(?string $fr): self
    {
        $this->fr = $fr;

        return $this;
    }

    public function getEs(): ?string
    {
        return $this->es;
    }

    public function setEs(?string $es): self
    {
        $this->es = $es;

        return $this;
    }

    public function getIt(): ?string
    {
        return $this->it;
    }

    public function setIt(?string $it): self
    {
        $this->it = $it;

        return $this;
    }
}
