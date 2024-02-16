<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Email\Admin\AdminNotificationEmail;
use App\Entity\ProcessedPaymentIntent;
use App\Entity\Purchase;
use App\PurchaseProcessing\PurchaseValidated\PurchaseValidatedVerificator;
use App\Repository\ProcessedPaymentIntentRepository;
use App\Repository\PurchaseRepository;
use App\Service\StockUpdater;
use App\Service\Stripe\StripeService;
use App\Tests\Utils\FixturesTrait;
use App\Tests\Utils\PurchaseFixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\PaymentIntent;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Purchase
 */
class PurchaseValidatedVerificatorTest extends KernelTestCase
{
    use FixturesTrait;

    use PurchaseFixturesTrait;

    private PurchaseValidatedVerificator $purchaseValidatedVerificator;

    private EntityManagerInterface $em;

    private Purchase $purchase;

    private PaymentIntent $paymentIntent;


    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $container = static::getContainer();

        $this->em = $container->get(EntityManagerInterface::class);

        $this->purchaseValidatedVerificator = new PurchaseValidatedVerificator(
            $container->get(PurchaseRepository::class),
            $container->get(AdminNotificationEmail::class),
            $container->get(StockUpdater::class),
            $this->em,
            $container->get(StripeService::class),
            $container->get(ProcessedPaymentIntentRepository::class)
        );

        $this->loadFixtures([PurchaseTestFixtures::class]);

        $this->purchase = $this->getPurchaseByCustomerEmail('purchase_with_2_purchaseLines@mail.com'); // valid purchase with 2 vg and 2 pl 
        //de base cette purchase est en status_terminated (pour les besoins d'autres tests)
        $this->purchase->setStatus(SiteConfig::STATUS_PENDING);
        $this->em->flush();
        
        $this->paymentIntent = new PaymentIntent('pi_id');
        $this->paymentIntent->metadata = (object)['purchaseId' => $this->purchase->getId()];
        $this->paymentIntent->amount_received = $this->purchase->getTotalPrice()->getPriceToPay();
    }

    public function testVerifySuccess()
    {
        $returnPurchase = $this->purchaseValidatedVerificator->verify($this->paymentIntent);
        $this->assertEquals($this->purchase->getId(), $returnPurchase->getId());
    }

    public function testVerifyPaymentIntentAlreadyProcessedReturnNull()
    {
        //on sauvegarde la paymentIntent en tant que paymentIntent déjà traité
        $processedPaymentIntent = (new ProcessedPaymentIntent)->setStringId($this->paymentIntent->id);
        $this->em->persist($processedPaymentIntent);
        $this->em->flush();
      
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyNewPaymentIntentIsSavedAsProcessedPaymentIntent()
    {
        //on vérifie que le paymentIntent n'est pas sauvegardé comme traité pour l'instant
        $processedPaymentIntent = $this->findEntity(ProcessedPaymentIntentRepository::class, ['stringId' => $this->paymentIntent->id]);
        $this->assertNull($processedPaymentIntent); 

        $this->purchaseValidatedVerificator->verify($this->paymentIntent);
        //désormais il devrait être sauvegardé comme traité
        $processedPaymentIntent = $this->findEntity(ProcessedPaymentIntentRepository::class, ['stringId' => $this->paymentIntent->id]);
        $this->assertNotNull($processedPaymentIntent);
    }

    public function testVerifyPaymentIntentWithNoPurchaseAssociatedReturnNull()
    {
        //on met un purchaseId inexistant
        $this->paymentIntent->metadata->purchaseId = 123456789;
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyWhenPurchaseAlreadyPaidReturnNull()
    {
        $this->purchase->setStatus(SiteConfig::STATUS_PAID);
        $this->em->flush();

        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyPaymentIntentAndPurchaseHavingDifferentTotalAmountWillReturnNull()
    {
        $this->paymentIntent->amount_received = 5000; // cas ou on aurait oublié d'ajouter shippingCost
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );

        $this->paymentIntent->amount_received = 6000; // cas ou on aurait ajouté 2 fois shippingCost
        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }

    public function testVerifyWhenStockErrorReturnNull()
    {
        $purchaseOverStock = $this->getPurchaseByCustomerEmail('purchase_with_one_packaging_overstock@mail.com');
        $this->paymentIntent->metadata->purchaseId = $purchaseOverStock->getId();
        $this->paymentIntent->amount_received = $purchaseOverStock->getTotalPrice()->getPriceToPay();

        $this->assertNull(
            $this->purchaseValidatedVerificator->verify($this->paymentIntent)
        );
    }
}