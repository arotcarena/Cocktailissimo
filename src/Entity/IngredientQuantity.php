<?php

namespace App\Entity;

use App\Repository\IngredientQuantityRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IngredientQuantityRepository::class)]
class IngredientQuantity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Ingredient $ingredient = null;


    #[ORM\ManyToOne(inversedBy: 'ingredientsQuantities')]
    private ?Recipe $recipe = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $quantity = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIngredient(): ?Ingredient
    {
        return $this->ingredient;
    }

    public function setIngredient(?Ingredient $ingredient): static
    {
        $this->ingredient = $ingredient;

        return $this;
    }

    public function getRecipe(): ?Recipe
    {
        return $this->recipe;
    }

    public function setRecipe(?Recipe $recipe): static
    {
        $this->recipe = $recipe;

        return $this;
    }

    public function getQuantity(): ?TranslatableString
    {
        return $this->quantity;
    }

    public function setQuantity(TranslatableString $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }
}
