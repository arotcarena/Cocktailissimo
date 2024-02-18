import React, { useState } from 'react';
import { FormButton } from '../../../../UI/Form/FormButton';
import { apiPreparedFetch } from '../../../../functions/api';
import { useTranslation } from 'react-i18next';

export const OutEUManualOrder = ({checkoutData}) => {
    const {t} = useTranslation('messages');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleClick = async () => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        setError(null);

        try {
            //création de la purchase
            await apiPreparedFetch('/api', checkoutData, 'POST');
            //un flash de succès sera configuré dans le controller
            location.href('/');
        } catch(e) {
            setError(t('error.temporary_failure'));
            setLoading(false);
        }
    }

    return (
        <div className="form-block manual-order-block">
            {
                error && <div className="form-error">{error}</div>
            }
            <p>{t('info.manual_order_cause_out_eu')}</p>
            <FormButton
                additionalClass="bordeaux"
                type="button"
                loading={isLoading}
                onClick={handleClick}
            >
                {t('button.ask_manual_order')}
            </FormButton>
        </div>
    )
}