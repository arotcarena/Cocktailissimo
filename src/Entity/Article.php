<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticleRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[UniqueEntity('ref', message: 'Cette réf. est déjà utilisée pour une recette')]
#[ORM\Entity(repositoryClass: ArticleRepository::class)]
class Article
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $title = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableText $htmlContent = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $author = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true, onDelete: 'CASCADE')]
    private ?Picture $picture = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $slug = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $metaDescription = null;

    #[Assert\NotNull(message: 'La sous-catégorie est obligatoire')]
    #[ORM\ManyToOne(inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SubCategory $subCategory = null;

    #[Assert\NotBlank(message: 'La réf. est obligatoire')]
    #[Assert\Length(max: 200, maxMessage: '200 caractères maximum')]
    #[ORM\Column(length: 255)]
    private ?string $ref = null;

    #[ORM\ManyToMany(targetEntity: Product::class, mappedBy: 'linkedArticles')]
    private Collection $linkedProducts;

    #[ORM\ManyToMany(targetEntity: Recipe::class, inversedBy: 'linkedArticles')]
    private Collection $linkedRecipes;

    #[ORM\OneToMany(mappedBy: 'article', targetEntity: Comment::class, orphanRemoval: true)]
    private Collection $comments;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $subtitle = null;

    #[ORM\Column(nullable: true)]
    private ?int $countViews = null;


    public function __construct()
    {
        $this->linkedProducts = new ArrayCollection();
        $this->linkedRecipes = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }
    
    public function getAdminLabel()
    {
        return $this->title->getFr() . ' - ' . $this->ref;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?TranslatableString
    {
        return $this->title;
    }

    public function setTitle(TranslatableString $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getHtmlContent(): ?TranslatableText
    {
        return $this->htmlContent;
    }

    public function setHtmlContent(TranslatableText $htmlContent): static
    {
        $this->htmlContent = $htmlContent;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

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

    public function getSlug(): ?TranslatableString
    {
        return $this->slug;
    }

    public function setSlug(TranslatableString $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getMetaDescription(): ?TranslatableString
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?TranslatableString $metaDescription): static
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getSubCategory(): ?SubCategory
    {
        return $this->subCategory;
    }

    public function setSubCategory(?SubCategory $subCategory): static
    {
        $this->subCategory = $subCategory;

        return $this;
    }

    public function getRef(): ?string
    {
        return $this->ref;
    }

    public function setRef(string $ref): static
    {
        $this->ref = $ref;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getLinkedProducts(): Collection
    {
        return $this->linkedProducts;
    }

    public function addLinkedProduct(Product $linkedProduct): static
    {
        if (!$this->linkedProducts->contains($linkedProduct)) {
            $this->linkedProducts->add($linkedProduct);
            $linkedProduct->addLinkedArticle($this);
        }

        return $this;
    }

    public function removeLinkedProduct(Product $linkedProduct): static
    {
        $this->linkedProducts->removeElement($linkedProduct);

        return $this;
    }

    /**
     * @return Collection<int, Recipe>
     */
    public function getLinkedRecipes(): Collection
    {
        return $this->linkedRecipes;
    }

    public function addLinkedRecipe(Recipe $linkedRecipe): static
    {
        if (!$this->linkedRecipes->contains($linkedRecipe)) {
            $this->linkedRecipes->add($linkedRecipe);
            $linkedRecipe->addLinkedArticle($this);
        }

        return $this;
    }

    public function removeLinkedRecipe(Recipe $linkedRecipe): static
    {
        $this->linkedRecipes->removeElement($linkedRecipe);

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setArticle($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getArticle() === $this) {
                $comment->setArticle(null);
            }
        }

        return $this;
    }

    public function getSubtitle(): ?TranslatableString
    {
        return $this->subtitle;
    }

    public function setSubtitle(?TranslatableString $subtitle): static
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    public function getCountViews(): ?int
    {
        return $this->countViews;
    }

    public function setCountViews(?int $countViews): static
    {
        $this->countViews = $countViews;

        return $this;
    }
}
