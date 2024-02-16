<?php

namespace App\Entity;

use App\Repository\VisitorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VisitorRepository::class)]
class Visitor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 20)]
    private ?string $cookieId = null;

    #[ORM\OneToMany(mappedBy: 'visitor', targetEntity: Visit::class, cascade: ['remove'])]
    private Collection $visits;

    #[ORM\OneToMany(mappedBy: 'visitor', targetEntity: VisitorAction::class, cascade: ['remove'])]
    private Collection $actions;

    #[ORM\Column(length: 2)]
    private ?string $lang = null;

    #[ORM\Column(length: 255)]
    private ?string $userAgent = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $origin = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $role = null;



    public function __construct()
    {
        $this->visits = new ArrayCollection();
        $this->actions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCookieId(): ?string
    {
        return $this->cookieId;
    }

    public function setCookieId(string $cookieId): static
    {
        $this->cookieId = $cookieId;

        return $this;
    }

    public function getUserAgent(): ?string
    {
        return $this->userAgent;
    }

    public function setUserAgent(string $userAgent): static
    {
        $this->userAgent = $userAgent;

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
     * @return Collection<int, Visit>
     */
    public function getVisits(): Collection
    {
        return $this->visits;
    }

    public function addVisit(Visit $visit): static
    {
        if (!$this->visits->contains($visit)) {
            $this->visits->add($visit);
            $visit->setVisitor($this);
        }

        return $this;
    }

    public function removeVisit(Visit $visit): static
    {
        if ($this->visits->removeElement($visit)) {
            // set the owning side to null (unless already changed)
            if ($visit->getVisitor() === $this) {
                $visit->setVisitor(null);
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

    public function getOrigin(): ?string
    {
        return $this->origin;
    }

    public function setOrigin(?string $origin): static
    {
        $this->origin = $origin;

        return $this;
    }

    /**
     * @return Collection<int, VisitorAction>
     */
    public function getActions(): Collection
    {
        return $this->actions;
    }

    public function addAction(VisitorAction $action): static
    {
        if (!$this->actions->contains($action)) {
            $this->actions->add($action);
            $action->setVisitor($this);
        }

        return $this;
    }

    public function removeAction(VisitorAction $action): static
    {
        if ($this->actions->removeElement($action)) {
            // set the owning side to null (unless already changed)
            if ($action->getVisitor() === $this) {
                $action->setVisitor(null);
            }
        }

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): static
    {
        $this->role = $role;

        return $this;
    }
}
