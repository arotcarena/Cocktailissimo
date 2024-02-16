<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Question;
use PHPUnit\Framework\TestCase;
use App\Repository\AnswerRepository;
use App\Verificator\LimitEmailOnAnswerAboutSameQuestionVerificator;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * @group Verificator
 */
class LimitEmailOnAnswerAboutSameQuestionVerificatorTest extends TestCase
{
    private MockObject|AnswerRepository $answerRepository;

    private LimitEmailOnAnswerAboutSameQuestionVerificator $limitEmailVerificator;

    public function setUp(): void 
    {
        $this->answerRepository = $this->createMock(AnswerRepository::class);

        $this->limitEmailVerificator = new LimitEmailOnAnswerAboutSameQuestionVerificator($this->answerRepository);
    }

    public function testWithOverLimitEmail()
    {
        $questionAnswer = new Question;

        $this->answerRepository->expects($this->once())
                                ->method('countByQuestionAndEmail')
                                ->with($questionAnswer, 'email@mail.fr')
                                ->willReturn(3)
                                ;
        
        $this->assertFalse(
            $this->limitEmailVerificator->verify($questionAnswer, 'email@mail.fr', 3)
        );
    }

    public function testWithUnderLimitEmail()
    {
        $questionAnswer = new Question;

        $this->answerRepository->expects($this->once())
                                ->method('countByQuestionAndEmail')
                                ->with($questionAnswer, 'email@mail.fr')
                                ->willReturn(2)
                                ;
        
        $this->assertTrue(
            $this->limitEmailVerificator->verify($questionAnswer, 'email@mail.fr', 3)
        );
    }
}