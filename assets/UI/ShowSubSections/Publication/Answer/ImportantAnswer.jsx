import React from 'react';
import { PublicationRemover } from '../PublicationRemover';
import { useRemover } from '../../../../CustomHook/remover/useRemover';
import { t } from 'i18next';

export const ImportantAnswer = ({ownerId, answer, deleteAnswer, removeIsOpen = true}) => {

    
    //remove
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();

    return (
        <div className={'qa-card-bottom-item important '+answer.type + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            <div className="review-card-infos">
                {
                    answer.type === 'vendor' && (
                        <>
                            <span className="qa-card-bottom-chip vendor-chip">{t('vendor', {ns: 'messages'})}</span>
                            <a href={answer.target} className="answer-vendor-link">{answer.fullName}</a>
                        </>
                    )
                }
                {
                    answer.type === 'admin' && (
                        <>
                            <span className="qa-card-bottom-chip admin-chip">Cocktailissimo</span>
                            <span className="answer-admin-name">{answer.fullName}</span>
                        </>
                    )
                }
                <span>{answer.createdAt}</span>
            </div>
            <div className="review-card-body">{answer.content}</div>
            {
                answer.canRemove && removeIsOpen && (
                    <PublicationRemover 
                        deletePublication={() => deleteAnswer(ownerId, answer.id)}
                        confirmationIsOpen={confirmationIsOpen}
                        openConfirmation={openConfirmation}
                        closeConfirmation={closeConfirmation}
                        isRemoving={isRemoving}
                        setRemoving={setRemoving}                                
                    />
                )
            }
        </div>
    )
} 