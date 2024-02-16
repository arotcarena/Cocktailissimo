import React from 'react';
import { ReviewForm } from './ReviewForm';
import { t } from 'i18next';




export const ReviewCreate = ({ownerTopCard, createReview, close}) => {

    return (
        <div className="review-form-wrapper">
            {ownerTopCard}
            <h3 className="review-form-title">{t('my_review', {ns: 'messages'})}</h3>
            <ReviewForm close={close} createReview={createReview} />
        </div>
    )
}