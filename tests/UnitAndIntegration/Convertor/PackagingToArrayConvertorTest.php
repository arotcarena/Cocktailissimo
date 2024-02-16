<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Config\SiteConfig;
use App\Convertor\CustomPriceToArrayConvertor;
use App\Convertor\PackagingToArrayConvertor;
use App\Tests\Utils\FixturesTrait;
use App\Service\PicturePathResolver;
use App\Repository\ProductRepository;
use App\Convertor\ProductToArrayConvertor;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\Entity\Packaging;
use App\Price\CountryLocation;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use App\Repository\PackagingRepository;
use App\Repository\PictureRepository;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group Convertor
 */
class PackagingToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private UrlGeneratorInterface $urlGenerator;

    private PackagingToArrayConvertor $packagingConvertor;

    private PackagingRepository $packagingRepository;

    public function setUp(): void
    {
        parent::setUp();
        self::bootKernel();

        $this->packagingRepository = static::getContainer()->get(PackagingRepository::class);

        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);
        $security = static::getContainer()->get(Security::class);

        /** @var VatResolver|MockObject */
        $vatResolver = $this->createMock(VatResolver::class);
        $vatResolver->expects($this->any())
                    ->method('getRate')
                    ->willReturn(200);

        /** @var CountryLocation|MockObject */
        $countryLocation = $this->createMock(CountryLocation::class);
        $countryLocation->expects($this->any())
                        ->method('getCountry')
                        ->willReturn(SiteConfig::DEFAULT_GEOLOCATION_COUNTRY);

        $priceResolver = new PriceResolver($vatResolver, $security, $countryLocation);
        $this->packagingConvertor = new PackagingToArrayConvertor($priceResolver, $this->urlGenerator, new CustomPriceToArrayConvertor);

        $this->loadFixtures([ProductTestFixtures::class]);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();

        $returnPackaging = $this->packagingConvertor->convert(
            $packaging, 
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );

        $this->assertEquals(
            ['id', 'publicRef', 'label', 'price', 'target', 'stock', 'listPosition'], 
            array_keys($returnPackaging)
        );

    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $packagings = $this->packagingRepository->findAll();
        $product = $packagings[0]->getProduct();
        $returnPackaging = $this->packagingConvertor->convert(
            $packagings, 
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        )[0];

        $this->assertEquals(
            ['id', 'publicRef', 'label', 'price', 'target', 'stock', 'listPosition'],  
            array_keys($returnPackaging)
        );
    }
  
    public function testReturnCorrectPackagingsCount()
    {
        $packagings = $this->packagingRepository->findAll();
        $product = $packagings[0]->getProduct();
        
        $data = $this->packagingConvertor->convert(
            $packagings,
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );

        $this->assertCount(
            count($packagings), 
            $data   
        );
    }
    public function testContainsCorrectPublicRef()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        
        
        $returnPackaging = $this->packagingConvertor->convert(
            $packaging,
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );
        
        $this->assertEquals(
            $packaging->getPublicRef(), 
            $returnPackaging['publicRef']
        );
    }
    public function testContainsCorrectLabel()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        
        
        $returnPackaging = $this->packagingConvertor->convert(
            $packaging,
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );
        
        $this->assertEquals(
            $packaging->getLabel()->getEn(), 
            $returnPackaging['label']
        );
    }
    public function testContainsCorrectLabelLang()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        
        
        $returnPackaging = $this->packagingConvertor->convert(
            $packaging,
            'fr',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );
        
        $this->assertEquals(
            $packaging->getLabel()->getFr(), 
            $returnPackaging['label']
        );
    }
    public function testContainsCorrectStock()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();
        
        
        $returnPackaging = $this->packagingConvertor->convert(
            $packaging,
            'en',
            $product->getSlug()->getEn(),
            $product->getCategory()->getSlug()->getEn(),
            $product->getSubCategory()->getSlug()->getEn()
        );
        
        $this->assertEquals(
            $packaging->getStock(), 
            $returnPackaging['stock']
        );
    }
    public function testContainsCorrectTarget()
    {
        /** @var Packaging */
        $packaging = $this->findEntity(PackagingRepository::class);
        $product = $packaging->getProduct();

        $slug = $product->getSlug()->getEn();
        $categorySlug = $product->getCategory()->getSlug()->getEn();
        $subCategorySlug = $product->getSubCategory()->getSlug()->getEn();

        $url = $this->urlGenerator->generate('product_show', [
            'publicRef' => $packaging->getPublicRef(),
            'slug' => $slug,
            'categorySlug' => $categorySlug,
            'subCategorySlug' => $subCategorySlug,
            '_locale' => 'en'
        ]);

        $returnPackaging = $this->packagingConvertor->convert(
            $packaging,
            'en',
            $slug,
            $categorySlug,
            $subCategorySlug
        );

        $this->assertEquals(
            $url, 
            $returnPackaging['target']
        );
    }
} 
