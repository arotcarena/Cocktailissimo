import React from 'react';
import { PublicationRemover } from '../PublicationRemover';
import { useRemover } from '../../../../CustomHook/remover/useRemover';
import { t } from 'i18next';
import nl2br from 'react-nl2br';

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
            <div className="review-card-body">{nl2br(answer.content)}</div>
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