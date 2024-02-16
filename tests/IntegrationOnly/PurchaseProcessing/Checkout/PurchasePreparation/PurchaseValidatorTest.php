<?php
namespace App\Tests\IntegrationOnly\PurchaseProcessing\Checkout\PurchasePreparation;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\PurchaseProcessing\Checkout\PurchasePreparation\PurchaseValidator;
use App\Repository\PurchaseRepository;
use App\Tests\Utils\FixturesTrait;
use Exception;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @group Purchase
 */
class PurchaseValidatorTest extends KernelTestCase
{
    use FixturesTrait;
    private PurchaseValidator $purchaseValidator;

    public function setUp(): void
    {
        parent::setUp();

        $this->purchaseValidator = new PurchaseValidator(
            static::getContainer()->get(ValidatorInterface::class),
            static::getContainer()->get(TranslatorInterface::class)
        );

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testValidateWithoutCustomerDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->setCustomerDetail(null);

        $this->expectException(Exception::class);
        $this->purchaseValidator->validate($purchase);
    }
    public function testValidateWithoutDeliveryDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->setDeliveryDetail(null);

        $this->expectException(Exception::class);
        $this->purchaseValidator->validate($purchase);
    }
    public function testValidateWithoutInvoiceDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->setInvoiceDetail(null);

        $this->expectException(Exception::class);
        $this->purchaseValidator->validate($purchase);
    }
    public function testValidateWithInvalidCustomerDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->getCustomerDetail()->setEmail('invalidemail.com');

        $constraintViolationList = $this->purchaseValidator->validate($purchase);
        $this->assertNotNull($constraintViolationList);
        $this->assertCount(1, $constraintViolationList);
    }
    public function testValidateWithInvalidDeliveryDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->getDeliveryDetail()->setLineOne('');

        $constraintViolationList = $this->purchaseValidator->validate($purchase);
        $this->assertNotNull($constraintViolationList);
        $this->assertCount(1, $constraintViolationList);
    }
    public function testValidateWithInvalidInvoiceDetail()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        $purchase->getInvoiceDetail()->setCity('');

        $constraintViolationList = $this->purchaseValidator->validate($purchase);
        $this->assertNotNull($constraintViolationList);
        $this->assertCount(1, $constraintViolationList);
    }
    
}