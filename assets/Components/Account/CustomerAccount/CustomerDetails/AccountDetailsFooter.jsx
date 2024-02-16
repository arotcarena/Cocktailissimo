import React from 'react';
import { useTranslation } from 'react-i18next';

export const AccountDetailsFooter = () => {
    const {t, i18n} = useTranslation('messages');

    return (
        <div className="account-profile-footer-link-group">
            <a href={t('url.security.change_password', {ns: 'urls'})} className="account-profile-footer-link">{t('change_password')}</a>
            <a href={t('url.security.account_delete', {ns: 'urls'})} className="account-profile-footer-link">{t('delete_my_account')}</a>
        </div>
    )
}