<?php

namespace App\Entity;

use App\Repository\HighlightRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HighlightRepository::class)]
class Highlight
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne]
    private ?Product $product = null;

    #[ORM\ManyToOne]
    private ?Recipe $recipe = null;

    #[ORM\ManyToOne]
    private ?Article $article = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $recipeTitle = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $recipeDescription = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

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

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): static
    {
        $this->article = $article;

        return $this;
    }

    public function getRecipeTitle(): ?TranslatableString
    {
        return $this->recipeTitle;
    }

    public function setRecipeTitle(?TranslatableString $recipeTitle): static
    {
        $this->recipeTitle = $recipeTitle;

        return $this;
    }

    public function getRecipeDescription(): ?TranslatableString
    {
        return $this->recipeDescription;
    }

    public function setRecipeDescription(?TranslatableString $recipeDescription): static
    {
        $this->recipeDescription = $recipeDescription;

        return $this;
    }

}
