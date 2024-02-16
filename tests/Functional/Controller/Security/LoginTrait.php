<?php
namespace App\Tests\Functional\Controller\Security;

use Symfony\Contracts\Translation\TranslatorInterface;

trait LoginTrait 
{
    public function tryLogin(string $email, string $password, $lang = 'en')
    {
        $translator = $this->client->getContainer()->get(TranslatorInterface::class);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('security_login'));
        $form = $crawler->selectButton($translator->trans('login', [], 'messages', $lang))->form([
            'email' => $email,
            'password' => $password
        ]);
        $this->client->submit($form);
    }

    public function assertLoginFail()
    {
        $this->assertResponseRedirects($this->urlGenerator->generate('security_login'));
        $this->client->followRedirect();
        $this->assertSelectorExists('.js-flash-wrapper.danger');
    }
}