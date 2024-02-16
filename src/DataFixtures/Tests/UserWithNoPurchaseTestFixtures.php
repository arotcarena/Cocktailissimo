<?php
namespace App\DataFixtures\Tests;

use App\Entity\User;
use DateTimeImmutable;
use App\Entity\Product;
use App\Entity\Purchase;
use App\Config\SiteConfig;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\PostalDetail;
use App\Entity\PurchaseLine;
use App\Entity\TranslatableString;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\Entity\Packaging;
use App\Entity\PurchaseVendorGroup;
use App\Entity\ShippingInfo;
use App\Entity\VendorDetail;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserWithNoPurchaseTestFixtures extends Fixture implements DependentFixtureInterface
{
    public const PACKAGING_LABELS = [
        '50cl', '75cl', '1L', '100g', '250g', '500g', '1kg', '2,5kg'
    ];

    public function __construct(
        private UserPasswordHasherInterface $hasher,
        private CategoryRepository $categoryRepository,
        private UserRepository $userRepository
    )
    {

    }

    public function load(ObjectManager $manager)
    {
        $category = $this->categoryRepository->findOneBy([]);
        $subCategory = $category->getSubCategories()->get(0);
        $vendor = $this->userRepository->findOneBy(['email' => 'vendor_for_tests@mail.com']);

        $user = new User;
        $user
        ->setEmail('user_with_no_purchase@gmail.com')
        ->setFirstName('jean')
        ->setLastName('baptiste')
        ->setPassword(
            $this->hasher->hashPassword($user, 'password')
        )
        ->setRoles([SiteConfig::ROLE_USER])
        ->setConfirmed(true)
        ->setCreatedAt(new DateTimeImmutable())
        ;
        $manager->persist($user);



        //user with specific product bought
        $user = new User;
        $user
        ->setEmail('user_with_specific_purchase@gmail.com')
        ->setFirstName('jean')
        ->setLastName('baptiste')
        ->setPassword(
            $this->hasher->hashPassword($user, 'password')
        )
        ->setRoles([SiteConfig::ROLE_USER])
        ->setConfirmed(true)
        ->setCreatedAt(new DateTimeImmutable())
        ;
        $manager->persist($user);


        $product = (new Product)
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef('jfkldsjklfdjsfdlsj')
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn('5kg')
                            ->setFr('5kg')
                            ->setEs('5kg')
                            ->setIt('5kg')
                        )
                        ->setConsumerPriceHT(500)
                        ->setBusinessPriceHT(500)
                        ->setStock(2)
                        ->setEanCode('code-barre')
                        ->setWeight(1500)
                        ->setListPosition(1)
                    )
                    ->setVendor($vendor)
                    ->setDesignation(
                        (new TranslatableString)
                        ->setEn('product for specific purchase user en')
                        ->setFr('product for specific purchase user')
                        ->setEs('product for specific purchase user es')
                        ->setIt('product for specific purchase user it')
                    )
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('product-for-specific-purchase-user-en-slug')
                        ->setFr('product-for-specific-purchase-user')
                        ->setEs('product-for-specific-purchase-user-es-slug')
                        ->setIt('product-for-specific-purchase-user-it-slug')
                    )
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setHsCode('code-douanier')
                    ->setOriginCountry('ES')
                    ;
        $manager->persist($product);
        //juste pour le suggestedProduct qui est obligatoire pour les tests
        $product2 = (new Product)
                    ->addPackaging(
                        (new Packaging)
                        ->setPublicRef('testestestes')
                        ->setLabel(
                            (new TranslatableString)
                            ->setEn('5kg')
                            ->setFr('5kg')
                            ->setEs('5kg')
                            ->setIt('5kg')
                        )
                        ->setConsumerPriceHT(500)
                        ->setBusinessPriceHT(500)
                        ->setStock(2)
                        ->setEanCode('code-barre')
                        ->setWeight(1500)
                        ->setListPosition(1)
                    )
                    ->setVendor($vendor)
                    ->setDesignation(
                        (new TranslatableString)
                        ->setEn('test test test en')
                        ->setFr('test test test')
                        ->setEs('test test test es')
                        ->setIt('test test test it')
                    )
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('test-test-test-en')
                        ->setFr('test-test-tes-tes-tes')
                        ->setEs('test-test-test-es')
                        ->setIt('test-test-test-it')
                    )
                    ->setCategory($category)
                    ->setSubCategory($subCategory)
                    ->setCreatedAt(new DateTimeImmutable())
                    ->addSuggestedProduct($product)
                    ->setHsCode('code-douanier')
                    ->setOriginCountry('ES')
                    ;
        $manager->persist($product2);
        $product->addSuggestedProduct($product2);
        //

        
        $postalDetail = (new PostalDetail)
                        ->setCivility(SiteConfig::CIVILITY_M)
                        ->setFirstName('Ginette')
                        ->setLastName('Gertrude')
                        ->setLineOne('rue des noms pourris')
                        ->setCity('Trognon')
                        ->setPostcode('01520')
                        ->setCountry('IS')
                        ->setCreatedAt(new DateTimeImmutable())
                    ;

        $specificPurchase = (new Purchase)
                            ->setCreatedAt(new DateTimeImmutable())
                            ->setUser($user)
                            ->setLang('fr')
                            ->setCustomerDetail(
                                (new CustomerDetail)
                                ->setCivility(SiteConfig::CIVILITY_F)
                                ->setFirstName('Lili')
                                ->setLastName('Lapin')
                                ->setEmail('lililapin@gmail.com')
                                ->setPhone('0601023004')
                            )
                            ->addPurchaseVendorGroup(
                                (new PurchaseVendorGroup)
                                ->setVendor($user)
                                ->setVendorDetail(
                                    (new VendorDetail)
                                    ->setSocialName('vendor ets.')
                                    ->setAddress(
                                        (new LightAddress)
                                        ->setLineOne('rue de l\'invention de rue')
                                        ->setPostcode('19000')
                                        ->setCity('Les moulins')
                                        ->setCountry('FR')
                                    )
                                )
                                ->addPurchaseLine(
                                    (new PurchaseLine)
                                    ->setPublicRef($product->getPackagingChoices()->get(0)->getPublicRef())
                                    ->setDesignation(
                                        (new TranslatableString)
                                    )
                                    ->setPackagingLabel(
                                        (new TranslatableString)
                                    )
                                    ->setHsCode('0123456')
                                    ->setOriginCountry('FR')
                                    ->setQuantity(3)
                                    ->setUnitPrice((
                                        (new CustomPrice)
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(1000)
                                        ))
                                    ->setTotalPrice((
                                        (new CustomPrice)
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(3000)
                                    ))
                                    ->setUnitWeight(100)
                                    ->setTotalWeight(300)
                                )
                                ->setShippingInfo(
                                    (new ShippingInfo)
                                    ->setShippingMethodId(1)
                                    ->setType(SiteConfig::SHIPPING_TYPE_HOME)
                                    ->setName('colissimo home')
                                    ->setCarrier('colissimo')
                                    ->setPrice(
                                        (new CustomPrice)
                                        ->setPayType(CustomPrice::PAY_PRICE_HT)
                                        ->setPriceHT(450)
                                    )
                                )
                                ->setArticlesPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(3000)
                                )
                                ->setTotalPrice(
                                    (new CustomPrice)
                                    ->setPayType(CustomPrice::PAY_PRICE_HT)
                                    ->setPriceHT(3450)
                                )
                            )
                            ->setDeliveryDetail($postalDetail)
                            ->setInvoiceDetail($postalDetail)
                            ->setShippingCost(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(450)
                            )
                            ->setArticlesPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(3000)
                            )
                            ->setTotalPrice(
                                (new CustomPrice)
                                ->setPayType(CustomPrice::PAY_PRICE_HT)
                                ->setPriceHT(3450)
                            )
                            ;
        $manager->persist($specificPurchase);

        $manager->flush();

    }

    public function getDependencies()
    {
        return [CategoryTestFixtures::class, VendorTestFixtures::class];
    }
}