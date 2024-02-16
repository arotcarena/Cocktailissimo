import React from 'react';
import { IndexReviewStars } from '../../../../../../UI/Stars/IndexReviewStars';


export const VendorProductReview = ({product, additionalClass}) => {
    if(!product.countReviews) {
        return '';
    }
    return (
        <div className="product-card-review-wrapper">
            <a className={'product-card-review'+ (additionalClass ? ' '+additionalClass: '')} href={product.target+'#reviews'}>
                <IndexReviewStars note={product.reviewNote} count={product.countReviews} />
            </a>
        </div>
    )
}