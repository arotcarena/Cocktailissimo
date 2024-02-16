import React from 'react';
import { reviewNoteFormater } from '../../functions/formaters';
import { StarFullIcon } from '../Icon/Stars/StarFullIcon';
import { StarHalfIcon } from '../Icon/Stars/StarHalfIcon';
import { StarEmptyIcon } from '../Icon/Stars/StarEmptyIcon';
import { t } from 'i18next';

export const ProductShowReview = ({note, count}) => {

    const countFullStars = Math.floor(note / 10);
    const decimal = note % 10;
    let rest = 5 - countFullStars;

    if(decimal >= 5) {
        rest = rest - 1;
    }

    const htmlParts = [];

    for(let i = 0; i < countFullStars; i++) {
        htmlParts.push(<StarFullIcon />);
    }
    if(decimal >= 5) {
        htmlParts.push(<StarHalfIcon />);
    }
    if(rest !== 0) {
        for(let i = 0; i < rest; i++) {
            htmlParts.push(<StarEmptyIcon />);
        }
    }

    return (
        <div className="product-show-review">
            <span className="text-first">{reviewNoteFormater(note)}</span>
            <div className="stars">
                {
                    htmlParts.map((part, index) => <span key={index}>{part}</span>)
                }
            </div>
            <span className="text-last">({t('count.reviews', {ns: 'messages', count: count})})</span>
        </div>
    )

    
}