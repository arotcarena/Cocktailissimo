<?php
namespace App\Tests\Functional;

use App\Tests\Utils\FixturesTrait;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

abstract class FunctionalTest extends WebTestCase 
{
    use FixturesTrait;

    protected KernelBrowser $client;

    protected UrlGeneratorInterface $urlGenerator;

    
    protected TranslatorInterface $translator;


    public function setUp(): void
    {
        parent::setUp();

        $this->client = static::createClient();

        $this->urlGenerator = $this->client->getContainer()->get(UrlGeneratorInterface::class);

        $this->translator = $this->client->getContainer()->get(TranslatorInterface::class);
    }
}