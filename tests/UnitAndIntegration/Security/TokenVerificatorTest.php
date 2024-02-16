<?php
namespace App\Tests\UnitAndIntegration\Security;

use App\DataFixtures\Tests\ReviewTestFixtures;
use App\DataFixtures\Tests\UserWithTokenTestFixtures;
use App\Entity\Review;
use App\Entity\User;
use App\Repository\ReviewRepository;
use App\Repository\UserRepository;
use App\Security\TokenVerificator;
use App\Tests\Utils\UserFixturesTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Security
 * 
 * Les tests sont fait avec User mais ça marcherait pareil avec un autre objet
 */
class TokenVerificatorTest extends KernelTestCase
{
    use UserFixturesTrait;

    private TokenVerificator $tokenVerificator;

    private UserRepository $userRepository;

    private ReviewRepository $reviewRepository;

    public function setUp(): void 
    {
        parent::setUp();

        $this->tokenVerificator = static::getContainer()->get(TokenVerificator::class);

        $this->userRepository = static::getContainer()->get(UserRepository::class);

        $this->reviewRepository = static::getContainer()->get(ReviewRepository::class);


        $this->loadFixtures([UserWithTokenTestFixtures::class, ReviewTestFixtures::class]);
    }

    public function testInvalidTokenAndIncorrectId()
    {
        $this->assertNull(
            $this->tokenVerificator->resolve('invalid_token', 'confirmationToken', $this->userRepository)
        );
        $this->assertNull(
            $this->tokenVerificator->resolve('invalid_token', 'resetPasswordToken', $this->userRepository)
        );
        $this->assertNull(
            $this->tokenVerificator->resolve('invalid_token', 'confirmationToken', $this->reviewRepository)
        );
    }
    public function testInvalidTokenButCorrectId()
    {
        $user = $this->getUserWithValidToken(null, false);
        
        $fullToken = $user->getId() . '==invalid_token';
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->userRepository)
        );
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'resetPasswordToken', $this->userRepository)
        );
        
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $fullToken = $review->getId() . '==invalid_token';
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->reviewRepository)
        );
    }
    public function testExpiredToken()
    {
        $user = $this->getUserWithExpiredToken(null, false);

        $fullToken = $user->getId() . '=='. $user->getConfirmationToken();
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->userRepository)
        );
        $fullToken = $user->getId() . '=='. $user->getResetPasswordToken();
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'resetPasswordToken', $this->userRepository)
        );

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_expired_confirmation_token@mail.fr']);

        $fullToken = $review->getId() . $review->getConfirmationToken();
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->reviewRepository)
        );
    }
    
    // parfois ce test échoue car le tokenExpireAt est créé avec une valeur inférieure à time (pourquoi ??? aucune idée mais ça revient tout seul à la normale)
    public function testValidToken()
    {
        $user = $this->getUserWithValidToken(null, false);
        $fullToken = $user->getId() . '=='. $user->getConfirmationToken();
        $this->assertInstanceOf(
            User::class,
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->userRepository)
        );
        $fullToken = $user->getId() . '=='. $user->getResetPasswordToken();
        $this->assertInstanceOf(
            User::class,
            $this->tokenVerificator->resolve($fullToken, 'resetPasswordToken', $this->userRepository)
        );

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $fullToken = $review->getId() . $review->getConfirmationToken();
        $this->assertNull(
            $this->tokenVerificator->resolve($fullToken, 'confirmationToken', $this->reviewRepository)
        );
    }

}