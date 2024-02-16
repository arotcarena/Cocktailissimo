<?php
namespace App\Tests\UnitAndIntegration\Verificator;

use App\Entity\Product;
use App\Entity\Review;
use App\Repository\ReviewRepository;
use App\Verificator\UniqueEmailOnReviewAboutSameProductVerificator;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group Verificator
 */
class UniqueEmailOnReviewAboutSameProductVerificatorTest extends TestCase
{
    private MockObject|ReviewRepository $reviewRepository;

    private UniqueEmailOnReviewAboutSameProductVerificator $uniqueEmailVerificator;

    public function setUp(): void 
    {
        $this->reviewRepository = $this->createMock(ReviewRepository::class);

        $this->uniqueEmailVerificator = new UniqueEmailOnReviewAboutSameProductVerificator($this->reviewRepository);
    }

    public function testWithNotUniqueEmail()
    {
        $product = new Product;

        $this->reviewRepository->expects($this->once())
                                ->method('findOneByProductAndEmailExceptedRefusedStatus')
                                ->with($product, 'email@mail.fr')
                                ->willReturn(new Review)
                                ;
        
        $this->assertFalse(
            $this->uniqueEmailVerificator->verify($product, 'email@mail.fr')
        );
    }

    public function testWithUniqueEmail()
    {
        $product = new Product;

        $this->reviewRepository->expects($this->once())
                                ->method('findOneByProductAndEmailExceptedRefusedStatus')
                                ->with($product, 'email@mail.fr')
                                ->willReturn(null)
                                ;
        
        $this->assertTrue(
            $this->uniqueEmailVerificator->verify($product, 'email@mail.fr')
        );
    }
}