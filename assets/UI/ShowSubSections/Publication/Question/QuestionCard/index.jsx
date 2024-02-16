import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../../../../Icon/Loader';
import { useOpenState } from '../../../../../CustomHook/state/useOpenState';
import { FormButton } from '../../../../Form/FormButton';
import { Modal } from '../../../../Container/Modal';
import { ExpandMoreIcon } from '../../../../Icon/ExpandMoreIcon';
import { QuestionSummary } from './QuestionSummary';
import { AnswerCard } from '../../Answer/AnswerCard';
import { AnswerCreate } from '../../Answer/AnswerCreate';
import { ImportantAnswer } from '../../Answer/ImportantAnswer';
import { PublicationRemover } from '../../PublicationRemover';
import { useRemover } from '../../../../../CustomHook/remover/useRemover';
import { useTranslation } from 'react-i18next';

export const QuestionCard = ({ownerTopCard, question, deleteQuestion, fetchOneFull, createAnswer, deleteAnswer, verifyLoginBeforeAnswer = true}) => {
    const {t} = useTranslation('messages');

    const [restIsOpen, openRest, closeRest] = useOpenState(false);

    const [isLoading, setLoading] = useState(null);
    
    const fetchFullQuestion = async (force = true) => {
        setLoading(true);
        await fetchOneFull(question.id, force);  // dans fetchOneFull, on gère pour faire l'appel que si nécessaire
        setLoading(false);
    }

    useEffect(() => {
        if(restIsOpen) {
            fetchFullQuestion(false);
        }
    }, [restIsOpen]);

    //Answer FORM  
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    //si on revient de login avec #answer-{questionId} dans l'url alors on ouvre le form
    //si on arrive depuis un lien envoyé par mail, avec #qu-show-{questionId} dans l'url alors on scroll sur questionCard
    useEffect(() => {
        if(location.href.includes('#answer-'+question.id)) {
            openForm();
        } else if(location.href.includes('#qa-show-'+question.id)) {
            questionCardRef.current.scrollIntoView();
        }
    }, []);
    const questionCardRef = useRef(null);


    //remove
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();



    return (
        <li ref={questionCardRef} className={'review-card' + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            <div className="qa-card-top">
                {
                    question.product && ownerTopCard
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
                    {
                        question.canRemove && (
                            <PublicationRemover 
                                deletePublication={() => deleteQuestion(question.id)}
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
                <div className="qa-card-bottom-content">
                {
                    question.firstAnswers.length > 0
                    ?
                        question.firstAnswers.map(answer => (
                            answer.type === 'customer' 
                            ? 
                                <AnswerCard key={answer.id} ownerId={question.id} answer={answer} deleteAnswer={deleteAnswer} />
                            :
                                <ImportantAnswer key={answer.id} ownerId={question.id} answer={answer} deleteAnswer={deleteAnswer} />
                        ))
                    :
                        (
                            <div className="qa-card-info">
                                {t('no_answer_for_the_moment')}
                            </div>
                        )
                }
                {
                    isLoading && <Loader additionalClass="right-loader" />
                }
                {
                    restIsOpen && (
                        <>
                            {
                                question.restAnswers.map(answer => <AnswerCard key={answer.id} ownerId={question.id} answer={answer} deleteAnswer={deleteAnswer} />)
                            }
                            
                        </>
                    )
                }
                </div>
                {
                    !restIsOpen && question.countRestAnswers > 0 && (
                        <button className="qa-card-info qa-card-button i-text" type="button" onClick={openRest}>
                            <ExpandMoreIcon additionalClass="icon" />
                            <span>{t('count.see_rest_answers', {count: question.countRestAnswers})}</span>
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
                <Modal additionalClass="question-answer-form-modal answer-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                    <AnswerCreate 
                        createAnswer={createAnswer}
                        ownerId={question.id}
                        ownerTopCard={ownerTopCard}
                        close={closeForm} 
                        verifyLogin={verifyLoginBeforeAnswer}
                        >
                        <QuestionSummary question={question} isLoading={isLoading} />
                    </AnswerCreate>
                </Modal>
                <FormButton onClick={openForm} additionalClass="bordeaux-grey create-form-small-button">
                    {t('submit.answer')}
                </FormButton>
            </div>
        </li>
    )
}

