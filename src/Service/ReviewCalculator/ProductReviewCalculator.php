<?php
namespace App\Service\ReviewCalculator;

use App\Config\SiteConfig;
use App\Entity\Product;

class ProductReviewCalculator
{
    public function calculate(Product $product): void 
    {
        $reviews = $product->getReviews();

        $total = 0;
        $count = 0;
        foreach($reviews as $review)
        {
            if($review->getModerationStatus() === SiteConfig::MODERATION_STATUS_ACCEPTED)
            {
                $total += $review->getRate();
                $count += 1;
            }
        }

        if($count === 0)
        {
            $product->setReviewNote(null)
                    ->setCountReviews(0)
                    ;
            return;
        }

        $total = $total * 10;  //pour avoir un entier
        $average = $total / $count;
        $averageRounded = (int) round($average);

        $product->setReviewNote($averageRounded)
                ->setCountReviews($count)
                ;
    }
}