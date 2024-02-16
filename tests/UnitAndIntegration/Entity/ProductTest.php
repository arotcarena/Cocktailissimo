<?php
namespace App\Tests\UnitAndIntegration\Entity;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Company;
use DateTimeImmutable;
use App\Entity\Picture;
use App\Entity\Product;
use App\Tests\Utils\FixturesTrait;
use App\Entity\Packaging;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Repository\ProductRepository;
use App\Tests\UnitAndIntegration\Entity\EntityTest;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @group Entity
 */
class ProductTest extends EntityTest
{
    use FixturesTrait;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->loadFixtures([ProductTestFixtures::class]);
    }

    public function testValidProduct()
    {
        $this->assertHasErrors(0, $this->createValidProduct());
    }


    public function testInvalidTooMuchSuggestedProducts() 
    {
        $this->assertHasErrors(
            1,
            $this->createValidProduct()
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                ->addSuggestedProduct(new Product)
                // 8
        );
    }

    public function testValidCorrectNumberOfSuggestedProducts() 
    {
        $this->assertHasErrors(
            0,
            $this->createValidProduct()
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            ->addSuggestedProduct(new Product)
            //  7 
        );
    }

    public function testInvalidBlankHsCode()
    {
        $this->assertHasErrors(
            1, 
            $this->createValidProduct()->setHsCode('')
        );
    }

    public function testInvalidBlankOriginIso()
    {
        $this->assertHasErrors(
            1,
            $this->createValidProduct()->setOriginCountry('')
        );
    }

    public function testBasePricesLifecycleCallbacksOnPersist()
    {
        $product = $this->createValidProduct();
        $this->em->persist($product);
        $this->em->persist($product->getVendor()); //obligé car pas de cascade persist
        $this->em->flush();
        $this->assertEquals(
            55000, $product->getBaseConsumerPriceHt()
        );
        $this->assertEquals(
            50000, $product->getBaseBusinessPriceHt()
        );
    }
    public function testBasePricesLifecycleCallbacksOnUpdate()
    {
        /** @var Product */
        $product = $this->findEntity(ProductRepository::class);
        $consumerPrice = $product->getBaseConsumerPriceHT();

        $newConsumerPrice = $consumerPrice - 1;
        $newBusinessPrice = $newConsumerPrice - 1;

        $product->addPackaging(
            (new Packaging)
            ->setPublicRef('pref')
            ->setLabel(new TranslatableString)
            ->setConsumerPriceHT($newConsumerPrice)
            ->setBusinessPriceHT($newBusinessPrice)
            ->setStock(5)
            ->setEanCode('123456')
            ->setWeight(2000)
            ->setListPosition(1)
        );

        $this->em->flush();

        $this->assertEquals(
            $newConsumerPrice, $product->getBaseConsumerPriceHt()
        );
        $this->assertEquals(
            $newBusinessPrice, $product->getBaseBusinessPriceHt()
        );
    }
    public function testMainStockLifecycleCallbacksOnPersist()
    {
        $product = $this->createValidProduct();
        $this->em->persist($product);
        $this->em->persist($product->getVendor()); //obligé car pas de cascade persist
        $this->em->flush();
        $this->assertEquals(
            16, $product->getMainStock()
        );
    }
    public function testMainStockLifecycleCallbacksOnUpdate()
    {
         /** @var Product */
         $product = $this->findEntity(ProductRepository::class);
         $oldStock = $product->getMainStock();
 
         $product->addPackaging(
             (new Packaging)
             ->setPublicRef('pref')
             ->setLabel(new TranslatableString)
             ->setConsumerPriceHT(100)
             ->setBusinessPriceHT(100)
             ->setStock(2)
             ->setEanCode('123456')
             ->setWeight(2000)
             ->setListPosition(1)
         );
 
         $this->em->flush();
 
         $this->assertEquals(
             $oldStock + 2, $product->getMainStock()
         );
    }
    public function testBasePublicRefLifecycleCallbackst()
    {
        $product = $this->createValidProduct();
        $this->em->persist($product);
        $this->em->persist($product->getVendor()); //obligé car pas de cascade persist
        $this->em->flush();
        $this->assertEquals(
            'basePublicRef', $product->getBasePublicRef()
        );
    }

    private function createValidProduct(): Product
    {
        $product = (new Product)
                ->addPackaging(
                    (new Packaging)
                    ->setPublicRef('basePublicRef')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn('1L')
                        ->setFr('1L')
                        ->setEs('1L')
                        ->setIt('1L')
                    )
                    ->setConsumerPriceHt(55000)
                    ->setBusinessPriceHt(50000)
                    ->setStock(5)
                    ->setEanCode('987654321')
                    ->setWeight(100)
                    ->setListPosition(1)
                )
                ->addPackaging(
                    (new Packaging)
                    ->setPublicRef('ref1234')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn('50ml')
                        ->setFr('50ml')
                        ->setEs('50ml')
                        ->setIt('50ml')
                    )
                    ->setConsumerPriceHT(1000)
                    ->setBusinessPriceHT(900)
                    ->setStock(10)
                    ->setEanCode('0123456789')
                    ->setWeight(100)
                    ->setListPosition(2)
                )
                ->addPackaging(
                    (new Packaging)
                    ->setPublicRef('ref789')
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn('500g')
                        ->setFr('500g')
                        ->setEs('500g')
                        ->setIt('500g')
                    )
                    ->setConsumerPriceHT(15000)
                    ->setBusinessPriceHT(14500)
                    ->setStock(1)
                    ->setEanCode('784512326598')
                    ->setWeight(100)
                    ->setListPosition(3)
                )
                ->setVendor(
                    (new User)
                    ->setCompany(
                        (new Company)
                        ->setSocialName('social name')
                        ->setIdentificationNumber('0123456789')
                        ->setCountry('FR')
                    )
                    ->setCivility(SiteConfig::CIVILITY_M)
                    ->setFirstName('jean')
                    ->setLastName('Fontaine')
                    ->setEmail('user'.random_int(1, 10000).'@mail.fr')
                    ->setPassword('password')
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('nom du produit en')
                    ->setFr('nom du produit fr')
                    ->setEs('nom du produit es')
                    ->setIt('nom du produit it')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('un-slug-valide-en')
                    ->setFr('un-slug-valide-en')
                    ->setEs('un-slug-valide-en')
                    ->setIt('un-slug-valide-en')
                )
                ->setHsCode('code-douanier')
                ->setOriginCountry('FR')
                ->addPicture(
                    (new Picture)
                    ->setFileName('filename')
                    ->setAlt(
                        (new TranslatableString)
                    )
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->addPicture(
                    (new Picture)
                    ->setFileName('filename')
                    ->setAlt(
                        (new TranslatableString)
                    )
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->setCreatedAt(new DateTimeImmutable())
                ;

        $product->updateBaseValues();

        return $product;
    }
}