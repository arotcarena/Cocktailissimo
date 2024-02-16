<?php
namespace App\Tests\UnitAndIntegration\Twig;

use App\Parser\LinkTagsParser;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;
use App\Twig\Runtime\MasterTagsToHtmlParserExtensionRuntime;

class MasterTagsToHtmlParserExtensionRuntimeTest extends TestCase
{
    public function testUseLinkTagsParser()
    {
        /** @var LinkTagsParser|MockObject */
        $linkTagsParser = $this->createMock(LinkTagsParser::class);

        $masterTagsToHtmlParserExtensionRuntime = new MasterTagsToHtmlParserExtensionRuntime($linkTagsParser);


        $linkTagsParser->expects($this->once())
                        ->method('masterToHtml')
                        ->with('texte', 'en')
                        ->willReturn('texte converti')
                    ;
        
        $this->assertEquals(
            'texte converti',
            $masterTagsToHtmlParserExtensionRuntime->parse('texte', 'en')
        );
    }

    public function testCorrectLocaleIsPassed()
    {
        /** @var LinkTagsParser|MockObject */
        $linkTagsParser = $this->createMock(LinkTagsParser::class);

        $masterTagsToHtmlParserExtensionRuntime = new MasterTagsToHtmlParserExtensionRuntime($linkTagsParser);

        $linkTagsParser->expects($this->once())
                        ->method('masterToHtml')
                        ->with('texte', 'es')
                        ->willReturn('texte converti')
                    ;
        
        $this->assertEquals(
            'texte converti',
            $masterTagsToHtmlParserExtensionRuntime->parse('texte', 'es')
        );
    }
}