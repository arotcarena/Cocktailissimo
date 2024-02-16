<?php
namespace App\Tests\EndToEnd\Checkout;

use stdClass;
use Stripe\Stripe;
use App\Entity\Purchase;
use Stripe\PaymentIntent;
use App\Config\SecurityConfig;
use App\Config\SiteConfig;
use Doctrine\ORM\EntityManagerInterface;

trait CheckoutTrait 
{
    private function createAndPersistEmptyPurchase(): Purchase
    {
        $em = static::getContainer()->get(EntityManagerInterface::class);
        $purchase = new Purchase;
        $em->persist($purchase);
        $em->flush();
        return $purchase;
    }

    private function createPaymentIntent(int $amount, int $purchaseId): PaymentIntent
    {
        Stripe::setApiKey(SecurityConfig::STRIPE_SECRET_KEY);
        return PaymentIntent::create([
            'amount' => $amount,  
            'currency' => 'eur',
            'metadata' => [
                'purchaseId' => $purchaseId 
            ],
            'automatic_payment_methods' => [
                'enabled' => true,
            ],
        ]);
    }

    private function createValidCheckoutData(): stdClass
    {
        return (object)[
            'civilState' => (object)[
                'civility' => SiteConfig::CIVILITY_M,
                'firstName' => 'civility_firstName',
                'lastName' => 'civility_lastName',
            ],
            'deliveryAddress' => (object)[
                'civility' => SiteConfig::CIVILITY_M,
                'firstName' => 'delivery_firstName',
                'lastName' => 'delivery_lastName',
                'lineOne' => 'delivery_lineOne',
                'lineTwo' => 'delivery_lineTwo',
                'postcode' => '75000',
                'city' => 'delivery_city',
                'country' => 'delivery_country',
                'countryTranslatable' => (object) [
                    'en' => 'delivery_country_en',
                    'fr' => 'delivery_country_fr',
                    'es' => 'delivery_country_es',
                    'it' => 'delivery_country_it',
                ]
            ],
            'invoiceAddress' => (object)[
                'lineOne' => 'invoice_lineOne',
                'lineTwo' => 'invoice_lineTwo',
                'postcode' => '75000',
                'city' => 'invoice_city',
                'country' => 'invoice_country',
                'countryTranslatable' => (object) [
                    'en' => 'invoice_country_en',
                    'fr' => 'invoice_country_fr',
                    'es' => 'invoice_country_es',
                    'it' => 'invoice_country_it',
                ]
            ],
        ];
    }
}