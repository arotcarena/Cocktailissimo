<?php
namespace App\DataFixtures\Tests;

use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\PostalDetail;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\VendorDetail;
use App\Repository\PackagingRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;

class PurchasePendingTestFixtures extends Fixture implements DependentFixtureInterface
{
    private Generator $faker;

    public function __construct(
        private PackagingRepository $packagingRepository
    )
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager)
    {
        $packagings = $this->packagingRepository->createQueryBuilder('pack')
                                                ->where('pack.stock > 5')
                                                ->getQuery()
                                                ->getResult()
                                                ;

        //purchase pending with 2 purchaseLines in 2 vendorGroups
        $packaging1 = $this->faker->randomElement($packagings);
        $packaging2 = $this->faker->randomElement($packagings);

        $deliveryAddress = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_F)
                            ->setFirstName('firstName')
                            ->setLastName('lastName')
                            ->setLineOne('address line one')
                            ->setCity('city')
                            ->setPostcode('01000')
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                            ;

        $invoiceAddress = (new PostalDetail)
                            ->setCivility(SiteConfig::CIVILITY_F)
                            ->setFirstName('firstName invoice')
                            ->setLastName('lastName invoice')
                            ->setLineOne('address line one invoice')
                            ->setCity('city invoice')
                            ->setPostcode('02000')
                            ->setCountry($this->faker->countryCode())
                            ->setCreatedAt(new DateTimeImmutable())
                            ;

        $purchase = new Purchase;
        
        $purchase->setCustomerDetail(
                    (new CustomerDetail)
                    ->setEmail('purchase_pending_with_2_purchaseLines@mail.com')
                    ->setCivility(SiteConfig::CIVILITY_F)
                    ->setFirstName('firstName')
                    ->setLastName('lastName')
                    ->setPhone('0601020304')
                )
                ->setDeliveryDetail($deliveryAddress)
                ->setInvoiceDetail($invoiceAddress)
                ->setLang('en')
                ->setArticlesPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(400)
                )
                ->setShippingCost(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(100)
                )
                ->setTotalPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(500)
                )
                ->setStatus(SiteConfig::STATUS_PENDING)
                ->addPurchaseVendorGroup(
                    (new PurchaseVendorGroup)
                    ->setWeight(500)
                    ->setVendor($packaging1->getProduct()->getVendor())
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setSocialName($packaging1->getProduct()->getVendor()->getCompany()->getSocialName())
                        ->setSocialAddress(
                            (new LightAddress)
                            ->setLineOne('rue')
                            ->setPostcode(15000)
                            ->setCity('Tartas')
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
                        ->setIdentificationNumber('123456789')
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
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
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
                        ->setName('Colissimo Home')
                        ->setPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(50)
                        )
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
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )  
                        ->setHsCode($packaging2->getProduct()->getHsCode())
                        ->setOriginCountry($packaging2->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging2->getWeight())
                        ->setTotalWeight($packaging2->getWeight() * 1)     
                    )
                    ->setShippingInfo(
                        (new ShippingInfo)
                        ->setShippingMethodId(121212)
                        ->setCarrier('colissimo')
                        ->setName('Colissimo Home')
                        ->setPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(50)
                        )
                        ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                    )
                )
                ;
        $manager->persist($purchase);

        $manager->flush();
    }

    public function getDependencies()
    {
        return [ProductTestFixtures::class];
    }
}