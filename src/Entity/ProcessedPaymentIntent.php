<?php

namespace App\Entity;

use App\Repository\ProcessedPaymentIntentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProcessedPaymentIntentRepository::class)]
class ProcessedPaymentIntent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $stringId = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStringId(): ?string
    {
        return $this->stringId;
    }

    public function setStringId(string $stringId): static
    {
        $this->stringId = $stringId;

        return $this;
    }
}
