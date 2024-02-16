<?php
namespace App\Tests\Functional\Controller\Security;

use App\Tests\Utils\UserFixturesTrait;
use App\Tests\Functional\FunctionalTest;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Tests\Functional\Controller\Security\LoginTrait;

/**
 * @group FunctionalSecurity
 */
class LoginControllerTest extends FunctionalTest
{
    use LoginTrait;
    use UserFixturesTrait;

    public function testLoginPageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_login', ['_locale' => 'en']));
        $this->assertResponseIsSuccessful('response status de la page login != 200');
        $this->assertSelectorTextContains('button', $this->translator->trans('login', [], 'messages', 'en'));
    }
    public function testLoginWithBadEmailAndBadPassword()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $this->tryLogin('bademail@gmail.com', 'badpassword');
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', $this->translator->trans('error.invalid_credentials', [], 'messages', 'en'));
    }
    public function testLoginWithCorrectEmailButBadPassword()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $this->tryLogin('confirmed_user@gmail.com', 'badpassword');
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', $this->translator->trans('error.invalid_credentials', [], 'messages', 'en'));
    }
    public function testLoginWithCorrectCredentialsButRestrictedUser()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $this->tryLogin('restricted_user@gmail.com', 'password');
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', substr($this->translator->trans('error.restricted_user', [], 'messages', 'en'), 0, 10));
    }
    public function testLoginWithCorrectCredentialsButNotConfirmedUser()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $this->tryLogin('user@gmail.com', 'password');
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', substr($this->translator->trans('error.email_not_confirmed', [], 'messages', 'en'), 8, 18)); 
    }
    public function testLoginWithCorrectCredentialsAndConfirmedUser()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $this->tryLogin('confirmed_user@gmail.com', 'password');
        $this->assertResponseRedirects();
        $this->client->followRedirect();
        $this->assertSelectorTextContains('.js-flash-wrapper.success', $this->translator->trans('success.login', [], 'messages', 'en'));
        $this->assertSelectorNotExists('.js-flash-wrapper.danger', $this->translator->trans('error.invalid_credentials', [], 'messages', 'en'));
        $this->assertSelectorNotExists('.js-flash-wrapper.danger', substr($this->translator->trans('error.email_not_confirmed', [], 'messages', 'en'), 8, 18)); 
        $this->assertSelectorNotExists('.js-flash-wrapper.danger', substr($this->translator->trans('error.restricted_user', [], 'messages', 'en'), 0, 10));
    }
    

    public function testLogout()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        
        $user = $this->findUserByEmail('confirmed_user@gmail.com', $this->client);
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));
        $this->assertResponseRedirects();
        $this->client->followRedirect();
        $this->client->followRedirect();

        $this->assertSelectorTextContains('.js-flash-wrapper.success', $this->translator->trans('success.logout', [], 'messages', 'en'));
    }
}