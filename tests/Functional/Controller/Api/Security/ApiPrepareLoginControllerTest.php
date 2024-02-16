<?php
namespace App\Tests\Functional\Api\Security;

use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Symfony\Component\HttpFoundation\Response;

class ApiPrepareLoginControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    //beforeCreatePrepareLogin
    public function testPrepareLoginWithLoggedUser()
    {
        $this->loginUser();
        $this->client->request('POST', $this->urlGenerator->generate('api_security_prepareLogin', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'targetPath' => 'https://target_path.com'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testPrepareLoginReturnCorrectLoginUrl()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_security_prepareLogin', [
            '_locale' => 'en'
        ]), [], [], [], json_encode([
            'targetPath' => 'https://target_path.com'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            $this->urlGenerator->generate('security_login', ['_locale' => 'en']),
            $data
        );
    }
    public function testPrepareLoginReturnCorrectLoginUrlLang()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_security_prepareLogin', [
            '_locale' => 'fr'
        ]), [], [], [], json_encode([
            'targetPath' => 'https://target_path.com'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            $this->urlGenerator->generate('security_login', ['_locale' => 'fr']),
            $data
        );
    }
    public function testPrepareLoginWithoutTargetPathParam()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_security_prepareLogin', [
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            $this->urlGenerator->generate('security_login', ['_locale' => 'en']),
            $data
        );
    }
    
}