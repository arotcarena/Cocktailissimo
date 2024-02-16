import React from 'react';
import { useRemover } from '../../../../CustomHook/remover/useRemover';
import { PublicationRemover } from '../PublicationRemover';

export const AnswerCard = ({ownerId, answer, deleteAnswer, isSummary = false}) => {

    //remove
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();


    return (
        <div className={'qa-card-bottom-item' + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            <div className="review-card-infos">
                <span>{answer.fullName}</span>
                <span>{answer.createdAt}</span>
            </div>
            <div className="review-card-body">{answer.content}</div>
            {
                answer.canRemove && !isSummary && (
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