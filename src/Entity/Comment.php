<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    private ?Recipe $recipe = null;
    
    #[ORM\ManyToOne(inversedBy: 'comments')]
    private ?Article $article = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
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

    #[Assert\NotBlank(message: 'assert.notBlank.question')]
    #[Assert\Length(max: 2000, maxMessage: 'assert.maxLength')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 2)]
    private ?string $lang = null;

    #[ORM\OneToMany(mappedBy: 'comment', targetEntity: Answer::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $answers;


    /** @var Answer[] */
    private $firstAnswers = [];

    /** @var Answer[] */
    private $restAnswers = [];

    private ?int $countAnswers = null;


    //pour admin
    private bool $adminAnswered = false;


    public function __construct()
    {
        $this->answers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

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

    public function getLang(): ?string
    {
        return $this->lang;
    }

    public function setLang(string $lang): static
    {
        $this->lang = $lang;

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
            $answer->setComment($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): static
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getComment() === $this) {
                $answer->setComment(null);
            }
        }

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

    public function getCountAnswers(): ?int
    {
        return $this->countAnswers;
    }
 
    public function setCountAnswers($countAnswers): static
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

  
    public function setRestAnswers($restAnswers): static
    {
        $this->restAnswers = $restAnswers;

        return $this;
    }

    public function addRestAnswer($answer): static
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

    
    public function setFirstAnswers($firstAnswers): static
    {
        $this->firstAnswers = $firstAnswers;

        return $this;
    }

    
    public function addFirstAnswer($answer): static
    {
        if(!in_array($answer, $this->firstAnswers))
        {
            $this->firstAnswers[] = $answer;
        }

        return $this;
    }

    /**
     * Get the value of adminAnswered
     */ 
    public function isAdminAnswered(): bool
    {
        return $this->adminAnswered;
    }

    /**
     * Set the value of adminAnswered
     *
     * @return  self
     */ 
    public function setAdminAnswered($adminAnswered)
    {
        $this->adminAnswered = $adminAnswered;

        return $this;
    }
}
