<?php

namespace App\Entity;

use App\Repository\IngredientRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IngredientRepository::class)]
class Ingredient
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $name = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Picture $picture = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?TranslatableString
    {
        return $this->name;
    }

    public function setName(TranslatableString $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPicture(): ?Picture
    {
        return $this->picture;
    }

    public function setPicture(?Picture $picture): static
    {
        $this->picture = $picture;

        return $this;
    }
}
