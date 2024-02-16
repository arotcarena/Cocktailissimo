import React from 'react';
import { SuccessIcon } from '../../../../../Icon/SuccessIcon';
import { AnswerCard } from '../../../Answer/AnswerCard';
import { ImportantAnswer } from '../../../Answer/ImportantAnswer';
import { useRemover } from '../../../../../../CustomHook/remover/useRemover';
import { PublicationRemover } from '../../../PublicationRemover';
import { Modal } from '../../../../../Container/Modal';
import { AnswerCreate } from '../../../Answer/AnswerCreate';
import { ReviewStars } from './ReviewStars';
import { useOpenState } from '../../../../../../CustomHook/state/useOpenState';
import { ReviewSummary } from './ReviewSummary';
import { FormButton } from '../../../../../Form/FormButton';
import { FormTopProductCard } from '../../../FormTopCard/FormTopProductCard';
import { useTranslation } from 'react-i18next';

export const ReviewCard = ({review, deleteReview, createAnswer, deleteAnswer, product = null}) => {
    const {t} = useTranslation('messages');

    //Answer FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    //remove
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();

    return (
        <li className={'review-card' + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            {
                !product && <FormTopProductCard product={review.product} />
            }
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
                            <span>{t('verified_purchase')}</span>
                        </div>
                    )
                }
            </div>
            <div className="review-card-body">
                <div className="review-card-body-title">{review.title}</div>
                <div className="review-card-body-content">
                    {review.comment}
                </div>
                {
                    review.canRemove && (
                        <PublicationRemover 
                            id={review.id}
                            deletePublication={() => deleteReview(review.id)}
                            confirmationIsOpen={confirmationIsOpen}
                            openConfirmation={openConfirmation}
                            closeConfirmation={closeConfirmation}
                            isRemoving={isRemoving}
                            setRemoving={setRemoving}                                
                        />
                    )
                }
            </div>
            <div className="qa-card-bottom review-card-bottom">
                {
                    review.answers && review.answers.map(answer => {
                        if(answer.type === 'customer') {
                            return <AnswerCard key={answer.id} ownerId={review.id} answer={answer} deleteAnswer={deleteAnswer} />
                        }
                        return <ImportantAnswer key={answer.id} ownerId={review.id} answer={answer} deleteAnswer={deleteAnswer} />
                    })
                }
            </div>
            {
                review.canAnswer && (
                    <div className="qa-card-footer">
                        <Modal additionalClass="answer-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                            <AnswerCreate 
                                createAnswer={createAnswer}
                                ownerId={review.id}
                                ownerTopCard={<FormTopProductCard product={product ?? review.product} />}
                                close={closeForm} 
                                verifyLogin={false}  //pas besoin de vérifier le login car le bouton answerCreate apparait uniquement si c'est le bon vendeur qui est connecté
                                >
                                <ReviewSummary review={review} />
                            </AnswerCreate>
                        </Modal>
                        <FormButton onClick={openForm} additionalClass="bordeaux-grey create-form-small-button">
                            {t('submit.answer')}
                        </FormButton>
                    </div>
                )
            }
        </li>
    )
}
