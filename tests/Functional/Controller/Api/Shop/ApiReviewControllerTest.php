<?php
namespace App\Tests\Functional\Controller\Api\Shop;

use App\Config\SiteConfig;
use stdClass;
use App\Entity\Review;
use App\Repository\ReviewRepository;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\ReviewTestFixtures;
use App\Repository\PackagingRepository;
use App\Repository\UserRepository;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalApi
 */
class ApiReviewControllerTest extends FunctionalTest 
{

    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([ProductTestFixtures::class, ReviewTestFixtures::class]);
    }

    //show
    public function testShowWithIncorrectReviewId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_review_show', [
            '_locale' => 'en'
        ]), ['id' => '123456789456423']);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testShowReturnCorrectHydratedReview()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['title' => 'review with 5 answers']); // question with admin, vendor, and 8 customer answers

        $this->client->request('GET', $this->urlGenerator->generate('api_review_show', [
            '_locale' => 'en'
        ]), ['id' => $review->getId()]);

        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertNotNull($data->bought);
        $this->assertNotNull(7, $data->canRemove);
        $this->assertNotNull(3, $data->canAnswer);
        $this->assertCount(5, $data->answers);
    }
    public function testShowDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['title' => 'review with 5 answers']); // question with admin, vendor, and 8 customer answers

        $this->client->request('GET', $this->urlGenerator->generate('api_review_show', [
            '_locale' => 'en'
        ]), ['id' => $review->getId()]);

        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(5, $dbCollector->getQueryCount());
    }

    //create
    public function testCreateWithInvalidProductId()
    {
        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => '123456789123',
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidReviewData()));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithInvalidData()
    {
        $product = $this->findEntity(ProductRepository::class);
        $reviewData = $this->createValidReviewData();
        $reviewData->email = 'invalidemail.fr';

        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($reviewData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithValidDataResponseIsSuccessfull()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidReviewData()));

        $this->assertResponseIsSuccessful();
    }

    public function testCreateWithValidDataReviewIsPersisted()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidReviewData()));

        $review = $this->findEntity(ReviewRepository::class, ['email' => 'valid@email.fr']);
        $this->assertNotNull($review);
        $this->assertInstanceOf(Review::class, $review);
    }

    public function testCreateWithSameEmailOnExistingAcceptedReviewAboutSameProduct()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['moderationStatus' => SiteConfig::MODERATION_STATUS_ACCEPTED]);
        $product = $review->getProduct();

        $reviewData = $this->createValidReviewData();
        $reviewData->email = $review->getEmail();

        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($reviewData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);

    }
    public function testCreateWithSameEmailOnExistingPendingReviewAboutSameProduct()
    {
        /** @var Review */        
        $review = $this->findEntity(ReviewRepository::class, ['moderationStatus' => SiteConfig::MODERATION_STATUS_PENDING]);
        $product = $review->getProduct();

        $reviewData = $this->createValidReviewData();
        $reviewData->email = $review->getEmail();

        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($reviewData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    //si la review a été refusée, on autorise le même email à en soumettre une nouvelle
    public function testCreateWithSameEmailOnExistingRefusedReviewAboutSameProduct()
    {
        /** @var Review */        
        $review = $this->findEntity(ReviewRepository::class, ['moderationStatus' => SiteConfig::MODERATION_STATUS_REFUSED]);
        $product = $review->getProduct();

        $reviewData = $this->createValidReviewData();
        $reviewData->email = $review->getEmail();

        $this->client->request('POST', $this->urlGenerator->generate('api_review_create', [
            'productId' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($reviewData));

        $this->assertResponseIsSuccessful();
    }


    // filterByProductId
    public function testFilterByProductIdWithInexistantProductId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByProductId', [
            'productId' => 12345678945678945,
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data->items);
    }
    public function testFilterByProductIdReturnOnlyConfirmedAndModeratedReviews()
    {
        $packaging = $this->findEntity(PackagingRepository::class, ['publicRef' => 'product-with-3-reviews-confirmed-and-moderated']); // produit avec une review confirmed et moderated et les autres soit non confirmed soit mauvais status moderation
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByProductId', [
            'productId' => $packaging->getProduct()->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(3, $data->items);
    }

    public function testFilterByProductIdDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $packaging = $this->findEntity(PackagingRepository::class, ['publicRef' => 'product-with-3-reviews-confirmed-and-moderated']); // produit avec 3 reviews confirmed et moderated et les autres soit non confirmed soit mauvais status moderation
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByProductId', [
            'productId' => $packaging->getProduct()->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(4, $dbCollector->getQueryCount());
    }

    //filterByVendorId
    public function testFilterByVendorIdWithInexistantVendorId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByVendorId', [
            'vendorId' => 12345678945678945,
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data->items);
    }
    public function testFilterByVendorIdReturnOnlyConfirmedAndModeratedReviews()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor-of-product-with-3-reviews-confirmed-and-moderated@gmail.com']); // vendeur du produit avec une review confirmed et moderated et les autres soit non confirmed soit mauvais status moderation
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByVendorId', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(3, $data->items);
    }

    public function testFilterByVendorIdReturnReviewsHydratedWithProducts()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); // vendeur de presque tous les produits de tests (donc beaucoup de reviews associées)
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByVendorId', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertTrue(isset($data->items[0]), 'le test est impossible à réaliser car aucune review pour ce vendeur');
        $review = $data->items[0];
        $this->assertTrue(isset($review->product));
        $this->assertNotNull($review->product->basePackaging->publicRef);
        $this->assertNotNull($review->product->basePackaging->price->priceHT);
    }

    public function testFilterByVendorIdDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); // vendeur de presque tous les produits de tests (donc beaucoup de reviews associées)
        $this->client->request('GET', $this->urlGenerator->generate('api_review_filterByVendorId', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        //on vérifie qu'il y a au moins 3 reviews valides pour ce vendeur
        $this->assertTrue(count($data->items) >= 3, 'Il n\'y a pas assez de reviews valides liées à ce vendeur pour que le test soit probant');

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(6, $dbCollector->getQueryCount());
    }


    //delete
    public function testDeleteWithInvalidReviewId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_review_delete', [
            'id' => 123456789,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteWithNoAutorisation()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['title' => 'review with 5 answers']); // review avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $review->getEmail()]);
        $user = $this->findEntity(UserRepository::class);
        if($user->getId() === $author->getId())
        {
            $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
            if($user->getId() === $author->getId())
            {
                $this->fail('Le test ne sera pas concluant car on se connecte avec le même user que l\'auteur de la review');
            }
        }
        $this->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_review_delete', [
            'id' => $review->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteResponseSuccessfull()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['title' => 'review with 5 answers']); // review avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $review->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_review_delete', [
            'id' => $review->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testDeleteCorrectDeleteReviewFromDatabase()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['title' => 'review with 5 answers']); // review avec email et user configurés correctements (email est celui du User)
        $id = $review->getId();
        $author = $this->findEntity(UserRepository::class, ['email' => $review->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_review_delete', [
            'id' => $id,
            '_locale' => 'en'
        ]));
        $review = $this->findEntity(ReviewRepository::class, ['id' => $id]);
        $this->assertNull($review);
    }

    private function createValidReviewData(): stdClass 
    {
        return (object)[
            'fullName' => 'Jean Michel',
            'email' => 'valid@email.fr',
            'rate' => 3,
            'title' => 'Titre de l\'avis',
            'comment' => 'Commentaire sur le produit'
        ];
    }
}
