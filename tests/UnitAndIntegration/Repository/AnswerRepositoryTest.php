<?php
namespace App\Tests\UnitAndIntegration\Repository;

use App\Tests\Utils\FixturesTrait;
use App\Repository\AnswerRepository;
use App\DataFixtures\Tests\QuestionTestFixtures;
use App\Helper\ObjectArrayByIdIndexor;
use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class AnswerRepositoryTest extends KernelTestCase
{
    use FixturesTrait;

    private QuestionRepository $questionRepository;

    private AnswerRepository $answerRepository;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->questionRepository = static::getContainer()->get(QuestionRepository::class);
        $this->answerRepository = static::getContainer()->get(AnswerRepository::class);

        $this->loadFixtures([QuestionTestFixtures::class]);
    }

    //hydrateQuestionsWithFirstAnswers
    public function testHydrateQuestionsWithFirstAnswers()
    {
        $questions = $this->questionRepository->findBy(['content' => 'question with adminAnswer & customerAnswer']); // on récupère une seule question, dont on sait qu'elle a une adminAnswer et une customerAnswer
        $questionsById = ObjectArrayByIdIndexor::index($questions);
        $this->answerRepository->hydrateQuestionsWithFirstAnswers($questionsById);

        $this->assertEquals('admin', $questions[0]->getFirstAnswers()[0]->getType());
        $this->assertEquals('customer', $questions[0]->getFirstAnswers()[1]->getType());
    } 
}