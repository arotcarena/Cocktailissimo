<?php
namespace App\Tests\IntegrationOnly\Controller\Account\Invoice;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\UserPurchaseTestFixtures;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\PurchaseVendorGroup;
use App\Entity\User;
use App\Invoice\InvoiceTypes;
use App\Repository\PurchaseVendorGroupRepository;
use App\Repository\UserRepository;
use App\Tests\Functional\FunctionalTest;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;

class InvoiceDownloadControllerTest extends FunctionalTest
{
    private Security $security;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        $this->security = $this->client->getContainer()->get(Security::class);

        $this->em = $this->client->getContainer()->get(EntityManagerInterface::class);
        
        $this->loadFixtures([UserPurchaseTestFixtures::class, UserTestFixtures::class]);
    }

    public function testCustomerCanDownloadSalesInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $customer = $this->findEntity(UserRepository::class, ['email' => $purchaseVendorGroup->getPurchase()->getCustomerDetail()->getEmail()]);
        $this->client->loginUser($customer);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::SALES
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND, 'Dans ce test on part du principe que les fichiers pdf des invoices correspondant aux purchases de test n\'existent pas. Si par hasard ils existent le test échouera');
    }

    public function testCustomerCannotDownloadCommissionInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $customer = $this->findEntity(UserRepository::class, ['email' => $purchaseVendorGroup->getPurchase()->getCustomerDetail()->getEmail()]);
        $this->client->loginUser($customer);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::COMMISSION
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testVendorCanDownloadSalesInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $vendor = $purchaseVendorGroup->getVendor();
        $this->client->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::SALES
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND, 'Dans ce test on part du principe que les fichiers pdf des invoices correspondant aux purchases de test n\'existent pas. Si par hasard ils existent le test échouera');
    }

    public function testVendorCanDownloadCommissionInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $vendor = $purchaseVendorGroup->getVendor();
        $this->client->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::COMMISSION
        ]);
        
        $this->assertResponseStatusCodeSame(Response::HTTP_NOT_FOUND, 'Dans ce test on part du principe que les fichiers pdf des invoices correspondant aux purchases de test n\'existent pas. Si par hasard ils existent le test échouera');
   
    }

    public function testOtherUserCannotDownloadSalesInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']); // user n'ayant pas de purchase
        $this->client->loginUser($user);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::SALES
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testOtherUserCannotDownloadCommissionInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']); // user n'ayant pas de purchase
        $this->client->loginUser($user);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::COMMISSION
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testOtherVendorCannotDownloadSalesInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $vendor = $this->getVendorHavingNoProductsAndPurchasesLinked();
        $this->client->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::SALES
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testOtherVendorCannotDownloadCommissionInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);
        $vendor = $this->getVendorHavingNoProductsAndPurchasesLinked();
        $this->client->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::COMMISSION
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testAnonymousVisitorCannotDownloadSalesInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::SALES
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    public function testAnonymousVisitorCannotDownloadCommissionInvoice()
    {
        $purchaseVendorGroup = $this->findEntity(PurchaseVendorGroupRepository::class);

        $this->client->request('POST', $this->urlGenerator->generate('download_invoice_index'), [
            'purchaseVendorGroupId' => $purchaseVendorGroup->getId(),
            'type' => InvoiceTypes::COMMISSION
        ]);

        $this->assertResponseStatusCodeSame(Response::HTTP_FORBIDDEN);
    }

    
    private function getVendorHavingNoProductsAndPurchasesLinked(): User
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        //on transforme ce user en vendor : car tous les vendors des fixtures ont des produits associés et donc on risque de tomber par hasard sur le bon vendor
        $user->setRoles(['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR']);
        $this->em->flush();
        //on récupère le user updated pour être sûr
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $this->assertTrue(in_array('ROLE_VENDOR', $user->getRoles()), 'le test est faussé, on a pas correctement transformé le user en vendor');

        return $user;
    }
}