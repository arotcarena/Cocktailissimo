<?php
namespace App\Tests\UnitAndIntegration\Service\ReviewCalculator;

use App\Entity\Product;
use App\Entity\User;
use App\Service\ReviewCalculator\VendorReviewCalculator;
use PHPUnit\Framework\TestCase;


/**
 * @group Review
 */
class VendorReviewCalculatorTest extends TestCase
{
    public function testWithVendorHavingNoReviews()
    {
        $vendor = new User;
        $vendor->addProduct(new Product)
                ->addProduct(new Product)
                ->addProduct(new Product);

        (new VendorReviewCalculator)->calculate($vendor);

        $this->assertEquals(null, $vendor->getReviewNote());
        $this->assertEquals(0, $vendor->getCountReviews());
    }

    public function testCalculateNote()
    {
        $vendor = new User;
        $vendor->addProduct(
                    (new Product)
                    ->setReviewNote(47)
                    ->setCountReviews(110)
                )
                ->addProduct(
                    (new Product)
                    ->setReviewNote(20)
                    ->setCountReviews(12)
                )
                ->addProduct(new Product)
                ->addProduct(new Product)
                ->addProduct(
                    (new Product)
                    ->setReviewNote(15)
                    ->setCountReviews(1)
                );

        (new VendorReviewCalculator)->calculate($vendor);

        $this->assertEquals(27, $vendor->getReviewNote()); // 27.3
    }

    public function testCalculateCount()
    {
        $vendor = new User;
        $vendor->addProduct(
                    (new Product)
                    ->setReviewNote(10)
                    ->setCountReviews(110)
                )
                ->addProduct(
                    (new Product)
                    ->setReviewNote(10)
                    ->setCountReviews(50)
                )
                ->addProduct(new Product)
                ->addProduct(new Product)
                ->addProduct(
                    (new Product)
                    ->setReviewNote(10)
                    ->setCountReviews(6)
                )
                ->addProduct(
                    (new Product)
                    ->setReviewNote(10)
                    ->setCountReviews(1)
                );

        (new VendorReviewCalculator)->calculate($vendor);

        $this->assertEquals(167, $vendor->getCountReviews());
    }
}