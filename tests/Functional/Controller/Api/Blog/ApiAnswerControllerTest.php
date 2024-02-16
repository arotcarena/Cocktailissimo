<?php
namespace App\Tests\Functional\Controller\Api\Blog;

use App\DataFixtures\Tests\AnswerTestFixtures;
use App\DataFixtures\Tests\CommentTestFixtures;
use App\DataFixtures\Tests\QuestionTestFixtures;
use App\DataFixtures\Tests\ReviewTestFixtures;
use stdClass;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\Answer;
use App\Entity\Question;
use App\Entity\Review;
use App\Repository\AnswerRepository;
use App\Repository\CommentRepository;
use App\Repository\QuestionRepository;
use App\Repository\ReviewRepository;
use App\Repository\UserRepository;
use App\Tests\Functional\LoginUserTrait;

/**
 * @group FunctionalApi
 */
class ApiAnswerControllerTest extends FunctionalTest 
{
    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([QuestionTestFixtures::class, UserTestFixtures::class, ReviewTestFixtures::class, CommentTestFixtures::class, AnswerTestFixtures::class]);
    }

    //create
    public function testCreateWithNotAuthenticatedUser()
    {
        $question = $this->findEntity(QuestionRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseRedirects(
            $this->urlGenerator->generate('security_login', [
                '_locale' => 'en'
            ])
        );
    }

    public function testCreateWithInvalidOwnerId()
    {
        $this->loginUser();
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => '123456456456123',
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithInvalidData()
    {
        $this->loginUser();
        $question = $this->findEntity(QuestionRepository::class);
        $answerData = $this->createValidAnswerData();
        $answerData->content = '';

        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($answerData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithValidDataResponseIsSuccessfull()
    {
        $this->loginUser();
        $question = $this->findEntity(QuestionRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseIsSuccessful();
    }

    public function testCreateWithValidDataAnswerIsPersisted()
    {
        $this->loginUser();
        $question = $this->findEntity(QuestionRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertInstanceOf(Answer::class, $answer);
    }

    public function testCreateWithCommentAsOwner()
    {
        $this->loginUser();
        $comment = $this->findEntity(CommentRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'comment',
            'ownerId' => $comment->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseIsSuccessful();

        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertInstanceOf(Answer::class, $answer);
    }

    public function testCreateWithReviewAsOwner()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class);
        $vendor = $review->getProduct()->getVendor();
        $this->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'review',
            'ownerId' => $review->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseIsSuccessful();

        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertInstanceOf(Answer::class, $answer);
    }

    public function testCreateReviewAnswerWhileNotBeingTheVendor()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $this->loginUser($user);

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class);

        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'review',
            'ownerId' => $review->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateCorrectAnswerTypeIsSetWhenAdminLogged()
    {
        $admin = $this->findEntity(UserRepository::class, ['email' => 'admin@gmail.com']);
        $this->loginUser($admin);

        $comment = $this->findEntity(CommentRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'comment',
            'ownerId' => $comment->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertEquals('admin', $answer->getType());
    }

    public function testCreateCorrectAnswerTypeIsSetWhenVendorLogged()
    {
        /** @var Question */
        $question = $this->findEntity(QuestionRepository::class, ['title' => 'question_for_test_max_answers']); // question portant sur un Product
        $vendor = $question->getProduct()->getVendor();
        $this->loginUser($vendor);

        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertEquals('vendor', $answer->getType());
    }

    public function testCreateCorrectAnswerTypeIsSetWhenCustomerLogged()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'confirmed_user@gmail.com']);
        $this->loginUser($user);

        $question = $this->findEntity(QuestionRepository::class);

        $this->client->request('POST', $this->urlGenerator->generate('api_answer_create', [
            'ownerClass' => 'question',
            'ownerId' => $question->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidAnswerData()));

        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['content' => 'ma réponse de test']);
        $this->assertNotNull($answer);
        $this->assertEquals('customer', $answer->getType());
    }


    //delete
    public function testDeleteWithInvalidAnswerId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_answer_delete', [
            'id' => 123456789,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteWithNoAutorisation()
    {
        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['fullName' => 'answer for test delete']); // answer avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $answer->getEmail()]);
        $user = $this->findEntity(UserRepository::class);
        if($user->getId() === $author->getId())
        {
            $this->fail('Le test ne sera pas concluant car on se connecte avec le même user que l\'auteur de la review');
        }
        $this->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_answer_delete', [
            'id' => $answer->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteResponseSuccessfull()
    {
        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['fullName' => 'answer for test delete']); // comment avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $answer->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_answer_delete', [
            'id' => $answer->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testDeleteCorrectDeleteAnswerFromDatabase()
    {
        /** @var Answer */
        $answer = $this->findEntity(AnswerRepository::class, ['fullName' => 'answer for test delete']); // comment avec email et user configurés correctements (email est celui du User)
        $id = $answer->getId();
        $author = $this->findEntity(UserRepository::class, ['email' => $answer->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_answer_delete', [
            'id' => $id,
            '_locale' => 'en'
        ]));
        $answer = $this->findEntity(AnswerRepository::class, ['id' => $id]);
        $this->assertNull($answer);
    }


    private function createValidAnswerData(): stdClass 
    {
        return (object)[
            'content' => 'ma réponse de test'
        ];
    }
}
