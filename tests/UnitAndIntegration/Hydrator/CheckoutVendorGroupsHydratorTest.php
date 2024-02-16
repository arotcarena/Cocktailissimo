<?php
namespace App\Tests\UnitAndIntegration\Hydrator;

use PHPUnit\Framework\TestCase;
use App\Entity\Cart;
use App\Entity\CartLine;
use App\Entity\CartVendorGroup;
use App\Entity\CustomPrice;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Helper\VendorGroupLinesExtractor;
use App\Hydrator\CheckoutVendorGroupsHydrator;
use stdClass;

/**
 * @group Purchase
 */
class CheckoutVendorGroupsHydratorTest extends TestCase
{
    private CheckoutVendorGroupsHydrator $checkoutVendorGroupsHydrator;

    public function setUp(): void
    {
        $this->checkoutVendorGroupsHydrator = new CheckoutVendorGroupsHydrator(new VendorGroupLinesExtractor);
    }

    public function testHydratePackagingLabel()
    {
        $checkoutVendorGroups = $this->createCheckoutVendorGroups();
        $this->checkoutVendorGroupsHydrator->hydrate(
            $checkoutVendorGroups, 
            $this->createCart()
        );
        $this->assertEquals(
            'packaging label es', 
            $checkoutVendorGroups[0]->cartLines[0]->packaging->label->es
        );
    }
    public function testHydrateProductDesignation()
    {
        $checkoutVendorGroups = $this->createCheckoutVendorGroups();
        $this->checkoutVendorGroupsHydrator->hydrate(
            $checkoutVendorGroups, 
            $this->createCart()
        );
        $this->assertEquals(
            'product designation it', 
            $checkoutVendorGroups[0]->cartLines[0]->packaging->product->designation->it
        );
    }
    public function testHydrateProductHsCode()
    {
        $checkoutVendorGroups = $this->createCheckoutVendorGroups();
        $this->checkoutVendorGroupsHydrator->hydrate(
            $checkoutVendorGroups, 
            $this->createCart()
        );
        $this->assertEquals(
            'test_hs_code', 
            $checkoutVendorGroups[0]->cartLines[0]->packaging->product->hsCode
        );
    }
    public function testHydrateProductOriginCountry()
    {
        $checkoutVendorGroups = $this->createCheckoutVendorGroups();
        $this->checkoutVendorGroupsHydrator->hydrate(
            $checkoutVendorGroups, 
            $this->createCart()
        );
        $this->assertEquals(
            'UK', 
            $checkoutVendorGroups[0]->cartLines[0]->packaging->product->originCountry
        );
    }
    public function testHydratePackagingPrivateRef()
    {
        $checkoutVendorGroups = $this->createCheckoutVendorGroups();
        $this->checkoutVendorGroupsHydrator->hydrate(
            $checkoutVendorGroups, 
            $this->createCart()
        );
        $this->assertEquals(
            'privateRef1', 
            $checkoutVendorGroups[0]->cartLines[0]->packaging->privateRef
        );
    }

    private function createCheckoutVendorGroups(): array
    {
        return [
                (object)[
                    'cartLines' => [
                        (object)[
                            'packaging' => (object)[
                                'id' => 1,
                                'label' => 'label string',
                                'product' => (object)[
                                    'designation' => 'designation string'
                                ]
                            ]
                        ]
                    ]
                ]
        ];
    }

    private function createCart(): Cart
    {
        $packaging = $this->createMock(Packaging::class);
        $packaging->expects($this->any())->method('getId')->willReturn(1);
        $packaging->expects($this->any())->method('getLabel')->willReturn(
            (new TranslatableString)
            ->setEn('packaging label en')
            ->setFr('packaging label fr')
            ->setEs('packaging label es')
            ->setIt('packaging label it')
        );
        $packaging->expects($this->any())->method('getPrivateRef')->willReturn('privateRef1');
        $product = (new Product)
                    ->setDesignation(
                        (new TranslatableString)
                        ->setEn('product designation en')
                        ->setFr('product designation fr')
                        ->setEs('product designation es')
                        ->setIt('product designation it')
                    )
                    ->setHsCode('test_hs_code')
                    ->setOriginCountry('UK')
                    ;
        $packaging->expects($this->any())->method('getProduct')->willReturn($product);

        return (new Cart)
                ->addCartVendorGroup(
                    (new CartVendorGroup)
                    ->setVendor(new User)
                    ->addCartLine(
                        (new CartLine)
                        ->setQuantity(2)
                        ->setPackaging($packaging)
                    )
                )
                ->setCount(1)
                ->setTotalPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_TTC)
                    ->setVatAmount(2000)
                    ->setVatRate(20)
                    ->setPriceHT(100)
                    ->setPriceTTC(120)
                );

    }
}