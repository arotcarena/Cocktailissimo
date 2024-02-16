<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\TranslatableStringRepository;


#[ORM\Entity(repositoryClass: TranslatableStringRepository::class)]
class TranslatableString
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $en = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fr = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $es = null;

    #[ORM\Column(length: 255, nullable: true)]
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
