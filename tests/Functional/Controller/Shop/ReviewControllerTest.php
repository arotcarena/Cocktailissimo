<?php
namespace App\Tests\Functional\Controller\Shop;

use App\Entity\Product;
use App\Entity\Purchase;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\ORM\EntityManagerInterface;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\ReviewTestFixtures;
use App\Entity\Review;
use App\Repository\ReviewRepository;

/**
 * @group FunctionalShop
 */
class ReviewControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    public function setUp(): void
    {
        parent::setUp();

        $this->loadFixtures([PurchaseTestFixtures::class, ReviewTestFixtures::class]);  // depends on UserTestFixtures & ProductTestFixtures
    }

    //confirmation
    public function testConfirmationWithInvalidToken()
    {
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => '123456789==confirmation_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==invalid_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));
    }
    public function testConfirmationWithInvalidTokenReviewIsNotConfirmed()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $id = $review->getId();
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==invalid_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['id' => $id]);
        $this->assertFalse($review->isConfirmed());
    }
    public function testConfirmationWithValidTokenCorrectRedirects()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));
    }
    public function testConfirmationWithValidTokenCorrectReviewUpdate()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $this->assertFalse($review->isConfirmed());

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertTrue($review->isConfirmed());
    }
    public function testConfirmationRedirectsWithCorrectLocaleWhenSuccess()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'es']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertResponseRedirects(
            $this->urlGenerator->generate('home', [
                '_locale' => 'es'
            ])
        );
    }
    public function testConfirmationRedirectsWithCorrectLocaleWhenFail()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'fr']), [
            'token' => $review->getId() . '==invalid_token',
        ]);
        $this->assertResponseRedirects(
            $this->urlGenerator->generate('home', [
                '_locale' => 'fr'
            ])
        );
    }
}