<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\DataFixtures\Blog\RecipeFixtures;
use App\DataFixtures\Tests\CommentTestFixtures;
use App\Tests\Utils\FixturesTrait;
use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Repository\QuestionAnswerRepository;
use App\DataFixtures\Tests\QuestionAnswerTestFixtures;
use App\Helper\ObjectArrayByIdIndexor;
use App\Repository\CommentRepository;
use App\Repository\RecipeRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CommentRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private CommentRepository $commentRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->commentRepository = static::getContainer()->get(CommentRepository::class);

        $this->loadFixtures([CommentTestFixtures::class]);
    }

    //filterByOwner
    public function testfilterByOwnerReturnQuestionAnswersHydratedWithFirstAnswers()
    {
        $recipe = $this->findEntity(RecipeRepository::class, ['ref' => 'recipe2_for_comment_test']); // recipe2_for_comment_test comment=es(2 commentChilds) + comment=fr(1 commentChild) 
        /** @var PaginationInterface */
        $pagination = $this->commentRepository->filterByOwner(
            'recipe',
            $recipe->getId(),
            (new SearchParams)->setPage(1)->setLimit(1000)->setLang('es') // fr pour sélectionner uniquement le 1er comment
        );

        $firstAnswers = $pagination->getItems()[0]->getFirstAnswers();
        $this->assertNotNull($firstAnswers);
        $this->assertEquals('full name of last child', $firstAnswers[0]->getFullName());
    } 

    //hydrateWithCountAnswers
    public function testHydrateWithCountAnswers()
    {
        $comment = $this->findEntity(CommentRepository::class, ['fullName' => 'comment with 4 children']);
        $commentsById = [
            $comment->getId() => $comment
        ];
        $this->commentRepository->hydrateWithCountAnswers($commentsById);

        $this->assertEquals(4, $comment->getCountAnswers());
    }
}