import React from 'react';

import { IndexReviewStars } from '../Stars/IndexReviewStars';

export const ProductIndexReview = ({product, additionalClass}) => {
    if(!product.countReviews) {
        return '';
    }
    return (
        <div className="product-card-review-wrapper">
            <a className={'product-card-review'+ (additionalClass ? ' '+additionalClass: '')} href={product.basePackaging.target+'#reviews'}>
                <IndexReviewStars note={product.reviewNote} count={product.countReviews} />
            </a>
        </div>
    )
}