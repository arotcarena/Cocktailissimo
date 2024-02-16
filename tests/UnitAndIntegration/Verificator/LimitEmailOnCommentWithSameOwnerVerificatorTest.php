<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Recipe;
use App\Repository\CommentRepository;
use PHPUnit\Framework\TestCase;
use App\Verificator\LimitEmailOnCommentWithSameOwnerVerificator;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * @group Verificator
 */
class LimitEmailOnCommentWithSameOwnerVerificatorTest extends TestCase
{
    private MockObject|CommentRepository $commentRepository;

    private LimitEmailOnCommentWithSameOwnerVerificator $limitEmailVerificator;

    public function setUp(): void 
    {
        $this->commentRepository = $this->createMock(CommentRepository::class);

        $this->limitEmailVerificator = new LimitEmailOnCommentWithSameOwnerVerificator($this->commentRepository);
    }

    public function testWithOverLimitEmail()
    {
        $recipe = new Recipe;

        $this->commentRepository->expects($this->once())
                                ->method('countByOwnerAndEmail')
                                ->with($recipe, 'email@mail.fr')
                                ->willReturn(3)
                                ;
        
        $this->assertFalse(
            $this->limitEmailVerificator->verify($recipe, 'email@mail.fr', 3)
        );
    }

    public function testWithUnderLimitEmail()
    {
        $recipe = new Recipe;

        $this->commentRepository->expects($this->once())
                                ->method('countByOwnerAndEmail')
                                ->with($recipe, 'email@mail.fr')
                                ->willReturn(2)
                                ;
        
        $this->assertTrue(
            $this->limitEmailVerificator->verify($recipe, 'email@mail.fr', 3)
        );
    }
}