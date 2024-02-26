<?php

namespace App\Entity;

use App\Config\VatLevels;
use App\Entity\SubCategory;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\HasLifecycleCallbacks()]
#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ORM\Table()]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[ORM\Column]
    private ?int $baseConsumerPriceHT = null;

    #[ORM\Column]
    private ?int $baseBusinessPriceHT = null;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Picture::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $pictures;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Review::class, cascade: ['remove', 'persist'])] //persist sert seulement à faire passer ReviewSubscriberTest
    private Collection $reviews;

    #[Assert\Count(max: 20, maxMessage: 'Vous ne pouvez pas ajouter plus de 20 produits suggérés')]
    #[ORM\ManyToMany(targetEntity: self::class)]
    private Collection $suggestedProducts;

    #[ORM\ManyToOne(inversedBy: 'products', targetEntity: Category::class)]
    private ?Category $category = null;
    
    #[ORM\ManyToOne(inversedBy: 'products', targetEntity: SubCategory::class)]
    private ?SubCategory $subCategory = null;

    #[ORM\Column(nullable: true)]
    private ?int $countViews = null;

    #[ORM\Column(nullable: true)]
    private ?int $countCarts = null;

    private ?Picture $firstPicture = null;

    #[ORM\Column(nullable: true)]
    private ?int $countSales = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $designation = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $slug = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableText $longHtmlDescription = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $metaDescription = null;

    #[ORM\ManyToMany(targetEntity: Post::class, mappedBy: 'linkedProducts')]
    private Collection $posts;

    #[ORM\Column(nullable: true)]
    private ?int $reviewNote = null;

    #[ORM\Column(nullable: true)]
    private ?int $countReviews = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?TranslatableString $shortDescription = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $brand = null;

    #[Assert\NotBlank(message: 'Le HS code est obligatoire')]
    #[Assert\Length(max: 12, maxMessage: '12 caractères maximum (sinon erreur sendcloud au moment d\'annoncer un colis)')]
    #[ORM\Column(length: 255)]
    private ?string $hsCode = null;

    #[Assert\NotBlank(message: 'Le pays d\'origine est obligatoire')]
    #[ORM\Column(length: 2)]
    private ?string $originCountry = null;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Question::class, orphanRemoval: true, cascade: ['remove'])]
    private Collection $questions;

    #[ORM\ManyToMany(targetEntity: Recipe::class, inversedBy: 'linkedProducts')]
    private Collection $linkedRecipes;

    #[ORM\ManyToMany(targetEntity: Article::class, inversedBy: 'linkedProducts')]
    private Collection $linkedArticles;

    #[Assert\NotNull(message: 'Vous devez sélectionner un vendeur')]
    #[ORM\ManyToOne(inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $vendor = null;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Packaging::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $packagingChoices;

    private ?Packaging $basePackaging = null;

    #[ORM\Column]
    private ?int $mainStock = null;

    #[ORM\Column(length: 255)]
    private ?string $basePublicRef = null;

    #[ORM\Column(length: 2)]
    private ?string $vendorCountry = null;

    #[ORM\Column]
    private ?int $baseStock = null;

    #[ORM\Column(nullable: true)]
    private ?bool $removing = null;

    #[ORM\Column(length: 50, nullable: false, options: ['default' => VatLevels::STANDARD])]
    private string $vatLevel = VatLevels::STANDARD;


    public function __construct()
    {
        $this->pictures = new ArrayCollection();
        $this->reviews = new ArrayCollection();
        $this->suggestedProducts = new ArrayCollection();
        $this->posts = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->linkedRecipes = new ArrayCollection();
        $this->linkedArticles = new ArrayCollection();
        $this->packagingChoices = new ArrayCollection();
    }

    
    public function getAdminLabel()
    {
        return $this->designation->getFr() . ' - ' . $this->basePublicRef;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    #[ORM\PreFlush]
    public function updateBaseValues()
    {
        if($this->vendor && $this->vendor->getCompany())
        {
            $this->vendorCountry = $this->vendor->getCompany()->getCountry();
        }

        $mainStock = 0;
        /** @var Packaging $packaging */
        foreach($this->packagingChoices as $packaging)
        {
            if($packaging->getListPosition() === 1)
            {
                $this->baseConsumerPriceHT = $packaging->getConsumerPriceHT();
                $this->baseBusinessPriceHT = $packaging->getBusinessPriceHT();
                $this->basePublicRef = $packaging->getPublicRef();
                $this->baseStock = $packaging->getStock();
            }
            $mainStock += $packaging->getStock();
        }
        $this->mainStock = $mainStock;
    }

    /**
     * @return Collection<int, Picture>
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPicture(Picture $picture): self
    {
        if (!$this->pictures->contains($picture)) {
            $this->pictures->add($picture);
            $picture->setProduct($this);
        }

        return $this;
    }

    public function removePicture(Picture $picture): self
    {
        if ($this->pictures->removeElement($picture)) {
            // set the owning side to null (unless already changed)
            if ($picture->getProduct() === $this) {
                $picture->setProduct(null);
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

    /**
     * @return Collection<int, Review>
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): self
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews->add($review);
            $review->setProduct($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->reviews->removeElement($review)) {
            // set the owning side to null (unless already changed)
            if ($review->getProduct() === $this) {
                $review->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getSuggestedProducts(): Collection
    {
        return $this->suggestedProducts;
    }

    public function addSuggestedProduct(self $suggestedProduct): self
    {
        if (!$this->suggestedProducts->contains($suggestedProduct)) {
            $this->suggestedProducts->add($suggestedProduct);
        }

        return $this;
    }

    public function removeSuggestedProduct(self $suggestedProduct): self
    {
        $this->suggestedProducts->removeElement($suggestedProduct);

        return $this;
    }

    /**
     * @return Category|null
     */ 
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param Category
     *
     * @return  self
     */ 
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return SubCategory|null
     */ 
    public function getSubCategory()
    {
        return $this->subCategory;
    }

    /**
     * @param SubCategory
     *
     * @return  self
     */ 
    public function setSubCategory($subCategory)
    {
        $this->subCategory = $subCategory;

        return $this;
    }


    public function getCountViews(): ?int
    {
        return $this->countViews;
    }

    public function setCountViews(?int $countViews): self
    {
        $this->countViews = $countViews;

        return $this;
    }

    public function getCountCarts(): ?int
    {
        return $this->countCarts;
    }

    public function setCountCarts(?int $countCarts): self
    {
        $this->countCarts = $countCarts;

        return $this;
    }

    /**
     * Get the value of firstPicture
     */ 
    public function getFirstPicture()
    {
        return $this->firstPicture;
    }

    /**
     * Set the value of firstPicture
     *
     * @return  self
     */ 
    public function setFirstPicture($firstPicture)
    {
        $this->firstPicture = $firstPicture;

        return $this;
    }

    public function getCountSales(): ?int
    {
        return $this->countSales;
    }

    public function setCountSales(?int $countSales): self
    {
        $this->countSales = $countSales;

        return $this;
    }

    public function getDesignation(): ?TranslatableString
    {
        return $this->designation;
    }

    public function setDesignation(TranslatableString $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getMetaDescription(): ?TranslatableString
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?TranslatableString $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

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

    public function getLongHtmlDescription(): ?TranslatableText
    {
        return $this->longHtmlDescription;
    }

    public function setLongHtmlDescription(?TranslatableText $longHtmlDescription): self
    {
        $this->longHtmlDescription = $longHtmlDescription;

        return $this;
    }

    /**
     * @return Collection<int, Post>
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): static
    {
        if (!$this->posts->contains($post)) {
            $this->posts->add($post);
            $post->addLinkedProduct($this);
        }

        return $this;
    }

    public function removePost(Post $post): static
    {
        if ($this->posts->removeElement($post)) {
            $post->removeLinkedProduct($this);
        }

        return $this;
    }

    public function getReviewNote(): ?int
    {
        return $this->reviewNote;
    }

    public function setReviewNote(?int $reviewNote): static
    {
        $this->reviewNote = $reviewNote;

        return $this;
    }

    public function getCountReviews(): ?int
    {
        return $this->countReviews;
    }

    public function setCountReviews(int $countReviews): static
    {
        $this->countReviews = $countReviews;

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

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(?string $brand): static
    {
        $this->brand = $brand;

        return $this;
    }

    public function getHsCode(): ?string
    {
        return $this->hsCode;
    }

    public function setHsCode(string $hsCode): static
    {
        $this->hsCode = $hsCode;

        return $this;
    }

    public function getOriginCountry(): ?string
    {
        return $this->originCountry;
    }

    public function setOriginCountry(string $originCountry): static
    {
        $this->originCountry = $originCountry;

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
            $question->setProduct($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): static
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getProduct() === $this) {
                $question->setProduct(null);
            }
        }

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
            $linkedRecipe->addLinkedProduct($this);
        }

        return $this;
    }

    public function removeLinkedRecipe(Recipe $linkedRecipe): static
    {
        $this->linkedRecipes->removeElement($linkedRecipe);

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
            $linkedArticle->addLinkedProduct($this);
        }

        return $this;
    }

    public function removeLinkedArticle(Article $linkedArticle): static
    {
        if ($this->linkedArticles->removeElement($linkedArticle)) {
            $linkedArticle->removeLinkedProduct($this);
        }

        return $this;
    }

    public function getVendor(): ?User
    {
        return $this->vendor;
    }

    public function setVendor(?User $vendor): static
    {
        $this->vendor = $vendor;

        return $this;
    }

    /**
     * @return Collection<int, Packaging>
     */
    public function getPackagingChoices(): Collection
    {
        return $this->packagingChoices;
    }

    public function addPackaging(Packaging $packaging): static
    {
        if (!$this->packagingChoices->contains($packaging)) {
            $this->packagingChoices->add($packaging);
            $packaging->setProduct($this);
        }

        return $this;
    }

    public function removePackaging(Packaging $packaging): static
    {
        if ($this->packagingChoices->removeElement($packaging)) {
            // set the owning side to null (unless already changed)
            if ($packaging->getProduct() === $this) {
                $packaging->setProduct(null);
            }
        }

        return $this;
    }


   
    public function getBasePackaging(): ?Packaging
    {
        return $this->basePackaging;
    }

    public function setBasePackaging(Packaging $basePackaging): static
    {
        $this->basePackaging = $basePackaging;

        return $this;
    }

    public function getBaseConsumerPriceHT(): ?int
    {
        return $this->baseConsumerPriceHT;
    }

    public function setBaseConsumerPriceHT(int $baseConsumerPriceHT): static
    {
        $this->baseConsumerPriceHT = $baseConsumerPriceHT;

        return $this;
    }

    public function getBaseBusinessPriceHT(): ?int
    {
        return $this->baseBusinessPriceHT;
    }

    public function setBaseBusinessPriceHT(int $baseBusinessPriceHT): static
    {
        $this->baseBusinessPriceHT = $baseBusinessPriceHT;

        return $this;
    }

    public function getMainStock(): ?int
    {
        return $this->mainStock;
    }

    public function setMainStock(int $mainStock): static
    {
        $this->mainStock = $mainStock;

        return $this;
    }

    public function getBasePublicRef(): ?string
    {
        return $this->basePublicRef;
    }

    public function setBasePublicRef(string $basePublicRef): static
    {
        $this->basePublicRef = $basePublicRef;

        return $this;
    }

    public function getVendorCountry(): ?string
    {
        return $this->vendorCountry;
    }

    public function setVendorCountry(string $vendorCountry): static
    {
        $this->vendorCountry = $vendorCountry;

        return $this;
    }

    public function getBaseStock(): ?int
    {
        return $this->baseStock;
    }

    public function setBaseStock(int $baseStock): static
    {
        $this->baseStock = $baseStock;

        return $this;
    }

    public function isRemoving(): ?bool
    {
        return $this->removing;
    }

    public function setRemoving(?bool $removing): static
    {
        $this->removing = $removing;

        return $this;
    }

    public function getVatLevel(): ?string
    {
        return $this->vatLevel;
    }

    public function setVatLevel(string $vatLevel): static
    {
        $this->vatLevel = $vatLevel;

        return $this;
    }
}
