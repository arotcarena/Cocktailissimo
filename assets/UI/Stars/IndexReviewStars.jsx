import React from 'react';
import { reviewNoteFormater } from '../../functions/formaters';
import { StarFullIcon } from '../Icon/Stars/StarFullIcon';
import { t } from 'i18next';

export const IndexReviewStars = ({note = null, count = null}) => {
    if(!note) {
        return;
    }
    return (
        <span className="index-review-stars ws-nowrap">
            <span className="index-review-stars-note">{reviewNoteFormater(note)}</span>
            <StarFullIcon />
            <span className="index-review-stars-count">({t('count.reviews', {ns: 'messages', count: count})})</span>
        </span>
    )
}