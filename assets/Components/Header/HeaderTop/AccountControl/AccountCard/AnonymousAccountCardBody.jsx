import React from 'react';
import { LinkButton } from '../../../../../UI/Button/LinkButton';
import { useTranslation } from 'react-i18next';

export const AnonymousAccountCardBody = () => {
    const {t} = useTranslation('messages');

    return (
        <div className="account-card-body empty">
            <div className="account-card-text">
                <p>{t('info.not_logged')}</p>
            </div>
            <LinkButton additionalClass="bordeaux" href={t('url.security.login', {ns: 'urls'})}>{t('login')}</LinkButton> 
            <LinkButton additionalClass="cancel" href={t('url.security.register', {ns: 'urls'})}>{t('registration')}</LinkButton> 
        </div>
    )
}