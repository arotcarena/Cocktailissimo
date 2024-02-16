import React from 'react';
import { EditButton } from '../../../../../UI/Button/EditButton';
import { EmptyShowRow } from '../../../../../UI/Show/EmptyShowRow';
import { useTranslation } from 'react-i18next';

export const CivilStateShow = ({user, onEdit}) => {
    const {t, i18n} = useTranslation('messages');

    return (
        <div className="account-profile-block">
            <h3 className="account-profile-block-title">{t('personal_details')}</h3>
            {
                user.civility && user.firstName && user.lastName && (
                    <p className="capitalize account-profile-block-row-text">{ t(user.civility, {ns: 'configs'}) } { user.firstName } { user.lastName }</p>
                )
            }
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('email_address')}</div>
                <p className="account-profile-block-row-text with-label">{user.email}</p>
            </div>
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('phone')}</div>
                <p className="account-profile-block-row-text with-label">{user.phone ? user.phone: <EmptyShowRow />}</p> 
            </div>
            <EditButton onClick={onEdit} />
        </div>
    )
}