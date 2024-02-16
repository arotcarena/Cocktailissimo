import React from 'react';
import { EditButton } from '../../../../../UI/Button/EditButton';
import { EmptyShowRow } from '../../../../../UI/Show/EmptyShowRow';
import { useTranslation } from 'react-i18next';

export const CompanyShow = ({company, onEdit}) => {
    const {t, i18n} = useTranslation('messages');

    return (
        <div className="account-profile-block">
            <h3 className="account-profile-block-title">{t('company')}</h3>
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('social_name')}</div>
                <p className="account-profile-block-row-text with-label">{company.socialName}</p>
            </div>
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('identification_number')}</div>
                <p className="account-profile-block-row-text with-label">{company.identificationNumber}</p>
            </div>
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('country')}</div>
                <p className="account-profile-block-row-text with-label">{t(company.country, {ns: 'countries'})} ({company.country})</p>
            </div>
            <div className="account-profile-block-row">
                <div className="account-profile-block-row-label">{t('eu_vat_number')}</div>
                <p className="account-profile-block-row-text with-label">{company.vatNumber !== '' ? company.vatNumber : <EmptyShowRow />}</p>
            </div>
            <EditButton onClick={onEdit} />
        </div>
    )
}