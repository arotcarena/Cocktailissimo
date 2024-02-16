import React from 'react';
import { AddressShow } from '../../../../../UI/Show/AddressShow';
import { CommercialNameField } from './CommercialNameField';
import { LogoField } from './LogoField';
import { InfoIcon } from '../../../../../UI/Icon/InfoIcon';
import { EmptyShowRow } from '../../../../../UI/Show/EmptyShowRow';
import { useTranslation } from 'react-i18next';

export const DetailsCompany = ({vendor, setVendor}) => {
    const {t} = useTranslation('messages');

    const company = vendor.company;

    return (
        <>
            <div className="account-profile">
                <div className="account-profile-block">
                    <h3 className="account-profile-block-title">{t('company')}</h3>
                    <div className="center-wrapper">
                        <LogoField defaultBase64img={vendor.company.logo?.path ?? ''} setVendor={setVendor}>
                            <span className="account-profile-block-row-label">Logo</span> 
                        </LogoField>
                    </div>
                    <div className="account-profile-block-row">
                        <div className="account-profile-block-row-label">{t('social_name')}</div>
                        <p className="account-profile-block-row-text with-label">{company.socialName}</p>
                    </div>
                    <div className="account-profile-block-row">
                        <CommercialNameField commercialName={company.commercialName} setVendor={setVendor} />
                    </div>
                    <div className="account-profile-block-row">
                        <div className="account-profile-block-row-label">{t('identification_number')}</div>
                        <p className="account-profile-block-row-text with-label">{company.identificationNumber}</p>
                    </div>
                    <div className="account-profile-block-row">
                        <div className="account-profile-block-row-label">{t('social_address')}</div>
                        <AddressShow address={company.socialAddress} />
                    </div>
                    <div className="account-profile-block-row">
                        <div className="account-profile-block-row-label">{t('eu_vat_number')}</div>
                        <p className="account-profile-block-row-text with-label">{company.vatNumber ?? <EmptyShowRow />}</p>
                    </div>
                </div>
            </div>
            <div className="account-info">
                <InfoIcon />
                <span>{t('info.to_update_infos_write_to')} <a href="mailto:contact@cocktailissimo.com">contact@cocktailissimo.com</a>, {t('info.precising_email_and_infos_to_update')}.</span>
            </div>
        </>
    )
}



