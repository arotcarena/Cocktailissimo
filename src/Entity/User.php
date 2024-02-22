<?php

namespace App\Entity;

use App\Config\SiteConfig;
use Serializable;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\Email(message: 'assert.email')]
    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[Assert\NotBlank(message: 'assert.notBlank.firstName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[Assert\NotBlank(message: 'assert.notBlank.lastName')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;

    #[Assert\Choice(choices: [SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M], message: 'assert.choice')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $civility = null;

    #[ORM\Column]
    private bool $confirmed = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $confirmationToken = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $resetPasswordToken = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToOne(mappedBy: 'user', cascade: ['persist', 'remove'])]
    private ?Cart $cart = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Address::class, orphanRemoval: true)]
    private Collection $addresses;

    #[ORM\Column(nullable: true)]
    private ?int $confirmationTokenExpireAt = null;

    #[ORM\Column(nullable: true)]
    private ?int $resetPasswordTokenExpireAt = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Question::class)]
    private Collection $questions;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Answer::class)]
    private Collection $answers;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Comment::class)]
    private Collection $comments;

    #[ORM\OneToOne(mappedBy: 'user', cascade: ['persist', 'remove'])]
    private ?Company $company = null;

    #[ORM\OneToMany(mappedBy: 'vendor', targetEntity: Product::class, cascade: ['remove', 'persist'])] //persist sert seulement à faire passer ReviewSubscriberTest
    private Collection $products;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $stripeConnectId = null;

    #[ORM\Column]
    private bool $stripeConfirmed = false;

    #[ORM\Column]
    private bool $commissionFree = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $stripeCustomerId = null;

    #[ORM\Column(nullable: true)]
    private ?int $sendcloudId = null;

    #[ORM\Column(nullable: true)]
    private ?int $countReviews = null;

    #[ORM\Column(nullable: true)]
    private ?int $reviewNote = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(nullable: true)]
    private ?int $countPasswordFailures = null;


    public function __construct()
    {
        $this->addresses = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->answers = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

/**
 *  implements Serializable : ceci est obligatoire pour éviter le bug "Serialization of 'Symfony\Component\HttpFoundation\File\File'is not allowed"
 *                               qui se produisait dans ApiUserController.setCompany à cause de l'upload du logo (pourquoi ??? je sais pas) 
 */

    public function __serialize() {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'password' => $this->password
        ];
    }

    public function __unserialize(array $serialized): void
    {
        $this->id = $serialized['id'];
        $this->email = $serialized['email'];
        $this->password = $serialized['password'];
    }
        

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getCivility(): ?string
    {
        return $this->civility;
    }

    public function setCivility(?string $civility): self
    {
        $this->civility = $civility;

        return $this;
    }

    public function isConfirmed(): bool
    {
        return $this->confirmed;
    }

    public function setConfirmed(bool $confirmed): self
    {
        $this->confirmed = $confirmed;

        return $this;
    }

    public function getConfirmationToken(): ?string
    {
        return $this->confirmationToken;
    }

    public function setConfirmationToken(?string $confirmationToken): self
    {
        $this->confirmationToken = $confirmationToken;

        return $this;
    }


    public function getResetPasswordToken(): ?string
    {
        return $this->resetPasswordToken;
    }

    public function setResetPasswordToken(?string $resetPasswordToken): self
    {
        $this->resetPasswordToken = $resetPasswordToken;

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

    public function getCart(): ?Cart
    {
        return $this->cart;
    }

    public function setCart(Cart $cart): self
    {
        // set the owning side of the relation if necessary
        if ($cart->getUser() !== $this) {
            $cart->setUser($this);
        }

        $this->cart = $cart;

        return $this;
    }

    /**
     * @return Collection<int, Address>
     */
    public function getAddresses(): Collection
    {
        return $this->addresses;
    }

    public function addAddress(Address $address): self
    {
        if (!$this->addresses->contains($address)) {
            $this->addresses->add($address);
            $address->setUser($this);
        }

        return $this;
    }

    public function removeAddress(Address $address): self
    {
        if ($this->addresses->removeElement($address)) {
            // set the owning side to null (unless already changed)
            if ($address->getUser() === $this) {
                $address->setUser(null);
            }
        }

        return $this;
    }

    public function getConfirmationTokenExpireAt(): ?int
    {
        return $this->confirmationTokenExpireAt;
    }

    public function setConfirmationTokenExpireAt(?int $confirmationTokenExpireAt): self
    {
        $this->confirmationTokenExpireAt = $confirmationTokenExpireAt;

        return $this;
    }

    public function getResetPasswordTokenExpireAt(): ?int
    {
        return $this->resetPasswordTokenExpireAt;
    }

    public function setResetPasswordTokenExpireAt(?int $resetPasswordTokenExpireAt): self
    {
        $this->resetPasswordTokenExpireAt = $resetPasswordTokenExpireAt;

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
            $question->setUser($this);
        }

        return $this;
    }

    public function removeQuestionAnswer(Question $question): static
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getUser() === $this) {
                $question->setUser(null);
            }
        }

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
            $answer->setUser($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): static
    {
        if ($this->answers->removeElement($answer)) {
            // set the owning side to null (unless already changed)
            if ($answer->getUser() === $this) {
                $answer->setUser(null);
            }
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
            $comment->setUser($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getUser() === $this) {
                $comment->setUser(null);
            }
        }

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): static
    {
        // unset the owning side of the relation if necessary
        if ($company === null && $this->company !== null) {
            $this->company->setUser(null);
        }

        // set the owning side of the relation if necessary
        if ($company !== null && $company->getUser() !== $this) {
            $company->setUser($this);
        }

        $this->company = $company;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): static
    {
        if (!$this->products->contains($product)) {
            $this->products->add($product);
            $product->setVendor($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): static
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getVendor() === $this) {
                $product->setVendor(null);
            }
        }

        return $this;
    }

    public function getStripeConnectId(): ?string
    {
        return $this->stripeConnectId;
    }

    public function setStripeConnectId(?string $stripeConnectId): static
    {
        $this->stripeConnectId = $stripeConnectId;

        return $this;
    }

    public function isStripeConfirmed(): bool
    {
        return $this->stripeConfirmed;
    }

    public function setStripeConfirmed(bool $stripeConfirmed): static
    {
        $this->stripeConfirmed = $stripeConfirmed;

        return $this;
    }

    public function isCommissionFree(): bool
    {
        return $this->commissionFree;
    }

    public function setCommissionFree(bool $commissionFree): static
    {
        $this->commissionFree = $commissionFree;

        return $this;
    }

    public function getStripeCustomerId(): ?string
    {
        return $this->stripeCustomerId;
    }

    public function setStripeCustomerId(?string $stripeCustomerId): static
    {
        $this->stripeCustomerId = $stripeCustomerId;

        return $this;
    }

    public function getSendcloudId(): ?int
    {
        return $this->sendcloudId;
    }

    public function setSendcloudId(?int $sendcloudId): static
    {
        $this->sendcloudId = $sendcloudId;

        return $this;
    }

    public function getCountReviews(): ?int
    {
        return $this->countReviews;
    }

    public function setCountReviews(?int $countReviews): static
    {
        $this->countReviews = $countReviews;

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

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCountPasswordFailures(): ?int
    {
        return $this->countPasswordFailures;
    }

    public function setCountPasswordFailures(?int $countPasswordFailures): static
    {
        $this->countPasswordFailures = $countPasswordFailures;

        return $this;
    }
}
