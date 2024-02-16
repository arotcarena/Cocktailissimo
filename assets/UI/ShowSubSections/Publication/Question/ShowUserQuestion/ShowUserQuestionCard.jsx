import React from 'react';
import { AnswerCard } from '../../Answer/AnswerCard';
import { ImportantAnswer } from '../../Answer/ImportantAnswer';
import { FormTopRecipeCard } from '../../FormTopCard/FormTopRecipeCard';
import { FormTopProductCard } from '../../FormTopCard/FormTopProductCard';

export const ShowUserQuestionCard = ({question}) => {
    return (
        <div className="modal-summary-card">
            {
                question.recipe && <FormTopRecipeCard recipe={question.recipe} />
            }
            {
                question.product && <FormTopProductCard product={question.product} />
            }
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
                            <ImportantAnswer key={answer.id} answer={answer} removeIsOpen={false} />
                    ))
                }
                {
                    question.restAnswers.map(answer => <AnswerCard key={answer.id} answer={answer} isSummary={true} />)
                }
            </div>
        </div>
    )
}