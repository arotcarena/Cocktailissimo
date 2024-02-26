<?php
namespace App\DataFixtures\Tests;

use Faker\Factory;
use Faker\Generator;
use DateTimeImmutable;
use App\Entity\Purchase;
use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\Packaging;
use App\Entity\PostalDetail;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\VendorDetail;
use App\Repository\PackagingRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PurchaseTestFixtures extends Fixture implements DependentFixtureInterface
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
        $allPackagings = $this->packagingRepository->findAll();
        /** @var Packaging */
        $packagings = [];
        foreach($allPackagings as $packaging)
        {
            if($packaging->getStock() > 5 && $packaging->getPublicRef() !== 'packaging_with_price_one_million') // pour ne pas fausser les tests
            {
                $packagings[] = $packaging;
            }
        }
        

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

        //purchase with 4 purchaseLines
        /** @var Packaging */
        $packaging1 = $this->faker->randomElement($packagings);
        /** @var Packaging */
        $packaging2 = $this->faker->randomElement($packagings);
        /** @var Packaging */
        $packaging3 = $this->faker->randomElement($packagings);
        /** @var Packaging */
        $packaging4 = $this->faker->randomElement($packagings);

        $purchase = new Purchase;
        $purchase->setCustomerDetail(
                    (new CustomerDetail)
                    ->setEmail('purchase_with_4_purchaseLines@mail.com')
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
                    ->setPriceHT(800)
                )
                ->setShippingCost(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(100)
                )
                ->setTotalPrice(
                    (new CustomPrice)
                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                    ->setPriceHT(900)
                )
                ->setStatus(SiteConfig::STATUS_PAID)
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
                        ->setTotalWeight($packaging2->getWeight() * 2)  
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
                    ->setVendor($packaging3->getProduct()->getVendor())
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setSocialName($packaging3->getProduct()->getVendor()->getCompany()->getSocialName())
                        ->setSocialAddress(
                            (new LightAddress)
                            ->setLineOne('rue')
                            ->setPostcode(15000)
                            ->setCity('Tartas')
                            ->setCountry('FR')
                        )
                        ->setStripeConnectId($packaging3->getProduct()->getVendor()->getStripeConnectId())
                        ->setSendcloudId($packaging3->getProduct()->getVendor()->getSendcloudId())
                        ->setSenderAddress(
                            (new LightAddress)
                            ->setLineOne($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                            ->setLineTwo($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                            ->setPostcode($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                            ->setCity($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                            ->setCountry($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                            ->setState($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                        )
                        ->setIdentificationNumber('123456789')
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
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
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        ) 
                        ->setHsCode($packaging3->getProduct()->getHsCode())
                        ->setOriginCountry($packaging3->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging3->getWeight())
                        ->setTotalWeight($packaging3->getWeight() * 2)        
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
                    ->setVendor($packaging4->getProduct()->getVendor())
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setSocialName($packaging4->getProduct()->getVendor()->getCompany()->getSocialName())
                        ->setSocialAddress(
                            (new LightAddress)
                            ->setLineOne('rue')
                            ->setPostcode(15000)
                            ->setCity('Tartas')
                            ->setCountry('FR')
                        )
                        ->setStripeConnectId($packaging4->getProduct()->getVendor()->getStripeConnectId())
                        ->setSendcloudId($packaging4->getProduct()->getVendor()->getSendcloudId())
                        ->setSenderAddress(
                            (new LightAddress)
                            ->setLineOne($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                            ->setLineTwo($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                            ->setPostcode($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                            ->setCity($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                            ->setCountry($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                            ->setState($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                        )
                        ->setIdentificationNumber('123456789')
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
                        ->setPublicRef($packaging4->getPublicRef())
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
                        ->setHsCode($packaging4->getProduct()->getHsCode())
                        ->setOriginCountry($packaging4->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging4->getWeight())
                        ->setTotalWeight($packaging4->getWeight() * 2)  
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
                ->setCreatedAt(new DateTimeImmutable($this->faker->date()))
                ;
        $manager->persist($purchase);




        //purchase with 2 purchaseLines in 2 vendorGroups
        $packaging1 = $this->faker->randomElement($packagings);
        $packaging2 = $this->faker->randomElement($packagings);
        //pour pas que les 2 packagings soient les même car ça fait échouer les tests
        if($packaging2->getId() === $packaging1->getId())
        {
            $packaging2 = $this->faker->randomElement($packagings);
        }
        if($packaging2->getId() === $packaging1->getId())
        {
            $packaging2 = $this->faker->randomElement($packagings);
        }
        if($packaging2->getId() === $packaging1->getId())
        {
            $packaging2 = $this->faker->randomElement($packagings);
        }

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
                    ->setEmail('purchase_with_2_purchaseLines@mail.com')
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
                ->setStatus(SiteConfig::STATUS_TERMINATED)
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
                ->setCreatedAt(new DateTimeImmutable($this->faker->date()))
                ;
        $manager->persist($purchase);



        //purchase with one packaging overstock
        $packaging2 = $this->faker->randomElement($packagings);

        $packaging = $this->faker->randomElement($packagings);
        $stock = $packaging->getStock();

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
                    ->setEmail('purchase_with_one_packaging_overstock@mail.com')
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
                        ->setQuantity($stock + 1)
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
                        ->setTotalWeight($packaging->getWeight() * ($stock + 1))    
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
                ->setCreatedAt(new DateTimeImmutable($this->faker->date()))
                ;
        $manager->persist($purchase);



        //purchase for purchaseRepositoryTest moreExpansiveProduct
        //purchase having 5 purchaselines including one with price one million
        $packaging = $this->packagingRepository->findOneBy(['publicRef' => 'packaging_with_price_one_million']);

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
                    ->setEmail('purchase_with_more_expansive_product_one_million@mail.com')
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
                        ->setQuantity(1)
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
                            ->setPriceHT($packaging->getConsumerPriceHT())
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT($packaging->getConsumerPriceHT())
                        )
                        ->setHsCode($packaging->getProduct()->getHsCode())
                        ->setOriginCountry($packaging->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging->getWeight())
                        ->setTotalWeight($packaging->getWeight())    
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
                        ->setPriceHT($packaging->getConsumerPriceHT())
                    )
                    ->setTotalPrice(
                        (new CustomPrice)
                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                        ->setPriceHT($packaging->getConsumerPriceHT() + 50)
                    )     
                )
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
                        ->setTotalWeight($packaging2->getWeight() * 2)  
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
                    ->setVendor($packaging3->getProduct()->getVendor())
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setSocialName($packaging3->getProduct()->getVendor()->getCompany()->getSocialName())
                        ->setSocialAddress(
                            (new LightAddress)
                            ->setLineOne('rue')
                            ->setPostcode(15000)
                            ->setCity('Tartas')
                            ->setCountry('FR')
                        )
                        ->setStripeConnectId($packaging3->getProduct()->getVendor()->getStripeConnectId())
                        ->setSendcloudId($packaging3->getProduct()->getVendor()->getSendcloudId())
                        ->setSenderAddress(
                            (new LightAddress)
                            ->setLineOne($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                            ->setLineTwo($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                            ->setPostcode($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                            ->setCity($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                            ->setCountry($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                            ->setState($packaging3->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                        )
                        ->setIdentificationNumber('123456789')
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
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
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(100)
                        )
                        ->setTotalPrice(
                            (new CustomPrice)
                            ->setPayType(CustomPrice::PAY_PRICE_HT)
                            ->setPriceHT(200)
                        )   
                        ->setHsCode($packaging3->getProduct()->getHsCode())
                        ->setOriginCountry($packaging3->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging3->getWeight())
                        ->setTotalWeight($packaging3->getWeight() * 2)        
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
                    ->setVendor($packaging4->getProduct()->getVendor())
                    ->setVendorDetail(
                        (new VendorDetail)
                        ->setSocialName($packaging4->getProduct()->getVendor()->getCompany()->getSocialName())
                        ->setSocialAddress(
                            (new LightAddress)
                            ->setLineOne('rue')
                            ->setPostcode(15000)
                            ->setCity('Tartas')
                            ->setCountry('FR')
                        )
                        ->setStripeConnectId($packaging4->getProduct()->getVendor()->getStripeConnectId())
                        ->setSendcloudId($packaging4->getProduct()->getVendor()->getSendcloudId())
                        ->setSenderAddress(
                            (new LightAddress)
                            ->setLineOne($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineOne())
                            ->setLineTwo($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getLineTwo())
                            ->setPostcode($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getPostcode())
                            ->setCity($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCity())
                            ->setCountry($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getCountry())
                            ->setState($packaging4->getProduct()->getVendor()->getCompany()->getSenderAddress()->getState())
                        )
                        ->setIdentificationNumber('123456789')
                    )
                    ->addPurchaseLine(
                        (new PurchaseLine)
                        ->setQuantity(2)
                        ->setPublicRef($packaging4->getPublicRef())
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
                        ->setHsCode($packaging4->getProduct()->getHsCode())
                        ->setOriginCountry($packaging4->getProduct()->getOriginCountry())
                        ->setUnitWeight($packaging4->getWeight())
                        ->setTotalWeight($packaging4->getWeight() * 2)  
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
                ->setCreatedAt(new DateTimeImmutable($this->faker->date()))
                ;
        $manager->persist($purchase);



        $manager->flush();
    }

    public function getDependencies()
    {
        return [ProductTestFixtures::class, ProductMoreExpansiveTestFixtures::class];
    }
}