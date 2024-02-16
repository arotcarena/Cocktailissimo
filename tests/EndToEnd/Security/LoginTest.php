<?php
namespace App\Tests\EndToEnd\Security;

use App\DataFixtures\Tests\UserTestFixtures;
use App\Tests\EndToEnd\EndToEndTest;
use App\Tests\Utils\UserFixturesTrait;
use Facebook\WebDriver\WebDriverBy;
use Symfony\Component\BrowserKit\Cookie;

class LoginTest extends EndToEndTest
{

    use UserFixturesTrait;

    public function testPasswordForgottenLink()
    {
        //on logout avant au cas ou car si on est loggé on ne peut pas accéder à cette page
        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));
        
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_login', ['_locale' => 'en']));
        $crawler->findElement(WebDriverBy::linkText($this->translator->trans('forgotten_password.question', [], 'messages', 'en')))->click();
        $this->client->waitForElementToContain('label', $this->translator->trans('label.email.full', [], 'messages', 'en'), 3);
        $this->assertSelectorTextContains('label', $this->translator->trans('label.email.full', [], 'messages', 'en'));
    }

    public function testRegisterLink()
    {
        //on logout avant au cas ou car si on est loggé on ne peut pas accéder à cette page
        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_login', ['_locale' => 'en']));
        $crawler->findElement(WebDriverBy::linkText($this->translator->trans('login.registerLink', [], 'messages', 'en')))->click();
        $this->client->waitForElementToContain('.form-button', strtoupper($this->translator->trans('register.button', [], 'messages', 'en')), 3);
        $this->assertSelectorTextContains('.form-button', strtoupper($this->translator->trans('register.button', [], 'messages', 'en')));
    }

    public function testRememberMe()
    {
        $this->loginAndDestroySession(true);

        /** on essaie de se rendre sur une page qui nécessite d'être authentifié */
        $this->client->request('GET', $this->urlGenerator->generate('security_changePassword', ['_locale' => 'en']));
        /** on doit pouvoir accéder */
        $this->client->waitForElementToContain('label', $this->translator->trans('label.oldPassword', [], 'messages', 'en'), 3);
        $this->assertSelectorTextContains('label', $this->translator->trans('label.oldPassword', [], 'messages', 'en'));
    }
    public function testDontRememberMe()
    {
        $this->loginAndDestroySession(false);

        /** on essaie de se rendre sur une page qui nécessite d'être authentifié */
        $this->client->request('GET', $this->urlGenerator->generate('security_changePassword', ['_locale' => 'en']));
        /** on doit être redirigé vers login */
        $this->client->waitForElementToContain('.form-button', strtoupper($this->translator->trans('login.button', [], 'messages', 'en')), 3);
        $this->assertSelectorTextContains('.form-button', strtoupper($this->translator->trans('login.button', [], 'messages', 'en')));
    }

    private function loginAndDestroySession(bool $clickRememberMe)
    {
        $this->loadFixtures([UserTestFixtures::class]);
        $user = $this->findUserByEmail('confirmed_user@gmail.com');

        // on logout d'abord car si on est déjà loggé la page security_login n'est pas accessible
        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_login', ['_locale' => 'en']));
        $form = $crawler->selectButton($this->translator->trans('login.button', [], 'messages', 'en'))->form([
            'email' => $user->getEmail(),
            'password' => 'password'
        ]);
        if($clickRememberMe)
        {
            $crawler->findElement(WebDriverBy::cssSelector('.custom-checkbox'))->click();
        }
        $this->client->submit($form);
        $this->client->waitFor('.alert.alert-success', 3);

        /**on supprime le cookie de la session */
        $this->client->getCookieJar()->set(new Cookie('PHPSESSID', '', time() - 1));
    }
}