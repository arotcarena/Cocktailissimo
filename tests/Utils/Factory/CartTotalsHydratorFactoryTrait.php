<?php
namespace App\Tests\Utils\Factory;

use App\Cart\Utils\CartTotalsHydrator;
use App\Price\CountryLocation;
use App\Price\PriceOperator;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\SecurityBundle\Security;

trait CartTotalsHydratorFactoryTrait
{
    public function createCartTotalsHydrator(int $vatRate, string $geolocCountry): CartTotalsHydrator
    {
        /** @var VatResolver|MockObject */
        $vatResolver = $this->createMock(VatResolver::class);
        $vatResolver->expects($this->any())
                    ->method('getRate')
                    ->willReturn($vatRate)
                    ;
        
        /** @var CountryLocation|MockObject */
        $countryLocation = $this->createMock(CountryLocation::class);
        $countryLocation->expects($this->any())
                        ->method('getCountry')
                        ->willReturn($geolocCountry)
                        ;

        /** @var Security */
        $security = static::getContainer()->get(Security::class);

        $priceResolver = new PriceResolver($vatResolver, $security, $countryLocation);

        return new CartTotalsHydrator($priceResolver, new PriceOperator);
    }
}