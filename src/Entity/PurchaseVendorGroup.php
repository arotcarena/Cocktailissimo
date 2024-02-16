<?php

namespace App\Entity;

use App\Repository\PurchaseVendorGroupRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PurchaseVendorGroupRepository::class)]
class PurchaseVendorGroup
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $vendor = null;

    #[ORM\ManyToOne(inversedBy: 'purchaseVendorGroups')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Purchase $purchase = null;

    #[ORM\OneToMany(mappedBy: 'purchaseVendorGroup', targetEntity: PurchaseLine::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    private Collection $purchaseLines;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?ShippingInfo $shippingInfo = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?VendorDetail $vendorDetail = null;
    
    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $articlesPrice = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private ?CustomPrice $totalPrice = null;

    #[ORM\Column]
    private ?int $weight = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?CustomPrice $commissionPrice = null;

    #[ORM\Column(nullable: true)]
    private ?int $vendorRestAmount = null;

    #[ORM\Column(nullable: true)]
    private ?int $salesInvoiceNumber = null;

    #[ORM\Column(nullable: true)]
    private ?int $commissionInvoiceNumber = null;


    public function __construct()
    {
        $this->purchaseLines = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPurchase(): ?Purchase
    {
        return $this->purchase;
    }

    public function setPurchase(?Purchase $purchase): static
    {
        $this->purchase = $purchase;

        return $this;
    }

    /**
     * @return Collection<int, PurchaseLine>
     */
    public function getPurchaseLines(): Collection
    {
        return $this->purchaseLines;
    }

    public function addPurchaseLine(PurchaseLine $purchaseLine): static
    {
        if (!$this->purchaseLines->contains($purchaseLine)) {
            $this->purchaseLines->add($purchaseLine);
            $purchaseLine->setPurchaseVendorGroup($this);
        }

        return $this;
    }

    public function removePurchaseLine(PurchaseLine $purchaseLine): static
    {
        if ($this->purchaseLines->removeElement($purchaseLine)) {
            // set the owning side to null (unless already changed)
            if ($purchaseLine->getPurchaseVendorGroup() === $this) {
                $purchaseLine->setPurchaseVendorGroup(null);
            }
        }

        return $this;
    }

    public function getShippingInfo(): ?ShippingInfo
    {
        return $this->shippingInfo;
    }

    public function setShippingInfo(ShippingInfo $shippingInfo): static
    {
        $this->shippingInfo = $shippingInfo;

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

    public function getTotalPrice(): ?CustomPrice
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(CustomPrice $totalPrice): static
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getVendorDetail(): ?VendorDetail
    {
        return $this->vendorDetail;
    }

    public function setVendorDetail(VendorDetail $vendorDetail): static
    {
        $this->vendorDetail = $vendorDetail;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): static
    {
        $this->weight = $weight;

        return $this;
    }

    public function getCommissionPrice(): ?CustomPrice
    {
        return $this->commissionPrice;
    }

    public function setCommissionPrice(?CustomPrice $commissionPrice): static
    {
        $this->commissionPrice = $commissionPrice;

        return $this;
    }

    public function getVendorRestAmount(): ?int
    {
        return $this->vendorRestAmount;
    }

    public function setVendorRestAmount(?int $vendorRestAmount): static
    {
        $this->vendorRestAmount = $vendorRestAmount;

        return $this;
    }

    public function getSalesInvoiceNumber(): ?int
    {
        return $this->salesInvoiceNumber;
    }

    public function setSalesInvoiceNumber(?int $salesInvoiceNumber): static
    {
        $this->salesInvoiceNumber = $salesInvoiceNumber;

        return $this;
    }

    public function getCommissionInvoiceNumber(): ?int
    {
        return $this->commissionInvoiceNumber;
    }

    public function setCommissionInvoiceNumber(?int $commissionInvoiceNumber): static
    {
        $this->commissionInvoiceNumber = $commissionInvoiceNumber;

        return $this;
    }

}
