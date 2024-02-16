import React from 'react';
import '../../styles/UI/Utils/removeConfirm.css';
import { useTranslation } from 'react-i18next';

export const RemoveConfirm = ({onConfirm, close}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="remove-confirm-controls">
            <span>{t('ask.delete')}</span>
            <div>
                <button className="remove-confirm-control yes" onClick={onConfirm}>{t('yes')}</button>
                <button className="remove-confirm-control no" onClick={close}>{t('no')}</button>
            </div>
        </div>
    )
}