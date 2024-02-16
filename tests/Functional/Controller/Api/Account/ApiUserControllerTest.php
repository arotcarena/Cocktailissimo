<?php
namespace App\Tests\Functional\Controller\Api\Account;

use App\Config\SiteConfig;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\Company;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;

/**
 * @group FunctionalApi
 */
class ApiUserControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    private User $user;

    private User $pro;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([UserTestFixtures::class]); // depends on UserTestFixtures & ProductTestFixtures

        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $user->setCivility(SiteConfig::CIVILITY_F)
            ->setFirstName('testFirstName')
            ->setLastName('testLastName')
            ;
        
        $this->user = $user;

        /** @var User */
        $pro = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        $pro->setCivility(SiteConfig::CIVILITY_M)
            ->setFirstName('testproFirstName')
            ->setLastName('testproLastName')
            ->setConfirmed(true)
            ->setRoles(['ROLE_USER', 'ROLE_PRO'])
            ->setCompany(
                (new Company)
                ->setUser($pro)
                ->setSocialName('social name')
                ->setIdentificationNumber('123456789')
                ->setCountry('FR')
            )
            ;
        
        $this->pro = $pro;

        /** @var EntityManagerInterface */
        $em = $this->client->getContainer()->get(EntityManagerInterface::class);
        $em->flush();
    }

    //getLightUser
    public function testGetLightUserWithRoleUserReturnsArrayWithCorrectKeys()
    {
        $this->loginUser($this->user);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getLightUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            ['id', 'email', 'civility', 'firstName', 'lastName', 'phone', 'roles', 'stripeConfirmed'],
            array_keys(get_object_vars($data))
        );
    }
    public function testGetLightUserWithRoleProReturnsArrayWithCorrectKeys()
    {
        $this->loginUser($this->pro);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getLightUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            ['id', 'email', 'civility', 'firstName', 'lastName', 'phone', 'roles', 'stripeConfirmed', 'company'],
            array_keys(get_object_vars($data))
        );

        $this->assertEquals(
            ['id', 'usualName', 'slug', 'logo'],
            array_keys(get_object_vars($data->company))
        );
    }
    public function testGetLightUserWithRoleUserReturnsCorrectValues()
    {
        $this->loginUser($this->user);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getLightUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            SiteConfig::CIVILITY_F,
            $data->civility
        );
        $this->assertEquals(
            'testFirstName',
            $data->firstName
        );
        $this->assertEquals(
            'testLastName',
            $data->lastName
        );
    }
    public function testGetLightUserWithRoleproReturnsCorrectValues()
    {
        $this->loginUser($this->pro);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getLightUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            'testproFirstName',
            $data->firstName
        );
        $this->assertEquals(
            'social name',
            $data->company->usualName
        );
    }

    //getFullUser
    public function testGetFullUserWithRoleUserReturnsArrayWithCorrectKeys()
    {
        $this->loginUser($this->user);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getFullUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            ['id', 'email', 'civility', 'firstName', 'lastName', 'phone', 'roles', 'stripeConfirmed'],
            array_keys(get_object_vars($data))
        );
    }
    public function testGetFullUserWithRoleProCompanyReturnsArrayWithCorrectKeys()
    {
        $this->loginUser($this->pro);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getFullUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            ['id', 'email', 'civility', 'firstName', 'lastName', 'phone', 'roles', 'stripeConfirmed', 'company'],
            array_keys(get_object_vars($data))
        );

        $this->assertEquals(
            ['id', 'usualName', 'slug', 'logo', 'socialName', 'identificationNumber', 'country', 'vatNumber'],
            array_keys(get_object_vars($data->company))
        );
    }
    public function testGetFullUserWithRoleUserReturnsCorrectValues()
    {
        $this->loginUser($this->user);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getFullUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            SiteConfig::CIVILITY_F,
            $data->civility
        );
        $this->assertEquals(
            'testFirstName',
            $data->firstName
        );
        $this->assertEquals(
            'testLastName',
            $data->lastName
        );
    }
    public function testGetFullUserWithRoleProReturnsCorrectValues()
    {
        $this->loginUser($this->pro);

        $this->client->request('GET', $this->urlGenerator->generate('api_user_getFullUser', ['_locale' => 'en']));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(
            'testproFirstName',
            $data->firstName
        );
        $this->assertEquals(
            'social name',
            $data->company->socialName
        );
        $this->assertEquals(
            '123456789',
            $data->company->identificationNumber
        );
    }


    //setCivilState
    public function testSetCivilStateWithIncorrectCivilityData()
    {
        $this->loginUser($this->user);
        
        $this->client->request('POST', $this->urlGenerator->generate('api_user_setCivilState', ['_locale' => 'en']), [], [], [], json_encode([
            'civility' => 'inexistant_civility',
            'firstName' => 'jean',
            'lastName' => 'claude'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
        $this->assertNotNull(json_decode($this->client->getResponse()->getContent())->errors);
    }
    public function testSetCivilStateWithIncorrectFirstNameValue()
    {
        $this->loginUser($this->user);
        
        $this->client->request('POST', $this->urlGenerator->generate('api_user_setCivilState', ['_locale' => 'en']), [], [], [], json_encode([
            'civility' => SiteConfig::CIVILITY_M,
            'firstName' => ['salut', 'salut'],
            'lastName' => 'claude'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
        $this->assertNotNull(json_decode($this->client->getResponse()->getContent())->errors);
    }
    public function testSetCivilStateCorrectPersist()
    {
        $this->loginUser($this->user);
        
        $id = $this->user->getId();
        $this->client->request('POST', $this->urlGenerator->generate('api_user_setCivilState', ['_locale' => 'en']), [], [], [], json_encode([
            'civility' => SiteConfig::CIVILITY_M,
            'firstName' => 'Jules',
            'lastName' => 'César',
            'phone' => null
        ]));
        $this->assertResponseIsSuccessful();
        $updatedUser = $this->findEntity(UserRepository::class, ['id' => $id]);
        $this->assertNotNull($updatedUser);
        $this->assertEquals(
            SiteConfig::CIVILITY_M, $updatedUser->getCivility()
        );
        $this->assertEquals(
            'Jules', $updatedUser->getFirstName()
        );
        $this->assertEquals(
            'César', $updatedUser->getLastName()
        );
    }

    //setCompany
    public function testSetCompanyWithIncorrectData()
    {
        $this->loginUser($this->pro);
        
        $this->client->request('POST', $this->urlGenerator->generate('api_user_setCompany', ['_locale' => 'en']), [], [], [], json_encode([
            'socialName' => ['array', 'array'],
            'commercialName' => 'commercial name',
            'identificationNumber' => '123456789',
            'country' => 'FR',
            'vatNumber' => '0123456789',
            'logo' => ''
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testSetCompanyCorrectPersist()
    {
        $this->loginUser($this->pro);
        
        $id = $this->pro->getId();
        $this->client->request('POST', $this->urlGenerator->generate('api_user_setCompany', ['_locale' => 'en']), [], [], [], json_encode([
            'socialName' => 'new social name',
            'commercialName' => 'new commercial name',
            'identificationNumber' => '11',
            'country' => 'GB',
            'vatNumber' => '00',
            'logo' => ''
        ]));
        $this->assertResponseIsSuccessful();
        /** @var User */
        $updatedUser = $this->findEntity(UserRepository::class, ['id' => $id]);
        $company = $updatedUser->getCompany();
        $this->assertNotNull($company);
        $this->assertEquals(
            'new social name', $company->getSocialName()
        );
        $this->assertEquals(
            '11', $company->getIdentificationNumber()
        );
        $this->assertEquals(
            'GB', $company->getCountry()
        );
        $this->assertEquals(
            'new commercial name', $company->getCommercialName()
        );
        $this->assertEquals(
            '00', $company->getVatNumber()
        );
    }
    
}