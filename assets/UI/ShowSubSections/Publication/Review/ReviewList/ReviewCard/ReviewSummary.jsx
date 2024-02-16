import React from 'react';
import { SuccessIcon } from '../../../../../Icon/SuccessIcon';
import { AnswerCard } from '../../../Answer/AnswerCard';
import { ImportantAnswer } from '../../../Answer/ImportantAnswer';
import { ReviewStars } from './ReviewStars';
import { t } from 'i18next';

export const ReviewSummary = ({review}) => {
    
    return (
        <li className="review-card">
            <div className="review-card-header">
                <div className="review-card-header-left">
                    <ReviewStars review={review} />
                    <div className="review-card-infos">
                        <span>{review.fullName}</span>
                        <span>{review.createdAt}</span>
                    </div>
                </div>
                {
                    review.bought && (
                        <div className="review-card-header-right">
                            <SuccessIcon />
                            <span>{t('verified_purchase', {ns: 'messages'})}</span>
                        </div>
                    )
                }
            </div>
            <div className="review-card-body">
                <div className="review-card-body-title">{review.title}</div>
                <div className="review-card-body-content">
                    {review.comment}
                </div>
            </div>
            <div className="qa-card-bottom review-card-bottom">
                {
                    review.answers && review.answers.map(answer => {
                        if(answer.type === 'customer') {
                            return <AnswerCard key={answer.id} answer={answer} isSummary={true} />
                        }
                        return <ImportantAnswer key={answer.id} answer={answer} isSummary={true} />
                    })
                }
            </div>
        </li>
    )
}