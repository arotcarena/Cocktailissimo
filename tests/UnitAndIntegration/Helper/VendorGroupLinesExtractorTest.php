<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\VendorGroup;
use App\Helper\VendorGroupLinesExtractor;
use PHPUnit\Framework\TestCase;

class VendorGroupLinesExtractorTest extends TestCase
{
    public function testReturnCorrectCartLinesCount()
    {
        $cart = (new Cart)
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->addCartLine(new CartLine)
                )
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->addCartLine(new CartLine)
                    ->addCartLine(new CartLine)
                );

        $cartLines = (new VendorGroupLinesExtractor)->extractCartLines($cart);
        $this->assertCount(3, $cartLines);
    }
    public function testReturnCorrectPurchaseLinesCount()
    {
        $purchase = (new Purchase)
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->addPurchaseLine(new PurchaseLine)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->addPurchaseLine(new PurchaseLine)
                    ->addPurchaseLine(new PurchaseLine)
                );

        $purchaseLines = (new VendorGroupLinesExtractor)->extractPurchaseLines($purchase);
        $this->assertCount(3, $purchaseLines);
    }
    public function testReturnCorrectStdCartLines()
    {
        $stdCart = (object)[
            'cartVendorGroups' => [
                (object)[
                    'cartLines' => [
                        (object)['id' => 5]
                    ]
                ],
                (object)[
                    'cartLines' => [
                        (object)['id' => 3],
                        (object)['id' => 10]
                    ]
                ]
            ]
        ];

        $cartLines = (new VendorGroupLinesExtractor)->extractStdVendorGroupsCartLines($stdCart->cartVendorGroups);
        $this->assertCount(3, $cartLines);
        $this->assertEquals(5, $cartLines[0]->id);
        $this->assertEquals(3, $cartLines[1]->id);
        $this->assertEquals(10, $cartLines[2]->id);
    }
}