<?php 
namespace App\Tests\UnitAndIntegration\Service\ReviewCalculator;

use App\Config\SiteConfig;
use App\Entity\Product;
use App\Entity\Review;
use App\Service\ReviewCalculator\ProductReviewCalculator;
use PHPUnit\Framework\TestCase;


/**
 * @group Review
 */
class ProductReviewCalculatorTest extends TestCase
{
    private ProductReviewCalculator $productReviewCalculator;

    public function setUp(): void 
    {
        $this->productReviewCalculator = new ProductReviewCalculator;
    }

    public function testCountWithProductHavingNoReviews()
    {
        $product = new Product;
        $this->productReviewCalculator->calculate($product);

        $this->assertEquals(null, $product->getReviewNote());
        $this->assertEquals(0, $product->getCountReviews());
    }

    public function testCountCorrectSetReviewNote()
    {
        $product = $this->createProductWithReviews();

        $this->productReviewCalculator->calculate($product);

        $this->assertEquals(37, $product->getReviewNote());
    }

    public function testCountCorrectSetCountReviews()
    {
        $product = $this->createProductWithReviews();

        $this->productReviewCalculator->calculate($product);

        $this->assertEquals(3, $product->getCountReviews());
    }

    public function testCountConsiderOnlyAcceptedReviews()
    {
        $product = $this->createProductWithReviews()
                        ->addReview(
                            (new Review)
                            ->setRate(3)
                            ->setModerationStatus(SiteConfig::MODERATION_STATUS_PENDING)
                        )
                        ->addReview(
                            (new Review)
                            ->setRate(4)
                            ->setModerationStatus(SiteConfig::MODERATION_STATUS_REFUSED)
                        );
        $this->productReviewCalculator->calculate($product);

        $this->assertEquals(37, $product->getReviewNote());
        $this->assertEquals(3, $product->getCountReviews());
    }

    private function createProductWithReviews(): Product
    {
        return (new Product)
                ->addReview(
                    (new Review)
                    ->setRate(2)
                    ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                )
                ->addReview(
                    (new Review)
                    ->setRate(4)
                    ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                )
                ->addReview(
                    (new Review)
                    ->setRate(5)
                    ->setModerationStatus(SiteConfig::MODERATION_STATUS_ACCEPTED)
                );
    }
}