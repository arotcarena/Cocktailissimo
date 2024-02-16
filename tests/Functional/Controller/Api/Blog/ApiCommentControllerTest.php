<?php
namespace App\Tests\Functional\Controller\Api\Blog;

use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Tests\CommentTestFixtures;
use stdClass;
use App\Tests\Functional\FunctionalTest;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\UserTestFixtures;
use App\Entity\Comment;
use App\Repository\CommentRepository;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

/**
 * @group FunctionalApi
 */
class ApiCommentControllerTest extends FunctionalTest 
{
    use LoginUserTrait;

    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([CommentTestFixtures::class, UserTestFixtures::class, RecipeFixtures::class]);
    }

    public function testCreateWithNotAuthenticatedUser()
    {
        $recipe = $this->findEntity(RecipeRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_comment_create', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidCommentData()));

        $this->assertResponseRedirects(
            $this->urlGenerator->generate('security_login', [
                '_locale' => 'en'
            ])
        );
    }

    public function testCreateWithInvalidOwnerId()
    {
        $this->loginUser();
        $this->client->request('POST', $this->urlGenerator->generate('api_comment_create', [
            'owner' => 'recipe',
            'id' => '1245678975645',
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidCommentData()));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithInvalidData()
    {
        $this->loginUser();
        $recipe = $this->findEntity(RecipeRepository::class);
        $commentData = $this->createValidCommentData();
        $commentData->content = '';

        $this->client->request('POST', $this->urlGenerator->generate('api_comment_create', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($commentData));

        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function testCreateWithValidDataResponseIsSuccessfull()
    {
        $this->loginUser();
        $recipe = $this->findEntity(RecipeRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_comment_create', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidCommentData()));

        $this->assertResponseIsSuccessful();
    }

    public function testCreateWithValidDataCommentIsPersisted()
    {
        $this->loginUser();
        $recipe = $this->findEntity(RecipeRepository::class);
        $this->client->request('POST', $this->urlGenerator->generate('api_comment_create', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [], [], [], json_encode($this->createValidCommentData()));

        $comment = $this->findEntity(CommentRepository::class, ['content' => 'Commentaire de test']);
        $this->assertNotNull($comment);
        $this->assertInstanceOf(Comment::class, $comment);
    }

    // filterByOwner
    public function testFilterByOwnerWithInexistantOwnerId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
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
    public function testFilterByOwnerReturnOnlyCommentsRelatedWithThisOwner()
    {
        $recipe = $this->findEntity(RecipeRepository::class, ['ref' => 'recipe1_for_comment_test']); // comment=fr(2 commentChilds) + comment=en(1 commentChild)  
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
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
        $recipe = $this->findEntity(RecipeRepository::class, ['ref' => 'recipe2_for_comment_test']);// recipe2_for_comment_test comment=es(2 commentChilds) + comment=fr(1 commentChild) 
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [
            'lang' => 'it',
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(0, $data->items);

        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [
            'lang' => 'es',
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data->items);
    }

    public function testFilterByOwnerCommentsAreHydratedWithFirstAnswers()
    {
        $recipe = $this->findEntity(RecipeRepository::class, ['ref' => 'recipe2_for_comment_test']);// recipe2_for_comment_test comment=es(2 commentChilds) + comment=fr(1 commentChild) 
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());
        $comment = $data->items[0];
        $this->assertEquals('full name of last child', $comment->firstAnswers[0]->fullName);
    }

    public function testFilterByOwnerDatabaseQueryCount()
    {
        $recipe = $this->findEntity(RecipeRepository::class, ['ref' => 'recipe2_for_comment_test']);// recipe2_for_comment_test comment=es(2 commentChilds) + comment=fr(1 commentChild) 
        
        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_comment_filterByOwner', [
            'owner' => 'recipe',
            'id' => $recipe->getId(),
            '_locale' => 'en'
        ]), [
            'page' => 1,
            'limit' => 1000,
            'sortBy' => null
        ]);
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        $this->assertEquals(6, $dbCollector->getQueryCount());
    }


    //show
    public function testShowWithIncorrectCommentId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_show', [
            '_locale' => 'en'
        ]), ['id' => '123456789456423']);
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testShowReturnCorrectHydratedComment()
    {
        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment with 4 children']);
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_show', [
            '_locale' => 'en'
        ]), ['id' => $comment->getId()]);

        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount(1, $data->firstAnswers);
        $this->assertCount(3, $data->restAnswers);
    }
    public function testShowDatabaseQueryCount()
    {
        $this->client->enableProfiler();

        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment with 4 children']);
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_show', [
            '_locale' => 'en'
        ]), ['id' => $comment->getId()]);

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');
        //1 requete en plus a cause du findEntity ci dessus
        $this->assertEquals(1 + 1, $dbCollector->getQueryCount());
    }



    //delete
    public function testDeleteWithInvalidCommentId()
    {
        $this->client->request('GET', $this->urlGenerator->generate('api_comment_delete', [
            'id' => 123456789,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteWithNoAutorisation()
    {
        /** @var Comment */
        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment for test delete']); // comment avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $comment->getEmail()]);
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

        $this->client->request('GET', $this->urlGenerator->generate('api_comment_delete', [
            'id' => $comment->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testDeleteResponseSuccessfull()
    {
        /** @var Comment */
        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment for test delete']); // comment avec email et user configurés correctements (email est celui du User)
        $author = $this->findEntity(UserRepository::class, ['email' => $comment->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_comment_delete', [
            'id' => $comment->getId(),
            '_locale' => 'en'
        ]));
        $this->assertResponseIsSuccessful();
    }
    public function testDeleteCorrectDeleteCommentFromDatabase()
    {
        /** @var Comment */
        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment for test delete']); // comment avec email et user configurés correctements (email est celui du User)
        $id = $comment->getId();
        $author = $this->findEntity(UserRepository::class, ['email' => $comment->getEmail()]);
        $this->loginUser($author);

        $this->client->request('GET', $this->urlGenerator->generate('api_comment_delete', [
            'id' => $id,
            '_locale' => 'en'
        ]));
        $comment = $this->findEntity(CommentRepository::class, ['id' => $id]);
        $this->assertNull($comment);
    }

    private function createValidCommentData(): stdClass 
    {
        return (object)[
            'content' => 'Commentaire de test',
        ];
    }
}
