import React from 'react';
import { Loader } from '../../../../Icon/Loader';
import { AnswerCard } from '../../Answer/AnswerCard';
import { ImportantAnswer } from '../../Answer/ImportantAnswer';

export const QuestionSummary = ({question, isLoading}) => {


    return (
        <div className="modal-summary-card">
            <div className="review-card-header">
                <div className="review-card-infos">
                    <span>{question.fullName}</span>
                    <span>{question.createdAt}</span>
                </div>
            </div>
            <div className="review-card-body">
                <div className="review-card-body-title">{question.title}</div>
                <div className="review-card-body-content">
                    {question.content}
                </div>
            </div>
            <div className="qa-card-bottom">
                {
                    question.firstAnswers.map(answer => (
                        answer.type === 'customer'
                        ?
                            <AnswerCard key={answer.id} answer={answer} isSummary={true} />
                        :
                            <ImportantAnswer key={answer.id} answer={answer} />
                    ))
                }
                {
                    isLoading && <Loader />
                }
                {
                    question.restAnswers.map(answer => <AnswerCard key={answer.id} answer={answer} isSummary={true} />)
                }
            </div>
        </div>
    )
}