import React, { useEffect } from 'react';
import { redirectToLogin } from '../../../../../functions/security';
import { QuestionForm } from './QuestionForm';
import { useGetUser } from '../../../../../CustomHook/useGetUser';
import { useTranslation } from 'react-i18next';


export const QuestionCreate = ({ownerTopCard, close, createQuestion}) => {
    const {t} = useTranslation('messages');

    //on vérifie qu'un user est connecté
    const {user, updateUser} = useGetUser();

    useEffect(() => {
        if(user === false) {
            redirectToLogin(
                location.href + '#question', //targetPath
                t('warning.need_login_to_post_question'), //message
                close()  //onError on ferme
            );
        }
    }, [user]);


    return (
        user && (
            <div className="review-form-wrapper">
                {ownerTopCard}
                <h3 className="review-form-title">{t('my_question')}</h3>
                <QuestionForm createQuestion={createQuestion} close={close} />
            </div>
        )
    )
}