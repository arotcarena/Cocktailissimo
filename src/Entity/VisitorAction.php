<?php

namespace App\Entity;

use App\Repository\VisitorActionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VisitorActionRepository::class)]
class VisitorAction
{
    //types
    /** inscription */
    public const TYPE_PRE_REGISTER = 'visitor_action.pre_register';
    /** validation du mail : compte confirmé */
    public const TYPE_REGISTER_CONFIRM = 'visitor_action.register_confirm';

    public const TYPE_DELETE_ACCOUNT = 'visitor_action.delete_account';

    public const TYPE_GEOLOC_COUNTRY_CHANGE = 'visitor_action.geoloc_country_change';

    public const TYPE_CART_CREATE = 'visitor_action.cart_create';

    public const TYPE_CART_CHANGE = 'visitor_action.cart_change';

    /** début du checkout */
    public const TYPE_CHECKOUT_START = 'visitor_action.checkout_start';

    /** affichage du formulaire de paiement */
    public const TYPE_CHECKOUT_PREPARE_PAYMENT = 'visitor_action.checkout_prepare_payment';

    /** tentative de paiement */
    public const TYPE_CHECKOUT_PAYMENT_ATTEMPT = 'visitor_action.checkout_payment_attempt';

    /** commande payée */
    public const TYPE_PURCHASE_PAID = 'visitor_action.purchase_paid';

    public const TYPE_COMMENT = 'visitor_action.comment';

    public const TYPE_QUESTION = 'visitor_action.question';
    
    public const TYPE_REVIEW = 'visitor_action.review';
    
    public const TYPE_ANSWER = 'visitor_action.answer';


    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[ORM\ManyToOne(inversedBy: 'actions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Visitor $visitor = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(nullable: true)]
    private ?array $detail = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getDetail(): ?array
    {
        return $this->detail;
    }

    public function setDetail(?array $detail): static
    {
        $this->detail = $detail;

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

    public function getVisitor(): ?Visitor
    {
        return $this->visitor;
    }

    public function setVisitor(?Visitor $visitor): static
    {
        $this->visitor = $visitor;

        return $this;
    }


}
