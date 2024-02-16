<?php
namespace App\Tests\UnitAndIntegration\Controller\Webhook;

use App\Controller\Webhook\Stripe\AccountUpdatedWebhookController;
use App\DataFixtures\Tests\VendorTestFixtures;
use App\Email\Admin\AdminNotificationEmail;
use App\Email\Vendor\Stripe\AccountUpdatedEmail;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\Stripe\StripeService;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use stdClass;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class AccountUpdatedWebhookControllerTest extends KernelTestCase
{
    use FixturesTrait;

    private AccountUpdatedWebhookController $accountUpdatedWebhookController;

    private StripeService|MockObject $stripeService;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->stripeService = $this->createMock(StripeService::class);
        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->accountUpdatedWebhookController = new AccountUpdatedWebhookController(
            static::getContainer()->get(UserRepository::class),
            $this->em,
            $this->createMock(AdminNotificationEmail::class),
            $this->createMock(AccountUpdatedEmail::class),
            $this->stripeService
        );

        $this->loadFixtures([VendorTestFixtures::class]);
    }

    public function testWithVendorNotStripeConfirmedAndMissingRequirements()
    {
        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendor->setStripeConfirmed(false)
                ->setStripeConnectId('acct-1234');
        $this->em->flush();

        //on simule le subject account envoyé par stripe
        $account = (object)[
            'id' => 'acct-1234',
            'requirements' => (object)[
                'eventually_due' => [
                    'name', 'fiscal_number', 'etc...'
                ]
            ]
        ];
        
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('account.updated')
                            ->willReturn($account);

        $this->accountUpdatedWebhookController->accountUpdated();

        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->assertFalse($vendor->isStripeConfirmed(), 'le webhook stripe account.updated a passé vendor.stripeConfirmed à true alors qu\'il y a pourtant des requirements manquant');
        $this->assertEquals('acct-1234', $vendor->getStripeConnectId(), 'le webhook stripe account.updated a provoqué le changement du vendor.stripeConnectId');
    }

    public function testWithVendorNotStripeConfirmedAndNoMissingRequirements()
    {
        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendor->setStripeConfirmed(false)
                ->setStripeConnectId('acct-1234');
        $this->em->flush();

        //on simule le subject account envoyé par stripe
        $account = (object)[
            'id' => 'acct-1234',
            'requirements' => (object)[
                'eventually_due' => []
            ]
        ];
        
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('account.updated')
                            ->willReturn($account);

        $this->accountUpdatedWebhookController->accountUpdated();

        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->assertTrue($vendor->isStripeConfirmed(), 'le webhook stripe account.updated n\'a pas passé vendor.stripeConfirmed à true alors qu\'il n\'y a aucun requirements manquant');
        $this->assertEquals('acct-1234', $vendor->getStripeConnectId(), 'le webhook stripe account.updated a provoqué le changement du vendor.stripeConnectId');
    }

    public function testWithVendorStripeConfirmedAndMissingRequirements()
    {
        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendor->setStripeConfirmed(true)
                ->setStripeConnectId('acct-1234');
        $this->em->flush();

        //on simule le subject account envoyé par stripe
        $account = (object)[
            'id' => 'acct-1234',
            'requirements' => (object)[
                'eventually_due' => [
                    'name', 'fiscal_number', 'etc...'
                ]
            ]
        ];
        
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('account.updated')
                            ->willReturn($account);

        $this->accountUpdatedWebhookController->accountUpdated();

        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->assertFalse($vendor->isStripeConfirmed(), 'le webhook stripe account.updated n\'a pas passé vendor.stripeConfirmed à false alors qu\'il y a des requirements manquant');
        $this->assertEquals('acct-1234', $vendor->getStripeConnectId(), 'le webhook stripe account.updated a provoqué le changement du vendor.stripeConnectId');
    }

    public function testWithVendorStripeConfirmedAndNoMissingRequirements()
    {
        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $vendor->setStripeConfirmed(true)
                ->setStripeConnectId('acct-1234');
        $this->em->flush();

        //on simule le subject account envoyé par stripe
        $account = (object)[
            'id' => 'acct-1234',
            'requirements' => (object)[
                'eventually_due' => []
            ]
        ];
        
        $this->stripeService->expects($this->once())
                            ->method('extractWebhookSubject')
                            ->with('account.updated')
                            ->willReturn($account);

        $this->accountUpdatedWebhookController->accountUpdated();

        /** @var User */
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']);
        $this->assertTrue($vendor->isStripeConfirmed(), 'le webhook stripe account.updated a passé vendor.stripeConfirmed à false alors qu\'il n\'y a aucun requirements manquant');
        $this->assertEquals('acct-1234', $vendor->getStripeConnectId(), 'le webhook stripe account.updated a provoqué le changement du vendor.stripeConnectId');
    }
}