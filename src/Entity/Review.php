<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\ReviewRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'reviews')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.fullName')]
    #[ORM\Column(length: 255)]
    private ?string $fullName = null;

    #[Assert\NotNull(message: 'assert.notBlank.rate')]
    #[Assert\Range(min: 1, max: 5, notInRangeMessage: 'assert.range.rate')]
    #[ORM\Column]
    private ?int $rate = null;

    #[Assert\NotBlank(message: 'assert.notBlank.comment')]
    #[Assert\Length(max: 1000, maxMessage: 'assert.maxLength')]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $moderationStatus = SiteConfig::MODERATION_STATUS_PENDING;

    #[Assert\NotBlank(message: 'assert.notBlank.title')]
    #[Assert\Length(max: 100, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column]
    private ?bool $bought = false;

    #[ORM\Column]
    private ?bool $confirmed = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $confirmationToken = null;

    #[ORM\Column(nullable: true)]
    private ?int $confirmationTokenExpireAt = null;

    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\Email(message: 'Adresse email invalide')]
    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 2)]
    private ?string $lang = null;

    #[Assert\Count(max: SiteConfig::REVIEW_MAX_ANSWERS, maxMessage: 'assert.maxCount.answers')]
    #[ORM\OneToMany(mappedBy: 'review', targetEntity: Answer::class, cascade: ['remove'])]
    private Collection $answers;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
    }

    public function isStrong(): bool 
    {
        return $this->moderationStatus === null;
    }

    public function getModerationStatusLabel(): string
    {
        switch($this->moderationStatus)
        {
            case SiteConfig::MODERATION_STATUS_ACCEPTED:
                return SiteConfig::MODERATION_STATUS_ACCEPTED_LABEL;
                break;
            case SiteConfig::MODERATION_STATUS_REFUSED:
                return SiteConfig::MODERATION_STATUS_REFUSED_LABEL;
            default:
                return SiteConfig::MODERATION_STATUS_PENDING_LABEL;
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getRate(): ?int
    {
        return $this->rate;
    }

    public function setRate(int $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

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

    public function getModerationStatus(): ?string
    {
        return $this->moderationStatus;
    }

    public function setModerationStatus(?string $moderationStatus): self
    {
        $this->moderationStatus = $moderationStatus;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function isBought(): ?bool
    {
        return $this->bought;
    }

    public function setBought(bool $bought): static
    {
        $this->bought = $bought;

        return $this;
    }

    public function isConfirmed(): ?bool
    {
        return $this->confirmed;
    }

    public function setConfirmed(bool $confirmed): static
    {
        $this->confirmed = $confirmed;

        return $this;
    }

    public function getConfirmationToken(): ?string
    {
        return $this->confirmationToken;
    }

    public function setConfirmationToken(?string $confirmationToken): static
    {
        $this->confirmationToken = $confirmationToken;

        return $this;
    }

    public function getConfirmationTokenExpireAt(): ?int
    {
        return $this->confirmationTokenExpireAt;
    }

    public function setConfirmationTokenExpireAt(?int $confirmationTokenExpireAt): static
    {
        $this->confirmationTokenExpireAt = $confirmationTokenExpireAt;

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
            $answer->setReview($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): static
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getReview() === $this) {
                $answer->setReview(null);
            }
        }

        return $this;
    }

}
