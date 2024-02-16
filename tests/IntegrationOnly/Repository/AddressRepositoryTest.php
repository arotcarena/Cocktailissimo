<?php
namespace App\Tests\IntegrationOnly\Repository;

use App\DataFixtures\Tests\AddressTestFixtures;
use App\Entity\Address;
use App\Entity\User;
use App\Repository\AddressRepository;
use App\Repository\UserRepository;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class AddressRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private AddressRepository $addressRepository;

    private EntityManagerInterface $em;

    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->addressRepository = static::getContainer()->get(AddressRepository::class);
        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $this->loadFixtures([AddressTestFixtures::class]);
    }

    public function testFindLastAddressCountryWithUserHavingNoAddress()
    {
        $lastAddressCountry = $this->addressRepository->findLastAddressCountryByUser($this->getUserWithoutAddresses());
        $this->assertNull($lastAddressCountry);
    }

    public function testFindLastAddressCountryWithUserHavingOneAddress()
    {
        $user = $this->getUserWithoutAddresses();
        $address = $this->findEntity(AddressRepository::class);
        $country = $address->getCountry();

        $user->addAddress($address);
        $this->em->flush();

        $lastAddressCountry = $this->addressRepository->findLastAddressCountryByUser($user);
        $this->assertEquals($country, $lastAddressCountry);
    }

    public function testFindLastAddressCountryWithUserHavingVariousAddresses()
    {
        $user = $this->getUserWithoutAddresses();
        /** @var Address[] */
        $addresses = $this->addressRepository->findAll();
        $address1 = $addresses[0];
        $address2 = $addresses[1];

        $user->addAddress($address1)->addAddress($address2);
        $this->em->flush();

        $expectedCountry = $address1->getCreatedAt()->format('Y:m:d H:i:s') > $address2->getCreatedAt()->format('Y:m:d H:i:s') ? $address1->getCountry(): $address2->getCountry();

        $lastAddressCountry = $this->addressRepository->findLastAddressCountryByUser($user);
        $this->assertEquals($expectedCountry, $lastAddressCountry);
    }

    private function getUserWithoutAddresses(): User 
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $userId = $user->getId();
        foreach($user->getAddresses() as $address)
        {
            $this->em->remove($address);
        }
        $this->em->flush();

        /** @var User */
        $updatedUser = $this->findEntity(UserRepository::class, ['id' => $userId]);
        $this->assertEquals(0, $updatedUser->getAddresses()->count());

        return $updatedUser;
    }
}