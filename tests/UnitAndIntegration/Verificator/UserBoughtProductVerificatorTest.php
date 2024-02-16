<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Helper\VendorGroupLinesExtractor;
use App\Repository\PurchaseRepository;
use App\Verificator\UserBoughtProductVerificator;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;


/**
 * @group Verificator
 */
class UserBoughtProductVerificatorTest extends TestCase
{
    private UserBoughtProductVerificator $verificator;

    private MockObject|PurchaseRepository $purchaseRepository;

    public function setUp(): void
    {
        $this->purchaseRepository = $this->createMock(PurchaseRepository::class);
        $this->verificator = new UserBoughtProductVerificator($this->purchaseRepository, new VendorGroupLinesExtractor);
    }

    public function testWithEmailLinkedWithNoPurchase()
    {
        $this->purchaseRepository->expects($this->once())
                                ->method('findByCustomerEmail')
                                ->with('unknown@mail.fr')
                                ->willReturn([])
                            ;

        $this->assertFalse($this->verificator->verify('unknown@mail.fr', new Product));
    }
    public function testWithEmailNotLinkedToPurchaseContainingProduct()
    {   
        $product = (new Product)
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef('publicRef1234')
                    );
        $this->purchaseRepository->expects($this->once())
                                ->method('findByCustomerEmail')
                                ->with('email@mail.fr')
                                ->willReturn([
                                    (new Purchase)
                                    ->addPurchaseVendorGroup(
                                        (new PurchaseVendorGroup)
                                        ->addPurchaseLine(
                                            (new PurchaseLine)
                                            ->setPublicRef('otherpublicRef123456789')
                                        )
                                    )
                                ]);

        $this->assertFalse($this->verificator->verify('email@mail.fr', $product));
    }
    public function testWithEmailLinkedToPurchaseContainingProduct()
    {
        $product = (new Product)
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef('publicRef1234')
                    );
        $this->purchaseRepository->expects($this->once())
                                ->method('findByCustomerEmail')
                                ->with('email@mail.fr')
                                ->willReturn([
                                    (new Purchase)
                                    ->addPurchaseVendorGroup(
                                        (new PurchaseVendorGroup)
                                        ->addPurchaseLine(
                                            (new PurchaseLine)
                                            ->setPublicRef('publicRef1234')
                                        )
                                    )
                                ]);
        $this->assertTrue($this->verificator->verify('email@mail.fr', $product));
    }
}