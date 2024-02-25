import React from 'react';
import { useRemover } from '../../../../CustomHook/remover/useRemover';
import { PublicationRemover } from '../PublicationRemover';
import nl2br from 'react-nl2br';

export const AnswerCard = ({ownerId, answer, deleteAnswer, isSummary = false}) => {

    //remove
    const {confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving} = useRemover();


    return (
        <div className={'qa-card-bottom-item' + (confirmationIsOpen ? ' remove-confirm': '') + (isRemoving ? ' is-removing': '')}>
            <div className="review-card-infos">
                <span>{answer.fullName}</span>
                <span>{answer.createdAt}</span>
            </div>
            <div className="review-card-body">{nl2br(answer.content)}</div>
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