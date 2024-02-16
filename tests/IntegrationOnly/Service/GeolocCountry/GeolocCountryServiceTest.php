<?php
namespace App\Tests\IntegrationOnly\Service\GeolocCountry;

use App\DataFixtures\Tests\AddressTestFixtures;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\Address;
use App\Entity\User;
use App\Helper\IpResolver;
use App\Repository\AddressRepository;
use App\Repository\UserRepository;
use App\Service\GeolocCountry\GeoIpCountryResolver;
use App\Service\GeolocCountry\GeolocCountryService;
use App\Service\GeolocCountry\GeolocCountryStorage;
use App\Tests\Functional\LoginUserTrait;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Contracts\Translation\TranslatorInterface;

class GeolocCountryServiceTest extends KernelTestCase
{
    use FixturesTrait;

    use LoginUserTrait;

    private GeolocCountryService $geolocCountryService;

    private GeolocCountryStorage|MockObject $geolocCountryStorage;
    
    private GeoIpCountryResolver|MockObject $geoIpCountryResolver;

    private Security|MockObject $security;

    private EntityManagerInterface $em;

    
    public function setUp(): void
    {
        parent::setUp();

        self::bootKernel();

        $this->geolocCountryStorage = $this->createMock(GeolocCountryStorage::class);
        $this->geoIpCountryResolver = $this->createMock(GeoIpCountryResolver::class);
        $this->em = static::getContainer()->get(EntityManagerInterface::class);
        $this->security = $this->createMock(Security::class);

        $this->geolocCountryService = new GeolocCountryService(
            $this->geolocCountryStorage,
            $this->security,
            static::getContainer()->get(AddressRepository::class),
            $this->geoIpCountryResolver,
            new IpResolver,
            static::getContainer()->get(TranslatorInterface::class)
        );

        $this->loadFixtures([UserTestFixtures::class, AddressTestFixtures::class]);
    }

    public function testHandleRequestWithExistingGeolocCountryAndNoForceGeolocParamDoNothing()
    {
        $this->geolocCountryStorage->expects($this->any())->method('get')->willReturn('FR');
        $this->geolocCountryStorage->expects($this->never())->method('set');

        $this->geolocCountryService->handleRequest(new Request());
    }

    public function testHandleRequestWithExistingGeolocCountryAndForceGeolocParamDoUpdateGeoloc()
    {
        $this->geolocCountryStorage->expects($this->any())->method('get')->willReturn('FR');
        $this->geolocCountryStorage->expects($this->once())->method('set')->with('ES');

        $request = new Request(['force_country' => 'ES']);

        $this->geolocCountryService->handleRequest($request);
    }

    public function testHandleRequestWithLoggedUserHavingAddress()
    {
        $user = $this->getUserWithoutAddresses();
        /** @var Address[] */
        $addresses = static::getContainer()->get(AddressRepository::class)->findAll();
        $address1 = $addresses[0];
        $address2 = $addresses[1];

        $user->addAddress($address1)->addAddress($address2);
        $this->em->flush();

        $expectedCountry = $address1->getCreatedAt()->format('Y:m:d H:i:s') > $address2->getCreatedAt()->format('Y:m:d H:i:s') ? $address1->getCountry(): $address2->getCountry();

        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        $this->geolocCountryStorage->expects($this->any())->method('get')->willReturn(null);
        $this->geolocCountryStorage->expects($this->once())->method('set')->with($expectedCountry);

        $this->geolocCountryService->handleRequest(new Request());
    }

    public function testHandleRequestWithNoUserLogged()
    {
        $this->security->expects($this->any())->method('getUser')->willReturn(null);
        $this->geolocCountryStorage->expects($this->any())->method('get')->willReturn(null);

        $this->geoIpCountryResolver->expects($this->once())->method('resolve')->with('0123456789')->willReturn('IT');
        $this->geolocCountryStorage->expects($this->once())->method('set')->with('IT');

        $this->geolocCountryService->handleRequest(new Request([], [], [], [], [], ['REMOTE_ADDR' => '0123456789']));
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