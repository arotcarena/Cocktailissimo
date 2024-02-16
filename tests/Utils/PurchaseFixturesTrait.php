<?php
namespace App\Tests\Utils;

use App\Entity\Purchase;
use App\Repository\PurchaseRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;

trait PurchaseFixturesTrait
{
    public function getPurchaseByCustomerEmail(string $email, ?KernelBrowser $client = null): ?Purchase
    {
        $container = $client ? $client->getContainer(): static::getContainer();
        /** @var PurchaseRepository */
        $purchaseRepository = $container->get(PurchaseRepository::class);

        return $purchaseRepository->createQueryBuilder('pur')
                                    ->join('pur.customerDetail', 'cd')
                                    ->where('cd.email = :email')
                                    ->setParameter('email', $email)
                                    ->getQuery()
                                    ->getOneOrNullResult()
                                    ;
    }
}