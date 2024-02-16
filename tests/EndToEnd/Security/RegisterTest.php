<?php
namespace App\Tests\EndToEnd\Security;


use Facebook\WebDriver\WebDriverBy;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Tests\EndToEnd\EndToEndTest;
use App\Tests\Utils\UserFixturesTrait;

class RegisterTest extends EndToEndTest
{

    use UserFixturesTrait;


    public function setUp(): void 
    {
        parent::setUp();

    }

    public function testInvalidDifferentsPasswords()
    {
        $this->tryRegister($this->getFaker()->email(), 'password', 'otherpassword', true);
        $this->assertSelectorNotExists('.alert.alert-success');
        $this->assertSelectorExists('.form-error');
    }
    public function testInvalidBlankPassword()
    {
        $this->tryRegister($this->getFaker()->email(), '', '', true);
        $this->assertSelectorNotExists('.alert.alert-success');
        $this->assertSelectorExists('.form-error');
    }
    public function testInvalidBlankEmail()
    {
        $this->tryRegister('', 'password', 'password', true);
        $this->assertSelectorNotExists('.alert.alert-success');
        $this->assertSelectorExists('.form-error');
    }
    public function testInvalidNotAgreeTerms()
    {
        $this->tryRegister($this->getFaker()->email(), 'password', 'password', false);
        $this->assertSelectorNotExists('.alert.alert-success');
        $this->assertSelectorExists('.form-error');
    }
    public function testInvalidExistingEmail()
    {
        $existingEmail = $this->findUser([])->getEmail();
        
        $this->tryRegister($existingEmail, 'motdepasse', 'motdepasse', true);
        $this->assertSelectorNotExists('.alert.alert-success');
        $this->client->waitFor('.form-error', 5);
        $this->assertSelectorTextContains('.form-error', $this->translator->trans('assert.notUnique.email', [], 'validators', 'en'));
    }
    public function testValidRegistration()
    {
        $this->tryRegister($this->getFaker()->email(), 'motdepasse', 'motdepasse', true);
        $this->client->waitFor('.alert.alert-success', 5);
        $this->assertSelectorTextContains('.alert.alert-success', $this->translator->trans('success.register', [], 'alerts', 'en'));
        $this->assertSelectorNotExists('.form-error');
    }
    public function testOnValidRegistrationUserPersisted()
    {
        $email = $this->getFaker()->email();
        $password = 'motdepassedetest';

        $this->tryRegister($email, $password, $password, true);
        $this->client->waitFor('.alert.alert-success', 5);
        $this->assertSelectorTextContains('.alert.alert-success', $this->translator->trans('success.register', [], 'alerts', 'en'));

        $this->tryLogin($email, $password);
        $this->assertSelectorTextContains('.form-main-error', $this->translator->trans('error.notConfirmed', [], 'alerts', 'en'));
        $this->assertSelectorTextNotContains('.form-main-error', $this->translator->trans('error.invalidCredentials', [], 'alerts', 'en'));
    }
    
    private function tryRegister(string $email, string $plainPassword, string $passwordConfirm, bool $agreeTerms = false)
    {
        // on logout d'abord car si on est déjà loggé la page security_register n'est pas accessible
        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));

        $this->loadFixtures([UserTestFixtures::class]);
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_register', ['_locale' => 'en']));
        $form = $crawler->selectButton($this->translator->trans('register.button', [], 'alerts', 'en'))->form([
            'email' => $email,
            'plainPassword' => $plainPassword,
            'passwordConfirm' => $passwordConfirm
        ]);
        if($agreeTerms)
        {
            $this->client->getWebDriver()->findElement(WebDriverBy::cssSelector('.custom-checkbox'))->click();  // custom-checkbox est lié en js à la checkbox agreeTerms
        }
        $this->client->submit($form);
    }

    private function tryLogin(string $email, string $password)
    {
        // on logout d'abord car si on est déjà loggé la page security_login n'est pas accessible
        $this->client->request('GET', $this->urlGenerator->generate('security_logout', ['_locale' => 'en']));

        $this->loadFixtures([UserTestFixtures::class]);
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_login', ['_locale' => 'en']));
        $form = $crawler->selectButton($this->translator->trans('login.button', [], 'alerts', 'en'))->form([
            'email' => $email,
            'password' => $password,
        ]);
        $this->client->submit($form);
    }
} 
