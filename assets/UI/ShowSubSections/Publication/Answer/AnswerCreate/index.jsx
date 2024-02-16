import React, { useEffect } from 'react';
import { AnswerForm } from './AnswerForm';
import { redirectToLogin } from '../../../../../functions/security';
import { useGetUser } from '../../../../../CustomHook/useGetUser';
import { t } from 'i18next';


export const AnswerCreate = ({createAnswer, ownerId, ownerTopCard, children, close, verifyLogin = true}) => {
    
    //on vérifie qu'un user est connecté
    const {user, updateUser} = useGetUser();

    useEffect(() => {
        if(verifyLogin && user === false) {
            redirectToLogin(
                location.href + '#answer-'+question.id, //targetPath
                t('warning.need_login_to_post_answer', {ns: 'messages'}), //message
                close()  //onError on ferme
            );
        }
    }, [user]);


    return (
        user && (
            <>
                <div className="answer-create-wrapper">
                    <div className="answer-form-header">
                        {ownerTopCard}
                    </div>
                    <div className="answer-form-body">
                        {children}
                    </div>
                    <div className="answer-form-footer">
                        <AnswerForm createAnswer={createAnswer} ownerId={ownerId} close={close} />
                    </div>
                </div>
            </>
        )
    )
}