import React from 'react';
import { Loader } from '../../../../Icon/Loader';
import { AnswerCard } from '../../Answer/AnswerCard';
import { ImportantAnswer } from '../../Answer/ImportantAnswer';

export const CommentSummary = ({comment, isLoading}) => {

    return (
        <div className="modal-summary-card">
            <div className="review-card-header">
                <div className="review-card-infos">
                    <span>{comment.fullName}</span>
                    <span>{comment.createdAt}</span>
                </div>
            </div>
            <div className="review-card-body">
                <div className="review-card-body-content">
                    {comment.content}
                </div>
            </div>
            <div className="qa-card-bottom">
                {
                    comment.firstAnswers.map(answer => (
                        answer.type === 'customer'
                        ?
                            <AnswerCard key={answer.id} answer={answer} isSummary={true} />
                        :
                            <ImportantAnswer key={answer.id} answer={answer} isSummary={true} />
                    ))
                }
                {
                    isLoading && <Loader />
                }
                {
                    comment.restAnswers.map(answer => (
                        answer.type === 'customer'
                        ?
                            <AnswerCard key={answer.id} answer={answer} isSummary={true} />
                        :
                            <ImportantAnswer key={answer.id} answer={answer} isSummary={true} />
                    ))
                }
            </div>
        </div>
    )
}