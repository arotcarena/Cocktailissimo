<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Product::class)]
    private Collection $products;

    #[ORM\OneToMany(mappedBy: 'parentCategory', targetEntity: SubCategory::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $subCategories;

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
    private ?TranslatableString $metaDescription = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $shortDescription = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableText $longHtmlDescription = null;

    
    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->subCategories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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


    /**
     * @return Collection<int, SubCategory>
     */
    public function getSubCategories(): Collection
    {
        return $this->subCategories;
    }

    public function addSubCategory(SubCategory $subCategory): self
    {
        if (!$this->subCategories->contains($subCategory)) {
            $this->subCategories->add($subCategory);
            $subCategory->setParentCategory($this);
        }

        return $this;
    }

    public function removeSubCategory(SubCategory $subCategory): self
    {
        if ($this->subCategories->removeElement($subCategory)) {
            // set the owning side to null (unless already changed)
            if ($subCategory->getParentCategory() === $this) {
                $subCategory->setParentCategory(null);
            }
        }

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

    public function getName(): ?TranslatableString
    {
        return $this->name;
    }

    public function setName(TranslatableString $name): self
    {
        $this->name = $name;

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

    public function getMetaDescription(): ?TranslatableString
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(TranslatableString $metaDescription): static
    {
        $this->metaDescription = $metaDescription;

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

}
