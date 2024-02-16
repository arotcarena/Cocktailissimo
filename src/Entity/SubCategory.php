<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SubCategoryRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


#[ORM\Entity(repositoryClass: SubCategoryRepository::class)]
class SubCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'subCategories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $parentCategory = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;


    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $name = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $slug = null;

    #[ORM\Column(length: 255)]
    private ?string $picture = null;

    #[ORM\Column(length: 255)]
    private ?string $smallPicture = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $pictureAlt = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $smallPictureAlt = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $metaDescription = null;

    #[ORM\OneToMany(mappedBy: 'subCategory', targetEntity: Product::class, orphanRemoval: true)]
    private Collection $products;

    #[ORM\OneToMany(mappedBy: 'subCategory', targetEntity: Article::class, orphanRemoval: true)]
    private Collection $articles;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $shortDescription = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableText $longHtmlDescription = null;

    #[ORM\ManyToMany(targetEntity: Recipe::class, mappedBy: 'subCategories')]
    private Collection $recipes;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->articles = new ArrayCollection();
        $this->recipes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

   
    public function getParentCategory(): ?Category
    {
        return $this->parentCategory;
    }

    public function setParentCategory(?Category $parentCategory): self
    {
        $this->parentCategory = $parentCategory;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products->add($product);
            $product->setCategory($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getCategory() === $this) {
                $product->setCategory(null);
            }
        }

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


    public function getName(): ?TranslatableString
    {
        return $this->name;
    }

    public function setName(TranslatableString $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?TranslatableString
    {
        return $this->slug;
    }

    public function setSlug(TranslatableString $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getSmallPicture(): ?string
    {
        return $this->smallPicture;
    }

    public function setSmallPicture(string $smallPicture): self
    {
        $this->smallPicture = $smallPicture;

        return $this;
    }

    public function getPictureAlt(): ?TranslatableString
    {
        return $this->pictureAlt;
    }

    public function setPictureAlt(TranslatableString $pictureAlt): static
    {
        $this->pictureAlt = $pictureAlt;

        return $this;
    }

    public function getSmallPictureAlt(): ?TranslatableString
    {
        return $this->smallPictureAlt;
    }

    public function setSmallPictureAlt(TranslatableString $smallPictureAlt): static
    {
        $this->smallPictureAlt = $smallPictureAlt;

        return $this;
    }

    public function getMetaDescription(): ?TranslatableString
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(TranslatableString $metaDescription): static
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): static
    {
        if (!$this->articles->contains($article)) {
            $this->articles->add($article);
            $article->setSubCategory($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): static
    {
        if ($this->articles->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getSubCategory() === $this) {
                $article->setSubCategory(null);
            }
        }

        return $this;
    }

    public function getShortDescription(): ?TranslatableString
    {
        return $this->shortDescription;
    }

    public function setShortDescription(?TranslatableString $shortDescription): static
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getLongHtmlDescription(): ?TranslatableText
    {
        return $this->longHtmlDescription;
    }

    public function setLongHtmlDescription(?TranslatableText $longHtmlDescription): static
    {
        $this->longHtmlDescription = $longHtmlDescription;

        return $this;
    }

    /**
     * @return Collection<int, Recipe>
     */
    public function getRecipes(): Collection
    {
        return $this->recipes;
    }

    public function addRecipe(Recipe $recipe): static
    {
        if (!$this->recipes->contains($recipe)) {
            $this->recipes->add($recipe);
            $recipe->addSubCategory($this);
        }

        return $this;
    }

    public function removeRecipe(Recipe $recipe): static
    {
        if ($this->recipes->removeElement($recipe)) {
            $recipe->removeSubCategory($this);
        }

        return $this;
    }

}
