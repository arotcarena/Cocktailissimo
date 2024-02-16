<?php
namespace App\Tests\Functional\Controller\Api\Shop;

use stdClass;
use App\Repository\ProductRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use App\DataFixtures\Tests\UserTestFixtures;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\ProductTestFixtures;
use App\DataFixtures\Tests\QuestionTestFixtures;
use App\Entity\Question;
use App\Repository\QuestionRepository;
use App\Repository\UserRepository;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalApi
 */
class ApiQuestionControllerTest extends FunctionalTest 
{
    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([QuestionTestFixtures::class, UserTestFixtures::class, ProductTestFixtures::class]);
    }

    public function testCreateWithNotAuthenticatedUser()
    {
        $product = $this->findEntity(ProductRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_question_create', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidQuestionData()));

        $this->assertResponseRedirects(
            $this->urlGenerator->generate('security_login', [
                '_locale' => 'en'
            ])
            );
    }

    public function testCreateWithInvalidOwnerId()
    {
        $this->loginUser();
        $this->client->request('POST', $this->urlGenerator->generate('api_question_create', [
            'owner' => 'product',
            'id' => '123456789456126',
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidQuestionData()));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithInvalidData()
    {
        $this->loginUser();
        $product = $this->findEntity(ProductRepository::class);
        $questionData = $this->createValidQuestionData();
        $questionData->content = '';

        $this->client->request('POST', $this->urlGenerator->generate('api_question_create', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($questionData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithValidDataResponseIsSuccessfull()
    {
        $this->loginUser();
        $product = $this->findEntity(ProductRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_question_create', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidQuestionData()));

        $this->assertResponseIsSuccessful();
    }

    public function testCreateWithValidDataQuestionIsPersisted()
    {
        $this->loginUser();
        $product = $this->findEntity(ProductRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_question_create', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidQuestionData()));

        $question = $this->findEntity(QuestionRepository::class, ['content' => 'Corps de la question']);
        $this->assertNotNull($question);
        $this->assertInstanceOf(Question::class, $question);
    }

    // filterByOwner
    public function testFilterByOwnerWithInexistantOwnerId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [
            'owner' => 'product',
            'id' => 12345678945678945,
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data->items);
    }

    public function testFilterByOwnerReturnOnlyQuestionRelatedWithThisOwner()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product_for_question_test']); // question=fr(adminAnswer, customerAnswer) + question=en(customerAnswer * 2)  
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(2, $data->items);
    }
    public function testFilterByOwnerLangFilter()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product2_for_question_test']); // question=en(customerAnswer) + question=es(10 * answer)
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'lang' => 'it',
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data->items);

        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'lang' => 'en',
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data->items);
    }

    public function testFilterByOwnerQFilter()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product_for_question_test']); // The question=fr(adminAnswer, customerAnswer) + The question 2=en(customerAnswer * 2)   lang = fr
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [           
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'q' => 'estion 2',
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data->items);
        $this->assertEquals(
            'The question 2',
            $data->items[0]->title
        );
    }

    public function testFilterByOwnerQuestionsAreHydratedWithFirstAnswers()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product_for_question_test']); // The question=fr(adminAnswer, customerAnswer) + The question 2=en(customerAnswer * 2)   lang = fr
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [           
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'limit' => 1000,
            'lang' => 'fr' // pour récupérer seulement la question "The question"
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $question = $data->items[0];
        $this->assertEquals('admin', $question->firstAnswers[0]->type);
        $this->assertEquals('customer', $question->firstAnswers[1]->type);
    }

    public function testFilterByOwnerDatabaseQueryCount()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product_with_3_questions_with_5_vendor_answers']); // question=fr(adminAnswer, customerAnswer) + question=en(customerAnswer * 2)  
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByOwner', [
            'owner' => 'product',
            'id' => $product->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        /* 1 a déduire pour le findEntity */
        $this->assertEquals(1 + 6, $dbCollector->getQueryCount());
    }


    //filterByVendor
    public function testFilterByVendorWithInexistantVendorId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByVendor', [
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
    public function testFilterByVendorReturnOnlyQuestionsRelatedWithVendorsProducts()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); // vendeur de quasiment tous les produits (donc normalement beaucoup de questions associées)
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByVendor', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertTrue(count($data->items) > 3, 'le test n\'est pas probant car il n\'y a pas assez de questions liées au vendeur');

        for($i = 0; $i < count($data->items); $i++)
        {
            if($i > 5)
            {
                break;
            }
            $question = $data->items[$i];
            $product = $this->findEntity(ProductRepository::class, ['id' => $question->product->id]);
            $this->assertEquals($vendor->getId(), $product->getVendor()->getId());
        }
    }

    public function testFilterByVendorReturnQuestionsHydratedWithProducts()
    {
        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); // vendeur de quasiment tous les produits (donc normalement beaucoup de questions associées)
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByVendor', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        $this->assertTrue(isset($data->items[0]), 'le test est impossible à réaliser car aucune question pour ce vendeur');
        $question = $data->items[0];
        $this->assertTrue(isset($question->product));
        $this->assertNotNull($question->product->basePackaging->publicRef);
        $this->assertNotNull($question->product->basePackaging->price->priceHT);
    }

    public function testFilterByVendorDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $vendor = $this->findEntity(UserRepository::class, ['email' => 'vendor_for_tests@mail.com']); // vendeur de quasiment tous les produits (donc normalement beaucoup de questions associées)
        $this->client->request('GET', $this->urlGenerator->generate('api_question_filterByVendor', [
            'vendorId' => $vendor->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        //on vérifie qu'il y a au moins 3 reviews valides pour ce vendeur
        $this->assertTrue(count($data->items) >= 3, 'Il n\'y a pas assez de questions liées à ce vendeur pour que le test soit probant');

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertLessThanOrEqual(8, $dbCollector->getQueryCount());
    }


    //show
    public function testShowWithIncorrectQuestionId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_question_show', [
            '_locale' => 'en'
        ]), ['id' => '123456789456423']);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testShowReturnCorrectHydratedQuestion()
    {
        $question = $this->findEntity(QuestionRepository::class, ['title' => 'question_for_test_max_answers']); // question with admin, vendor, and 8 customer answers
        $this->client->request('GET', $this->urlGenerator->generate('api_question_show', [
            '_locale' => 'en'
        ]), ['id' => $question->getId()]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(10, $data->countAnswers);
        $this->assertEquals(7, $data->countRestAnswers);
        $this->assertCount(3, $data->firstAnswers);
        $this->assertCount(7, $data->restAnswers);
    }
    public function testShowDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $question = $this->findEntity(QuestionRepository::class, ['title' => 'question_for_test_max_answers']); // question with admin, vendor, and 8 customer answers
        $this->client->request('GET', $this->urlGenerator->generate('api_question_show', [
            '_locale' => 'en'
        ]), ['id' => $question->getId()]);
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        //1 requete en plus a cause du findEntity ci dessus
        $this->assertLessThanOrEqual(5, $dbCollector->getQueryCount());
    }

    //delete
    public function testDeleteWithInvalidQuestionId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_question_delete', [
            'id' => 123456789,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteWithNoAutorisation()
    {
        /** @var Question */
        $question = $this->findEntity(QuestionRepository::class);
        $author = $this->findEntity(UserRepository::class, ['email' => $question->getEmail()]);
        $user = $this->findEntity(UserRepository::class);
        if($user->getId() === $author->getId())
        {
            $this->fail('Le test ne sera pas concluant car on se connecte avec le même user que l\'auteur de la question');
        }
        $this->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_question_delete', [
            'id' => $question->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteResponseSuccessfull()
    {
        /** @var Question */
        $question = $this->findEntity(QuestionRepository::class);
        $author = $this->findEntity(UserRepository::class, ['email' => $question->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_question_delete', [
            'id' => $question->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testDeleteCorrectDeleteQuestionFromDatabase()
    {
        /** @var Question */
        $question = $this->findEntity(QuestionRepository::class);
        $id = $question->getId();
        $author = $this->findEntity(UserRepository::class, ['email' => $question->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_question_delete', [
            'id' => $id,
            '_locale' => 'en'
        ]));
        $question = $this->findEntity(QuestionRepository::class, ['id' => $id]);
        $this->assertNull($question);
    }

    
    private function createValidQuestionData(): stdClass 
    {
        return (object)[
            'title' => 'Titre de la question',
            'content' => 'Corps de la question'
        ];
    }
}
