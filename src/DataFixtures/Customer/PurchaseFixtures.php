<?php
namespace App\DataFixtures\Customer;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Purchase;
use App\Config\SiteConfig;
use App\Entity\PostalDetail;
use App\Entity\PurchaseLine;
use App\Repository\UserRepository;
use App\DataFixtures\User\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Shop\ProductFixtures;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\Entity\LightAddress;
use App\Entity\PurchaseVendorGroup;
use App\Entity\RelayInfo;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\VendorDetail;
use App\Repository\PackagingRepository;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;


class PurchaseFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private Generator $faker;

    public function __construct(
        private UserRepository $userRepository,
        private PackagingRepository $packagingRepository,
    )
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $users = $this->userRepository->findAll();
        $packagings = $this->packagingRepository->findAll();

        for($i=0; $i < 20; $i++) 
        { 
            $packaging1 = $this->faker->randomElement($packagings);
            $packaging2 = $this->faker->randomElement($packagings);
            $packaging3 = $this->faker->randomElement($packagings);

            $civility = $this->faker->randomElement([SiteConfig::CIVILITY_F, SiteConfig::CIVILITY_M]);
            $firstName = $this->faker->firstName();
            $lastName = $this->faker->lastName();
            $postalDetail = (new PostalDetail)
                            ->setCivility($civility)
                            ->setFirstName($firstName)
                            ->setLastName($lastName)
                            ->setLineOne($this->faker->streetAddress())
                            ->setLineTwo('Résidence Les Coquelicots')
                            ->setCity($this->faker->city())
                            ->setPostcode($this->faker->postcode())
                            ->setCountry('US')
                            ->setState('NY')
                            ->setCreatedAt(new DateTimeImmutable())
                            ;

            $purchase = new Purchase;
            $purchase->setCustomerDetail(
                        (new CustomerDetail)
                        ->setEmail($this->faker->email())
                        ->setCivility($civility)
                        ->setFirstName($firstName)
                        ->setLastName($lastName)
                        ->setPhone($this->faker->phoneNumber())
                    )
                    ->setStatus(SiteConfig::STATUS_PAID) //pour qu'elles soient visibles du user
                    ->setDeliveryDetail($postalDetail)
                    ->setInvoiceDetail($postalDetail)
                    ->setLang('en')
                    ->setCreatedAt(new DateTimeImmutable($this->faker->dateTimeBetween()->format('Y:m:d H:i:s')))
                    ->setArticlesPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_TTC)
                        ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                        ->setVatAmount(80)
                        ->setPriceHT(400)
                        ->setPriceTTC(480)
                    )
                    ->setShippingCost(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_TTC)
                        ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                        ->setVatAmount(20)
                        ->setPriceHT(82)
                        ->setPriceTTC(100)
                    )
                    ->setTotalPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_TTC)
                        ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                        ->setVatAmount(100)
                        ->setPriceHT(482)
                        ->setPriceTTC(580)
                    )
                    ->setCountArticles(6)
                    ->addPurchaseVendorGroup(
                        (new PurchaseVendorGroup)
                        ->setWeight(500)
                        ->setVendor($packaging1->getProduct()->getVendor())
                        ->setVendorDetail(
                            (new VendorDetail)
                            ->setSocialName($packaging1->getProduct()->getVendor()->getCompany()->getSocialName())
                            ->setIdentificationNumber($packaging1->getProduct()->getVendor()->getCompany()->getIdentificationNumber())
                            ->setSocialAddress(
                                (new LightAddress)
                                ->setLineOne($this->faker->streetAddress())
                                ->setPostcode($this->faker->postcode())
                                ->setCity($this->faker->city())
                                ->setCountry('FR')
                            )
                            ->setStripeConnectId($packaging1->getProduct()->getVendor()->getStripeConnectId())
                            ->setSendcloudId($packaging1->getProduct()->getVendor()->getSendcloudId())
                            ->setSenderAddress(
                                (new LightAddress)
                                ->setLineOne($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                ->setLineTwo($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                ->setPostcode($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                ->setCity($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                ->setCountry($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                ->setState($packaging1->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                            )
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setQuantity(2)
                            ->setPublicRef($packaging1->getPublicRef())
                            ->setPackagingLabel(
                                (new TranslatableString)
                                ->setEn('label')
                                ->setFr('fr')
                                ->setEs('es')
                                ->setIt('it')
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn('designation')
                                ->setFr('designation')
                                ->setEs('designation')
                                ->setIt('designation')
                            )
                            ->setUnitPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatRate(200)
                                ->setVatAmount(20)
                                ->setPriceHT(100)
                                ->setPriceTTC(120)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatAmount(40)
                                ->setPriceHT(200)
                                ->setPriceTTC(240)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setHsCode($packaging1->getProduct()->getHsCode())
                            ->setOriginCountry($packaging1->getProduct()->getOriginCountry())
                            ->setUnitWeight($packaging1->getWeight())
                            ->setTotalWeight($packaging1->getWeight() * 2)       
                        )
                        ->setShippingInfo(
                            (new ShippingInfo)
                            ->setShippingMethodId(121212)
                            ->setCarrier('colissimo')
                            ->setName('Colissimo Home 1-2kg')
                            ->setPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatAmount(10)
                                ->setVatRate(200)
                                ->setPriceHT(50)
                                ->setPriceTTC(60)
                            )
                            ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                            ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                        )
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            ->setVatAmount(40)
                            ->setPriceHT(200)
                            ->setPriceTTC(240)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            ->setVatAmount(50)
                            ->setPriceHT(250)
                            ->setPriceTTC(300)
                        )
                        ->setCommissionPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setVatRate(200)
                            ->setVatAmount(20)
                            ->setPriceHT(100)
                            ->setPriceTTC(120)
                        )
                        ->setVendorRestAmount(180)
                    )
                    ->addPurchaseVendorGroup(
                        (new PurchaseVendorGroup)
                        ->setWeight(500)
                        ->setVendor($packaging2->getProduct()->getVendor())
                        ->setVendorDetail(
                            (new VendorDetail)
                            ->setSocialName($packaging2->getProduct()->getVendor()->getCompany()->getSocialName())
                            ->setIdentificationNumber($packaging2->getProduct()->getVendor()->getCompany()->getIdentificationNumber())
                            ->setSocialAddress(
                                (new LightAddress)
                                ->setLineOne($this->faker->streetAddress())
                                ->setPostcode($this->faker->postcode())
                                ->setCity($this->faker->city())
                                ->setCountry('FR')
                            )
                            ->setStripeConnectId($packaging2->getProduct()->getVendor()->getStripeConnectId())
                            ->setSendcloudId($packaging2->getProduct()->getVendor()->getSendcloudId())
                            ->setSenderAddress(
                                (new LightAddress)
                                ->setLineOne($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                ->setLineTwo($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                ->setPostcode($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                ->setCity($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                ->setCountry($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                ->setState($packaging2->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                            )
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setQuantity(1)
                            ->setPublicRef($packaging2->getPublicRef())
                            ->setPackagingLabel(
                                (new TranslatableString)
                                ->setEn('label')
                                ->setFr('fr')
                                ->setEs('es')
                                ->setIt('it')
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn('designation')
                                ->setFr('designation')
                                ->setEs('designation')
                                ->setIt('designation')
                            )
                            ->setUnitPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatRate(200)
                                ->setVatAmount(40)
                                ->setPriceHT(200)
                                ->setPriceTTC(240)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatAmount(40)
                                ->setPriceHT(200)
                                ->setPriceTTC(240)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setHsCode($packaging2->getProduct()->getHsCode())
                            ->setOriginCountry($packaging2->getProduct()->getOriginCountry())
                            ->setUnitWeight($packaging2->getWeight())
                            ->setTotalWeight($packaging2->getWeight() * 1)     
                        )
                        ->addPurchaseLine(
                            (new PurchaseLine)
                            ->setQuantity(3)
                            ->setPublicRef($packaging3->getPublicRef())
                            ->setPackagingLabel(
                                (new TranslatableString)
                                ->setEn('label')
                                ->setFr('fr')
                                ->setEs('es')
                                ->setIt('it')
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn('designation')
                                ->setFr('designation')
                                ->setEs('designation')
                                ->setIt('designation')
                            )
                            ->setUnitPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatRate(200)
                                ->setVatAmount(40)
                                ->setPriceHT(200)
                                ->setPriceTTC(240)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatAmount(40)
                                ->setPriceHT(200)
                                ->setPriceTTC(240)
                                ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                            )
                            ->setHsCode($packaging3->getProduct()->getHsCode())
                            ->setOriginCountry($packaging3->getProduct()->getOriginCountry())
                            ->setUnitWeight($packaging3->getWeight())
                            ->setTotalWeight($packaging3->getWeight() * 1)     
                        )
                        ->setShippingInfo(
                            (new ShippingInfo)
                            ->setShippingMethodId(1111111)
                            ->setCarrier('mondial_relay')
                            ->setName('Mondial Relay service point 1-2kg')
                            ->setPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_TTC)
                                ->setVatRate(200)
                                ->setVatAmount(10)
                                ->setPriceHT(50)
                                ->setPriceTTC(60)
                            )
                            ->setType(SiteConfig::SHIPPING_TYPE_RELAY)
                            ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                            ->setRelayInfo(
                                (new RelayInfo)
                                ->setRelayId(123456)
                                ->setCode('abc1234')
                                ->setName('Station Total')
                                ->setEmail($this->faker->email())
                                ->setPhone($this->faker->phoneNumber())
                                ->setShopType('A2')
                                ->setLatitude('50.123456')
                                ->setLongitude('-1.123456')
                                ->setDistance(random_int(100, 3500))
                                ->setFormattedOpeningTimes([
                                    0 => ['08:00 - 12:00', '14:00 - 17:00'],
                                    1 => ['08:00 - 12:00', '14:00 - 17:00'],
                                    2 => ['08:00 - 12:00', '14:00 - 17:00'],
                                    3 => ['08:00 - 12:00', '14:00 - 17:00'],
                                    4 => ['08:00 - 12:00', '14:00 - 17:00'],
                                    5 => ['08:00 - 12:00'],
                                    6 => [''],
                                ])
                                ->setAddress(
                                    (new LightAddress)
                                    ->setLineOne($this->faker->streetAddress())
                                    ->setPostcode($this->faker->postcode())
                                    ->setCity($this->faker->city())
                                    ->setCountry('FR')
                                )
                            )
                        )
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setVatAmount(80)
                            ->setPriceHT(400)
                            ->setPriceTTC(480)
                            ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setVatAmount(90)
                            ->setPriceHT(450)
                            ->setPriceTTC(540)
                            ->setShowType(CustomPrice::SHOW_PRICES_HT_TTC)
                        )
                        ->setCommissionPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_TTC)
                            ->setVatRate(200)
                            ->setVatAmount(20)
                            ->setPriceHT(100)
                            ->setPriceTTC(120)
                        )
                        ->setVendorRestAmount(360)
                    )
                    ;
            $manager->persist($purchase);
        }

       
        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserFixtures::class, ProductFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['dev'];
    }
}