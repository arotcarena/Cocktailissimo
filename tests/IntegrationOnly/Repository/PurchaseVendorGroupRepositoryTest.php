<?php
namespace App\Tests\IntegrationOnly\Repository;

use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\Entity\Purchase;
use App\Entity\PurchaseVendorGroup;
use App\Repository\PurchaseRepository;
use App\Repository\PurchaseVendorGroupRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class PurchaseVendorGroupRepositoryTest extends KernelTestCase
{
    use FixturesTrait;
    
    private PurchaseVendorGroupRepository $purchaseVendorGroupRepository;

    private PurchaseRepository $purchaseRepository;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->purchaseVendorGroupRepository = static::getContainer()->get(PurchaseVendorGroupRepository::class);

        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->purchaseRepository = static::getContainer()->get(PurchaseRepository::class);

        $this->loadFixtures([PurchaseTestFixtures::class]);
    }

    public function testFindLastIfNoInvoiceNumberWillReturnNull() // dans les fixtures aucune purchase n'a de numéro de facture
    {
        $lastPurchaseVendorGroup =$this->purchaseVendorGroupRepository->findLast(); 

        $this->assertNull($lastPurchaseVendorGroup);
    }

    public function testFindLastWithOnePurchaseVendorGroupHavingInvoiceNumber()
    {
        /** @var Purchase */
        $purchase = $this->findEntity(PurchaseRepository::class);
        /** @var PurchaseVendorGroup */
        $purchaseVendorGroup = $purchase->getPurchaseVendorGroups()->get(0);
        $id = $purchaseVendorGroup->getId();
        $purchaseVendorGroup->setSalesInvoiceNumber(123456);

        $this->em->flush();

        $lastPurchaseVendorGroup =$this->purchaseVendorGroupRepository->findLast(); 

        $this->assertEquals($id, $lastPurchaseVendorGroup->getId());
    }

    public function testFindLastWithVariousPurchaseVendorGroupsHavingInvoiceNumber()
    {
        $purchases = $this->purchaseRepository->findAll();

        $purchaseA = $purchases[0];
        $purchaseA->getPurchaseVendorGroups()->get(0)->setSalesInvoiceNumber(100);
        $idA = $purchaseA->getId();

        $purchaseB = $purchases[1];
        $purchaseB->getPurchaseVendorGroups()->get(0)->setSalesInvoiceNumber(200);

        $this->em->flush();

        $lastPurchaseVendorGroup =$this->purchaseVendorGroupRepository->findLast(); 

        //si le purchaseVendorGroup retourné appartient a la purchaseA, alors on vérifie que la purchaseA a une date > à la purchaseB 
        if($lastPurchaseVendorGroup->getPurchase()->getId() === $idA)
        {
            $this->assertTrue($purchaseA->getCreatedAt()->format('Y:m:d H:i:s') > $purchaseB->getCreatedAt()->format('Y:m:d H:i:s'));
        }
        else //sinon on vérifie l'inverse
        {
            $this->assertTrue($purchaseB->getCreatedAt()->format('Y:m:d H:i:s') > $purchaseA->getCreatedAt()->format('Y:m:d H:i:s'));
        }
    }
}