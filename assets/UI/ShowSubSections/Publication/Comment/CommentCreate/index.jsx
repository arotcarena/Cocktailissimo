import React, { useEffect } from 'react';
import { redirectToLogin } from '../../../../../functions/security';
import { CommentForm } from './CommentForm';
import { useGetUser } from '../../../../../CustomHook/useGetUser';
import { useTranslation } from 'react-i18next';




export const CommentCreate = ({ownerTopCard, createComment, close}) => {
    const {t} = useTranslation('messages');

    //on vérifie qu'un user est connecté
    const {user, updateUser} = useGetUser();

    useEffect(() => {
        if(user === false) {
            redirectToLogin(
                location.href + '#comment', //targetPath
                t('warning.need_login_to_post_comment'), //message
                close()  //onError on ferme
            );
        }
    }, [user]);
    

    return (
        user && (
            <div className="review-form-wrapper">
                {ownerTopCard}
                <h3 className="review-form-title">{t('my_comment')}</h3>
                <CommentForm createComment={createComment} close={close} />
            </div>
        )
    )
}