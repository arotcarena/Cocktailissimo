import React from 'react';
import { StarFullIcon } from '../../../../../Icon/Stars/StarFullIcon';
import { StarEmptyIcon } from '../../../../../Icon/Stars/StarEmptyIcon';

export const ReviewStars = ({review}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if(i <= review.rate) {
            stars.push(<StarFullIcon key={i} />)
        } else {
            stars.push(<StarEmptyIcon key={i} />)
        }
    }

    return (
        <div className="review-card-stars">
            {
                stars
            }
        </div>
    );
}