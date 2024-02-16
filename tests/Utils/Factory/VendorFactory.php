<?php
namespace App\Tests\Utils\Factory;

use App\Entity\Company;
use App\Entity\LightAddress;
use App\Entity\User;


class VendorFactory
{
    public static function create(): User
    {
        return (new User)
                ->setSendcloudId(123456)
                ->setStripeConnectId('acct-test')
                ->setCompany(
                    (new Company)
                    ->setSocialName('Ets Jean')
                    ->setIdentificationNumber('123456789')
                    ->setSocialAddress(
                        (new LightAddress)
                        ->setLineOne('social_address line one')
                        ->setPostcode('02000')
                        ->setCity('social_address city')
                        ->setCountry('ES')
                    )
                    ->setSenderAddress(
                        (new LightAddress)
                        ->setLineOne('sender_address line one')
                        ->setPostcode('01000')
                        ->setCity('sender_address city')
                        ->setCountry('FR')
                    )
                );
    }
}

