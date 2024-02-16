<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\Tests\Utils\FixturesTrait;
use App\Repository\SubCategoryRepository;
use App\DataFixtures\Tests\CategoryTestFixtures;
use App\Entity\SubCategory;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SubCategoryRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private SubCategoryRepository $subCategoryRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([CategoryTestFixtures::class]);

        $this->subCategoryRepository = static::getContainer()->get(SubCategoryRepository::class);
    }

    public function testFindOneByBothSlugsWithInexistantSlugs()
    {
        $this->assertNull(
            $this->subCategoryRepository->findOneByBothSlugs('inexistant-slug', 'inexistant-too', 'en')
        );
    }

    public function testFindOneByBothSlugsWithInexistantCategorySlug()
    {
        $this->assertNull(
            $this->subCategoryRepository->findOneByBothSlugs('inexistant-slug', 'sub-category-1', 'en')
        );
    }

    public function testFindOneByBothSlugsWithInexistantSubCategorySlug()
    {
        $this->assertNull(
            $this->subCategoryRepository->findOneByBothSlugs('category-1', 'inexistant-slug', 'en')
        );
    }

    public function testFindOneByBothSlugsWithValidSlugs()
    {
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs('category-1', 'sub-category-1', 'en');
        $this->assertInstanceOf(
            SubCategory::class,
            $subCategory
        );

        $this->assertEquals('Subcategory 1', $subCategory->getName()->getEn());
        $this->assertEquals('Category 1', $subCategory->getParentCategory()->getName()->getEn());
    }

    public function testFindOneByBothSlugsLangParam()
    {
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs('category-1', 'sub-category-1', 'fr');

        $this->assertNull($subCategory);

        $subCategory = $this->subCategoryRepository->findOneByBothSlugs('categorie-1', 'sous-categorie-1', 'fr');
        $this->assertInstanceOf(
            SubCategory::class,
            $subCategory
        );
    }


}