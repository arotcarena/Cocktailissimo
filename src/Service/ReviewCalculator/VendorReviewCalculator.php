<?php
namespace App\Service\ReviewCalculator;

use App\Entity\User;

class VendorReviewCalculator
{
    public function calculate(User $vendor): void 
    {
        $total = 0;
        $averageCount = 0;
        $totalReviewsCount = 0;
        foreach($vendor->getProducts() as $product)
        {
            if($product->getReviewNote())
            {
                $total += $product->getReviewNote();
                $averageCount += 1;
                $totalReviewsCount += $product->getCountReviews();
            }
        }
        if($averageCount === 0)
        {
            $vendor->setReviewNote(null)
                    ->setCountReviews(0)
                    ;
            return;
        }

        $average = round($total / $averageCount);

        $vendor->setReviewNote((int) $average)
                ->setCountReviews($totalReviewsCount)
                ;
    }
}