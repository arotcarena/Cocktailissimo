<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PostRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PostRepository::class)]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TranslatableString $title = null;

    #[Assert\NotBlank(message: 'Le code intégré est obligatoire')]
    #[Assert\Length(max: 20000, maxMessage: '20000 caractères maximum')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $iframe = null;

    #[Assert\Count(max: 8, maxMessage: '8 produits associés maximum')]
    #[ORM\ManyToMany(targetEntity: Product::class, inversedBy: 'posts')]
    private Collection $linkedProducts;

    #[Assert\NotNull(message: 'La date de publication est obligatoire')]
    #[ORM\Column]
    private ?\DateTime $createdAt = null;   // date de publication 

    public function __construct()
    {
        $this->linkedProducts = new ArrayCollection();
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

    public function getIframe(): ?string
    {
        return $this->iframe;
    }

    public function setIframe(string $iframe): static
    {
        $this->iframe = $iframe;

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
        }

        return $this;
    }

    public function removeLinkedProduct(Product $linkedProduct): static
    {
        $this->linkedProducts->removeElement($linkedProduct);

        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
