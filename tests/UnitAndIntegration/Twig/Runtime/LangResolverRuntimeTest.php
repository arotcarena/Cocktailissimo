<?php
namespace App\Tests\UnitAndIntegration\Twig\Runtime;

use App\Config\SiteConfig;
use App\Twig\Runtime\LangResolverRuntime;
use PHPUnit\Framework\TestCase;

class LangResolverRuntimeTest extends TestCase
{
    public function testWithLangInPathWillReturnThisLang()
    {
        $langResolver = new LangResolverRuntime;

        $this->assertEquals(
            'fr',
            $langResolver->resolve('/fr/slug/other-slug/something.html')
        );

        $this->assertEquals(
            'es',
            $langResolver->resolve('/es/slug/other-slug/something.html')
        );
    }

    public function testWithNoLangInPathWillReturnDefaultLang()
    {
        $langResolver = new LangResolverRuntime;

        $this->assertEquals(
            SiteConfig::DEFAULT_LOCALE,
            $langResolver->resolve('/slug/other-slug/something.html')
        );
    }
}