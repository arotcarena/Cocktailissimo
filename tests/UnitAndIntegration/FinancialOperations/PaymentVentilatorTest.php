<?php
namespace App\Tests\UnitAndIntegration\FinancialOperations;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\VendorTestFixtures;
use App\DataFixtures\Tests\VendorWithOneProductTestFixtures;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Entity\User;
use App\Entity\VendorDetail;
use App\FinancialOperations\PaymentVentilator;
use App\Repository\PackagingRepository;
use App\Repository\PurchaseRepository;
use App\Repository\UserRepository;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class PaymentVentilatorTest extends TestCase
{
    private PaymentVentilator $paymentVentilator;

    private MockObject|StripeService $stripeService;


    public function setUp(): void
    {
        $this->stripeService = $this->createMock(StripeService::class);     

        $this->paymentVentilator = new PaymentVentilator($this->stripeService);
    }

    public function testVentilateSendCorrectTransfers()
    {
        $this->stripeService->expects($this->exactly(2))
                            ->method('createTransfer')
                            ->with(500, 'acct-test')
                            ;

        $this->paymentVentilator->ventilate(
            $this->createPurchase()
        );
    }

    private function createPurchase(): Purchase
    {
        return (new Purchase)
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorRestAmount(500)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test')
                    )
                    ->setVendorRestAmount(500)
                )
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setVendor(
                        (new User)
                        ->setStripeConnectId('acct-test-3')
                        ->setCommissionFree(true) // on le met en cas de changement mais pour l'instant ne sert à rien
                    )
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setStripeConnectId('acct-test-3')
                    )
                );
    }
}