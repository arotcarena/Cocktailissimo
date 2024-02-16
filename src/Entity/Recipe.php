<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\RecipeRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[UniqueEntity('ref', message: 'Cette réf. est déjà utilisée pour une recette')]
#[ORM\Entity(repositoryClass: RecipeRepository::class)]
class Recipe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[Assert\NotBlank(message: 'La réf. est obligatoire')]
    #[Assert\Length(max: 200, maxMessage: '200 caractères maximum')]
    #[ORM\Column(length: 255)]
    private ?string $ref = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $title = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableText $htmlContent = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?Picture $picture = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'recipe', targetEntity: IngredientQuantity::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $ingredientsQuantities;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $slug = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $metaDescription = null;

    /** @var TranslatableString[] */
    private $ingredientNames = [];

    #[ORM\ManyToMany(targetEntity: Product::class, mappedBy: 'linkedRecipes')]
    private Collection $linkedProducts;

    #[ORM\ManyToMany(targetEntity: Article::class, mappedBy: 'linkedRecipes')]
    private Collection $linkedArticles;

    #[ORM\OneToMany(mappedBy: 'recipe', targetEntity: Comment::class, orphanRemoval: true)]
    private Collection $comments;

    #[ORM\OneToMany(mappedBy: 'recipe', targetEntity: Question::class, orphanRemoval: true)]
    private Collection $questions;

    #[Assert\Count(min: 1, max: 8, minMessage: 'Sélectionnez au moins une sous-catégorie', maxMessage: 'Maximum 8 sous-catégories')]
    #[ORM\ManyToMany(targetEntity: SubCategory::class, inversedBy: 'recipes')]
    private Collection $subCategories;

    #[ORM\Column(nullable: true)]
    private ?int $countViews = null;


    public function __construct()
    {
        $this->ingredientsQuantities = new ArrayCollection();
        $this->linkedProducts = new ArrayCollection();
        $this->linkedArticles = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->subCategories = new ArrayCollection();
    }

    public function getAdminLabel()
    {
        return $this->title->getFr() . ' - ' . $this->ref;
    }

    /**
     * Undocumented function
     *
     * @return TranslatableString[]
     */
    public function getIngredientNames()
    {
        return $this->ingredientNames;
    }

    public function addIngredientName(TranslatableString $ingredientName): static 
    {
        $this->ingredientNames[] = $ingredientName;

        return $this;
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

    public function getPicture(): ?Picture
    {
        return $this->picture;
    }

    public function setPicture(Picture $picture): static
    {
        $this->picture = $picture;

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

    /**
     * @return Collection<int, IngredientQuantity>
     */
    public function getIngredientsQuantities(): Collection
    {
        return $this->ingredientsQuantities;
    }

    public function addIngredientsQuantity(IngredientQuantity $ingredientsQuantity): static
    {
        if (!$this->ingredientsQuantities->contains($ingredientsQuantity)) {
            $this->ingredientsQuantities->add($ingredientsQuantity);
            $ingredientsQuantity->setRecipe($this);
        }

        return $this;
    }

    public function removeIngredientsQuantity(IngredientQuantity $ingredientsQuantity): static
    {
        if ($this->ingredientsQuantities->removeElement($ingredientsQuantity)) {
            // set the owning side to null (unless already changed)
            if ($ingredientsQuantity->getRecipe() === $this) {
                $ingredientsQuantity->setRecipe(null);
            }
        }

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

    public function getRef(): ?string
    {
        return $this->ref;
    }

    public function setRef(string $ref): static
    {
        $this->ref = $ref;

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
            $linkedProduct->addLinkedRecipe($this);
        }

        return $this;
    }

    public function removeLinkedProduct(Product $linkedProduct): static
    {
        if ($this->linkedProducts->removeElement($linkedProduct)) {
            $linkedProduct->removeLinkedRecipe($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getLinkedArticles(): Collection
    {
        return $this->linkedArticles;
    }

    public function addLinkedArticle(Article $linkedArticle): static
    {
        if (!$this->linkedArticles->contains($linkedArticle)) {
            $this->linkedArticles->add($linkedArticle);
            $linkedArticle->addLinkedRecipe($this);
        }

        return $this;
    }

    public function removeLinkedArticle(Article $linkedArticle): static
    {
        if ($this->linkedArticles->removeElement($linkedArticle)) {
            $linkedArticle->removeLinkedRecipe($this);
        }

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
            $comment->setRecipe($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getRecipe() === $this) {
                $comment->setRecipe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Question>
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): static
    {
        if (!$this->questions->contains($question)) {
            $this->questions->add($question);
            $question->setRecipe($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): static
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getRecipe() === $this) {
                $question->setRecipe(null);
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

    public function addSubCategory(SubCategory $subCategory): static
    {
        if (!$this->subCategories->contains($subCategory)) {
            $this->subCategories->add($subCategory);
        }

        return $this;
    }

    public function removeSubCategory(SubCategory $subCategory): static
    {
        $this->subCategories->removeElement($subCategory);

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
