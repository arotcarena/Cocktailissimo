<?php

namespace App\Entity;

use App\Entity\Answer;
use App\Repository\QuestionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'questions')]
    private ?Product $product = null;

    #[ORM\ManyToOne(inversedBy: 'questions')]
    private ?Recipe $recipe = null;

    #[ORM\ManyToOne(inversedBy: 'questions')]
    private ?User $user = null;

    #[Assert\Email(message: 'assert.email')]
    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[Assert\NotBlank(message: 'assert.notBlank.fullName')]
    #[Assert\Length(max: 100, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $fullName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.title')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[Assert\NotBlank(message: 'assert.notBlank.content')]
    #[Assert\Length(max: 2000, maxMessage: 'assert.maxLength')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: Answer::class, cascade: ['persist', 'remove'])]
    private Collection $answers;

    #[ORM\Column(length: 2)]
    private ?string $lang = null;


    //pour hydratation dans Repository
    
    /** @var Answer[] */
    private $firstAnswers = [];

    /** @var Answer[] */
    private $restAnswers = [];

    //pour hydratation dans QuestionAnswerRepository
    private ?int $countAnswers = null;


    //pour admin
    private bool $adminAnswered = false;
    private bool $vendorAnswered = false;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): static
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): static
    {
        $this->title = $title;

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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection<int, Answer>
     */
    public function getAnswers(): Collection
    {
        return $this->answers;
    }

    public function addAnswer(Answer $answer): static
    {
        if (!$this->answers->contains($answer)) {
            $this->answers->add($answer);
            $answer->setQuestion($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): static
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getQuestion() === $this) {
                $answer->setQuestion(null);
            }
        }

        return $this;
    }

    public function getLang(): ?string
    {
        return $this->lang;
    }

    public function setLang(string $lang): static
    {
        $this->lang = $lang;

        return $this;
    }

    public function getCountAnswers(): ?int
    {
        return $this->countAnswers;
    }

 
    public function setCountAnswers(int $countAnswers): self
    {
        $this->countAnswers = $countAnswers;

        return $this;
    }

    /**
     * @return Answer[]
     */
    public function getRestAnswers()
    {
        return $this->restAnswers;
    }
  
    /**
     * @param Answer[] $restAnswers
     * @return self
     */
    public function setRestAnswers($restAnswers)
    {
        $this->restAnswers = $restAnswers;

        return $this;
    }

    public function addRestAnswer(Answer $answer): self
    {
        if(!in_array($answer, $this->restAnswers))
        {
            $this->restAnswers[] = $answer;
        }

        return $this;
    }

    /**
     * @return Answer[]
     */
    public function getFirstAnswers()
    {
        return $this->firstAnswers;
    }

  
    /**
     * @param Answer[] $firstAnswers
     * @return self
     */
    public function setFirstAnswers(array $firstAnswers)
    {
        $this->firstAnswers = $firstAnswers;

        return $this;
    }

    public function addFirstAnswer(Answer $answer): self
    {
        if(!in_array($answer, $this->firstAnswers))
        {
            $this->firstAnswers[] = $answer;
        }

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

    public function isAdminAnswered(): bool
    {
        return $this->adminAnswered;
    }

    public function setAdminAnswered(bool $adminAnswered): static
    {
        $this->adminAnswered = $adminAnswered;

        return $this;
    }

    public function isVendorAnswered(): bool
    {
        return $this->vendorAnswered;
    }

    public function setVendorAnswered(bool $vendorAnswered): static
    {
        $this->vendorAnswered = $vendorAnswered;

        return $this;
    }
}
