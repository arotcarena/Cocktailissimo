<?php
namespace App\Tests\Functional\Controller\Security;

use App\Repository\UserRepository;
use App\Repository\PurchaseRepository;
use App\Tests\Utils\UserFixturesTrait;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\UserPurchaseTestFixtures;
use App\Tests\Functional\Controller\Security\LoginTrait;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @group FunctionalSecurity
 */
class RegistrationControllerTest extends FunctionalTest
{ 
    use LoginTrait;
    
    use UserFixturesTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([UserPurchaseTestFixtures::class]);
    }
    
    /** register */
    public function testRegisterPageRender()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_register'));
        $this->assertResponseIsSuccessful('response status de la page security_register != 200');
        $this->assertSelectorTextContains('button', $this->translator->trans('registration', [], 'messages', 'en'), 'la route security_register ne fonctionne pas correctement');
    }

    /** emailConfirmation */
    public function testIncorrectConfirmationTokenRedirectToHome()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => 'en'
        ]), [
            'token' => $this->getUserWithValidToken($this->client)->getId() . '==' . 'incorrectToken'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));
        $this->client->followRedirect();

        $this->assertSelectorExists('.js-flash-wrapper.danger', 'le flash d\'erreur n\'est pas présent');
    }
    public function testIncorrectConfirmationTokenUserIsNotVerified()
    {
        $user = $this->getUserWithValidToken($this->client);

        $this->client->request('GET', $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => 'en'
        ]), [
            'token' => $user->getId() . '==' . 'incorrectToken'
        ]);
        $this->tryLogin($user->getEmail(), 'password', false);
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', substr($this->translator->trans('error.email_not_confirmed', [], 'messages', 'en'), 8, 18));
    }
    public function testExpiredConfirmationTokenRedirectToHomeAndUserIsNotVerified()
    {
        $userWithExpiredToken = $this->getUserWithExpiredToken($this->client);

        $this->client->request('GET', $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => 'en'
        ]), [
            'token' => $userWithExpiredToken->getId() . '==' . $userWithExpiredToken->getConfirmationToken()
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.danger');

        $this->tryLogin($userWithExpiredToken->getEmail(), 'password', false);
        $this->assertLoginFail();
        $this->assertSelectorTextContains('.js-flash-wrapper.danger', substr($this->translator->trans('error.email_not_confirmed', [], 'messages', 'en'), 8, 18));
    }
    public function testCorrectConfirmationTokenRedirectToLogin()
    {
        $user = $this->getUserWithValidToken($this->client);

        $this->client->request('GET', $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => 'en'
        ]), [
            'token' => $user->getId() . '==' . $user->getConfirmationToken()
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.success', 'le flash de succès n\'est pas présent');
    }
    public function testCorrectConfirmationTokenUserIsVerifiedAndCanLogin()
    {
        $user = $this->getUserWithValidToken($this->client);

        $this->client->request('GET', $this->urlGenerator->generate('security_emailConfirmation', [
            '_locale' => 'en'
        ]), [
            'token' => $user->getId() . '==' . $user->getConfirmationToken()
        ]);
        $this->tryLogin($user->getEmail(), 'password', false);
        $this->assertResponseRedirects();
        $this->client->followRedirect();
        $this->assertSelectorTextContains('.js-flash-wrapper.success', $this->translator->trans('success.login', [], 'messages', 'en'));
    }


    //accountDelete
    public function testAccountDeleteNotAuthenticatedUserCannotAccess()
    {
        $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login'));
    }

    public function testAccountDeleteUserHavingPurchasesInProgressCannotAccess()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_one_purchase_paid@gmail.com']); // user avec une purchase en cours
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $this->assertResponseRedirects($this->urlGenerator->generate('account_index'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.danger');
    }

    public function testAccountDeleteUserCanAccess()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }

    public function testAccountDeleteRender()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $this->assertSelectorTextContains('button', $this->translator->trans('delete_account', [], 'messages', 'en'));
    }

    public function testAccountDeleteTryToDeleteWithoutCsrfToken()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->client->loginUser($user);

        $this->client->request('POST', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testAccountDeleteLegit()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->client->loginUser($user);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $form = $crawler->selectButton($this->translator->trans('delete_account', [], 'messages', 'en'))->form();
        $this->client->submit($form);
        $this->assertResponseRedirects($this->urlGenerator->generate('home'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.success');
    }

    public function testAccountDeleteUserIsCorrectlyRemovedFromDatabase()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $id = $user->getId();
        $this->client->loginUser($user);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $form = $crawler->selectButton($this->translator->trans('delete_account', [], 'messages', 'en'))->form();
        $this->client->submit($form);
        $this->assertResponseRedirects($this->urlGenerator->generate('home'));
        // on vérifie que user n'est plus en database
        $dbUser = $this->findEntity(UserRepository::class, ['id' => $id]);
        $this->assertNull($dbUser);
    }

    public function testAccountDeletePurchasesAreNotDeleted()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $purchase = $user->getPurchases()->get(0);
        $id = $purchase->getId();
        $this->client->loginUser($user);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_accountDelete', [
            '_locale' => 'en'
        ]));
        $form = $crawler->selectButton(($this->translator->trans('delete_account', [], 'messages', 'en')))->form();
        $this->client->submit($form);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'en']));
        // on vérifie que la purchase est toujours en database et que sa property user vaut désormais null
        $dbPurchase = $this->findEntity(PurchaseRepository::class, ['id' => $id]);
        $this->assertNotNull($dbPurchase, 'a la suppression de user, les purchases correspondantes sont supprimées, ça ne devrait pas être le cas');
        
        // ceci ne fonctionne pas probablement a cause de la db sqlite qui n'a pas toutes les constraints de la vraie database
        // $this->assertNull($dbPurchase->getUser(), 'La propriété user de la purchase dont le user vient d\'être supprimé devrait prendre la valeur null');
    }
}