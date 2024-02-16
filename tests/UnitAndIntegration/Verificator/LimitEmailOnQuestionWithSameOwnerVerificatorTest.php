<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Product;
use PHPUnit\Framework\TestCase;
use App\Repository\QuestionRepository;
use PHPUnit\Framework\MockObject\MockObject;
use App\Verificator\LimitEmailOnQuestionAnswerWithSameOwnerVerificator;
use App\Verificator\LimitEmailOnQuestionWithSameOwnerVerificator;

/**
 * @group Verificator
 */
class LimitEmailOnQuestionWithSameOwnerVerificatorTest extends TestCase
{
    private MockObject|QuestionRepository $questionRepository;

    private LimitEmailOnQuestionWithSameOwnerVerificator $limitEmailVerificator;

    public function setUp(): void 
    {
        $this->questionRepository = $this->createMock(QuestionRepository::class);

        $this->limitEmailVerificator = new LimitEmailOnQuestionWithSameOwnerVerificator($this->questionRepository);
    }

    public function testWithOverLimitEmail()
    {
        $product = new Product;

        $this->questionRepository->expects($this->once())
                                ->method('countByOwnerAndEmail')
                                ->with($product, 'email@mail.fr')
                                ->willReturn(3)
                                ;
        
        $this->assertFalse(
            $this->limitEmailVerificator->verify($product, 'email@mail.fr', 3)
        );
    }

    public function testWithUnderLimitEmail()
    {
        $product = new Product;

        $this->questionRepository->expects($this->once())
                                ->method('countByOwnerAndEmail')
                                ->with($product, 'email@mail.fr')
                                ->willReturn(2)
                                ;
        
        $this->assertTrue(
            $this->limitEmailVerificator->verify($product, 'email@mail.fr', 3)
        );
    }
}