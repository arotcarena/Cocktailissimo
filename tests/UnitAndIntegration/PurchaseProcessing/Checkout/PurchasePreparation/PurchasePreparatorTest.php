<?php
namespace App\Tests\UnitAndIntegration\PurchaseProcessing\Checkout\PurchasePreparation;

use App\Config\SiteConfig;
use App\Entity\CustomPrice;
use App\Entity\User;
use DateTimeImmutable;
use App\Entity\Purchase;
use PHPUnit\Framework\TestCase;
use App\Helper\DateTimeGenerator;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use App\Helper\ObjectHydrator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchasePreparator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchaseRelationsCleaner;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchaseValidator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups\PurchaseVendorGroupsHandler;
use App\Tests\Utils\Factory\CheckoutDataFactory;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationList;


/**
 * @group Purchase
 */
class PurchasePreparatorTest extends TestCase
{
    private PurchasePreparator $purchasePreparator;

    private MockObject|EntityManagerInterface $em;

    private MockObject|PurchaseValidator $purchaseValidator;

    private MockObject|ObjectHydrator $objectHydrator;

    private MockObject|PurchaseRelationsCleaner $purchaseRelationsCleaner;

    private MockObject|PurchaseVendorGroupsHandler $purchaseVendorGroupsHandler;


    public function setUp(): void 
    {
        $this->em = $this->createMock(EntityManagerInterface::class);
        
        $dateTimeGenerator = $this->createMock(DateTimeGenerator::class);
        $dateTimeGenerator->expects($this->any())->method('generateImmutable')->willReturn(new DateTimeImmutable());

        $this->purchaseValidator = $this->createMock(PurchaseValidator::class);
        $this->objectHydrator = $this->createMock(ObjectHydrator::class);
        $this->objectHydrator->expects($this->any())->method('hydrate')->willReturn(new CustomPrice);
        $this->purchaseRelationsCleaner = $this->createMock(PurchaseRelationsCleaner::class);
        $this->purchaseVendorGroupsHandler = $this->createMock(PurchaseVendorGroupsHandler::class);

        $this->purchasePreparator = new PurchasePreparator(
            $this->em, 
            $dateTimeGenerator,
            $this->purchaseValidator,
            $this->objectHydrator,
            $this->purchaseRelationsCleaner,
            $this->purchaseVendorGroupsHandler
        );
    }


    public function testPersistInvalidPurchase()
    {
        $this->purchaseValidator->expects($this->once())
                        ->method('validate')
                        ->willReturn(new ConstraintViolationList([new ConstraintViolation('error', null, [], '', null, '')]))
                        ;
        
        $errors = $this->purchasePreparator->prepare(new Purchase, CheckoutDataFactory::createCheckoutData(), 'en');
        $this->assertTrue(count($errors) > 0);
    }

    public function testPersistInvalidPurchaseDontFlush()
    {
        $this->purchaseValidator->expects($this->once())
                        ->method('validate')
                        ->willReturn(new ConstraintViolationList([new ConstraintViolation('error', null, [], '', null, '')]))
                        ;
        
        $this->em->expects($this->never())
                    ->method('flush')
                    ;
        $this->purchasePreparator->prepare(new Purchase, CheckoutDataFactory::createCheckoutData(), 'en');
    }

    public function testPersistValidPurchasePersist()
    {
        $this->purchaseValidator->expects($this->once())
                        ->method('validate')
                        ->willReturn(null)
                        ;
        
        $this->em->expects($this->once())
                    ->method('flush')
                    ;
        $this->purchasePreparator->prepare(new Purchase, CheckoutDataFactory::createCheckoutData(), 'en');
    }
    public function testPersistValidPurchaseReturnNull()
    {
        $this->purchaseValidator->expects($this->once())
                        ->method('validate')
                        ->willReturn(null)
                        ;

        $errors = $this->purchasePreparator->prepare(new Purchase, CheckoutDataFactory::createCheckoutData(), 'en');
        $this->assertNull($errors);
    }
    public function testPersistSetCorrectValuesIntoPurchase()
    {
        $purchase = new Purchase;
        $this->purchaseValidator->expects($this->once())
                        ->method('validate')
                        ->willReturn(null)
                        ;

        $this->purchasePreparator->prepare($purchase, CheckoutDataFactory::createCheckoutData(), 'en');

        $this->assertInstanceOf(
            DateTimeImmutable::class,
            $purchase->getCreatedAt()
        );
        $this->assertEquals('valid@gmail.com', $purchase->getCustomerDetail()->getEmail());
        $this->assertEquals(SiteConfig::CIVILITY_M, $purchase->getCustomerDetail()->getCivility());
        $this->assertEquals('civility_firstName', $purchase->getCustomerDetail()->getFirstName());
        $this->assertEquals('civility_lastName', $purchase->getCustomerDetail()->getLastName());
        $this->assertEquals('Enterprise', $purchase->getCustomerDetail()->getCompany());
        $this->assertEquals('123456', $purchase->getCustomerDetail()->getVatNumber());
        $this->assertEquals('0601020304', $purchase->getCustomerDetail()->getPhone());
        $this->assertNull($purchase->getUser());
    }
    public function testPersistSetCorrectUserIntoPurchaseIfUserIsPassed()
    {
        $user = new User;
        $purchase = new Purchase;
        $this->purchaseValidator->expects($this->once())
                                ->method('validate')
                                ->willReturn(null)
                                ;
        
        $this->purchasePreparator->prepare($purchase, CheckoutDataFactory::createCheckoutData(), 'en', $user);

        $this->assertEquals($user, $purchase->getUser());
    }
    public function testPersistSetCorrectDeliveryDetailValuesIntoPurchase()
    {
        $purchase = new Purchase;
        $this->purchaseValidator->expects($this->once())
                                ->method('validate')
                                ->willReturn(null)
                                ;
        $this->purchasePreparator->prepare($purchase, CheckoutDataFactory::createCheckoutData(), 'en');

        $this->assertEquals(SiteConfig::CIVILITY_M, $purchase->getDeliveryDetail()->getCivility());
        $this->assertEquals('delivery_firstName', $purchase->getDeliveryDetail()->getFirstName());
        $this->assertEquals('delivery_lastName', $purchase->getDeliveryDetail()->getLastName());
        $this->assertEquals('delivery_lineOne', $purchase->getDeliveryDetail()->getLineOne());
        $this->assertEquals('delivery_lineTwo', $purchase->getDeliveryDetail()->getLineTwo());
        $this->assertEquals('75000', $purchase->getDeliveryDetail()->getPostcode());
        $this->assertEquals('delivery_city', $purchase->getDeliveryDetail()->getCity());
        $this->assertEquals('FR', $purchase->getDeliveryDetail()->getCountry());
    }
    public function testPersistSetCorrecInvoiceDetailValuesIntoPurchase()
    {
        $purchase = new Purchase;
        $this->purchaseValidator->expects($this->once())
                                ->method('validate')
                                ->willReturn(null)
                                ;
        $this->purchasePreparator->prepare($purchase, CheckoutDataFactory::createCheckoutData(), 'en');
        
        $this->assertEquals(SiteConfig::CIVILITY_M, $purchase->getInvoiceDetail()->getCivility());
        $this->assertEquals('civility_firstName', $purchase->getInvoiceDetail()->getFirstName());
        $this->assertEquals('civility_lastName', $purchase->getInvoiceDetail()->getLastName());
        $this->assertEquals('invoice_lineOne', $purchase->getInvoiceDetail()->getLineOne());
        $this->assertEquals('invoice_lineTwo', $purchase->getInvoiceDetail()->getLineTwo());
        $this->assertEquals('01000', $purchase->getInvoiceDetail()->getPostcode());
        $this->assertEquals('invoice_city', $purchase->getInvoiceDetail()->getCity());
        $this->assertEquals('US', $purchase->getInvoiceDetail()->getCountry());
    } 
}