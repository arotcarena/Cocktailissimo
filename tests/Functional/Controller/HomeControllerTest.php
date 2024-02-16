<?php
namespace App\Tests\Functional\Controller;

use App\Tests\Functional\FunctionalTest;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalHome
 */
class HomeControllerTest extends FunctionalTest
{
    public function testLandingPageRedirectToCorrectHomeLocale()
    {
        $this->client->request('GET', '/', [], [], [
            'HTTP_ACCEPT_LANGUAGE' => 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'fr']));

        
        $this->client->request('GET', '/', [], [], [
            'HTTP_ACCEPT_LANGUAGE' => 'es-ES,fr;q=0.9,en-US;q=0.8,en;q=0.7'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'es']));

        
        $this->client->request('GET', '/', [], [], [
            'HTTP_ACCEPT_LANGUAGE' => 'es-ES,fr;q=0.9,en-US;q=0.8,en;q=0.7'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'es']));

        
        $this->client->request('GET', '/', [], [], [
            'HTTP_ACCEPT_LANGUAGE' => 'it-IT,fr;q=0.9,en-US;q=0.8,en;q=0.7'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'it']));

        
        $this->client->request('GET', '/', [], [], [
            'HTTP_ACCEPT_LANGUAGE' => 'en-US,fr;q=0.9,fr-FR;q=0.8,fr;q=0.7'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'en']));
    }
    public function testHomePageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('home', ['_locale' => 'fr']));
        $this->assertResponseIsSuccessful('response status de la page home != 200');
    }
    public function testDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('home', ['_locale' => 'en']));
        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(6, $dbCollector->getQueryCount());
    }
}