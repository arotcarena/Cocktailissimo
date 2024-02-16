<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Helper\UrlRefExtractor;
use PHPUnit\Framework\TestCase;

/**
 * @group Helper
 */
class UrlRefExtractorTest extends TestCase
{
    private UrlRefExtractor $urlRefExtractor;

    public function setUp(): void
    {
        $this->urlRefExtractor = new UrlRefExtractor;
    }

    //extractRef
    public function testExtractRefWithNoRefIntoUrl()
    {
        $ref = $this->urlRefExtractor->extractRef('/it/slug-of-some-entity/no-ref.html');
        $this->assertNull($ref);
    }
    public function testExtractRefReturnCorrectRef()
    {
        $ref = $this->urlRefExtractor->extractRef('/fr/slug-of-some-entity_ref1234.html');
        $this->assertEquals('ref1234', $ref);
        $ref = $this->urlRefExtractor->extractRef('/en/category-slug/entity-slug_ref1234.html');
        $this->assertEquals('ref1234', $ref);
        $ref = $this->urlRefExtractor->extractRef('/es/category-slug/sub-category-slug/entity-slug_ref1234.html');
        $this->assertEquals('ref1234', $ref);
    }

    //extractVendorShopCompanySlug
    public function testExtractVendorShopCompanySlugWithInvalidVendorShopUrl()
    {
        $ref = $this->urlRefExtractor->extractRef('/fr/slug-quelconque/autre-slug');
        $this->assertNull($ref);
        $ref = $this->urlRefExtractor->extractRef('/en/slug-quelconque');
        $this->assertNull($ref);
    }
    public function testExtractVendorShopCompanySlug()
    {
        $ref = $this->urlRefExtractor->extractVendorShopCompanySlug('/fr/shop/company-slug');
        $this->assertEquals('company-slug', $ref);
    }
}