<?php
namespace App\Controller\Tests;

use App\Config\SiteConfig;
use App\Config\VatLevels;
use App\Email\Security\AllInOneInitEmail;
use App\Entity\CustomerDetail;
use App\Entity\CustomPrice;
use App\Entity\LightAddress;
use App\Entity\PostalDetail;
use App\Entity\Purchase;
use App\Entity\PurchaseLine;
use App\Entity\PurchaseVendorGroup;
use App\Entity\RelayInfo;
use App\Entity\ShippingInfo;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Entity\VendorDetail;
use App\Helper\PdfCreator;
use App\Invoice\InvoiceManagement\PurchaseInvoicesHandler;
use App\Repository\ArticleRepository;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Repository\PurchaseVendorGroupRepository;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
use Bezhanov\Faker\Provider\Commerce;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Faker\Factory;
use Faker\Generator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Dompdf\Dompdf;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;

class TestController extends AbstractController
{
    private Generator $faker;

    public const PACKAGING_LABELS = [
        '10cl', '1L', '1kg', '500g'
    ];

    public function __construct(
        private UserRepository $userRepository,
        private PackagingRepository $packagingRepository,
        private EntityManagerInterface $em,
        private PurchaseRepository $purchaseRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository
    )
    {
        $this->faker = Factory::create('fr_FR');
        $this->faker->addProvider(new Commerce($this->faker));
    }

    #[Route('/tests/purchases/setToAdmin')]
    public function purchasesSetToAdmin()
    {
        $purchases = $this->purchaseRepository->findAll();
        for ($i=0; $i < 3; $i++) { 
            $purchases[$i]->getCustomerDetail()->setEmail('fnsandin@gmail.com');
        }
        $this->em->flush();

        return $this->json('ok');
    }

    #[Route('/tests/email')]
    public function testEmail(UserRepository $userRepository, AllInOneInitEmail $allInOneInitEmail)
    {
        $user = $userRepository->findOneBy([]);
        $allInOneInitEmail->send($user, 'fr');
        return new JsonResponse('ok');
        return $this->render('email/security/all_in_one_init_email.html.twig', [
            'link' => 'https://cocktailissimo.com',
            'firstName' => 'Hubert',
            'lang' => 'fr'
        ]);
    }

    #[Route('/tests/purchaseInvoices')]
    public function purchaseInvoices(PurchaseRepository $purchaseRepository, PurchaseInvoicesHandler $purchaseInvoicesHandler)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        $purchaseInvoicesHandler->createInvoices($purchase);
        return $this->json('ok');
    }

    #[Route('/tests/templateInvoice')]
    public function templateInvoice(PurchaseRepository $purchaseRepository)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        
        return $this->render('pdf/invoice/sales_invoice.html.twig', [
            'lang' => 'fr',
            'purchaseVendorGroup' => $purchase->getPurchaseVendorGroups()->get(0),
            'vendorIsCocktailissimo' => true
        ]);
    }

    #[Route('/tests/admin_purchase_confirmation_email')]
    public function adminPurchaseConfirmationEmail(PurchaseRepository $purchaseRepository)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        $purchase->setLang('fr');

        return $this->render('admin/email/purchase/purchase_confirmation.html.twig', [
            'purchase' => $purchase
        ]);
    }

    #[Route('/tests/purchase_confirmation_email')]
    public function purchaseConfirmationEmail(PurchaseRepository $purchaseRepository)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        $purchase->setLang('fr');

        return $this->render('email/customer/purchase_confirmation.html.twig', [
            'purchase' => $purchase
        ]);
    }

    #[Route('/tests/purchase_status_sent_email')]
    public function purchaseStatusSentEmail(PurchaseVendorGroupRepository $purchaseVendorGroupRepository)
    {
        $purchaseVendorGroup = $purchaseVendorGroupRepository->findOneBy([]);

        return $this->render('email/customer/purchaseStatus/sent_status.html.twig', [
            'purchaseVendorGroup' => $purchaseVendorGroup
        ]);
    }

    #[Route('/tests/purchase_cancelation')]
    public function purchaseCancelation(PurchaseRepository $purchaseRepository)
    {
        $purchase = $purchaseRepository->findOneBy([]);
        $purchase->setLang('fr');

        return $this->render('email/customer/purchase_cancelation.html.twig', [
            'purchase' => $purchase
        ]);
    }

    #[Route('/tests/findPurchases')]
    public function findPurchases()
    {
        /** @var User */
        $user = $this->getUser();
        $purchases = $this->purchaseRepository->findByCustomerEmail($user->getEmail());

        return new Response('ok');
    }

    #[Route('/tests/create-purchases')]
    public function createPurchasesForOneUser()
    {
        /** @var User */
        $user = $this->getUser();

        $packagings = $this->packagingRepository->findAll();

        for($i=0; $i < 21; $i++) 
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
                        ->setEmail($user->getEmail())
                        ->setCivility($user->getCivility())
                        ->setFirstName($user->getFirstName())
                        ->setLastName($user->getLastName())
                        ->setPhone($this->faker->phoneNumber())
                    )
                    ->setStatus($this->faker->randomElement([SiteConfig::STATUS_PAID, SiteConfig::STATUS_TERMINATED]))
                    ->setCreatedAt(new DateTimeImmutable())
                    ->setDeliveryDetail($postalDetail)
                    ->setInvoiceDetail($postalDetail)
                    ->setLang('en')
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
                        ->setSalesInvoiceNumber(random_int(100, 10000))
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
                                ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn($packaging1->getProduct()->getDesignation()->getEn())
                                ->setFr($packaging1->getProduct()->getDesignation()->getFr())
                                ->setEs($packaging1->getProduct()->getDesignation()->getEs())
                                ->setIt($packaging1->getProduct()->getDesignation()->getIt())
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
                        ->setSalesInvoiceNumber(random_int(100, 10000))
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
                                ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn($packaging2->getProduct()->getDesignation()->getEn())
                                ->setFr($packaging2->getProduct()->getDesignation()->getFr())
                                ->setEs($packaging2->getProduct()->getDesignation()->getEs())
                                ->setIt($packaging2->getProduct()->getDesignation()->getIt())
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
                                ->setEn($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setFr($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setEs($this->faker->randomElement(self::PACKAGING_LABELS))
                                ->setIt($this->faker->randomElement(self::PACKAGING_LABELS))
                            )
                            ->setDesignation(
                                (new TranslatableString)
                                ->setEn($packaging3->getProduct()->getDesignation()->getEn())
                                ->setFr($packaging3->getProduct()->getDesignation()->getFr())
                                ->setEs($packaging3->getProduct()->getDesignation()->getEs())
                                ->setIt($packaging3->getProduct()->getDesignation()->getIt())
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
            $this->em->persist($purchase);
        }

        $this->em->flush();
    
        return new Response('ok');
    }
}