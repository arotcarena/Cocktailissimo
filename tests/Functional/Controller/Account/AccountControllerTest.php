<?php
namespace App\Tests\Functional\Controller\Account;

use App\Tests\Functional\FunctionalTest;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Tests\Functional\LoginUserTrait;

/**
 * @group FunctionalAccount
 */
class AccountControllerTest extends FunctionalTest
{
    use LoginUserTrait;


    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([UserTestFixtures::class]);
    }


    public function testNotLoggedUserIsRedirectedToLogin()
    {
        $this->client->request('GET', $this->urlGenerator->generate('account_index', ['_locale' => 'en']));
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login', ['_locale' => 'en']));
    }
    public function testUserCanAccess()
    {
        $this->loginUser();
        $this->client->request('GET', $this->urlGenerator->generate('account_index', ['_locale' => 'en']));
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', $this->translator->trans('my_account', [], 'messages', 'en'));
    }
}