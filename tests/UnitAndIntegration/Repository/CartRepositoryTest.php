<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\DataFixtures\Tests\CartTestFixtures;
use App\Repository\CartRepository;
use App\Tests\Utils\FixturesTrait;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Repository
 */
class CartRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private CartRepository $cartRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([CartTestFixtures::class]);

        $this->cartRepository = static::getContainer()->get(CartRepository::class);
    }

    public function testfindOneByUserHydratedWithPackagings()
    {
        $cart = $this->findEntity(CartRepository::class);
        $user = $cart->getUser();

        $this->assertEquals(
            $cart->getId(),
            $this->cartRepository->findOneByUserHydratedWithPackagings($user)->getId()
        );
    }
}