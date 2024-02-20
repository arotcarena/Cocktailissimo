<?php
namespace App\Tests\UnitAndIntegration\Invoice;

use App\Entity\PurchaseVendorGroup;
use App\Invoice\LastInvoiceNumberFinder;
use App\Repository\PurchaseVendorGroupRepository;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group Invoice
 */
class LastInvoiceNumberFinderTest extends TestCase
{
    private LastInvoiceNumberFinder $lastInvoiceNumberFinder;

    private PurchaseVendorGroupRepository|MockObject $purchaseVendorGroupRepository;


    public function setUp(): void
    {
        $this->purchaseVendorGroupRepository = $this->createMock(PurchaseVendorGroupRepository::class);

        $this->lastInvoiceNumberFinder = new LastInvoiceNumberFinder($this->purchaseVendorGroupRepository);
    }

    public function testFindWillReturnMaxNumberOfLastPurchaseVendorGroup()
    {
        $lastPurchaseVendorGroup = (new PurchaseVendorGroup)
                                    ->setSalesInvoiceNumber(10)
                                    ->setCommissionInvoiceNumber(11)
                                    ;
        
        $this->purchaseVendorGroupRepository->expects($this->any())
                                            ->method('findLast')
                                            ->willReturn($lastPurchaseVendorGroup)
                                            ;

        $this->assertEquals(11, $this->lastInvoiceNumberFinder->find());


        $lastPurchaseVendorGroup->setSalesInvoiceNumber(12)
                                ->setCommissionInvoiceNumber(11)
                                ;

        $this->assertEquals(12, $this->lastInvoiceNumberFinder->find());
    }

    public function testFindWillReturnZeroIfNoPurchaseVendorGroups()
    {
        $this->purchaseVendorGroupRepository->expects($this->once())
                                            ->method('findLast')
                                            ->willReturn(null)
                                            ;

        $this->assertEquals(0, $this->lastInvoiceNumberFinder->find());
    }

    public function testFindWillReturnZeroIfLastPurchaseVendorGroupHaveNo()
    {
        $lastPurchaseVendorGroup = (new PurchaseVendorGroup)
                                    ->setSalesInvoiceNumber(10)
                                    ->setCommissionInvoiceNumber(11)
                                    ;
        
        $this->purchaseVendorGroupRepository->expects($this->any())
                                            ->method('findLast')
                                            ->willReturn($lastPurchaseVendorGroup)
                                            ;

        $this->assertEquals(11, $this->lastInvoiceNumberFinder->find());


        $lastPurchaseVendorGroup->setSalesInvoiceNumber(12)
                                ->setCommissionInvoiceNumber(11)
                                ;

        $this->assertEquals(12, $this->lastInvoiceNumberFinder->find());
    }
}