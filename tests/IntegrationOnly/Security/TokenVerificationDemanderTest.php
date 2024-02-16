<?php
namespace App\Tests\IntegrationOnly\Security;

use App\DataFixtures\Tests\UserTestFixtures;
use App\Email\Security\AllInOneInitEmail;
use App\Email\Security\ResetPasswordEmail;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Security\TokenVerificationDemander;
use App\Tests\Utils\FixturesTrait;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class TokenVerificationDemanderTest extends KernelTestCase
{
    use FixturesTrait;

    private TokenVerificationDemander $tokenVerificationDemander;

    private AllInOneInitEmail|MockObject $allInOneInitEmail;

    private ResetPasswordEmail|MockObject $resetPasswordEmail;


    public function setUp(): void
    {
        $this->allInOneInitEmail = $this->createMock(AllInOneInitEmail::class);
        $this->resetPasswordEmail = $this->createMock(ResetPasswordEmail::class);

        $this->tokenVerificationDemander = new TokenVerificationDemander(
            $this->allInOneInitEmail,
            $this->resetPasswordEmail,
            static::getContainer()->get(TokenGeneratorInterface::class),
            static::getContainer()->get(EntityManagerInterface::class)
        );

        $this->loadFixtures([UserTestFixtures::class]);
    }

    //demandAllInOneVerification
    public function testDemandAllInOneInitVerificationSetTokensIntoUser()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        $this->tokenVerificationDemander->demandAllInOneInitVerification($user, 'fr');

        $this->assertNotNull($user->getConfirmationToken());
        $this->assertNotNull($user->getResetPasswordToken());
    }
    public function testDemandAllInOneInitVerificationSetCorrectTokenExpirationDatesIntoUser()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        $this->tokenVerificationDemander->demandAllInOneInitVerification($user, 'fr');

        $this->assertNotNull($user->getConfirmationTokenExpireAt());
        $this->assertNotNull($user->getResetPasswordTokenExpireAt());

        $this->assertTrue($user->getConfirmationTokenExpireAt() > (time() + 3600)); //on vérifie que le token expire dans plus d'une heure au minimum
        $this->assertTrue($user->getResetPasswordTokenExpireAt() > (time() + 3600)); //on vérifie que le token expire dans plus d'une heure au minimum
    }
    public function testDemandAllInOneInitVerificationSendEmail()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);

        $this->allInOneInitEmail->expects($this->once())
                                ->method('send');

        $this->tokenVerificationDemander->demandAllInOneInitVerification($user, 'fr');
    }
    public function testDemandAllInOneInitVerificationSendEmailToCorrectUserInCorrectLanguage()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        
        $this->allInOneInitEmail->expects($this->once())
                                ->method('send')
                                ->with($user, 'it')
                                ;

        $this->tokenVerificationDemander->demandAllInOneInitVerification($user, 'it');
    }

    //demandResetPasswordVerification
    public function testDemandResetPasswordVerificationSetTokenIntoUser()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        $this->tokenVerificationDemander->demandResetPasswordVerification($user, 'fr');

        $this->assertNotNull($user->getResetPasswordToken());
    }
    public function testDemandResetPasswordVerificationCorrectTokenExpirationDateIntoUser()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        $this->tokenVerificationDemander->demandResetPasswordVerification($user, 'fr');

        $this->assertNotNull($user->getResetPasswordTokenExpireAt());
        $this->assertTrue($user->getResetPasswordTokenExpireAt() > (time() + 3600)); //on vérifie que le token expire dans plus d'une heure au minimum
    }
    public function testDemandResetPasswordVerificationSendEmailToCorrectUserInCorrectLanguage()
    {
        /** @var User */
        $user = $this->findEntity(UserRepository::class, ['email' => 'user@gmail.com']);
        
        $this->resetPasswordEmail->expects($this->once())
                                ->method('send')
                                ->with($user, 'it')
                                ;

        $this->tokenVerificationDemander->demandResetPasswordVerification($user, 'it');
    }
}