<?php
namespace App\Tests\IntegrationOnly\Entity;

use App\Entity\Purchase;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class PurchaseTest extends KernelTestCase
{
    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        $this->em = static::getContainer()->get(EntityManagerInterface::class);
    }

    public function testEmptyPurchaseCanPersist()
    {
        $purchase = new Purchase;
        $this->em->persist($purchase);
        $this->em->flush();

        $this->assertIsInt($purchase->getId());
    }
}