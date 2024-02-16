<?php

namespace App\DataFixtures\Tests;

use Faker\Factory;
use App\Entity\User;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Purchase;
use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\PostalDetail;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\VendorDetail;
use App\Entity\VendorGroup;
use App\Repository\PackagingRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserPurchaseTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public function __construct(
        private UserPasswordHasherInterface $hasher,
        private PackagingRepository $packagingRepository
    )
    {
        $this->faker = Factory::create();
    }
    public function load(ObjectManager $manager)
    {
        $packagings = $this->packagingRepository->findAll();

        //User having purchases in progress
        $user = new User;
        $user
                ->setEmail('user_having_one_purchase_paid@gmail.com')
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setCivility(SiteConfig::CIVILITY_F)
                ->setFirstName('marie')
                ->setLastName('france')
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCreatedAt(new DateTimeImmutable())
                ;

        $manager->persist($user);

        $postalDetail = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_M)
                            ->setFirstName($this->faker->firstName())
                            ->setLastName($this->faker->lastName())
                            ->setLineOne($this->faker->streetName())
                            ->setCity($this->faker->city())
                            ->setPostcode($this->faker->postcode())
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                        ;
        $packaging = $this->faker->randomElement($packagings);

        $purchase = (new Purchase)
                        ->setUser($user)
                        ->setCustomerDetail(
                            (new CustomerDetail)
                            ->setEmail($user->getEmail())
                            ->setCivility($user->getCivility())
                            ->setFirstName($user->getFirstName())
                            ->setLastName($user->getLastName())
                        )
                        ->setDeliveryDetail($postalDetail)
                        ->setInvoiceDetail($postalDetail)
                        ->setStatus(SiteConfig::STATUS_PAID)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setShippingCost(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(5)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(105)
                        )
                        ->addPurchaseVendorGroup(
                            (new PurchaseVendorGroup)
                            ->setWeight(500)
                            ->setVendor($packaging->getProduct()->getVendor())
                            ->setVendorDetail(
                                (new VendorDetail)
                                ->setSocialName($packaging->getProduct()->getVendor()->getCompany()->getSocialName())
                                ->setSocialAddress(
                                    (new LightAddress)
                                    ->setLineOne('rue')
                                    ->setPostcode(15000)
                                    ->setCity('Tartas')
                                    ->setCountry('FR')
                                )
                                ->setStripeConnectId($packaging->getProduct()->getVendor()->getStripeConnectId())
                                ->setSendcloudId($packaging->getProduct()->getVendor()->getSendcloudId())
                                ->setSenderAddress(
                                    (new LightAddress)
                                    ->setLineOne($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                    ->setLineTwo($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                    ->setPostcode($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                    ->setCity($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                    ->setCountry($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                    ->setState($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                                )
                                ->setIdentificationNumber('123456789')
                            )
                            ->addPurchaseLine(
                                (new PurchaseLine)
                                ->setQuantity(2)
                                ->setPublicRef($packaging->getPublicRef())
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
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(100)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(200)
                                )
                                ->setHsCode($packaging->getProduct()->getHsCode())
                                ->setOriginCountry($packaging->getProduct()->getOriginCountry())
                                ->setUnitWeight($packaging->getWeight())
                                ->setTotalWeight($packaging->getWeight() * 2)  
                            )   
                            ->setShippingInfo(
                                (new ShippingInfo)
                                ->setShippingMethodId(121212)
                                ->setCarrier('colissimo')
                                ->setName('Colissimo Home 1-2kg')
                                ->setPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(50)
                                )
                                ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                                ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                            )
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(200)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(250)
                            )
                        )
                    ;
        $manager->persist($purchase);


        //user with only terminated purchases
        $user = new User;
        $user
                ->setEmail('user_having_two_terminated_purchases@gmail.com')
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setCivility(SiteConfig::CIVILITY_F)
                ->setFirstName('marius')
                ->setLastName('francis')
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCreatedAt(new DateTimeImmutable())
                ;

        $manager->persist($user);

        $postalDetail = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_M)
                            ->setFirstName($this->faker->firstName())
                            ->setLastName($this->faker->lastName())
                            ->setLineOne($this->faker->streetName())
                            ->setCity($this->faker->city())
                            ->setPostcode($this->faker->postcode())
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                        ;
        $packaging = $this->faker->randomElement($packagings);
        $packaging2 = $this->faker->randomElement($packagings);

        $purchase = (new Purchase)
                        ->setUser($user)
                        ->setCustomerDetail(
                            (new CustomerDetail)
                            ->setEmail($user->getEmail())
                            ->setCivility($user->getCivility())
                            ->setFirstName($user->getFirstName())
                            ->setLastName($user->getLastName())
                        )
                        ->setDeliveryDetail($postalDetail)
                        ->setInvoiceDetail($postalDetail)
                        ->setStatus(SiteConfig::STATUS_TERMINATED)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setShippingCost(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(5)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(105)
                        )
                        ->addPurchaseVendorGroup(
                            (new PurchaseVendorGroup)
                            ->setWeight(500)
                            ->setVendor($packaging->getProduct()->getVendor())
                            ->setVendorDetail(
                                (new VendorDetail)
                                ->setSocialName($packaging->getProduct()->getVendor()->getCompany()->getSocialName())
                                ->setSocialAddress(
                                    (new LightAddress)
                                    ->setLineOne('rue')
                                    ->setPostcode(15000)
                                    ->setCity('Tartas')
                                    ->setCountry('FR')
                                )
                                ->setStripeConnectId($packaging->getProduct()->getVendor()->getStripeConnectId())
                                ->setSendcloudId($packaging->getProduct()->getVendor()->getSendcloudId())
                                ->setSenderAddress(
                                    (new LightAddress)
                                    ->setLineOne($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                    ->setLineTwo($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                    ->setPostcode($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                    ->setCity($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                    ->setCountry($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                    ->setState($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                                )
                                ->setIdentificationNumber('123456789')
                            )
                            ->addPurchaseLine(
                                (new PurchaseLine)
                                ->setQuantity(2)
                                ->setPublicRef($packaging->getPublicRef())
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
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(100)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(200)
                                )  
                                ->setHsCode($packaging->getProduct()->getHsCode())
                                ->setOriginCountry($packaging->getProduct()->getOriginCountry())
                                ->setUnitWeight($packaging->getWeight())
                                ->setTotalWeight($packaging->getWeight() * 2)  
                            )   
                            ->setShippingInfo(
                                (new ShippingInfo)
                                ->setShippingMethodId(121212)
                                ->setCarrier('colissimo')
                                ->setName('Colissimo Home 1-2kg')
                                ->setPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(50)
                                )
                                ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                                ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                            )
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(200)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(250)
                            )
                        )
                    ;
        $manager->persist($purchase);

        $postalDetail = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_M)
                            ->setFirstName($this->faker->firstName())
                            ->setLastName($this->faker->lastName())
                            ->setLineOne($this->faker->streetName())
                            ->setCity($this->faker->city())
                            ->setPostcode($this->faker->postcode())
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                        ;

        $purchase = (new Purchase)
                        ->setUser($user)
                        ->setCustomerDetail(
                            (new CustomerDetail)
                            ->setEmail($user->getEmail())
                            ->setCivility($user->getCivility())
                            ->setFirstName($user->getFirstName())
                            ->setLastName($user->getLastName())
                        )
                        ->setDeliveryDetail($postalDetail)
                        ->setInvoiceDetail($postalDetail)
                        ->setStatus(SiteConfig::STATUS_TERMINATED)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setShippingCost(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(5)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(105)
                        )
                        ->addPurchaseVendorGroup(
                            (new PurchaseVendorGroup)
                            ->setWeight(500)
                            ->setVendor($packaging2->getProduct()->getVendor())
                            ->setVendorDetail(
                                (new VendorDetail)
                                ->setSocialName($packaging2->getProduct()->getVendor()->getCompany()->getSocialName())
                                ->setSocialAddress(
                                    (new LightAddress)
                                    ->setLineOne('rue')
                                    ->setPostcode(15000)
                                    ->setCity('Tartas')
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
                                ->setIdentificationNumber('123456789')
                            )
                            ->addPurchaseLine(
                                (new PurchaseLine)
                                ->setQuantity(2)
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
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(100)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(200)
                                )   
                                ->setHsCode($packaging2->getProduct()->getHsCode())
                                ->setOriginCountry($packaging2->getProduct()->getOriginCountry())
                                ->setUnitWeight($packaging2->getWeight())
                                ->setTotalWeight($packaging2->getWeight() * 2)  
                            )   
                            ->setShippingInfo(
                                (new ShippingInfo)
                                ->setShippingMethodId(121212)
                                ->setCarrier('colissimo')
                                ->setName('Colissimo Home 1-2kg')
                                ->setPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(50)
                                )
                                ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                                ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                            )
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(200)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(250)
                            )
                        )
                    ;
        $manager->persist($purchase);


        //User having purchase pending
        $user = new User;
        $user
                ->setEmail('user_having_one_purchase_pending@gmail.com')
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setCivility(SiteConfig::CIVILITY_F)
                ->setFirstName('marie')
                ->setLastName('france')
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCreatedAt(new DateTimeImmutable())
                ;

        $manager->persist($user);

        $postalDetail = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_M)
                            ->setFirstName($this->faker->firstName())
                            ->setLastName($this->faker->lastName())
                            ->setLineOne($this->faker->streetName())
                            ->setCity($this->faker->city())
                            ->setPostcode($this->faker->postcode())
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                        ;
        $packaging = $this->faker->randomElement($packagings);

        $purchase = (new Purchase)
                        ->setUser($user)
                        ->setCustomerDetail(
                            (new CustomerDetail)
                            ->setEmail($user->getEmail())
                            ->setCivility($user->getCivility())
                            ->setFirstName($user->getFirstName())
                            ->setLastName($user->getLastName())
                        )
                        ->setDeliveryDetail($postalDetail)
                        ->setInvoiceDetail($postalDetail)
                        ->setStatus(SiteConfig::STATUS_PENDING)
                        ->setCreatedAt(new DateTimeImmutable())
                        ->setArticlesPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setShippingCost(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(5)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(105)
                        )
                        ->addPurchaseVendorGroup(
                            (new PurchaseVendorGroup)
                            ->setWeight(500)
                            ->setVendor($packaging->getProduct()->getVendor())
                            ->setVendorDetail(
                                (new VendorDetail)
                                ->setSocialName($packaging->getProduct()->getVendor()->getCompany()->getSocialName())
                                ->setSocialAddress(
                                    (new LightAddress)
                                    ->setLineOne('rue')
                                    ->setPostcode(15000)
                                    ->setCity('Tartas')
                                    ->setCountry('FR')
                                )
                                ->setStripeConnectId($packaging->getProduct()->getVendor()->getStripeConnectId())
                                ->setSendcloudId($packaging->getProduct()->getVendor()->getSendcloudId())
                                ->setSenderAddress(
                                    (new LightAddress)
                                    ->setLineOne($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                    ->setLineTwo($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                    ->setPostcode($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                    ->setCity($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                    ->setCountry($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                    ->setState($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                                )
                                ->setIdentificationNumber('123456789')
                            )
                            ->addPurchaseLine(
                                (new PurchaseLine)
                                ->setQuantity(2)
                                ->setPublicRef($packaging->getPublicRef())
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
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(100)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(200)
                                )  
                                ->setHsCode($packaging->getProduct()->getHsCode())
                                ->setOriginCountry($packaging->getProduct()->getOriginCountry())
                                ->setUnitWeight($packaging->getWeight())
                                ->setTotalWeight($packaging->getWeight() * 2)  
                            )   
                            ->setShippingInfo(
                                (new ShippingInfo)
                                ->setShippingMethodId(121212)
                                ->setCarrier('colissimo')
                                ->setName('Colissimo Home 1-2kg')
                                ->setPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(50)
                                )
                                ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                                ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                            )
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(200)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(250)
                            )
                        )
                    ;
        $manager->persist($purchase);


        //pour database query count test
        $user = new User;
        $user
                ->setEmail('user_having_4_terminated_or_paid_purchases@gmail.com')
                ->setPassword(
                    $this->hasher->hashPassword($user, 'password')
                )
                ->setCivility(SiteConfig::CIVILITY_F)
                ->setFirstName('francis')
                ->setLastName('cabrel')
                ->setRoles([SiteConfig::ROLE_USER])
                ->setCreatedAt(new DateTimeImmutable())
                ;

        $manager->persist($user);


        for ($i=0; $i < 4; $i++) { 
            
            $postalDetail = (new PostalDetail)
                                ->setCivility(SiteConfig::CIVILITY_M)
                                ->setFirstName($this->faker->firstName())
                                ->setLastName($this->faker->lastName())
                                ->setLineOne($this->faker->streetName())
                                ->setCity($this->faker->city())
                                ->setPostcode($this->faker->postcode())
                                ->setCountry($this->faker->countryCode())
                                ->setCreatedAt(new DateTimeImmutable())
                            ;
            $packaging = $this->faker->randomElement($packagings);
            $packaging2 = $this->faker->randomElement($packagings);

            $purchase = (new Purchase)
                            ->setUser($user)
                            ->setCustomerDetail(
                                (new CustomerDetail)
                                ->setEmail($user->getEmail())
                                ->setCivility($user->getCivility())
                                ->setFirstName($user->getFirstName())
                                ->setLastName($user->getLastName())
                            )
                            ->setDeliveryDetail($postalDetail)
                            ->setInvoiceDetail($postalDetail)
                            ->setStatus($this->faker->randomElement([SiteConfig::STATUS_TERMINATED, SiteConfig::STATUS_PAID]))
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(100)
                            )
                            ->setShippingCost(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(5)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(105)
                            )
                            ->addPurchaseVendorGroup(
                                (new PurchaseVendorGroup)
                                ->setWeight(500)
                                ->setVendor($packaging->getProduct()->getVendor())
                                ->setVendorDetail(
                                    (new VendorDetail)
                                    ->setSocialName($packaging->getProduct()->getVendor()->getCompany()->getSocialName())
                                    ->setSocialAddress(
                                        (new LightAddress)
                                        ->setLineOne('rue')
                                        ->setPostcode(15000)
                                        ->setCity('Tartas')
                                        ->setCountry('FR')
                                    )
                                    ->setStripeConnectId($packaging->getProduct()->getVendor()->getStripeConnectId())
                                    ->setSendcloudId($packaging->getProduct()->getVendor()->getSendcloudId())
                                    ->setSenderAddress(
                                        (new LightAddress)
                                        ->setLineOne($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                                        ->setLineTwo($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                                        ->setPostcode($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                                        ->setCity($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                                        ->setCountry($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                                        ->setState($packaging->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                                    )
                                    ->setIdentificationNumber('123456789')
                                )
                                ->addPurchaseLine(
                                    (new PurchaseLine)
                                    ->setQuantity(2)
                                    ->setPublicRef($packaging->getPublicRef())
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
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(100)
                                    )
                                    ->setTotalPrice(
                                        (new CustomPrice)
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(200)
                                    )  
                                    ->setHsCode($packaging->getProduct()->getHsCode())
                                    ->setOriginCountry($packaging->getProduct()->getOriginCountry())
                                    ->setUnitWeight($packaging->getWeight())
                                    ->setTotalWeight($packaging->getWeight() * 2)  
                                )   
                                ->setShippingInfo(
                                    (new ShippingInfo)
                                    ->setShippingMethodId(121212)
                                    ->setCarrier('colissimo')
                                    ->setName('Colissimo Home 1-2kg')
                                    ->setPrice(
                                        (new CustomPrice)
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(50)
                                    )
                                    ->setLeadTimeHours($this->faker->randomElement([48, 24]))
                                    ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                                )
                                ->setArticlesPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(200)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(250)
                                )
                            )
                        ;
            $manager->persist($purchase);
        }



        $manager->flush();
        
    }


    public function getDependencies()
    {
        return [ProductTestFixtures::class];
    }
}
       