import React from 'react';
import { FormButton } from '../../../../../../UI/Form/FormButton';
import { InfoIcon } from '../../../../../../UI/Icon/InfoIcon';
import { useTranslation } from 'react-i18next';

export const Finalizer = ({verify, isLoading}) => {
    const {t} = useTranslation('messages');

    return (
        <div className="account-profile-block identity-verification">
            <h2 className="i-text">
                <InfoIcon />
                <span>{t('missing_details')}</span>
            </h2>
            <p>{t('info.still_missing_details_to_receive_payments')}</p>

            <FormButton type="button" onClick={verify} loading={isLoading} additionalClass="bordeaux">
                {t('continue')}
            </FormButton>
        </div>
    )
}