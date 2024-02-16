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
class ProductToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private PackagingRepository $packagingRepository;

    private PictureRepository $pictureRepository;

    private ProductRepository $productRepository;

    private UrlGeneratorInterface $urlGenerator;


    private ProductToArrayConvertor $productConvertor;

    public function setUp(): void
    {
        parent::setUp();
        self::bootKernel();

        $this->packagingRepository = static::getContainer()->get(PackagingRepository::class);
        $this->pictureRepository = static::getContainer()->get(PictureRepository::class);
        $this->productRepository = static::getContainer()->get(ProductRepository::class);

        $picturePathResolver = static::getContainer()->get(PicturePathResolver::class);
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
        $packagingConvertor = new PackagingToArrayConvertor($priceResolver, $this->urlGenerator, new CustomPriceToArrayConvertor);
        $this->productConvertor = new ProductToArrayConvertor($picturePathResolver, $packagingConvertor);

        $this->loadFixtures([ProductTestFixtures::class]);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->packagingRepository->hydrateProductsWithBasePackaging([$product]);
        $this->pictureRepository->hydrateProductsWithFirstPicture([$product]);

        $returnProduct = $this->productConvertor->convert($product, 'en');

        $this->assertEquals(
            ['id', 'type', 'designation', 'basePackaging', 'firstPicture', 'stock', 'reviewNote', 'countReviews'], 
            array_keys($returnProduct)
        );

        $this->assertEquals(
            ['path', 'alt'], 
            array_keys($returnProduct['firstPicture'])
        );

        $this->assertEquals(
            ['id', 'publicRef', 'label', 'price', 'target', 'stock', 'listPosition'],
            array_keys($returnProduct['basePackaging'])
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $products = $this->productRepository->findAll();
        
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);

        $productsWithCategoryAndSubcategory = [];
        foreach($products as $p)
        {
            if($p->getCategory() && $p->getSubCategory())
            {
                $productsWithCategoryAndSubcategory[] = $p;
            }
        }
        $returnProduct = $this->productConvertor->convert($productsWithCategoryAndSubcategory, 'en')[0];

        $this->assertEquals(
            ['id', 'type', 'designation', 'basePackaging', 'firstPicture', 'stock', 'reviewNote', 'countReviews'], 
            array_keys($returnProduct)
        );
    }
  
    public function testReturnCorrectProductsCount()
    {
        $products = $this->productRepository->findAll();
        
        $this->packagingRepository->hydrateProductsWithBasePackaging($products);
        $this->pictureRepository->hydrateProductsWithFirstPicture($products);

        $productsWithCategoryAndSubcategory = [];
        foreach($products as $p)
        {
            if($p->getCategory() && $p->getSubCategory())
            {
                $productsWithCategoryAndSubcategory[] = $p;
            }
        }

        $data = $this->productConvertor->convert($productsWithCategoryAndSubcategory, 'en');

        $this->assertCount(
            count($productsWithCategoryAndSubcategory), 
            $data   
        );
    }
    public function testContainsCorrectProductDesignation()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->packagingRepository->hydrateProductsWithBasePackaging([$product]);
        
        $returnProduct = $this->productConvertor->convert($product, 'en');
        $this->assertEquals(
            $product->getDesignation()->getEn(), 
            $returnProduct['designation']
        );
    }
    public function testContainsCorrectProductDesignationLang()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->packagingRepository->hydrateProductsWithBasePackaging([$product]);

        $returnProduct = $this->productConvertor->convert($product, 'fr');
        $this->assertEquals(
            $product->getDesignation()->getFr(), 
            $returnProduct['designation']
        );
    }
  
} 
