<?php

namespace App\Entity;

use App\Config\SiteConfig;
use App\Repository\PurchaseRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\HasLifecycleCallbacks()]
#[UniqueEntity('ref', message: 'purchase ref must be unique')]
#[ORM\Entity(repositoryClass: PurchaseRepository::class)]
class Purchase
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true, length: 255)]
    private ?string $ref = null;

    #[ORM\Column(length: 255)]
    private ?string $status = SiteConfig::STATUS_PENDING;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $paidAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?PostalDetail $deliveryDetail = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?PostalDetail $invoiceDetail = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lang = 'en';

    #[ORM\Column(nullable: true)]
    private ?int $countArticles = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $articlesPrice = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $shippingCost = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $totalPrice = null;

    #[ORM\OneToMany(mappedBy: 'purchase', targetEntity: PurchaseVendorGroup::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $purchaseVendorGroups;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomerDetail $customerDetail = null;


    public function __construct()
    {
        $this->purchaseVendorGroups = new ArrayCollection();
    }

    #[ORM\PrePersist]
    public function generateRef()
    {
       $this->ref = 'COC' . (new DateTime())->format('YmdHi') . substr(str_shuffle(str_repeat('AZERTYUIOPQSDFGHJKLMWXCVBN0123456789', 5)), 0, 4);
    }

    public function isStrong()
    {
        return $this->status = SiteConfig::STATUS_PAID;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRef(): ?string
    {
        return $this->ref;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getPaidAt(): ?\DateTimeImmutable
    {
        return $this->paidAt;
    }

    public function setPaidAt(?\DateTimeImmutable $paidAt): self
    {
        $this->paidAt = $paidAt;

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

    public function getDeliveryDetail(): ?PostalDetail
    {
        return $this->deliveryDetail;
    }

    public function setDeliveryDetail(?PostalDetail $deliveryDetail): self
    {
        $this->deliveryDetail = $deliveryDetail;

        return $this;
    }

    public function getInvoiceDetail(): ?PostalDetail
    {
        return $this->invoiceDetail;
    }

    public function setInvoiceDetail(?PostalDetail $invoiceDetail): self
    {
        $this->invoiceDetail = $invoiceDetail;

        return $this;
    }

    public function getLang(): ?string
    {
        return $this->lang;
    }

    public function setLang(?string $lang): self
    {
        $this->lang = $lang;

        return $this;
    }

    public function getCountArticles(): ?int
    {
        return $this->countArticles;
    }

    public function setCountArticles(int $countArticles): static
    {
        $this->countArticles = $countArticles;

        return $this;
    }

    public function getArticlesPrice(): ?CustomPrice
    {
        return $this->articlesPrice;
    }

    public function setArticlesPrice(CustomPrice $articlesPrice): static
    {
        $this->articlesPrice = $articlesPrice;

        return $this;
    }

    public function getShippingCost(): ?CustomPrice
    {
        return $this->shippingCost;
    }

    public function setShippingCost(?CustomPrice $shippingCost): static
    {
        $this->shippingCost = $shippingCost;

        return $this;
    }

    public function getTotalPrice(): ?CustomPrice
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(CustomPrice $totalPrice): static
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    /**
     * @return Collection<int, PurchaseVendorGroup>
     */
    public function getPurchaseVendorGroups(): Collection
    {
        return $this->purchaseVendorGroups;
    }

    public function addPurchaseVendorGroup(PurchaseVendorGroup $purchaseVendorGroup): static
    {
        if (!$this->purchaseVendorGroups->contains($purchaseVendorGroup)) {
            $this->purchaseVendorGroups->add($purchaseVendorGroup);
            $purchaseVendorGroup->setPurchase($this);
        }

        return $this;
    }

    public function removePurchaseVendorGroup(PurchaseVendorGroup $purchaseVendorGroup): static
    {
        if ($this->purchaseVendorGroups->removeElement($purchaseVendorGroup)) {
            // set the owning side to null (unless already changed)
            if ($purchaseVendorGroup->getPurchase() === $this) {
                $purchaseVendorGroup->setPurchase(null);
            }
        }

        return $this;
    }

    public function getCustomerDetail(): ?CustomerDetail
    {
        return $this->customerDetail;
    }

    public function setCustomerDetail(?CustomerDetail $customerDetail): static
    {
        $this->customerDetail = $customerDetail;

        return $this;
    }



}
