<?php
namespace App\Tests\IntegrationOnly\Security;

use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\PasswordFailureManager;
use App\Tests\Utils\FixturesTrait;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Contracts\Translation\TranslatorInterface;

class PasswordFailureManagerTest extends KernelTestCase
{
    use FixturesTrait;

    private PasswordFailureManager $passwordFailureManager;

    public function setUp(): void
    {
        parent::setUp();

        $this->passwordFailureManager = new PasswordFailureManager(
            static::getContainer()->get(EntityCountAdder::class),
            static::getContainer()->get(EntityManagerInterface::class),
            static::getContainer()->get(TranslatorInterface::class),
            static::getContainer()->get(UserRepository::class)
        );

        $this->loadFixtures([UserTestFixtures::class]);
    }

    public function testHandlePasswordFailureAddOneCountPasswordFailureToUserWhenHavingCountPasswordFailureNull()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $this->assertNull($user->getCountPasswordFailures());

        $this->passwordFailureManager->handlePasswordFailure($user);

        $this->assertEquals(1, $user->getCountPasswordFailures());
    }
    public function testHandlePasswordFailureAddOneCountPasswordFailureToUserWhenHavingCountPasswordFailureNotNull()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $user->setCountPasswordFailures(3);

        $this->passwordFailureManager->handlePasswordFailure($user);

        $this->assertEquals(4, $user->getCountPasswordFailures());
    }
    public function testHandlePasswordFailureCountPasswordFailureChangeIsPersisted()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $user->setCountPasswordFailures(4);
        $id = $user->getId();
        $this->passwordFailureManager->handlePasswordFailure($user);

        $updatedUser = $this->findEntity(UserRepository::class, ['id' => $id]);
        $this->assertEquals(5, $updatedUser->getCountPasswordFailures());
    }

    public function testResetCountPasswordFailureCorrectResetCount()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $user->setCountPasswordFailures(4);
        $this->passwordFailureManager->resetCountPasswordFailures($user);

        $this->assertNull($user->getCountPasswordFailures());
    }
    public function testResetCountPasswordFailurePersistResetedCount()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class);
        $user->setCountPasswordFailures(4);
        $id = $user->getId();
        $this->passwordFailureManager->resetCountPasswordFailures($user);

        $updatedUser = $this->findEntity(UserRepository::class, ['id' => $id]);
        $this->assertNull($updatedUser->getCountPasswordFailures());
    }
}