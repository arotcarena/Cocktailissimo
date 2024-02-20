<?php
namespace App\Tests\Utils\Factory;

use App\Config\SiteConfig;
use App\Entity\CustomPrice;
use stdClass;


class CheckoutDataFactory
{
    public static function createCheckoutData(stdClass $checkoutCartData = null): stdClass
    {
        if(!$checkoutCartData)
        {
            $checkoutCartData = self::createCheckoutCartData();
        }

        return (object)[
            'civilState' => (object)[
                'email' => 'valid@gmail.com',
                'civility' => SiteConfig::CIVILITY_M,
                'firstName' => 'civility_firstName',
                'lastName' => 'civility_lastName',
            ],
            'company' => 'Enterprise',
            'vatNumber' => '123456',
            'phone' => '0601020304',
            'deliveryAddress' => (object)[
                'civility' => SiteConfig::CIVILITY_M,
                'firstName' => 'delivery_firstName',
                'lastName' => 'delivery_lastName',
                'lineOne' => 'delivery_lineOne',
                'lineTwo' => 'delivery_lineTwo',
                'postcode' => '75000',
                'city' => 'delivery_city',
                'country' => 'FR'
            ],
            'invoiceAddress' => (object)[
                'lineOne' => 'invoice_lineOne',
                'lineTwo' => 'invoice_lineTwo',
                'postcode' => '01000',
                'city' => 'invoice_city',
                'country' => 'US'
            ],
            'vendorGroups' => $checkoutCartData->vendorGroups,
            'articlesPrice' => $checkoutCartData->articlesPrice,
            'shippingCost' => $checkoutCartData->shippingCost,
            'totalPrice' => $checkoutCartData->totalPrice,
            'countArticles' => $checkoutCartData->countArticles
        ];
    }

    public static function createCheckoutCartData(): stdClass
    {
        return (object)[
            'vendorGroups' => [
                (object)[
                    'vendor' => (object)[
                        'id' => 1,
                    ],
                    'cartLines' => [
                        (object)[
                            'packaging' => (object)[
                                'id' => 1,
                                'publicRef' => 'publicRef',
                                'privateRef' => 'privateRef',
                                'label' => (object)[
                                    'en' => 'packagingLabel en',
                                    'fr' => 'packagingLabel fr',
                                    'es' => 'packagingLabel es',
                                    'it' => 'packagingLabel it'
                                ],
                                'product' => (object)[
                                    'designation' => (object)[
                                        'en' => 'designation en',
                                        'fr' => 'designation fr',
                                        'es' => 'designation es',
                                        'it' => 'designation it'
                                    ],
                                    'hsCode' => 'hsCode',
                                    'originCountry' => 'FR'
                                ],
                                'stock' => 10
                            ],
                            'quantity' => 1,
                            'unitPrice' => (object)[
                                'priceHT' => 100,
                                'priceTTC' => 120,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 20,
                                'priceToPay' => 120
                            ],
                            'totalPrice' => (object)[
                                'priceHT' => 100,
                                'priceTTC' => 120,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 20,
                                'priceToPay' => 120
                            ],
                            'unitWeight' => 50,
                            'totalWeight' => 50
                        ], (object)[
                            'packaging' => (object)[
                                'id' => 2,
                                'publicRef' => 'publicRef2',
                                'privateRef' => 'privateRef2',
                                'privateRef' => 'privateRef',
                                'label' => (object)[
                                    'en' => 'packagingLabel2 en',
                                    'fr' => 'packagingLabel2 fr',
                                    'es' => 'packagingLabel2 es',
                                    'it' => 'packagingLabel2 it'
                                ],
                                'product' => (object)[
                                    'designation' => (object)[
                                        'en' => 'designation2 en',
                                        'fr' => 'designation2 fr',
                                        'es' => 'designation2 es',
                                        'it' => 'designation2 it'
                                    ],
                                    'hsCode' => 'hsCode2',
                                    'originCountry' => 'IT'
                                ],
                                'weight' => 50,
                                'stock' => 10
                            ],
                            'quantity' => 1,
                            'unitPrice' => (object)[
                                'priceHT' => 100,
                                'priceTTC' => 120,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 20,
                                'priceToPay' => 120
                            ],
                            'totalPrice' => (object)[
                                'priceHT' => 100,
                                'priceTTC' => 120,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 20,
                                'priceToPay' => 120
                            ],
                            'unitWeight' => 50,
                            'totalWeight' => 50
                        ]
                        ],
                    'weight' => 100,
                    'position' => '1/1',
                    'index' => 0,
                    'shippingMethod' => (object)[
                        'id' => 123456,
                        'type' => SiteConfig::SHIPPING_TYPE_HOME,
                        'price' => (object)[
                            'payType' => CustomPrice::PAY_PRICE_TTC,
                            'vatRate' => 200,
                            'vatAmount' => 2,
                            'priceHT' => 10,
                            'priceTTC' => 12
                        ],
                        'carrier' => 'colissimo',
                        'name' => 'COLISSIMO HOME',
                        'leadTimeHours' => 48,
                        'relay' => null
                    ]
                ],
                (object)[
                    'vendor' => (object)[
                        'id' => 2
                    ],
                    'cartLines' => [
                        (object)[
                            'packaging' => (object)[
                                'id' => 3,
                                'publicRef' => 'publicRef3',
                                'privateRef' => 'privateRef3',
                                'privateRef' => 'privateRef',
                                'label' => (object)[
                                    'en' => 'packagingLabel en',
                                    'fr' => 'packagingLabel fr',
                                    'es' => 'packagingLabel es',
                                    'it' => 'packagingLabel it'
                                ],
                                'product' => (object)[
                                    'designation' => (object)[
                                        'en' => 'designation en',
                                        'fr' => 'designation fr',
                                        'es' => 'designation es',
                                        'it' => 'designation it'
                                    ],
                                    'hsCode' => 'hsCode3',
                                    'originCountry' => 'UK'
                                ],
                                'stock' => 5
                            ],
                            'quantity' => 2,
                            'unitPrice' => (object)[
                                'priceHT' => 100,
                                'priceTTC' => 120,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 20,
                                'priceToPay' => 120
                            ],
                            'totalPrice' => (object)[
                                'priceHT' => 200,
                                'priceTTC' => 240,
                                'payType' => CustomPrice::PAY_PRICE_TTC,
                                'showType' => CustomPrice::SHOW_PRICE_TTC,
                                'vatRate' => 200,
                                'vatAmount' => 40,
                                'priceToPay' => 240
                            ],
                            'unitWeight' => 50,
                            'totalWeight' => 100
                        ]
                    ],
                    'weight' => 100,
                    'position' => '1/1',
                    'index' => 0,
                    'shippingMethod' => (object)[
                        'id' => 789456,
                        'type' => SiteConfig::SHIPPING_TYPE_RELAY,
                        'price' => (object)[
                            'payType' => CustomPrice::PAY_PRICE_TTC,
                            'vatRate' => 200,
                            'vatAmount' => 4,
                            'priceHT' => 20,
                            'priceTTC' => 24
                        ],
                        'carrier' => 'chronopost',
                        'name' => 'chronopost',
                        'leadTimeHours' => 48,
                        'relay' => (object)[
                            'id' => 121212,
                            'code' => 'ABC123',
                            'name' => 'RELAY NAME',
                            'email' => 'relay@mail.com',
                            'phone' => '0601020304',
                            'shopType' => 'F',
                            'address' => (object)[
                                'lineOne' => 'relay address line one',
                                'postcode' => 'relay postcode',
                                'city' => 'relay city',
                                'country' => 'relay country'
                            ],
                            'latitude' => '54.123456',
                            'longitude' => '-1.163456',
                            'distance' => '120',
                            'formattedOpeningTimes' => (object)['1' => ['linepart1', 'linepart2']],
                            'homepage' => ''
                        ]
                    ]
                ],
            ],
            'countArticles' => 3,
            'articlesPrice' => (object)[
                'priceHT' => 400,
                'priceTTC' => 480,
                'payType' => CustomPrice::PAY_PRICE_TTC,
                'showType' => CustomPrice::SHOW_PRICE_TTC,
                'vatRate' => 200,
                'vatAmount' => 80,
                'priceToPay' => 480
            ],
            'shippingCost' => (object)[
                'priceHT' => 30,
                'priceTTC' => 35,
                'payType' => CustomPrice::PAY_PRICE_TTC,
                'showType' => CustomPrice::SHOW_PRICE_TTC,
                'vatRate' => 200,
                'vatAmount' => 5,
                'priceToPay' => 35
            ],
            'totalPrice' => (object)[
                'priceHT' => 430,
                'priceTTC' => 515,
                'payType' => CustomPrice::PAY_PRICE_TTC,
                'showType' => CustomPrice::SHOW_PRICE_TTC,
                'vatRate' => 200,
                'vatAmount' => 85,
                'priceToPay' => 515
            ]
        ];
    }
}