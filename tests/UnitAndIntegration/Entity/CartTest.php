<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\DataFixtures\Tests\CartTestFixtures;
use App\Entity\Cart;
use App\Repository\CartLineRepository;
use App\Repository\CartRepository;
use App\Repository\CartVendorGroupRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CartTest extends KernelTestCase
{
    use FixturesTrait;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->loadFixtures([CartTestFixtures::class]);
    }

    public function testOnCartRemoveCascadeRemoveVendorGroups()
    {
        /** @var Cart */
        $cart = $this->findEntity(CartRepository::class);

        $vendorGroup = $cart->getCartVendorGroups()->get(0);
        $id = $vendorGroup->getId();

        $this->em->remove($cart);
        $this->em->flush();

        $vendorGroup = $this->findEntity(CartVendorGroupRepository::class, ['id' => $id]);
        $this->assertNull($vendorGroup);
    }

    public function testOnVendorGroupRemoveCascadeRemoveCartLines()
    {
        /** @var Cart */
        $cart = $this->findEntity(CartRepository::class);

        $vendorGroup = $cart->getCartVendorGroups()->get(0);
        $cartLines = $vendorGroup->getCartLines();
        $ids = [];
        foreach($cartLines as $cartLine)
        {
            $ids[] = $cartLine->getId();
        }

        $this->em->remove($vendorGroup);
        $this->em->flush();

        foreach($ids as $id)
        {
            $cartLine = $this->findEntity(CartLineRepository::class, ['id' => $id]);
            $this->assertNull($cartLine);
        }
    }

    public function testOnCartRemoveCascadeRemoveCartLines()
    {
        /** @var Cart */
        $cart = $this->findEntity(CartRepository::class);

        $cartLines = $cart->getCartVendorGroups()->get(0)->getCartLines();
        $ids = [];
        foreach($cartLines as $cartLine)
        {
            $ids[] = $cartLine->getId();
        }

        $this->em->remove($cart);
        $this->em->flush();

        foreach($ids as $id)
        {
            $cartLine = $this->findEntity(CartLineRepository::class, ['id' => $id]);
            $this->assertNull($cartLine);
        }
    }
}