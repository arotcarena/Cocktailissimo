<?php
namespace App\Verificator;

use App\Entity\Product;
use App\Repository\ReviewRepository;

class UniqueEmailOnReviewAboutSameProductVerificator 
{
    public function __construct(
        private ReviewRepository $reviewRepository
    )
    {

    }

    /**
     * @param Product $product
     * @param string $email
     * @return boolean true = valide, false = invalide
     */
    public function verify(Product $product, string $email): bool 
    {
        $existingReview = $this->reviewRepository->findOneByProductAndEmailExceptedRefusedStatus($product, $email);
        if($existingReview)
        {
            return false;
        }
        return true;
    }
}