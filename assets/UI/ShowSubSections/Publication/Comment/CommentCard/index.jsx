import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../../../../Icon/Loader';
import { useOpenState } from '../../../../../CustomHook/state/useOpenState';
import { FormButton } from '../../../../Form/FormButton';
import { Modal } from '../../../../Container/Modal';
import { ExpandMoreIcon } from '../../../../Icon/ExpandMoreIcon';
import { AnswerCard } from '../../Answer/AnswerCard';
import { AnswerCreate } from '../../Answer/AnswerCreate';
import { CommentSummary } from './CommentSummary';
import { ImportantAnswer } from '../../Answer/ImportantAnswer';
import { PublicationRemover } from '../../PublicationRemover';
import { useRemover } from '../../../../../CustomHook/remover/useRemover';
import { useTranslation } from 'react-i18next';
import nl2br from 'react-nl2br';

export const CommentCard = ({ownerTopCard, comment, deleteComment, deleteAnswer, createAnswer, fetchOneFull}) => {
    const {t} = useTranslation('messages');

    const [restIsOpen, openRest, closeRest] = useOpenState(false);

    const [isLoading, setLoading] = useState(null);
    
    const fetchFullComment = async (force = true) => {
        setLoading(true);
        await fetchOneFull(comment.id, force);  // dans fetchOneFull, on gère pour faire l'appel que si nécessaire (si force = true alors l'appel sera fait dans tous les cas)
        setLoading(false);
    }

    useEffect(() => {
        if(restIsOpen) {
            fetchFullComment(false);
        }
    }, [restIsOpen]);

    //Answer FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    //si on revient de login avec #com_a-{commentId} dans l'url alors on ouvre le form
    //si on arrive d'un lien dans un mail avec #cch-show-{commentId} dans l'url alors on scroll sur commentCard
    useEffect(() => {
        if(location.href.includes('#com_a-'+comment.id)) {
            openForm();
        } else if (location.href.includes('#cch-show-'+comment.id)) {
            commentCardRef.current.scrollIntoView();
        }
    }, []);
    const commentCardRef = useRef(null);

    
    //delete comment
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();

    
    return (
        <li ref={commentCardRef} className={'review-card' + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            <div className="qa-card-top">
                <div className="review-card-header">
                    <div className="review-card-infos">
                        <span>{comment.fullName}</span>
                        <span>{comment.createdAt}</span>
                    </div>
                </div>
                <div className="review-card-body">
                    <div className="review-card-body-content">
                        {nl2br(comment.content)}
                    </div>
                    {
                        comment.canRemove && (
                            <PublicationRemover 
                                deletePublication={() => deleteComment(comment.id)}
                                confirmationIsOpen={confirmationIsOpen}
                                openConfirmation={openConfirmation}
                                closeConfirmation={closeConfirmation}
                                isRemoving={isRemoving}
                                setRemoving={setRemoving}                                
                            />
                        )
                    }
                </div>
            </div>
            <div className="qa-card-bottom">
                <div className="rest-list qa-card-bottom-content">
                {
                    !restIsOpen && comment.firstAnswers.length > 0 && (
                        comment.firstAnswers.map(answer => (
                            answer.type === 'customer' 
                            ? 
                                <AnswerCard key={answer.id} ownerId={comment.id} answer={answer} deleteAnswer={deleteAnswer} />
                            :
                                <ImportantAnswer key={answer.id} ownerId={comment.id} answer={answer} deleteAnswer={deleteAnswer} />
                        ))
                    )
                        
                }
                {
                    restIsOpen && (
                        <>
                            {
                                [...comment.firstAnswers, ...comment.restAnswers].map(answer => (
                                    answer.type === 'customer' 
                                    ? 
                                        <AnswerCard key={answer.id} ownerId={comment.id} answer={answer} deleteAnswer={deleteAnswer} />
                                    :
                                        <ImportantAnswer key={answer.id} ownerId={comment.id} answer={answer} deleteAnswer={deleteAnswer} />
                                ))
                            }
                            {
                                isLoading && <Loader additionalClass="right-loader" />
                            }
                        </>
                    )
                }
                </div>
                {
                    !restIsOpen && comment.countRestAnswers > 0 && (
                        <button className="qa-card-info qa-card-button i-text" type="button" onClick={openRest}>
                            <ExpandMoreIcon additionalClass="icon" />
                            <span>{t('count.see_rest_answers', {count: comment.countRestAnswers})}</span>
                        </button>
                    )
                }
                {
                    restIsOpen && (
                        <button className="qa-card-info qa-card-button i-text" type="button" onClick={closeRest}>
                            <ExpandMoreIcon additionalClass="icon expanded"/>
                            <span>{t('see_less')}</span>
                        </button>
                    )
                }
            </div>
            <div className="qa-card-footer">
                <Modal additionalClass="comment-form-modal answer-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                    <AnswerCreate
                        ownerId={comment.id}
                        createAnswer={createAnswer}
                        ownerTopCard={ownerTopCard}
                        fetchAfterSubmitSuccess={fetchFullComment}
                        close={closeForm}
                        >
                        <CommentSummary comment={comment} isLoading={isLoading} />
                    </AnswerCreate>
                </Modal>
                <FormButton onClick={openForm} additionalClass="bordeaux-grey create-form-small-button">
                    {t('submit.answer')}
                </FormButton>
            </div>
        </li>
    )
}

