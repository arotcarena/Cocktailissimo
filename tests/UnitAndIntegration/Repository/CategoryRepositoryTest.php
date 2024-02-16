<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\Entity\Category;
use App\Tests\Utils\FixturesTrait;
use App\Repository\CategoryRepository;
use App\DataFixtures\Tests\CategoryTestFixtures;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CategoryRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private CategoryRepository $categoryRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->loadFixtures([CategoryTestFixtures::class]);

        $this->categoryRepository = static::getContainer()->get(CategoryRepository::class);
    }

    public function testFindOneBySlugWithInexistantSlug()
    {
        $this->assertNull(
            $this->categoryRepository->findOneBySlug('inexistant-slug', 'en')
        );
    }

    public function testFindOneBySlugWithValidSlug()
    {
        $category = $this->categoryRepository->findOneBySlug('category-3', 'en');
        $this->assertInstanceOf(
            Category::class,
            $category
        );
        $this->assertEquals('Catégorie 3', $category->getName()->getFr());
    }

    public function testFindOneBySlugWithParamLang()
    {
        $category = $this->categoryRepository->findOneBySlug('category-3', 'fr');
        $this->assertNull($category);

        $category = $this->categoryRepository->findOneBySlug('categorie-3', 'fr');
        $this->assertInstanceOf(
            Category::class,
            $category
        );
    }



}