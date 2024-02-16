import React from 'react';
import { AddressShow } from '../../../../../UI/Show/AddressShow';
import { InfoIcon } from '../../../../../UI/Icon/InfoIcon';
import { useTranslation } from 'react-i18next';

export const DetailsSenderAddress = ({senderAddress}) => {
    const {t} = useTranslation('messages');

    return (
        <>
            <div className="account-profile">
                <div className="account-profile-block">
                    <h3 className="account-profile-block-title">{t('sender_address')}</h3>
                    <div className="account-profile-block-row">
                        <AddressShow address={senderAddress} />
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