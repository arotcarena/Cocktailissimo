<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Comment;
use App\Repository\AnswerRepository;
use App\Verificator\LimitEmailOnAnswerAboutSameCommentVerificator;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * @group Verificator
 */
class LimitEmailOnAnswerAboutSameCommentVerificatorTest extends TestCase
{
    private MockObject|AnswerRepository $answerRepository;

    private LimitEmailOnAnswerAboutSameCommentVerificator $limitEmailVerificator;

    public function setUp(): void 
    {
        $this->answerRepository = $this->createMock(AnswerRepository::class);

        $this->limitEmailVerificator = new LimitEmailOnAnswerAboutSameCommentVerificator($this->answerRepository);
    }

    public function testWithOverLimitEmail()
    {
        $comment = new Comment;

        $this->answerRepository->expects($this->once())
                                ->method('countByCommentAndEmail')
                                ->with($comment, 'email@mail.fr')
                                ->willReturn(3)
                                ;
        
        $this->assertFalse(
            $this->limitEmailVerificator->verify($comment, 'email@mail.fr', 3)
        );
    }

    public function testWithUnderLimitEmail()
    {
        $comment = new Comment;

        $this->answerRepository->expects($this->once())
                                ->method('countByCommentAndEmail')
                                ->with($comment, 'email@mail.fr')
                                ->willReturn(2)
                                ;
        
        $this->assertTrue(
            $this->limitEmailVerificator->verify($comment, 'email@mail.fr', 3)
        );
    }
}