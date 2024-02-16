<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\DataFixtures\Tests\QuestionTestFixtures;
use App\Tests\Utils\FixturesTrait;
use App\Form\DataModel\SearchParams;
use App\Repository\ProductRepository;
use App\Helper\ObjectArrayByIdIndexor;
use App\Repository\QuestionRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class QuestionRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private QuestionRepository $questionRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->questionRepository = static::getContainer()->get(QuestionRepository::class);

        $this->loadFixtures([QuestionTestFixtures::class]);
    }

    //filterByOwner
    public function testfilterByOwnerReturnQuestionAnswersHydratedWithFirstAnswers()
    {
        $product = $this->findEntity(ProductRepository::class, ['basePublicRef' => 'product_for_question_test']); // The question=fr(adminAnswer, customerAnswer) + The question 2=en(customerAnswer * 2)   lang = fr
        /** @var PaginationInterface */
        $pagination = $this->questionRepository->filterByOwner(
            'product',
            $product->getId(),
            (new SearchParams)->setPage(1)->setLimit(1000)->setLang('fr') // fr pour sélectionner uniquement la questionAnswer "The question", qui possède une adminAnswer
        );

        $firstAnswers = $pagination->getItems()[0]->getFirstAnswers();
        $this->assertNotNull($firstAnswers);
        $this->assertEquals('admin', $firstAnswers[0]->getType());
    } 

    //hydrateWithCountAnswers
    public function testHydrateWithCountAnswers()
    {
        $questionAnswers = $this->questionRepository->findBy(['content' => 'question with 1 customerAnswer']); // seule question avec une seule réponse
        $questionAnswersById = (new ObjectArrayByIdIndexor)->index($questionAnswers);
        $this->questionRepository->hydrateWithCountAnswers($questionAnswersById);

        $this->assertEquals(1, $questionAnswers[0]->getCountAnswers());
    }
}