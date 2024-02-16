<?php
namespace App\Tests\Functional\Controller\Api\Contact;

use App\Config\SiteConfig;
use App\Entity\VendorContact;
use App\Repository\CategoryRepository;
use App\Repository\ContactRepository;
use App\Repository\SubCategoryRepository;
use App\Repository\VendorContactRepository;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;

class ApiContactControllerTest extends FunctionalTest
{
    //basicContact
    public function testBasicContactWithInvalidContactData()
    {
        $data = $this->createValidContactData();
        $data['firstName'] = '';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_basicContact', [
            '_locale' => 'en'
        ]), $data);

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testBasicContactWithValidContactDataResponseIsSuccessfull()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_basicContact', [
            '_locale' => 'en'
        ]), $this->createValidContactData());

        $this->assertResponseIsSuccessful();
    }

    public function testBasicContactWithValidContactDataContactIsPersisted()
    {
        $data = $this->createValidContactData();
        $email = $data['email'];
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_basicContact', [
            '_locale' => 'en'
        ]), $data);

        $contact = $this->findEntity(ContactRepository::class, ['email' => $email]);
        $this->assertNotNull($contact);
    }

    //vendorContact
    public function testVendorContactWithInvalidContactData()
    {
        $data = $this->createValidVendorContactData();
        $data['companyName'] = '';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'en'
        ]), $data);

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testVendorContactWithValidContactDataResponseIsSuccessfull()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'en'
        ]), $this->createValidVendorContactData());

        $this->assertResponseIsSuccessful();
    }

    public function testVendorContactReturnCorrectTarget()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'it'
        ]), $this->createValidVendorContactData());

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertEquals(
            $this->urlGenerator->generate('home', [
                '_locale' => 'it'
            ]),
            $data
        );
    }

    public function testVendorContactWithValidContactDataContactIsPersisted()
    {
        $data = $this->createValidVendorContactData();
        $data['email'] = 'vendor_contact_for_persistance_test@mail.com';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'en'
        ]), $data);

        $contact = $this->findEntity(VendorContactRepository::class, ['email' => 'vendor_contact_for_persistance_test@mail.com']);
        $this->assertNotNull($contact);
    }

    public function testVendorContactSetCorrectLang()
    {
        $data = $this->createValidVendorContactData();
        $data['email'] = 'vendor_contact_for_lang_test@mail.com';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'it'
        ]), $data);

        $contact = $this->findEntity(VendorContactRepository::class, ['email' => 'vendor_contact_for_lang_test@mail.com']);
        $this->assertEquals('it', $contact->getLang());
    }

    public function testVendorContactCorrectSetSocialAddress()
    {
        $data = $this->createValidVendorContactData();
        $data['email'] = 'vendor_contact_for_social_address_test@mail.com';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'en'
        ]), $data);

        /** @var VendorContact */
        $contact = $this->findEntity(VendorContactRepository::class, ['email' => 'vendor_contact_for_social_address_test@mail.com']);
        $socialAddress = $contact->getSocialAddress();
        $this->assertEquals('social address line one', $socialAddress->getLineOne());
        $this->assertEquals('13000', $socialAddress->getPostcode());
        $this->assertEquals('Marseille', $socialAddress->getCity());
        $this->assertEquals('FR', $socialAddress->getCountry());
    }

    public function testVendorContactCorrectSetSenderAddress()
    {
        $data = $this->createValidVendorContactData();
        $data['email'] = 'vendor_contact_for_sender_address_test@mail.com';
        $this->client->request('GET', $this->urlGenerator->generate('api_contact_vendorContact', [
            '_locale' => 'en'
        ]), $data);

        /** @var VendorContact */
        $contact = $this->findEntity(VendorContactRepository::class, ['email' => 'vendor_contact_for_sender_address_test@mail.com']);
        $senderAddress = $contact->getSenderAddress();
        $this->assertEquals('sender address line one', $senderAddress->getLineOne());
        $this->assertEquals('01000', $senderAddress->getPostcode());
        $this->assertEquals('London', $senderAddress->getCity());
        $this->assertEquals('GB', $senderAddress->getCountry());
    }

    private function createValidContactData(): array
    {
        return [
            'civility' => SiteConfig::CIVILITY_M,
            'email' => 'valid@email.com',
            'firstName' => 'John',
            'lastName' => 'Doe',
            'message' => 'Hello'
        ];
    }
    private function createValidVendorContactData(): array
    {
        return [
            'civility' => SiteConfig::CIVILITY_M,
            'firstName' => 'John',
            'lastName' => 'Doe',
            'email' => 'valid@email.com',

            'companyName' => 'Company',
            'identificationNumber' => '123456789',
            
            'socialAddress_lineOne' => 'social address line one',
            'socialAddress_postcode' => '13000',
            'socialAddress_city' => 'Marseille',
            'socialAddress_country' => 'FR',
            
            'senderAddress_lineOne' => 'sender address line one',
            'senderAddress_postcode' => '01000',
            'senderAddress_city' => 'London',
            'senderAddress_country' => 'GB',
            
            'whyBecomeVendor' => 'Because',
            
            'category' => $this->findEntity(CategoryRepository::class)->getId(),
            'subCategory' => $this->findEntity(SubCategoryRepository::class)->getId(),
        ];
    }
}