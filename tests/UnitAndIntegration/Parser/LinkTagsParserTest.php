<?php
namespace App\Tests\UnitAndIntegration\Parser;

use App\DataFixtures\Shop\CategoryFixtures;
use App\Exception\LinkTagException;
use App\Parser\LinkTagsParser;
use App\Tests\Utils\FixturesTrait;
use Error;
use Exception;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class LinkTagsParserTest extends KernelTestCase
{
    use FixturesTrait;

    private LinkTagsParser $linkTagsParser;

    private UrlGeneratorInterface $urlGenerator;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->linkTagsParser = static::getContainer()->get(LinkTagsParser::class);

        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);

        $this->loadFixtures([CategoryFixtures::class]);
    }

    //masterToHtml
    public function testMasterToHtmlWithInvalidFormatTags()
    {
        $text = 'Mon texte avec balise invalide ci-après : [product_show:salut:cool]';

        $this->assertEquals(
            $text,
            $this->linkTagsParser->masterToHtml($text)
        );
    }

    public function testMasterToHtmlWithInvalidRouteName()
    {
        $text = 'Mon texte avec balise invalide ci-après : [invalid_route{id:4}==Label]';

        $this->assertStringContainsString(
            'href="'.$this->urlGenerator->generate('error_unvalidLink', ['_locale' => 'en']).'"',
            $this->linkTagsParser->masterToHtml($text)
        );
    }

    public function testMasterToHtmlWithInvalidOrMissingRouteParams()
    {
        $text = 'Mon texte avec balise invalide ci-après : [product_show{slug:mon-produit}==Label]';

        $this->assertStringContainsString(
            'href="'.$this->urlGenerator->generate('error_unvalidLink', ['_locale' => 'en']).'"',
            $this->linkTagsParser->masterToHtml($text)
        );
    }

    public function testMasterToHtmlWithMissingLocaleRouteParam()
    {
        $text = 'Mon texte avec balise invalide ci-après : [category_show{slug:category-slug}==Label]';

        $this->assertStringContainsString(
            'href="'.$this->urlGenerator->generate('error_unvalidLink', ['_locale' => 'en']).'"',
            $this->linkTagsParser->masterToHtml($text)
        );
    }

    public function testMasterToHtmlWithValidTags()
    {
        $text = 'Mon texte avec balise valide : [product_show{slug:mon-produit,categorySlug:ma-categorie,subCategorySlug:ma-ss-categorie,publicRef:1234,_locale:en}==Label] et une autre [contact_index{_locale:en}==Contactez-nous]';

        $expectedText = 'Mon texte avec balise valide : <a href="'.$this->urlGenerator->generate('product_show', [
            'slug' => 'mon-produit',
            'categorySlug' => 'ma-categorie',
            'subCategorySlug' => 'ma-ss-categorie',
            'publicRef' => '1234', 
            '_locale' => 'en'
        ]).'">Label</a> et une autre <a href="'.$this->urlGenerator->generate('contact_index', ['_locale' => 'en']).'">Contactez-nous</a>';

        $this->assertEquals(
            $expectedText,
            $this->linkTagsParser->masterToHtml($text)
        );
    }

    public function testMasterToHtmlCorrectLocaleIsPassed()
    {
        $text = 'Mon texte avec balise valide : [product_show{slug:mon-produit,categorySlug:ma-categorie,subCategorySlug:ma-ss-categorie,publicRef:1234,_locale:fr}==Label] et une autre [contact_index{_locale:en}==Contactez-nous]';

        $expectedText = 'Mon texte avec balise valide : <a href="'.$this->urlGenerator->generate('product_show', [
            'slug' => 'mon-produit',
            'categorySlug' => 'ma-categorie',
            'subCategorySlug' => 'ma-ss-categorie',
            'publicRef' => '1234', 
            '_locale' => 'fr'
            ]).'">Label</a> et une autre <a href="'.$this->urlGenerator->generate('contact_index', ['_locale' => 'en']).'">Contactez-nous</a>';

        $this->assertEquals(
            $expectedText,
            $this->linkTagsParser->masterToHtml($text)
        );
    }


    //noobToMaster
    public function testNoobToMasterWithInvalidTagFormat()
    {
        $text = 'Mon texte avec balise invalide : [PROD-salut-youhou]';

        $this->assertEquals(
            $text,
            $this->linkTagsParser->noobToMaster($text)
        );
    }

    public function testNoobToMasterWithInvalidToken()
    {
        $text = 'Mon texte avec balise invalide : [PROD:123456789456123:Mon produit]';

        $this->expectException(Exception::class);
        $this->linkTagsParser->noobToMaster($text);
    }

    public function testNoobToMasterWithTokenNotInAdminLang()
    {
        $text = 'Mon texte avec balise invalide : [CATPROD:table-setting:Table Setting]';

        $this->expectException(Exception::class);
        $this->linkTagsParser->noobToMaster($text);
    }

    public function testNoobToMasterWithValidTag()
    {
        $text = 'Mon texte avec balise valide : [CATPROD:arts-de-la-table:Table Setting]';

        $expectedText = 'Mon texte avec balise valide : [category_show{slug:table-setting,_locale:en}==Table Setting]';

        $this->assertEquals(
            $expectedText,
            $this->linkTagsParser->noobToMaster($text)
        );
    }

    public function testNoobToMasterConvertWithCorrectLocale()
    {
        $text = 'Mon texte avec balise valide : [CATPROD:arts-de-la-table:Table Setting]';

        $expectedText = 'Mon texte avec balise valide : [category_show{slug:arte-de-la-mesa,_locale:es}==Table Setting]';

        $this->assertEquals(
            $expectedText,
            $this->linkTagsParser->noobToMaster($text, 'es')
        );
    }

    //masterToNoob
    public function testMasterToNoobWithInvalidTagFormat()
    {
        $text = 'Mon texte avec balise invalide : [invalidFormat==salut]';

        $this->assertEquals(
            $text,
            $this->linkTagsParser->masterToNoob($text)
        );
    }

    public function testMasterToNoobWithInvalidRouteName()
    {
        $text = 'Mon texte avec balise invalide : [invalid_name{id:1}==Label]';

        $this->expectException(Exception::class);
        $this->linkTagsParser->masterToNoob($text);
    }

    public function testMasterToNoobWithInvalidOrMissingRouteParams()
    {
        $text = 'Mon texte avec balise invalide : [category_show{ref:1234}==Label]';

        try 
        {
            $this->linkTagsParser->masterToNoob($text);
            $this->fail('Une erreur devrait être levée');
        }
        catch(Exception $e)
        {
            $this->assertNotNull($e);
        }
    }

    /**
     * "notEnToken" car si le token est en langue en alors il n'y aura pas d'erreur puisque la langue par défaut de masterToNoob est en
     */
    public function testMasterToNoobWithMissingLocaleAndNotEnToken()
    {
        $text = 'Mon texte avec balise invalide : [category_show{slug:arts-de-la-table}==Arts de la table]';

        $this->expectException(Error::class);
        $this->linkTagsParser->masterToNoob($text);
    }

    public function testMasterToNoobWithValidTag()
    {
        $text = 'Mon texte avec balise valide : [category_show{slug:table-setting,_locale:en}==Table setting]';

        $expectedText = 'Mon texte avec balise valide : [CATPROD:arts-de-la-table:Table setting]';

        $this->assertEquals(
            $expectedText,
            $this->linkTagsParser->masterToNoob($text)
        );
    }
}