<?php
namespace App\Tests\IntegrationOnly\Utils\Factory;

use App\Cart\CartService;
use App\Cart\Storage\CartStorage;
use App\Cart\Storage\CookieCart;
use App\Cart\Storage\DatabaseCart;
use App\Cart\Utils\CartFactory;
use App\Cart\Utils\CartMerger;
use App\Cart\Utils\CartStockUpdater;
use App\Cart\Utils\CartTotalsHydrator;
use App\Repository\PackagingRepository;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use App\TrafficAnalytics\VisitorAction\VisitorActionSaver;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Contracts\Translation\TranslatorInterface;

class CartServiceFactory extends KernelTestCase
{
    /**
     * Undocumented function
     *
     * @return array [CartService $cartService, CookieCart|MockObject $cookieCart]
     */
    public function createCartService(): array
    {
        $container = static::getContainer();
        $cookieCart = $this->createMock(CookieCart::class);

        $cartStorage = new CartStorage(
            $cookieCart,
            $container->get(DatabaseCart::class),
            $container->get(PackagingRepository::class),
            new CartFactory,
            $container->get(Security::class),
            $container->get(VisitorActionSaver::class)
        );

        $cartService = new CartService(
            $container->get(PackagingRepository::class),
            $container->get(EntityCountAdder::class),
            $container->get(TranslatorInterface::class),
            $cartStorage,
            new CartFactory,
            new CartMerger,
            new CartStockUpdater,
            $container->get(CartTotalsHydrator::class)
        );

        return [$cartService, $cookieCart];
    }
}