<?php
namespace App\Tests\EndToEnd;

use App\Tests\Utils\FixturesTrait;
use Symfony\Component\Panther\Client;
use Symfony\Component\Panther\PantherTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

abstract class EndToEndTest extends PantherTestCase
{
    use FixturesTrait;

    
    protected Client $client;
    
    protected UrlGeneratorInterface $urlGenerator;

    protected TranslatorInterface $translator;
    
    
    public function setUp(): void
    {
        parent::setUp();
    
        $this->client = static::createPantherClient();
    
        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);

        $this->translator = static::getContainer()->get(TranslatorInterface::class);
    }
}