<?php
namespace App\Tests\Functional\Controller\Security;

use App\Entity\User;
use App\Config\SiteConfig;
use App\Tests\Utils\UserFixturesTrait;
use App\Tests\Functional\FunctionalTest;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Tests\Functional\Controller\Security\LoginTrait;

/**
 * @group FunctionalSecurity
 */
class PasswordControllerTest extends FunctionalTest
{
    use UserFixturesTrait;

    use LoginTrait;

    /**function askResetPassword() */
    public function testAskResetPasswordPageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_askResetPassword'));
        $this->assertResponseIsSuccessful('Le statut de la réponse est !== de 200');
        $this->assertSelectorNotExists('.form-error');
    }
    public function testBlankEmailResultsInError()
    {
        $this->submitEmail('');
        $this->assertSelectorExists('.form-error');
    }   
    public function testInexistantEmailResultsInError()
    {
        $this->submitEmail('emailinexistant@vraimentinexistant.us');
        $this->assertSelectorExists('.form-error');
    }
    public function testCorrectEmailRedirectToLogin()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        
        $this->submitEmail('user@gmail.com', 'en');

        $this->assertResponseRedirects($this->urlGenerator->generate('security_login', [
            '_locale' => 'en'
        ]));
        $this->client->followRedirect();
        $this->assertSelectorTextContains('.js-flash-wrapper.success', $this->translator->trans('success.link_sent.reset_password', [], 'messages', 'en'), 'le flash de succès n\'est pas présent');
    }
    public function testResetPasswordTokenAndExpirationDateAreCorrectlySet()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        
        $this->submitEmail('user@gmail.com');

        $user = $this->findUserByEmail('user@gmail.com');
        $this->assertNotNull($user->getResetPasswordToken());
        $this->assertEqualsWithDelta((time() + SiteConfig::TOKEN_TIME_VALIDITY), $user->getResetPasswordTokenExpireAt(), 60);
    }

    /** function resetPassword() */
    /** verification du token */
    public function testIncorrectResetPasswordTokenRedirectToHome()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_resetPassword'), [
            'token' => $this->getUserWithValidToken()->getId() . '==' . 'incorrectToken'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.danger', 'le flash d\'erreur n\'est pas présent');
    }
    public function testExpiredResetPasswordTokenRedirectToHome()
    {
        $userWithExpiredToken = $this->getUserWithExpiredToken($this->client);

        $this->client->request('GET', $this->urlGenerator->generate('security_resetPassword'), [
            'token' => $userWithExpiredToken->getId() . '==' . $userWithExpiredToken->getResetPasswordToken()
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.danger');
    }
    public function testCorrectResetPasswordTokenPageRender()
    {
        $user = $this->getUserWithValidToken();

        $this->client->request('GET', $this->urlGenerator->generate('security_resetPassword'), [
            'token' => $user->getId() . '==' . $user->getResetPasswordToken()
        ]);
        $this->assertResponseIsSuccessful('Le statut de la réponse est !== de 200');
        $this->assertSelectorTextContains('label', $this->translator->trans('new_password', [], 'messages', 'en'));
    }
    /** POST nouveau mot de passe */
    public function testNewPasswordWithInvalidPasswords()
    {
        $this->submitPassword('password', 'otherPassword');
        $this->assertSelectorExists('.password-group .form-error');
    }
    public function testNewPasswordWithInvalidBlankPassword()
    {
        $this->submitPassword('', '');
        $this->assertSelectorExists('.password-group .form-error');
    }
    public function testNewPasswordWithValidPasswordRedirectToLogin()
    {
        $this->submitPassword('password', 'password');
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login'));
        $this->client->followRedirect();
        $this->assertSelectorTextContains('.js-flash-wrapper.success', $this->translator->trans('success.reset_password', [], 'messages', 'en'));
    }
    public function testNewPasswordIsCorrectlyPersisted()
    {
        $user = $this->getUserWithValidToken();
        $this->submitPassword('newpassword', 'newpassword', $user);
        
        $this->tryLogin($user->getEmail(), 'newpassword');
        $this->assertResponseRedirects();
        $this->client->followRedirect();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', substr($this->translator->trans('error.email_not_confirmed', [], 'messages', 'en'), 8, 18));
        $this->assertSelectorTextNotContains('.js-flash-wrapper.danger', $this->translator->trans('error.invalid_credentials', [], 'messages', 'en'));
    }

    /**function changePassword */
    public function  testChangePasswordRedirectsNonAuthenticatedUser()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_changePassword'));
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login'));
    }
    public function testChangePasswordPageRenderWithAuthenticatedUser()
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $user = $this->findUser([], $this->client);
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('security_changePassword'));
        $this->assertResponseIsSuccessful('Le statut de la réponse est !== de 200');
        $this->assertSelectorTextContains('label', $this->translator->trans('old_password', [], 'messages', 'en'));
    }
    public function testChangePasswordWithIncorrectOldPassword()
    {
        $this->loginUserAndTryChangePassword('incorrect_old_password', 'newpassword', 'newpassword');
        $this->assertSelectorExists('.oldPassword-group .form-error');
    }
    public function testChangePasswordWithInvalidNewPassword()
    {
        $this->loginUserAndTryChangePassword('password', 'pass', 'pass');
        $this->assertSelectorExists('.password-group .form-error');
    }
    public function testChangePasswordSuccess()
    {
        $this->loginUserAndTryChangePassword('password', 'newpassword', 'newpassword');
        $this->assertResponseRedirects();
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.success');
    }


    /**helpers */
    private function loginUserAndTryChangePassword(string $oldPassword, string $password, string $passwordConfirm, $lang = 'en')
    {
        $this->loadFixtures([UserTestFixtures::class], $this->client);
        $user = $this->findUserByEmail('user@gmail.com', $this->client);
        $this->client->loginUser($user);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_changePassword'));
        $form = $crawler->selectButton($this->translator->trans('submit.validate', [], 'messages', $lang))->form([
            'change_password[oldPassword]' => $oldPassword,
            'change_password[password]' => $password,
            'change_password[passwordConfirm]' => $passwordConfirm
        ]);
        $this->client->submit($form);
    }

    private function submitEmail(string $email, $lang = 'en')
    {
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_askResetPassword', [
            '_locale' => $lang
        ]));
        
        $form = $crawler->selectButton($this->translator->trans('submit.validate', [], 'messages', $lang))->form([
            'email' => $email
        ]);
        $this->client->submit($form);
    }

    private function submitPassword(string $password, string $passwordConfirm, ?User $user = null, $lang = 'en')
    {
        $user = $user !== null ? $user: $this->getUserWithValidToken();
        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_resetPassword'), [
            'token' => $user->getId() . '==' . $user->getResetPasswordToken()
        ]);
        $form = $crawler->selectButton($this->translator->trans('submit.validate', [], 'messages', $lang))->form([
            'new_password[password]' => $password,
            'new_password[passwordConfirm]' => $passwordConfirm
        ]);
        $this->client->submit($form);
    }
}